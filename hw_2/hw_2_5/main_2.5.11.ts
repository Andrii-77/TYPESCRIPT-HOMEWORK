let sum = (array: number[]): number => {
    let box: number = 0;
    for (const number of array) {
        box = box + number;
    }
    return box;
}
console.log(sum([1,2,10]));