// splice

const vegetables = ["carrot", "brocoli","soinach","tomato"]
const remove = vegetables.splice(2,1,"cucumer","onion")

console.log(vegetables)
console.log(remove)

// reverse

const numers = [1,2,3,4,5]
const reversenumbers = numers.reverse()

console.log(numers)
console.log(reversenumbers)

// sort() whith numbers 

const unsortednumbers = [4,18,1,62,34]

const sortednombers = unsortednumbers.sort()

console.log(unsortednumbers)
console.log(sortednombers)

const unsortednumbers2 = [4,18,1,62,34]
const sortednombers2 = unsortednumbers2.sort((a,b) => a-b)

console.log(unsortednumbers2)
console.log(sortednombers2)


// sort() whith strigs utf 16

const cities = ["new york", "tokio", "londres"]
const sorcities = cities.sort()

console.log(cities)
console.log(sorcities)



// fill()

const ages = [21,35,45,50]
console.log(ages.fill(0,2,4))
console.log(ages.fill(15,1,))
console.log(ages.fill(15))

