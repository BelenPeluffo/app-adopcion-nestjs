import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Mascota } from "../../mascotas/entities/mascota.entity"
import { User } from "../../users/entities/user.entity"

@Entity()
export class Solicitud {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    // FOREIGN KEY
    idMascota: number

    @Column()
    // FOREIGN KEY ─ user que da de alta la solicitud
    idPostulante: number

    @Column()
    // FOREIGN KEY
    idDuenix: number

    // RELACIONES DE ENTIDAD
    @ManyToOne(() => User, user => user.id)
    duenio: User

    @ManyToOne(() => Mascota, mascota => mascota.id)
    mascota: Mascota

}

