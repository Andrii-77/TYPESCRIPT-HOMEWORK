let str11: string = 'hello world';
const str1Up: string = str11.toUpperCase();
console.log(str1Up);
let str22: string = 'lorem ipsum';
const str2Up: string = str22.toUpperCase();
console.log(str2Up);
let str33: string = 'javascript is cool';
const str3Up: string = str33.toUpperCase();
console.log(str3Up);
console.log(' ');
let stringsAll1: string[] = [str11, str22, str33];
for (const str of stringsAll1) {
    console.log(str.toUpperCase());
}