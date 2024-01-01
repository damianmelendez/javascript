const saludo = function (name) {
    return `hola ${name}`

}

// funcion flecha explicito
const newsaludo =  (name) => {
    return `hola ${name}`

}

// funcion flecha implicito

const newsaludoimpicit = name => `hola ${name}` 
const newsaludoimpicit2 = (name, lasname) => `hola soy ${name} ${lasname}` 


// lexical binding

const personajeficticion = {
    name: "ben",
    messagewhittradicionalfuction: function (message) {
        console.log(`soy ${this.name} Y digo ${message}`)
    },
    arrowjeben: (message) => {
        console.log(`soy ${this.name} y tengo que decir ${message}`)
    }
}

personajeficticion.messagewhittradicionalfuction("un granpoder conlleva una gran responsabilidad")
personajeficticion.arrowjeben("doy el hombre araña")
