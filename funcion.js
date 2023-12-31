function calculatedescount (price , discount1) {
    const discount = (price * discount1) / 100
    const pricecondescuento = price - discount

    return pricecondescuento
}    
const originalprice = 100
const discounttienda = 20
const finalprice = calculatedescount(originalprice , discounttienda)

console.log("precio original: " + originalprice)
console.log("discuento " + discounttienda + "%")
console.log("precio con descuento: " + finalprice)