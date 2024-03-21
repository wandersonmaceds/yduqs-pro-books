import { Module } from "@nestjs/common";
import { AuthorController } from "./author.controller";
import { ListAuthorService } from "./list-authors.service";
import { CreateAuthorService } from "./create-author.service";
import { AuthorRepository } from "./author.repository";



@Module({
    controllers: [AuthorController],
    providers: [
        AuthorRepository,
        CreateAuthorService,
        ListAuthorService,
    ]
})
export class AuthorModule {}