//Problem-01: Match Winner
function matchWinner(teamAGoals, teamBGoals) {
    if (typeof teamAGoals !== `number`) {
        return `Invalid`
    }
    if (typeof teamBGoals !== `number`) {
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

//Problem-02: Elevator Weight Safety Checker
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

//Problem-03: AI Token Cost Calculator
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

//Problem-04: Top Rated Restaurant Finder
function topRatedRestaurant(restaurants) {
    if (!Array.isArray(restaurants) || restaurants.length === 0) {
        return `Invalid`
    }
    let best = restaurants[0];
    for (let item of restaurants) {
        if (item.rating > best.rating) {
            best = item;
        }
    }
    return best.name.toUpperCase();
}

//Problem-05: Debugging Challenge - API Response Time Monitor
function averageResponseTime(times) {
    if (Array.isArray(times) === false) {
        return "Invalid";
    }
    if (times.length === 0) {
        return "Invalid";
    } for (let time of times)
        if (typeof time !== "number") {
            return "Invalid";
        }
    let total = 0;
    for (let i = 0; i < times.length; i++) {
        total = total + times[i];
    }
    return total / times.length;
}


