
const farenheits = [32,33,12,55,31]

const celsius = farenheits.map(num => (num -32 )*0.5555556)

console.log(farenheits)
console.log(celsius)


// foreach

const numeros = [1,2,3,4,5]

let suma = 0

numeros.forEach(number => {
    suma += number
})

console.log(`array numeros`, numeros)
console.log(`suma`, suma)

