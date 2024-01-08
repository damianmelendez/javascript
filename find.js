// find() y find index()

// find

const multiplersoffive = [5,10,15,20]

const firsnumbergreatedthan10 = multiplersoffive.find(Number => Number > 10)

console.log(multiplersoffive)
console.log(firsnumbergreatedthan10)

// find index

const radomnumbers = [6,14,27,56,40]
const indexnumbers = radomnumbers.findIndex(number => number > 50)

console.log(radomnumbers)
console.log(indexnumbers)

// exercise verificacion programa


const winerparticipants = [
    {id: 1 , name: "jenifer" , ticketnumber: 1},
    {id: 2 , name: "micol" , ticketnumber: 8},
    {id: 3 , name: "emili" , ticketnumber: 15},
    {id: 4 , name: "charly" , ticketnumber: 47}
]

function findwinername (name) {
    const winer = winerparticipants.find(participants => participants.name === name )
    return winer || "no winwer found by name"
}

function findwinertiket (tiketnumber) {
    const index = winerparticipants.findIndex(participants => participants.ticketnumber === tiketnumber)
    return index !== -1 ? index : "no foud whith that tiket number"
}

function displaywinerinformation (winer) {
    if (winer !== undefined && winer !== null && winer !== "no winwer found by name"){
            console.log("winer information: ",winer)
    } else {
        console.log("no winner found.")        
    }

} 

const winerbyname = findwinername("emili")
const indexbytiket = findwinertiket(15)

displaywinerinformation(winerbyname)
console.log("index of winer by tiket umber", indexbytiket )





















