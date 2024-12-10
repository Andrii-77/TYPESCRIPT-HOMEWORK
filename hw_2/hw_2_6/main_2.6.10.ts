const suits2: string[] = ['spade', 'diamond','heart', 'clubs'];
const values2: string[] = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

const cardsBox2: any[] = [];
for (const suit of suits2) {
    for (const value of values2) {
        const card: {cardSuit: string, value: string, color: string} = {cardSuit: suit, value: value, color: 'red' || "black"};
        if (suit === 'heart' || suit === 'diamond') {
            card.color = 'red';
        } else {
            card.color = 'black';
        }
        cardsBox2.push(card);

    }
}

const reduce = cardsBox2.reduce((accum, card) => {
    switch (card.cardSuit) {
        case 'spade':
            accum.spades.push(card);
            break;
        case 'diamond':
            accum.diamonds.push(card);
            break;
        case 'heart':
            accum.hearts.push(card);
            break;
        case 'clubs':
            accum.clubs.push(card);
            break;
    }

    return accum;
}, {
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
});

console.log(reduce);