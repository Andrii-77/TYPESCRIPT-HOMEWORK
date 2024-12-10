let minValueOfArray = (arrayOfNumbers: number[]): number => {
    let min: number = arrayOfNumbers[0];
    for (let i: number = 1; i < arrayOfNumbers.length; i++) {
        let number = arrayOfNumbers[i];
        if (number < min) {
            min = number
        }
    }
    return min;
}
console.log(minValueOfArray([23, -568, 987, 0, -963.25,  1258, -5, 3]));