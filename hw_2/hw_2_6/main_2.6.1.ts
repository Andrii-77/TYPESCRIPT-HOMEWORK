let string1: string = 'hello world';
console.log(string1.length);
let string2: string = 'lorem ipsum';
console.log(string2.length);
let string3: string = 'javascript is cool';
console.log(string3.length);
console.log(' ');
let stringsAll: string[] = [string1, string2, string3];
for (const str of stringsAll) {
    console.log(str.length);
}