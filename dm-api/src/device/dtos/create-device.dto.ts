import { IsNotEmpty, IsNumber, MaxLength } from "class-validator";

export class CreateDeviceDto {

    @IsNotEmpty({message: 'color: não deve estar vazio'})
    @MaxLength(16, { message: 'color: deve ser menor ou igual a 16 caracteres' })
    readonly color: string;

    @IsNumber()
    readonly partNumber: number;

    @IsNumber()  
    readonly categoryId: number;
}