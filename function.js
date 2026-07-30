// function bazar() {
//     console.log(`aj sunday anek kaz bazr korte hobbe `)
// }
// bazar()
// bazar()
// bazar()
// bazar(`egg sugar musturd oil`)

// const teamAGoals = 5;
// const teamBGoals = `6`;
// if (teamAGoals > teamBGoals) {
//     console.log(`Team A won`)
// }
// else if (teamAGoals < teamBGoals) {
//     console.log(`Team B won`)
// }
// else if (typeof teamAGoals !== `number` && typeof teamBGoals !== `number`) {
//     console.log(`invalid`)
// }
// else {
//     console.log(`Drow`)
// }

// function square(num) {
//     if (typeof num !== `number`) {
//         return `error: please provide a number`
//     }
//     return num * num
// }
// console.log(square(9))
// console.log(square(`9`))

// function matchWinner(teamAGoals, teamBGoals) {
//     if (teamAGoals > teamBGoals) {
//         return `Team A won`
//     }
//     else if (teamAGoals < teamBGoals) {
//         return `Team B won`
//     } else if (typeof teamAGoals !== `number`) {
//         return `invalid`
//     }
//     else if (typeof teamBGoals !== `number`) {
//         return `invalid`
//     } else if (typeof teamAGoals == null) {
//         return `invalid`
//     }
//     else if (typeof teamBGoals == null) {
//         return `invalid`
//     }
//     else {
//         return `Draw`
//     }
// }
// console.log(matchWinner(5, null))

//PROBLEM 02
const maxWeight = 400;
let weights = [45, 95, 65, 85, 75, 65, 54]
let totalWeight = 0;
for (i = 0; i <= weights.length; i++) {
    // console.log(weights[i])
    totalWeight += weights[i];
    console.log(totalWeight);
    if (totalWeight <= maxWeight) {
        console.log(`true`)
    } else {
        console.log(`false`)
    }
}
