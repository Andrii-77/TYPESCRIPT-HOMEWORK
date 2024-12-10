let str: string = 'Ревуть воли як ясла повні';
function stringToarray(str: string): string[] | [string]{
    if(str){
        return str.split(' ');
    }
    return [""];
}
let arr = stringToarray(str);
console.log(arr);