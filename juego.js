const numerosecreto = Math.floor(Math.random() * 10 +1);

const numerojugador = parseInt (prompt (" adivina el numero secreto entre el 1 al 10"))

console.log(`este es el numero con el que juegas ${numerojugador}`)
console.log(`este es el numero secreto ${numerosecreto}`)

if (numerojugador === numerosecreto){
    console.log("adivinaste")
} else if(numerojugador < numerosecreto){
    console.log("numero bajo")
} else {
    console.log("numero muy alto")
}