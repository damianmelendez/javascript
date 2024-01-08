// const intentos = 0
// const palabraoculta ="javascript"
// const pista = "es un lenguage de programacion"



// while (intentos < 3) {
//     const ususario = prompt(pista)
//     console.log(intentos)
//     intentos ++
// }

let palabraoculta = "javascript";
let intentos = 3;

function verificarsup(suposicion, palabraoculta) {
    return suposicion.toLowerCase() === palabraoculta.toLowerCase();
}


function jugaradiviana (){
    alert("bienbenido a jugar adivina la palabra");
    alert("tienes 3 intentos para adivinar la palabra");
    alert("--pista--la palabraoculta es un lenguaje de programacion");

    while (intentos >= 1) {
        let supocicion = prompt("adivina la palabra");
        
        if(verificarsup (supocicion,palabraoculta)){
            alert("correcto has adivinado");
            break;
        } else {
            intentos--;
            if (intentos >= 1){
                alert(`incorrecto aun tienes ${intentos} intentos restantes`);
            } else {
                alert(`perdiste la palabra oclta era ${palabraoculta}`);
            }
        }
    }
}







jugaradiviana();