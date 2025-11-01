import { IsNotEmpty, IsString } from "class-validator";

export class CreateCourseDto {

    @IsString()
    @IsNotEmpty()
    title: string

    @IsString()
    description: string

    @IsString()
    rate: number

    @IsNotEmpty()
    price: number
}
