const transactions = [
    {id: 1, Description: "car", amount: -50},
    {id: 2, Description: "salary", amount: 2000},
    {id: 3, Description: "utility", amount: -100},
    {id: 4, Description: "online", amount: -30},
]

// 1 calculete total valance

const totalbalance = transactions.reduce((acc, transaction) => acc +transaction.amount, 0)

console.log("total balance",totalbalance)



// 2 find transaccion ingreso como egreso 

const largestTransaccion = transactions.reduce((maxTransaccion , transaction) => {
    return Math.abs(transactions.amount) > Math.abs(maxTransaccion.amount) ? transaction : maxTransaccion
},transactions[0] )
console.log("la maxima transaccion: " ,largestTransaccion )

// 3 filter purchase transactions 

const purchase = transactions.filter(transaction => transactions.amount < 0)
console.log("purchase" ,purchase)

// 4 find a transaction by description

const especifictransaction = transactions.find(transaction => transaction.Description === "online")
console.log("especfic transaction" ,especifictransaction)

// 5 find the index if a transaction by ammont

const indextransactionwhithamonth = transactions.findIndex(transaction => transactions.amount === -30)
console.log("index transaction whith a month" ,indextransactionwhithamonth)

 
// opdate transaction Description

transactions.forEach(transaction => {
    if (transaction.amount < 0) {
        transaction.Description = `expence ${transaction.Description}`
    }else {
        transaction.Description = `income ${transaction.Description}`

    }
})

console.log("updated transaction", transactions)