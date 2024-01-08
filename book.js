// let libros = []
// alert( "esta es la lista de libros:")
// alert( libros)
// const opcion = prompt("que deseas hacer 1 agregar 2 eliminar")

// if (opcion == 1) {
//     const actuallibros = libros.push(prompt("escribe tu libro"))
//     alert("libro agregado correctamente"),
//     alert( "esta es la lista de libros:"),
//     alert( libros)
// }else if (opcion == 2) {
//     // eliiminar libro
// } else {
//     alert("opcion invalidad intente nuevamente reacargando la pagina")
// }

let books = []

const anadir = "añadir"
const eliminar = "eliminar"
const ver = "ver"

function viewbooks () {
    console.log(`libros actuales`,books)
}

function acciones (action , newbook){
    switch (action) {
        case anadir:
            books.push(newbook)
            break;
        case eliminar:
            if (books.length === 0) {
                console.log("no haylibros para remover")
                
            }else {
                const removebook = books.pop()
                console.log(`libro borrado ` , removebook)
            }
            
            break;
        case ver:
            viewbooks()
            break;
    
        default:
            console.log("invalid action .please chose a valid option")
            
    }
}

acciones(anadir, "think lie")
acciones(ver)
acciones(anadir, "think lie 2")
acciones(ver)
acciones(eliminar)
acciones(ver)
