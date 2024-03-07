import { Book } from "../entities/Book";
import bookRepository from "../repositories/book.repository";


export function listBooks(): Book[] {
    return bookRepository.listAll();
}