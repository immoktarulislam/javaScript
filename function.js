//..........PROBLEM 01...............

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

//..........PROBLEM 02...............
// const maxWeight = 400;
// let weights = [45, 95, 65, 85, 75, 65, 54]
// let totalWeight = 0;
// for (i = 0; i <= weights.length; i++) {
//     totalWeight += weights[i];
//     console.log(totalWeight);
//     if (totalWeight <= maxWeight) {
//         console.log(`true`)
//     } else {
//         console.log(`false`)
//     }
// }


// function isElevatorSafe(weights) {
//     const maxWeight = 400;
//     let totalWeight = weights[0];
//     for (i = 0; i <= weights.length; i++) {
//         totalWeight += weights[i];
//         return (totalWeight);
//         if (totalWeight <= maxWeight) {
//             return (`true`)
//         } else {
//             return (`false`)
//         }
//     }

// }
// console.log(isElevatorSafe(25, 125, 90, 32))

// const nums = [95, 76, 98, 70, 75]
// const maxWeight = 400;
// let total = 0
// for (const num of nums) {
//     total += num;

// }
// console.log(total)
// if (total <= maxWeight) {
//     console.log(`true`)
// } else {
//     console.log(`false`)
// }

// function greet(name=`tumi amer valoooooooooobasa` ) {
//     return `hello asmina ${name}`

// }
// console.log(greet(16*5))

function greet(name = 5 * 4) {
    return `hello asmina jano default params er number er task ${name}`

}
console.log(greet())

// function greet(name=`tumi amer valoooooooooobasa` ) {
//     return `hello asmina ${name}`

// }
// console.log(greet())

// function greet(name = 16 * 5) {
//     return `hello asmina, to inform u, js khub powerful language, parameter o argument er moddhe string o number o kono number er task korte paro ${name}`

// }
// console.log(greet())

