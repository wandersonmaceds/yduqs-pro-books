import { Injectable } from '@nestjs/common';
import { Author } from './author';

@Injectable()
export class AuthorRepository {
  private authors: Author[] = [];

  save(author: Author) {
   this.authors.push(author);
  }
  
  listAll() {
    return this.authors;
  }
  
  existsWithEmail(email: string): boolean {
    return !this.authors.some((author) => author.email === email);
  }
  
  findByID(id: string): Author | null {
    return this.authors.find((author) => author.id === id) ?? null;
  }
}
