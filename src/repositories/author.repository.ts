import { Author } from "../entities/author";

const authors: Author[] = [];


function save(author: Author) {
    authors.push(author);
}

function listAll() {
    return authors;
}

export default {
    save,
    listAll
}