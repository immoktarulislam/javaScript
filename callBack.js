// function greet(name) {
//     console.log(`hello ${name}`);
// }
// function processUser(callback) {
//     const user = `moktar`;
//     callback(user);
// }
// processUser(greet)

//ex.........2
function add(a, b, callback) {
    const result = a + b;
    callback(result)
}
function showResult(value) {
    console.log(`result: ${value}`);
}
add(10, 20, showResult)