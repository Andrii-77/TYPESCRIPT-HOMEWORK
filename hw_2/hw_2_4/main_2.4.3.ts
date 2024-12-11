function cylinderSquare1(radius: number, height: number): number {
    return 2 * Math.PI * radius * height;
}

let result: number = cylinderSquare1(5, 8);
console.log(result)