// exercise card game implementation

const deck = ["♣️","♠️","♥️","♦️","🃏","♠","♠","🂭","🂳","♧,","♢","♡"]

// algoritmo de fisher yates
function shuffleDeck () {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random()*( i + 1 ));
        [deck[i],deck[j]] = [deck[j],deck[i]]
    }
}


function dealCards (numCards) {
    const dealCards = deck.splice(0,numCards)
    return dealCards

}

shuffleDeck()


const player1 = dealCards(3)
const player2 = dealCards(3)
const player3 = dealCards(3)

console.log("player1" ,player1)
console.log("player2" ,player2)
console.log("player3" ,player3)
