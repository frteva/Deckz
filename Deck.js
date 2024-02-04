import Card from "./Card.js";
import shuffle from "./node_modules/lodash-es/shuffle.js";

class Deck {

    #cards = [];

    constructor(options) {
        this.values = options.values;
        this.suits = options.suits;
    }

    createFullDeck() {
        this.values.forEach(value => {
            this.suits.forEach(suit => {
                this.#cards.push(new Card(value, suit));
            });
        });
        return this;
    }

    displayCards() {
        this.#cards.forEach(card => {
            card.display();
        });
        return this;
    }

    shuffle() {
        this.#cards = shuffle(this.#cards);
        return this;
    }

}

export default Deck;