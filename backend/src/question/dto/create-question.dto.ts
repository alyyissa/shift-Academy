import { IsNumber, IsString } from "class-validator";

export class CreateQuestionDto {
    @IsNumber()
    id: number

    @IsString()
    question: string

    @IsString()
    difficulty: string
}
