//..ARRAY -- HOW TO USE LENTH-PUSH-POP-SHIFT-UNSHIFT -- ...//
// let salary = [45000, 35000, 50000, 60000, 70000];
// // let totalNum = salary.length;
// // console.log(totalNum);
// // salary.push(80000);
// // salary.pop();
// // salary.shift();
// // console.log(salary);
// salary.unshift(30000);
// console.log(salary);

//..HOW TO CONCAT & SLICE IN ARRAY..//
// let abid = [2, 6, 9]
// let sabid = [12, 13, 14]
// let concatArray = abid.concat(sabid);
// let arrSlice = concatArray.slice(0, 3)
// console.log(arrSlice);

//..PRINT ARRAY & FOR OF LOOP..//
// let marks = [45, 65, 12, 14, 13, 15, 18, 16, 36];
// // for (let mark of marks) { console.log(mark) }
// console.log(marks.length)

//...ADD NUMBER WITH LOOP PROCESS...//
// let presentValue = 0;
// let afterResult = 0;
// while (presentValue <= 10) {
//     // console.log(num);
//     afterResult = presentValue + afterResult;
//     console.log(afterResult);
//     presentValue++;
// }

//..check debug with function..//
function add(a, b) {
    const sum = a + b;
    return sum;
}
console.log(`start`);
const result = add(10, 20);
console.log(result);


