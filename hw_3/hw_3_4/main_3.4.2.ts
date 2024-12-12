// -------Змінюю модель даних на типи.------

type CinderellaType = {
    name: string;
    age: number;
    footSize: number;
}

class Cinderella2 implements CinderellaType{
    age: number;
    footSize: number;
    name: string;

    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

interface IPrince {
    name: string;
    age: number;
    shoe: number;
    Cindirella: string
}

class Prince2 implements IPrince{
    age: number;
    name: string;
    shoe: number;
    Cindirella: string;
    wife: Cinderella;

    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

const cinderellas2 = [
    new Cinderella2('Cindirella1', 23, 25),
    new Cinderella2('Cindirella2', 24, 26),
    new Cinderella2('Cindirella3', 25, 27),
    new Cinderella2('Cindirella4', 26, 28),
    new Cinderella2('Cindirella5', 27, 29),
    new Cinderella2('Cindirella6', 28, 30),
    new Cinderella2('Cindirella7', 29, 31),
    new Cinderella2('Cindirella8', 30, 32),
    new Cinderella2('Cindirella9', 31, 33),
    new Cinderella2('Cindirella10', 31, 34),
];

const prince02 = new Prince2("Albert", 27, 27);

// ---------------Варіант № 1 -----------------------

for (const cinderella of cinderellas2) {
    if (cinderella.footSize === prince02.shoe) {
        prince02.wife = cinderella;
    }
}
console.log(prince02.wife);

// ---------------Варіант № 2 -----------------------

prince02.wife = (cinderellas2.find(cinderella => cinderella.footSize === prince02.shoe));
console.log(prince02.wife);