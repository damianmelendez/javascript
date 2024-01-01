// enlace implicito

const house = {
    dogname: "fido",
    doggeeting: function () {
        console.log(`Hola, ${this.dogname}!`)
    }
}

house.doggeeting()

// enlace explicito


function doggeeting () {
    console.log(`Hola, ${this.dogname}!`)
}
const newhouse = {
    dogname: "alegro",
}
doggeeting.call(newhouse)

function newdoggeeting (ownwe, addres) {
    console.log(`Hola,soy ${this.dogname}! y vivo con ${ownwe} en ${addres}`)
}
const ownwe = "luci"
const addres ="avenue 123"
newdoggeeting.call(newhouse, ownwe, addres)