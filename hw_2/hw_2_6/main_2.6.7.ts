function sortNums(arrayOfNums: number[], direction: string): number[] {
    if (direction === 'ascending') return arrayOfNums.sort((a, b) => a - b);
    if (direction === 'descending') return arrayOfNums.sort((a, b) => b - a);
}
let arrayOfNums: number[] = [11,21,3];
console.log(sortNums(arrayOfNums,'ascending'));
console.log(sortNums(arrayOfNums,'descending'));