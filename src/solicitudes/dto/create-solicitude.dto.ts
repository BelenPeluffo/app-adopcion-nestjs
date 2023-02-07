import { IsInt } from "class-validator";

export class CreateSolicitudeDto {
    @IsInt()
    id: number;

    @IsInt()
    idMascota: number;

    @IsInt()
    idPostulante: number;

    @IsInt()
    idDuenix: number
}
