// sum number
// function sum(a, b) {
//     let add = a + b;
//     return add;
// }
// console.log(sum(7, 7))

//even or odd number
// function isEven(num) {
//     return num % 2 === 0;
// }
// console.log(isEven(25))
// console.log(isEven(-21))

//print largest number
// function largest(a, b, c) {
//     if (a >= b && a >= c) {
//         // console.log(`this is big`)
//         return a
//     } else if (b >= a && b >= c) {
//         // console.log(`this is big`);
//         return b
//     } else {
//         // console.log(`this is big`);
//         return c
//     }
// }
// console.log(`this is big ${largest(-12, -25, -13)} ,between the numbers`)

// reverse str
// function reverse(str) {
//     return str.split(``).reverse().join(``);
// }
// console.log(reverse(`hello`))

//loop method
// function reverse(str) {
//     let result = ``;
//     for (let i = str.length - 1; i >= 0; i--) {
//         result += str[i];
//     } return result
// }
// console.log(reverse(`hello`))

//count vowel
function countVowels(str) {
    let count = 0;
    let vowels = `aeiouAEIOU`;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count
}
console.log(countVowels(`beautiful`))
