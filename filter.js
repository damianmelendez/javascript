// filter

const numvers = [2,3,4,5,6,7,8,9,10]
const evennumbers = numvers.filter(number => number % 2 === 0)

console.log(numvers)
console.log(evennumbers)


// reduce() caso 1

const numberReduce = [1,2,3,4,5,]
const suma = numberReduce.reduce((accumulator , currenvalue) => accumulator + currenvalue, 0)


console.log(numberReduce)
console.log(suma)

// caso 2 reduce

const words = ["aplle","banana","hellow","by","hellow","by"]

const worrdsfreuency = words.reduce((accumulator,currenvalue) => {
    if (accumulator[currenvalue]) {
        accumulator[currenvalue]++
    }else {
        accumulator[currenvalue] = 1
    }
    return accumulator
}, {})

console.log(worrdsfreuency)