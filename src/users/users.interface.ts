import { CategoriaUser } from "./entities/user.entity"

export interface Users {
    id: number,/*
    username: string,
    password: string,*/
    nombre: string,
    categoria: CategoriaUser,
    numeroDeTelefono: number,
    email: string
}