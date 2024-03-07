import { Author } from "./author";

export type Book = {
    title: string;
    except: string;
    summary: string;
    price: number;
    pages: number;
    isbn: string;
    publicationDate: Date;
    category: string;
    author: Author;
}