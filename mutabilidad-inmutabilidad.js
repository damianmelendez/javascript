//tipo de dato primitivo inmutabilidad
let numero = 10
numero = numero +23
console.log(numero)

let verdadero = true
verdadero = false
console.log(verdadero)

//mutavle

let usuario = {nombre: "juan", edad: 20}
usuario.edad = 23
console.log(usuario)

let frutas = ["sadia", "aguacate"]
frutas[1] = "banano"
console.log(frutas)

function cambiarnombre (objeto) {
    objeto.nombre = "nuevo nombre"
}
let persona = {nombre: "damian" }
cambiarnombre(persona)

console.log((persona))