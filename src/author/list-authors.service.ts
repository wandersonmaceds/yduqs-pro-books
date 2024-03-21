import { Injectable, Scope } from '@nestjs/common';
import { Author } from './author';
import { AuthorRepository } from './author.repository';



@Injectable()
export class ListAuthorService {

  constructor(
    private readonly authorRepository: AuthorRepository,
  ) {}

  listAuthors(): Author[] {
    return this.authorRepository.listAll();
  }
}

