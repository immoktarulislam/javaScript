// function outer(a) {
//     a = `ami tomakke valobase,`;
//     let name = a + ` moktar`;
//     // return name
//     function inner(b, c) {
//         b * c;
//         console.log(name, `you r welcome`);

//     }
//     return inner
// }
// const result = outer();//ekhane argument kichu nebe na,
// result()

//next ex..
// function counter() {
//     let count = 0;
//     return function () {
//         count++
//         console.log(count)
//     };
// }
// const incre = counter()
// incre()

//logIn with closure function
// function logInTracker() {
//     let totalLogIn = 0;
//     return function () {
//         totalLogIn++;
//         console.log(`login: ${totalLogIn}`);
//     };
// }
// const login = logInTracker()
// login()

// // make a cart item and added price..
// function creatCart() {
//     let total = 0;
//     return function (price) {
//         total += price;
//         console.log(total)
//     }
// }
// const cart = creatCart(100);
// cart(50)
// cart(280)

//practice task 1..
// function createAdder(a) {
//     a = 20;
//     let nums = a + 0;
//     return function (num) {
//         nums += num;
//         console.log(nums)
//     };
// }
// const addNum = createAdder();
// addNum(5)

//practice task 1..
function bankAcc() {
    let balance = 0;
    return function (updated) {
        balance += updated;
        console.log(balance)
    };
}
let accout = bankAcc();
accout(` deposited ${500}`)
accout(` deposited ${500}`)
accout(` deposited ${500}`)
accout(` deposited ${500}`)