// const token = 500//free
// let extraTokens = 1000 - 500;
// let floorPart = Math.floor(extraTokens / 100);
// let payBill = floorPart * 5
// console.log(payBill)

function calculateAiCost(tokensUsed) {
    if (typeof tokensUsed !== `number` || tokensUsed < 0) {
        return `Invalid`
    }
    else if (tokensUsed <= 500) {
        return 0
    }
    else if (tokensUsed >= 501) {
        let extraTokens = tokensUsed - 500;
        let wholeValue = Math.floor(extraTokens / 100);
        let payBill = wholeValue * 5;
        return payBill
    }
}
console.log(calculateAiCost(650))
console.log(calculateAiCost(300))
console.log(calculateAiCost(-10))
console.log(calculateAiCost(`500`))
