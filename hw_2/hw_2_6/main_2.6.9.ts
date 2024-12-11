const suits: string[] = ['spade', 'diamond','heart', 'clubs'];
const values: string[] = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

const cardsBox: any[] = [];
for (const suit of suits) {
    for (const value of values) {
        const card: {cardSuit: string, value: string, color: string} = {cardSuit: suit, value: value, color: 'red' || "black"};
        if (suit === 'heart' || suit === 'diamond') {
            card.color = 'red';
        } else {
            card.color = 'black';
        }
        cardsBox.push(card);

    }
}
console.log(cardsBox);

// - знайти піковий туз
console.log(cardsBox.find(card => card.value === 'ace' && card.cardSuit === 'spade'));

// - всі шістки
console.log(cardsBox.filter(card => card.value === '6'));

// - всі червоні карти
console.log(cardsBox.filter(card => card.color === 'red'));

// - всі буби
console.log(cardsBox.filter(card => card.cardSuit === 'diamond'));

// - всі трефи від 9 та більше
console.log(cardsBox.filter(card => card.cardSuit === 'clubs' && card.value !== '6' && card.value !== '7' && card.value !== '8'));