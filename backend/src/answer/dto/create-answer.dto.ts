import { IsBoolean, IsNumber, IsString } from "class-validator";

export class CreateAnswerDto {
    @IsNumber()
    id:number

    @IsString()
    answer: string

    @IsBoolean()
    correct_answer: boolean

    // question FK
}
