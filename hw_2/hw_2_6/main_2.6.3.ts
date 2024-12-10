let str1: string = 'HELLO WORLD';
const str1Lo: string = str1.toLowerCase();
console.log(str1Lo);
let str2: string = 'LOREM IPSUM';
const str2Lo: string = str2.toLowerCase();
console.log(str2Lo);
let str3: string = 'JAVASCRIPT IS COOL';
const str3Lo: string = str3.toLowerCase();
console.log(str3Lo);
console.log(' ');
let strings: string[] = [str1, str2, str3];
for (const str of strings) {
    console.log(str.toLowerCase());
}
console.log(' ');
str1 = str1Lo;
console.log(str1);
str2 = str2Lo;
console.log(str2);
str3 = str3Lo;
console.log(str3);