function swap(arr: number[], index1: number, index2: number): number[] | string {
    if (index1 < arr.length && index2 < arr.length) {
        let temp: number = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
        return arr;
    }
    return "Invalid index."
}

console.log(swap([11, 22, 33, 44], 0, 1));