import { ICancion } from "./ICancion";
import { IListaReproduccion } from "./IListaReproduccion";

export class ListaReproduccion implements IListaReproduccion{
    titulo: string;
    portada: string;
    canciones: ICancion[];

    constructor(titulo: string, portada: string | undefined){
        this.titulo = titulo
        this.portada = !(portada) ? "./Portada-predeterminada.png" : portada
        this.canciones = []
        console.log(`Se creó la lista de reproduccion: ${this.titulo}, por favor agregue canciones`)
    }

    agregarCancion(cancionNueva: ICancion): ICancion {
        this.canciones.push(cancionNueva)
        console.log(`Se agregó la canción: ${cancionNueva.titulo}`)
        return cancionNueva
    }
    eliminarCancion(id: number): void {
        this.canciones = this.canciones.filter(cancion => cancion.id !== id)
        console.log(`Se eliminó la canción con id ${id}`)
    }

    modificarTituloCancion(id: number, nuevoTituloCancion: string): ICancion | undefined {
        const cancionModificar = this.canciones.find(cancion => cancion.id === id)
        if(cancionModificar){
            cancionModificar.titulo = nuevoTituloCancion
            console.log(`Se modificó el titulo de la cancion ${cancionModificar.id}, al valor: ${cancionModificar.titulo}`)
            return cancionModificar
        }
        else{
            console.log(`No se encontró la canción con el id ${id}`)
            
        }
    }
    
}