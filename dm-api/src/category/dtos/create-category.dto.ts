import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateCategoryDto {
    @IsNotEmpty({message: 'o nome não deve estar vazio'})
    @MaxLength(128, {message: 'valor maximo 128 caracteres'})
    readonly name: string;
}