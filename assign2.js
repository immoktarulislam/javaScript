

function matchWinner(teamAGoals, teamBGoals) {
    if (typeof teamAGoals !== `number`) {
        return `Invalid`
    }
    else if (typeof teamBGoals !== `number`) {
        return `Invalid`
    }
    else if (teamAGoals > teamBGoals) {
        return `Team A Won`
    }
    else if (teamAGoals < teamBGoals) {
        return `Team B Won`
    }
    else {
        return `Draw`
    }
}
console.log(matchWinner("3", 2))



//...PROBLEM 02...........
// function isElevatorSafe(weights) {
//     if (!Array.isArray(weights)) {
//         return `Invalid`
//     }
//     let total = 0;
//     for (let weight of weights) {
//         total += weight;
//     }
//     console.log(total)
//     return total <= 400;
// }
// console.log(isElevatorSafe("60,75,50"))