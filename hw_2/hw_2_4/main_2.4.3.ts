function cylinderSquare(radius: number, height: number): number {
    return 2 * Math.PI * radius * height;
}

let result: number = cylinderSquare(5, 8);
console.log(result)