import { randomUUID } from 'node:crypto';

import { Injectable } from '@nestjs/common';
import { Author } from './author';
import { AuthorRepository } from './author.repository';



type CreateAuthorInput = {
  name: string;
  email: string;
  bio: string;
};

@Injectable()
export class CreateAuthorService {
  constructor(
    private readonly authorRepository: AuthorRepository,
  ) {
  }
  createAuthor(data: CreateAuthorInput): Author {

    const newAuthor: Author = {
      ...data,
      id: randomUUID(),
      createdAt: new Date(),
    };
  
    this.authorRepository.save(newAuthor);
  
    return newAuthor;
  }
}

