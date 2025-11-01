import { IsNotEmpty, IsString } from "class-validator";
export class CreateChapterDto {
    @IsString()
    @IsNotEmpty()
    title: string

    @IsString()
    description: string

    // course FK

    
}
