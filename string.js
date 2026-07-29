//....string.split().....//
// let str = `i learn javaScript`
// console.log(str.split())
// console.log(str.split(``))
// console.log(str.split(` `))
// console.log(str.split(`, `))

// join method
// let frnName = [`abir`, `sabir`, `jabir`, `habir`, `babir`, `mabir`]

// console.log(frnName.join())
// console.log(frnName.join(`|`))
// console.log(frnName.join(`--`))

//...reverse string no. 1 way....//
// let statement = `i learn javaScript`;//tpircSavaj nrael i
// let rev = ``;
// for (i = 0; i <= statement.length; i++) {
//     const letter = statement[i];
//     rev = letter + rev;
// } console.log(rev)

//...reverse string no. 2 way....//
// let str = `moktarul`;//luratkom
// let rev = ``;
// for (i = str.length - 1; i >= 0; i--) {
//     let letter = str[i];
//     rev = rev + letter;
// }
// console.log(rev)

// //... reverse back to correct spell...//
// let str2 = rev;
// let rev2 = ``;
// for (i = str2.length - 1; i >= 0; i--) {
//     let letter = str2[i];
//     rev2 = rev2 + letter;
// }
// console.log(rev2)

//...check how many word in stentence....//

//without function//
// let str = `i love coding`
// let strSplitArr = str.split(` `)
// console.log(strSplitArr.length)

//with function//
// function countStr(str) {
//     let strSplitArr = str.split(` `)
//     return strSplitArr.length
// }
// console.log(countStr(`i moktarul islam, i `))
// console.log(countStr(`i moktarul islam, i love js`))
// console.log(countStr(`i moktarul islam, i will hard work, to do something`))

//...palindrom word...//

//....no.1 way
// let word = `mom`;
// let rev = ``;
// for (i = word.length - 1; i >= 0; i--) {
//     let letter = word[i];
//     rev = rev + letter;
// }
// console.log(rev)
// if (word === rev) {
//     console.log(`ekdom perfect`)
// }
// else { console.log(`na word ek na`) }


//...no.2 way
// let alpha = `mom`;
// let revered = alpha.split(``).reverse().join(``);
// console.log(revered)
// if (alpha === revered) {
//     console.log(`ha eta palindrom `)
// }
// else { console.log(`sorry, eta palindrom word na`) }


///....check largest number....///
let nums = [501, 201, 301, 3001]
let biggest = nums[0];
for (i = 0; i < nums.length; i++) {
    let currentValue = nums[i];
    if (currentValue > biggest) {
        biggest = currentValue
    }
    console.log(`curreValue`, currentValue)//eta optional
}
console.log(`array er mann gule holo`, nums)
console.log(`sobcea boro mann`, biggest) 