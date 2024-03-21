import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';


export class CreateAuthorDTO {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @MinLength(100)
    bio: string;

    @IsEmail()
    email: string;
}