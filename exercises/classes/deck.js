const SUITS = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];
const FACE_CARDS = ['Ace', 'Jack', 'Queen', 'King'];

class Deck {
  constructor() {
    this.cards = []
    // face cards plus 2-10, end inclusive.
    const allCards = FACE_CARDS.slice();
    for (let i = 2; i <= 10; i++) {
      allValues.push(i);
    }
    // Iterate over suits to create one instance of allValues per suit.
    for (suit of suits) {
      for (card of allCards) {
        let value;
        // For integer cards we can assign value directly.
        if (Number.isInteger(card)) {
          value = card;
          // Ace is a special case so we assign 11. Can be value of 1 depending on game.
        } else if (card === 'Ace') {
          value = 11;
        } else {
          value = 10;
        }
        this.cards.push({
          suit: suit,
          card: card,
          value: value
        })
      }
    }
  }
  // shuffle once we implement that method.
  draw() {
    return this.cards.pop();
  }
  shuffle() {
    let currentIndex = this.cards.length;
    let randomIndex;

    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // Swap the position of two cards at current index and random index.
      const temp = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temp;
    }
  }
  deal() {
    // Deal two cards
    const cards = [];
    cards.push(this.cards.draw());
    cards.push(this.cards.draw());
    return cards;
  }
  calculate(hand) {
    // hand is an array of objects, cards.
    let total = 0;
    for (card of hand) {
      total += card.value;
    }
    return total;
  }
  playBlackJack() {
    // Simple game of player gets two cards and house gets two cards.
    // Hit any time you are at 17 or below
    const house = {
      hand: [],
      total: 0
    }
    const player = {
      hand: [],
      total: 0
    }
    player.hand.concat(this.deal());
    house.hand.concat(this.deal());

    player.total = this.calculate(player.hand);
    house.total = this.calculate(house.hand);

    while (player.total < 17) {
      // hit
      player.hand.concat(this.draw());
      // calculate
      player.total = this.calculate(player.hand);
      // check for bust
      if (player.total > 21) {
        // Before we bust let's see if we have an Ace we can reassign.
        for (card of player.hand) {
          if (card.card === 'Ace' && card.value === 11) {
            card.value = 1;
            // We'll break out of the for loop and hopefully
            break;
          }
        }
      }
    }
    if (player.total > 21) {
      console.log("Player bust!")
    }

    while (house.total < 17) {
      player.hand.concat(this.draw());
      // calculate
      player.total = this.calculate(player.hand);
      // check for bust
      if (player.total > 21) {
        // Before we bust let's see if we have an Ace we can reassign.
        for (card of player.hand) {
          if (card.card === 'Ace' && card.value === 11) {
            card.value = 1;
            // We'll break out of the for loop and hopefully
            break;
          }
        }
      }
    }

    if (player.total > house.total) {
      console.log("Player wins!");
    } else if (player.total === house.total) {
      console.log("Its a draw!");
    } else {
      console.log("House wins!");
    }
  }
}
