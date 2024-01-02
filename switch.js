// switch(exprecion) {
//     case valor 1: 
//     codogo 
//     break;
//     case valor 2: 
//     codogo 
//     break;
//     default
//     codigo 
//     break
// }

let exprecion = "uvas"

switch(exprecion) {
    case "naranjas":
    console.log("costo 20$")
    break
    case "manzanas":
    console.log("costo 30$")
    break
    case "platonoes":
    console.log("costo 40$")
    break
    case " mangos ":
    case "papayas":
        console.log ("papay o mango costo 70$")
    break
    default:
        console.log(`lo siento no contamos con ${exprecion}`)

}
console.log(`hay algo mas que desees? `);