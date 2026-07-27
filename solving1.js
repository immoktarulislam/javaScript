//check even & odd number
let num = 1502;
if (num % 2 === 0) {
    console.log(`this is even number`)
}
else { console.log(`this is a odd number`) }

//---function method---
function isEvenOdd(num) {
    if (num % 2 === 0) {
        return `even value`
    }
    else { return `odd value` }
}
console.log(isEvenOdd(13))
console.log(isEvenOdd(22))
console.log(isEvenOdd(131))