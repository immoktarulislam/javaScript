// ...PROBLEM 02...........
function isElevatorSafe(weights) {
    if (!Array.isArray(weights)) {
        return `Invalid`
    }
    let total = 0;
    for (let weight of weights) {
        total += weight;
    }
    console.log(total)
    return total <= 400;
}
console.log(isElevatorSafe("60,75,50"))