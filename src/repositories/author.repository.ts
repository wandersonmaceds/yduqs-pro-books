import { Author } from "../entities/author";

const authors: Author[] = [];


function save(author: Author) {
    authors.push(author);
}

function listAll() {
    return authors;
}

function existsWithEmail(email: string): boolean {
    return authors.some(author => author.email === email);
}

export default {
    save,
    listAll,
    existsWithEmail,
}