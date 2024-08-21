import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator'
import { Transform } from 'class-transformer'
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
    @IsNotEmpty()
    @IsString()
    @Transform(({ value }) => value.trim())
    @MinLength(3)
    @ApiProperty({ example: "Ibrohim Jo'raboyev" })
    fullname: string;

    @IsEmail()
    @IsNotEmpty()
    @Transform(({ value }) => value.trim())
    @ApiProperty({ example: "ibrohimjoraboyev2008@gmail.com" })
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    @ApiProperty({ example: "11111" })
    password: string;
}