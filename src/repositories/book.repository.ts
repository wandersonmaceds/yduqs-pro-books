import { Book } from "../entities/Book";

const books: Book[] = [];

function save(book: Book) {
    books.push(book);
}

function listAll(): Book[] {
    return books;
}

export default {
    save,
    listAll,
}