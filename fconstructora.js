const personalizedmessage = () => "despeque falcon9 ❤️‍🔥"




function Roket (name, ownmessage) {
    this.name = name
    this.laaucmassage = ownmessage
}

const falcon9roket = new Roket("falcon9", personalizedmessage)
const falcon10roket = new Roket("falcon10", "despegue falcon10😈")

console.log(falcon9roket.name)
console.log(falcon9roket.laaucmassage())

console.log(falcon10roket.name)
console.log(falcon10roket.laaucmassage)


const roketarrow = (name, ownmessage) => ({
    name: name,
    laaucmassage: ownmessage

})

const personalizedmessagearrowf = () => "succesfull launch ❤️‍🔥"

const cohete1 = roketarrow("cohete1" , personalizedmessagearrowf)
console.log(cohete1.name)
console.log(cohete1.laaucmassage())