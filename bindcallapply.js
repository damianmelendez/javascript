const owner = "luci"
const addres = "123 avenue"


function doggreeding (owner,addres){
    console.log(`hi i am ${this.dogname} and live whith ${owner} on ${addres}`)
}

const newhouse = {
    dogname: "coconut"
}

doggreeding.call(newhouse , owner, addres)

const necesaryvalues = [owner, addres ]
doggreeding.apply(newhouse, necesaryvalues)
const binddog = doggreeding.bind(newhouse , owner, addres)
binddog()