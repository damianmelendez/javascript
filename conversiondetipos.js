//  egexpicit type casting

const string ="42"
const integer = parseInt(string)
console.log(integer)
console.log(typeof integer)

const strigdecimal ="3.14"
const flot = parseFloat(strigdecimal)
console.log(flot)
console.log(typeof flot)

const bynary = "1010"
const decimal = parseInt(bynary, 2)
console.log(decimal)
console.log(typeof decimal)

// type casting implicit

const sum = "5" + 3
console.log(sum)

const bulean = "3" + true
console.log(bulean)

const numer = 2 + true
console.log(numer)

const strigvalue = "10"
const numbervalue = 10
const boleanvalue = true

console.log(strigvalue + strigvalue)
console.log(strigvalue + numbervalue)
console.log(strigvalue + boleanvalue)

console.log(numbervalue + strigvalue)
console.log(numbervalue + numbervalue)
console.log(numbervalue + boleanvalue)

console.log(boleanvalue + strigvalue)
console.log(boleanvalue + numbervalue)
console.log(boleanvalue + boleanvalue)

