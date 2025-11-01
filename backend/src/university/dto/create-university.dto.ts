import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateUniversityDto {
    @IsNumber()
    id: number

    @IsString()
    @IsNotEmpty()
    name: string

}
