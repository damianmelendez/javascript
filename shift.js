// shhift an d onshift

// shift

const colors = ["`yellow`", "`blue`", "`red`"]
console.log(colors)


const remove = colors.shift()

console.log(colors)
console.log(remove)


// unshift

const newcoors = colors.unshift("pimk", "purple")
console.log(colors)
console.log(newcoors)

// ejercicio

function manageplaylist (playlist,song){
    playlist.shift()
    playlist.unshift(song)
    return playlist

}

const incialplaulist = ["cancion1", "cancion 2"]
const song = "luna de xelaju"

const playupdate = manageplaylist(incialplaulist, song)
console.log("inicial plaulist" ,incialplaulist)
console.log("song new" ,song)

console.log("lista actualizada" ,playupdate)

