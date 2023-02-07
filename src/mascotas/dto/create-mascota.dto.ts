import { IsInt, IsString, IsEnum } from 'class-validator';
import { Energia, Estado, Pelaje, Raza, Sexo, Tamanio } from "../entities/mascota.entity";

export class CreateMascotaDto {
    @IsInt()
    id: number;

    @IsString()
    nombre: string;

    @IsEnum(Raza)
    raza: Raza;

    @IsInt()
    edad: number;

    @IsEnum(Sexo)
    sexo: Sexo;

    @IsEnum(Tamanio)
    tamanio: Tamanio;

    @IsInt()
    peso: number;

    @IsEnum(Pelaje)
    pelaje: Pelaje;

    @IsEnum(Energia)
    energia: Energia;

    @IsInt()
    duenix: number;

    @IsEnum(Estado)
    estado: Estado
}
