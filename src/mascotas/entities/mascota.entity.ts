import { Solicitud } from "src/solicitudes/entities/solicitude.entity"
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { User } from "../../users/entities/user.entity"

export enum Raza {
    PERRX = "perrx",
    GATX = "gatx"
}

export enum Sexo {
    MACHO = "macho",
    HEMBRA = "hembra"
}

export enum Tamanio {
    PEQUENIO = "pequeño",
    MEDIANO = "mediano",
    GRANDE = "grande"
}

export enum Pelaje {
    CORTO = "corto",
    LARGO = "largo"
}

export enum Energia {
    TRANQUILX = "tranquilx",
    ACTIVX = "activx",
    ENERGETICX = "energéticx"
}

export enum Estado {
    DISPONIBLE = "disponible",
    TRAMITE = "en trámite",
    ADOPTADX = "adoptadx"
}

@Entity()
export class Mascota {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string

    // ENUM
    @Column({
        type: "enum",
        enum: Raza
    })
    raza: Raza

    @Column()
    edad: number

    // ENUM
    @Column({
        type: "enum",
        enum: Sexo
    })
    sexo: Sexo

    // ENUM
    @Column({
        type: "enum",
        enum: Tamanio
    })
    tamanio: Tamanio

    @Column()
    peso: number

    // ENUM
    @Column({
        type: "enum",
        enum: Pelaje
    })
    pelaje: Pelaje

    // ENUM
    @Column({
        type: "enum",
        enum: Energia
    })
    energia: Energia

    @Column()
    //ID del dueño que lx dió de alta = FOREIGN KEY
    duenix: number

    // ENUM
    @Column({
        type: "enum",
        enum: Estado,
        default: "disponible"
    })
    estado: Estado

    // RELACIONES DE ENTIDAD
    @ManyToOne(() => User, user => user.id)
    duenio: User

    @OneToMany(() => Solicitud, solicitud => solicitud.idMascota)
    solicitudes: Solicitud[]
}

