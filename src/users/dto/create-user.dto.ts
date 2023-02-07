import { IsInt, IsString, IsEnum, IsEmail } from "class-validator";
import { CategoriaUser } from "../entities/user.entity";

export class CreateUserDto {
    @IsInt()
    id: number;

    @IsString()
    username: string;

    @IsString()
    password: string;

    @IsString()
    nombre: string;

    @IsEnum(CategoriaUser)
    categoria: CategoriaUser;

    @IsInt()
    numeroDeTelefono: number;

    @IsEmail()
    email: string
}
