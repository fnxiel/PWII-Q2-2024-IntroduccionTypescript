import { ICancion } from "./models/ICancion";
import { IListaReproduccion } from "./models/IListaReproduccion";
import { ListaReproduccion } from "./models/ListaReproduccion";

const listaReproduccion: IListaReproduccion = new ListaReproduccion("Daily Mix 1", "/portada.png")
const listaReproduccion2: IListaReproduccion = new ListaReproduccion("Daily Mix 2", "/portada.png")

const cancion1 : ICancion = {
    id: 1,
    titulo: "Marcha imperial",
    genero: "Cine",
    lanzamiento: 1980,
    portada: "/Portada.png",
    artistas: []
}
const cancion2 : ICancion = {
    id: 2,
    titulo: "Introduccion Star Wars",
    genero: "Cine",
    lanzamiento: 2000,
    portada: "/portada.png",
    artistas: []
}

listaReproduccion.agregarCancion(cancion1)
listaReproduccion.agregarCancion(cancion2)


console.log(listaReproduccion.canciones)

listaReproduccion.eliminarCancion(1)
listaReproduccion.modificarTituloCancion(2, "Apertura")
console.log(listaReproduccion.canciones)