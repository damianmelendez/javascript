//  funciones puras

// side effects 
// 1. modificar variables glovales
// 2.modificar parametros
// 3. llamados a apis http
// 4.imprimir mensajes en pantalla o en consola
// 5.manipulacion del dom
// 6.obtener la ora actual

function suma (a,b) {
    return a + b
}

function suma (a,b) {
    console.log("a: ", a)
    return a + b
}

let total = 0 

function sumaconefecto () {
    total += a
    return total
}

// pura

function square(X) {
    return X * X
}

function addten (y) {
    return y + 10
}

const number = 5
const finalresoelt = addten(square(number))
console.log(finalresoelt)