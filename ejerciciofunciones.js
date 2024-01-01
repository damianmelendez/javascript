//  create powerfullboys objets

function powerfullboys (name , color, superpawer) {
    this.name = name
    this.color = color
    this.superpawer = superpawer
    this.eslider = false

    this.displayinfo = function (){
        console.log(`powerfull boys information 
         name: ${this.name} 
         color ; ${this.color} 
         superpawer: ${this.superpawer}
         ${this.eslider ? "leader yes" : "leader: no"}
        `)
    }
    this.becomelider = function (){
        this.eslider = true 
        console.log(`${this.name} has become a lider of grup `)

    }
}

const damian = new powerfullboys ("damian","azul","fuerza")
const julio = new powerfullboys ("julio","blanco","rapidez")
const melendez = new powerfullboys ("melendez","amarillo","volar")

damian.displayinfo()
julio.displayinfo()
melendez.displayinfo()

damian.becomelider()

damian.displayinfo()
julio.displayinfo()
melendez.displayinfo()