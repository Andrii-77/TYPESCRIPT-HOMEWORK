function printOfArray(array:any[]): void {
    for (const item of array) {
        console.log(item);
    }
}
let a: any[] = [5, 'hello', true];
console.log(printOfArray(a));