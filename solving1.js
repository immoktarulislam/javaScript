//check even & odd number
// let num = 1502;
// if (num % 2 === 0) {
//     console.log(`this is even number`)
// }
// else { console.log(`this is a odd number`) }

// ---function method---
// function isEvenOdd(num) {
//     if (num % 2 === 0) {
//         return `even value`
//     }
//     else { return `odd value` }
// }
// console.log(`13 is a ==>> ${isEvenOdd(13)}`)
// console.log(`22 is a  ==>> ${isEvenOdd(22)}`)
// console.log(`501 is a  ==>> ${isEvenOdd(501)}`)


//----sum of a range of numbers----//
// let num1 = 0;
// let sum = 1;
// for (let i = 1; i <= 4; i++) {
//     sum = sum + i
//     console.log(`i=>>${i}`)
//     console.log(`sum=>>${sum}`)
// }
//---function method---
// function addNums(num) {
//     let sum = 1;
//     for (let i = 1; i <= 4; i++) {
//         sum = sum + i;
//         console.log(`i=>>${i}`);
//         // console.log(`sum=>>${sum}`)
//     }
//     return sum;
// }
// console.log(addNums(4))


//----factorial of a range of numbers----//
// function factoNums(num) {
//     let multi = 1;
//     for (let i = 1; i <= 7; i++) {
//         multi = multi * i;
//         console.log(`i=>>${i}`);
//         // console.log(`sum=>>${sum}`)
//     }
//     return multi;
// }
// console.log(factoNums(7))


//--- print if divisble by 3, fizz; divisble by 5 print buzz; divisble by both print fizzbuzz, other wise nothing ---//
function fizzBuzz(num) {

    for (let i = 1; i <= num; i++) {
        console.log(`i==>>${i}`)
        if (i % 3 === 0 && i % 5 === 0) { console.log(`fizzBuzz`) }
        else if (i % 3 === 0) { console.log(`fizz`) }
        else if (i % 5 === 0) { console.log(`buzz`) }
        else { console.log(`not divisble by 3 or 5`, i) }
    }
}
console.log(fizzBuzz(15))
