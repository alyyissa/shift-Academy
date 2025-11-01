import { IsNotEmpty, isNotEmpty, IsString } from "class-validator"

export class CreateVideoDto {
    id: number

    @IsString({message:'teh url is not valid'})
    @IsNotEmpty()
    url: string

    @IsString({message:'The description is not inserted'})
    description: string
}
