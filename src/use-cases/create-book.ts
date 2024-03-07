import { z } from "zod";
import { Book } from "../entities/Book";

import authorRepository from '../repositories/author.repository';
import bookRepository from '../repositories/book.repository';
import { ValidationError } from "../types";

type CreateBookInput = {
    title: string;
    except: string;
    summary: string;
    price: number;
    pages: number;
    isbn: string;
    publicationDate: Date;
    category: string;
    authorId: string;
};

type CreateBookOutput = {
    success: boolean;
    book: Book | null;
    errors: ValidationError[] | null;
};

const bookSchema = z.object({
    title: z.string().trim().min(3),
    except: z.string().trim().min(100).max(500),
    summary: z.string().trim().min(100),
    price: z.number().positive(),
    pages: z.number().positive(),
    isbn: z.string().trim(),
    publicationDate: z.date().min(new Date()),
    category: z.string().trim().min(3),
    authorId: z.string().trim().uuid().refine(
        (id) => authorRepository.findByID(id),
        { message: 'Author not found' }
    ),
});

export function createBook(data: CreateBookInput): CreateBookOutput {
    const result = bookSchema.safeParse(data);

    if(!result.success) {
        return {
            success: false,
            book: null,
            errors: result.error.errors.map(error => ({
                property: error.path.toString(),
                message: error.message,
            }))
        }
    }

    const { authorId, ...restBook } = result.data;
    const author = authorRepository.findByID(authorId)!;

    const book: Book = {
        ...restBook,
        author,
    };

    bookRepository.save(book);

    return {
        success: true, 
        errors: null,
        book,
    }
}