let student1 = {
    name: `Anas Mondal`,
    age: 4.5,
    class: `ukg`,
    schoolName: `BSA`,
    knownLan: [`bengali`, `english`, `hindi`]
}
// console.log(student1)
// console.log(student1.knownLan[2])
// console.log(typeof student1.knownLan[2])
// console.log(`anas er school name`, student1.schoolName)
// console.log(`o Language jane`, student1.knownLan)
student1.age = 5.2
// console.log(`present age`, student1.age)

//Bracket notation use: kono variable e data thakkle eta use hoe, 
// r object thakke data nele dot notation use hoe,
// forcefully use korle undefined dekhabe; ex-
// const UpdtAge = `age`;
// console.log(student1[UpdtAge])
// console.log(student1.age)


let student2 = {
    name: `AlpArslan`,
    age: 2.5,
    class: `lkg`,
    schoolName: `DLS`,
    knownLan: [`bengali`, `english`, `arabic`],
    LikeFood: {
        fish: `puti`,
        meat: `beef`,
        sweet: `rosogolla`,
        hobbey: `skating`
    }
}
// console.log(student2.name)
// console.log(`choto babu valobase`, student2.LikeFood.meat)

//realLife ex- access data
const mobile = {
    brand: `nokia`,
    model: `m1`,
    price: 55000,
    color: `black`,
    stock: 5,
}
// console.log(mobile.color)
// console.log(mobile.stock)

//new property add
mobile.ram = [`4gb`, `8gb`, `16gb`, `28gb`, `32gb`, `64gb`];
// console.log(mobile.ram)
// console.log(mobile)

//delete property
delete mobile.stock
// console.log(mobile)

//add property & object under object
// mobile.stock = {
//     black: 3,
//     white: 2,
//     whitePrice: { th32gb: 65000, th128gb: 95000 },
//     occianBlue: 4
// }
// console.log(mobile)

//with function
const user = {
    name: ` Rahim`,
    sayHello() {
        console.log(`Hello` + this.name)
    }
}
console.log(user.sayHello())











let student3 = {
    name: `Affan Mollah`,
    age: 6.5,
    class: `one`,
    schoolName: `BSA`,
    knownLan: [`bengali`, `english`]
}
let student4 = {
    name: `Tasnim Khatun`,
    age: 5.5,
    class: `ukg`,
    schoolName: `wb board`,
    knownLan: [`bengali`, `english`, `hindi`]
}
let student5 = {
    name: `Zaira Wasim`,
    age: 6,
    class: `2`,
    schoolName: `BSA`,
    knownLan: [`bengali`, `english`, `hindi`]
}


