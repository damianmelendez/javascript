// exercise passing grade average

const grades = [85, 92,60,78,95,66,88,50,94]

const passinggrades = grades.filter(grade => grade >= 70)

const averagepassiggrade = passinggrades.reduce((suma , grade) => suma + grade , 0) / passinggrades.length

console.log("notas",grades)
console.log("notas satisfactorias",passinggrades)
console.log("promedio",averagepassiggrade)



