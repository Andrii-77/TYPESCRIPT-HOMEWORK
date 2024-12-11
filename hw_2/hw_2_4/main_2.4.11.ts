function sum1(array: number[]): number {
    let box: number = 0;
    for (const number of array) {
        box = box + number;
    }
    return box;
}
console.log(sum1([1, 2, 10]));