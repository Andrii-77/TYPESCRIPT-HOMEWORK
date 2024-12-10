let str1: string = 'hello world';
const str1Up: string = str1.toUpperCase();
console.log(str1Up);
let str2: string = 'lorem ipsum';
const str2Up: string = str2.toUpperCase();
console.log(str2Up);
let str3: string = 'javascript is cool';
const str3Up: string = str3.toUpperCase();
console.log(str3Up);
console.log(' ');
let strings: string[] = [str1, str2, str3];
for (const str of strings) {
    console.log(str.toUpperCase());
}