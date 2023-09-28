/*
Class to represent a deck
  -

Class to represent a hand
  -




*/
// Shuffle method
function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function shuffleJulio(array) {
  let currentIndex = array.length;
  let randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    const temp = array[currentIndex];
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temp;
  }

  return array;
}

// Used like so
var arr = [2, 11, 37, 42];
shuffle(arr);
console.log(arr);




/*
ES6 class syntax
Iterating over items in javascript
shuffle algorithm

*/



// Deck of cards
// 13 x 4
// initialize the deck (not shuffled)

// suits = ['H', 'S', 'D', 'C']
// values = ['A', 'J', 'Q', 'K']

const suits = ['H', 'S', 'D', 'C']
const faceCards = ['A', 'J', 'Q', 'K']

class Deck {
    constructor() {
        // ['AH', '4S']
        // [{value: 'A', suit: 'H'}, ]
        this.cards = [];
        let allValues = faceCards.slice();
        for (let i = 2; i <= 10; i++) {
            allValues.push(i);
        }
        // suits
        for (let i = 0; i < suits.length; i++) {
            const suit = suits[i];
            // values
            for (let j = 0; j < allValues.length; j++) {
                const value = allValues[j];
                this.cards.push({
                    suit: suit,
                    value: value
                })
            }
        }
        // shuffle deck at end of initialization
    }
    draw() {
        // check to see if deck has been shuffled, if not shuffle
        return this.cards.pop();
    }
    shuffle() {
        let currentIndex = this.cards.length;
        let randomIndex;

        while (currentIndex > 0) {
            randomIndex = Math.floor(Math.random * currentIndex)
            currentIndex--;

            const temp = this.cards[currentIndex];
            this.cards[currentIndex] = this.cards[randomIndex];
            this.cards[randomIndex] = temp;
        }
    }
    deal() {
        // draw two cards
        const cards = []
        cards.push(this.draw());
        cards.push(this.draw());
        return cards;
    }
    calculate() {
        let total = 0;
        // iterate the hand of the player
        // card.value
    }
    playSimpleBlackJack() {
        // player and house
        // each draw two cards
        // if they have less than 17, hit.
        // If over with an Ace, make the value one
        const house = {
            cards: [],
            value: 0
        }
        const player = {
            cards: [],
            value: 0
        }
        player.cards.concat(this.deal());
        house.cards.concat(this.deal());

        // check if anyone has below 17, if so draw until above 17
        while (player.value < 17) {
            player.cards.push(this.draw());
            // calculate hand

        }
    }
}

// Four pillars of object oriented programming
