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


function sleep(name) {
    console.log(`${name} is sleeping`)
}
function awake(name) {
    console.log(`${name} is awaking`)
}
function walk(name, destination) {
    console.log(`${name} is walking to ${destination}`)
}
function eat(name, time) {
    console.log(`${name} is eating ${time}`)
}
function work(name) {
    console.log(`${name} is working`)
}

function jobHolderLifeCycle(name) {
    awake(name)
    eat(name, `breakfast`)
    walk(name, `office`)
    work(name)
    eat(name, `lunch`)
    walk(name, `home`)
    eat(name, `dinner`)
    sleep(name)

}
jobHolderLifeCycle(`Anas Mondal`)
console.log(`...................`)
jobHolderLifeCycle(`Asmina `)

