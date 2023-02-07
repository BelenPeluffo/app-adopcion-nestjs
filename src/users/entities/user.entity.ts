import { Solicitud } from "src/solicitudes/entities/solicitude.entity"
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Mascota } from "../../mascotas/entities/mascota.entity"

export enum CategoriaUser {
    PARTICULAR = "particular",
    REFUGIO = "refugio",
    TRANSITORIX = "transitorix",
    PERMANENTE = "permanente"
}

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({unique:true})
    username: string

    @Column()
    password: string

    @Column()
    nombre: string

    @Column({
        type: "enum",
        enum: CategoriaUser
    })
    categoria: CategoriaUser

    @Column()
    numeroDeTelefono: number

    @Column()
    email: string

    // RELACIONES DE ENTIDAD
    @OneToMany(() => Mascota, mascota => mascota.duenix)
    mascotas: Mascota[];

    @OneToMany(() => Solicitud, solicitud => solicitud.idDuenix)
    solicitudDuenio: Solicitud[];

    @OneToMany(() => Solicitud, solicitud => solicitud.idPostulante)
    solicitudPostulante: Solicitud[];

}
