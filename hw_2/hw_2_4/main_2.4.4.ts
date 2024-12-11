function printOfArray1(array:any[]): void {
    for (const item of array) {
        console.log(item);
    }
}
let amb: any[] = [5, 'hello', true];
console.log(printOfArray1(amb));