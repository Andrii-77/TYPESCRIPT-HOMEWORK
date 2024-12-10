// let printOfArray = (array) => console.log(array);

let printOfArray = (array: any[]): void => {for (const item of array) {
    console.log(item);
}};

let a: any[] = [5, 'hello', true];
printOfArray(a);