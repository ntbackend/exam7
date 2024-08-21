import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class UpdateUserDto {

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
    @MinLength(5)
    @ApiPropertyOptional({ example: "12346" })
    password: string;

    @IsString()
    @ApiPropertyOptional({ example: "img.jpg" })
    @Transform(({ value }) => value.trim())
    photo: string;
}
