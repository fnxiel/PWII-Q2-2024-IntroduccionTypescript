import { IMensaje } from "./models/IMensaje"
import { Mensaje } from "./models/Mensaje"

//Utilizando clases con interface
const mensaje: IMensaje = new Mensaje("Amigo", "Persona 1", "Persona 2")

//Utilizando solo interfaces
const mensaje2: IMensaje = {
    texto: "Amigo",
    fecha: new Date(),
    emisor: "persona 1",
    receptor: "persona 2"
}

function saludar(saludo: IMensaje): string
{
    const saludoCompleto = `Hola ${saludo.texto}`
    console.log(saludoCompleto, `un  saludo para ti: ${saludo.receptor} de parte de mi ${saludo.emisor}`)
    console.log(saludo.fecha.toLocaleDateString())
    return saludoCompleto
}

saludar(mensaje)
saludar(mensaje2)