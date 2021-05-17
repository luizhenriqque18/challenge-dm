import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateDeviceDto {

    @IsNotEmpty({message: 'o cor não deve estar vazio'})
    readonly color: string;

    @IsNumber()
    readonly partNumber: number;

    @IsNumber()  
    readonly categoryId: number;
}