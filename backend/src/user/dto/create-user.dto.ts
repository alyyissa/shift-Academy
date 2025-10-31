import { IsEmail, IsNotEmpty, IsString, Min, MinLength } from "class-validator"

export class CreateUserDto {
    id: number

    @IsString({message: 'Name should be a string value'})
    @IsNotEmpty()
    @MinLength(3,{message: 'Name should have a minimum 3 characters.'})
    name: string

    @IsString()
    gender?: string // that shows that the option is an optional

    @Min(16, {message: "You should be 16 or older"})
    age:number

    @IsEmail()
    email: string
}
