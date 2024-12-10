let str1: string = 'hello world';
console.log(str1.length);
let str2: string = 'lorem ipsum';
console.log(str2.length);
let str3: string = 'javascript is cool';
console.log(str3.length);
console.log(' ');
let strings: string[] = [str1, str2, str3];
for (const str of strings) {
    console.log(str.length);
}