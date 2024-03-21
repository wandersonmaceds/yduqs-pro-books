import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateAuthorService } from "./create-author.service";
import { CreateAuthorDTO } from "./dto/CreateAuthorDTO";
import { ListAuthorService } from "./list-authors.service";


@Controller('/author')
export class AuthorController {

    constructor(
        private readonly createAuthorService: CreateAuthorService,
        private readonly listAuthorService: ListAuthorService,
    ) {}

    @Post('/')
    create(@Body() data: CreateAuthorDTO) {
        return this.createAuthorService.createAuthor(data);
    }

    @Get('/')
    list() {
        return this.listAuthorService.listAuthors();
    }
}