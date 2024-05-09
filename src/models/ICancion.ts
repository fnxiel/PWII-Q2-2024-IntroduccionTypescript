import { IArtista } from "./IArstita"

export interface ICancion{
    id: number
    titulo: string
    genero: string
    lanzamiento: number
    portada: string
    artistas: IArtista[]
}