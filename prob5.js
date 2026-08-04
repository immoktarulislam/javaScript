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

