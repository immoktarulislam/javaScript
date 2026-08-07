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
