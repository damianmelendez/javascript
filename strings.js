//creacion de strings
const primeraopcion = 'comilla simple';
const segundaopcion = "comilla doble";
//concatenacion: opc +
const direccion = "cale falsa 123";
const cuidad = "ciudad falsa";
const direccioncompletta = "mi dereccion completa es " + direccion + " " + cuidad;
console.log (direccioncompletta);

// template literalss

const nombre = "mi nombre"
const pais = "🌏 guatemala"
const presentacion = `hola soy ${nombre} de ${pais}`
console.log(presentacion)

//concatenacion con join

let primerap = "soy damian"
let segundap = "ago softwar en"
let tercerap = "🌐latam"
let parrafo = [primerap, segundap, tercerap]
console.log(parrafo.join(" "))

// concatenar con concat

let jovi1 = "🏍️"
let jovi2 = "🚜"
let jovi3 = "🚀 "
let jovies = 'mis hobies son:' .concat(jovi1," ",jovi2,"",jovi3)
console.log(jovies)
// strigs objetos

const soyunstrignormal = "soy un strig normal"
console.log(typeof soyunstrignormal)

const stignormal2 = String("soy estring 2")
console.log(typeof stignormal2)

const strigobjeto = new String ("nuevo strig")
console.log(typeof strigobjeto)

const saludo ="hola como sestsas"
console.log(saludo[2])
console.log(saludo.charAt(2))
console.log(saludo.indexOf("o"))
console.log(saludo.indexOf("como"))
console.log(saludo.indexOf("pepito"))
console.log(saludo.lastIndexOf("o"))
console.log(saludo.slice(3,6))
console.log(saludo.length)
console.log(saludo.toLowerCase())
console.log(saludo.toUpperCase())

const saludodividido = saludo.split(' ')
console.log(saludodividido)
console.log(saludodividido[1])

const saludoconespaxio = "     hola munco     "
const saludosinespacio = saludoconespaxio.trim()
console.log(saludosinespacio)

const saludooriginal = "hollla mundo"
const nuevosaludo = saludooriginal.replace('hollla','hola👋')
console.log(nuevosaludo)