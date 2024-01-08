// how to create an array

// 1 new array() or array()

const frutas = Array("aplle", "banana", "orange")
console.log(frutas)

const numero = Array(12)
console.log(numero)

const numeros = Array(1 ,2 ,4 ,5)
console.log(numeros)

// array literal sintax

const hnumero = [4]
console.log(hnumero)

const empty =[]
console.log(empty)

const sports = [`soccer`, `temts` , `ruby`]
console.log(sports)

const ingredients = [`fñour` ,true ,2 , {
    ingredient: `milk`, quantity: `1cuup`
},
false
]
console.log(ingredients)


// acceciong array elements

const firstfruit = frutas[0]
console.log(firstfruit)


// tamaño de un array

const numeroffruits = frutas.length
console.log (numeroffruits)


// mutability


frutas.push(`wathermelon`)
console.log(frutas)

// inmutability

const newfruts = frutas.concat(`grape`,`kiwi`)
console.log(frutas)
console.log(newfruts)


// cheacking arrays 

const isarray = Array.isArray(frutas)
console.log(isarray)

//ejercicio



const numerosarray = [ 1, 2, 3, 4, 5 ]
let sum = 0

for (let i = 0; i < numerosarray.length ; i++){
    sum += numerosarray[1]
}

console.log(sum)