import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
    @IsString()
    @IsNotEmpty()
    @Transform(({ value }) => value.trim())
    @ApiProperty({ example: "ibrohimjoraboyev2008@gmail.com" })
    email: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: "11111" })
    password: string;
}