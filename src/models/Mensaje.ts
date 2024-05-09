import { IMensaje } from "./IMensaje";

export class Mensaje implements IMensaje{
    texto: string;
    fecha: Date;
    emisor: string;
    receptor: string;

    constructor(texto: string, emisor: string, receptor: string){
        this.texto = texto
        this.fecha = new Date()
        this.emisor = emisor
        this.receptor = receptor
    }

}
