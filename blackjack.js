//
// Blackjack
// by Hector Vega
//

//Card variables
let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades']
let values = ['Ace', 'King', 'Queen', 'Jack',
    'Ten', 'Nine', 'Eight', 'Seven', 'Six', 
    'Five', 'Four', 'Three', 'Two']

//DOM variables
let textArea = document.getElementById('text-area');
let newGameButton = document.getElementById('new-game-button')
let hitButton = document.getElementById('hit-button')
let stayButton = document.getElementById('stay-button')

//Game variables
let gameStarted = false,
    gameOver = false,
    playerWon = false,
    dealerCards = [],
    playerCards = [],
    dealerScore = 0,
    playerScore = 0,
    deck = []

hitButton.style.display = 'none'
stayButton.style.display = 'none'
showStatus()

newGameButton.addEventListener('click', function() {
    gameStarted = true
    gameOver = false
    playerWon = false
    
    deck = createDeck()
    shuffleDeck(deck)
    dealerCards = [ getNextCard(), getNextCard()]
    playerCards = [ getNextCard(), getNextCard()]

    newGameButton.style.display = 'none'
    hitButton.style.display = 'inline'
    stayButton.style.display = 'inline'
    showStatus()
})

function createDeck() {
    let deck = []

    for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
    
        for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
            let card = {
                suit: suits[suitIdx],
                value: values[valueIdx]
            }
            deck.push( card )
        }
    }
    return deck
}

function getNextCard() {
    return deck.shift();
}

function getCardString(card) {
    return card.value + ' of ' + card.suit
}

function ShowStatus() {
    if (!gameStarted) {
        textArea.innerText = 'Welcome to Blackjack!'
        return
    }
}

let deck = createDeck()

function shuffleDeck(deck) {
    deck.sort(function(a, b) {return 0.5 - Math.random()})
}

shuffleDeck(deck)


let playerCards = [ getNextCard(), getNextCard() ]
let crupierCards = [ getNextCard(), getNextCard()]

console.log("Welcome to Blackjack!")

console.log("You're dealt: ")
console.log(" " + getCardString(playerCards[0]))
console.log(" " + getCardString(playerCards[1]))