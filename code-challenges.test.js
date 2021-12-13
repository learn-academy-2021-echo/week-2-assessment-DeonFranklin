// ASSESSMENT 2: Coding Practical Questions with Jest

const { it } = require("jest-circus")
const { test } = require("picomatch")

// const { expect } = require("@jest/globals")
// const { describe, it } = require("jest-circus")

// const { string } = require("prop-types")

// const { statement } = require("@babel/template")
// const { array } = require("yargs")

// const { expect } = require("@jest/globals")
// const { it } = require("jest-circus")
// const { describe } = require("yargs")

// const { array } = require("yargs");

// const { test } = require("picomatch")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

First I have to set up my test.
describe, 
    it,     
        expect
        return
Create a function that will determine if a given value is divisible by three


describe("divByThree",() => {
    var num1 = 15
    // Expected output: "15 is divisible by three"
    var num2 = 0
    // Expected output: "0 is divisible by three"
    var num3 = -7
    // Expected output: "-7 is not divisible by three"
    it ("determines whether value is divisible by 3 and returns results.", () => {
        expect (divByThree(num1)).toEqual("15 is divisible by three");
        expect (divByThree(num2)).toEqual("0 is divisible by three");
        expect (divByThree(num3)).toEqual("-7 is not divisible by three");
    })
})


// b) Create the function that makes the test pass.
const divByThree = (value) => {
    if(value % 3 === 0){
        return `${value} is divisible by three`
    } else {
        return `${value} is not divisible by three`;
    }
}

// // const divideByThree  
// var divideByThree = [15, 0, -7].map(value => value % 3 === 0)
// console.log((divideByThree[1]), "is divisible by 3.")

// expect\\\ (divByThree(`${num}` % 3 === 0)).toEqual(`${num} is divisible by three.`);
    // expect (divByThree(`${num}` % 3 !== 0)).toEqual(`${num} is not divisible by three.`);

// // --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// // a) Create a test with expect statements for each of the variables provided.
// // capitalize the first letter of each string
create test
plug in variables
create function

describe("capLetter", ()=> {
    it("returns an array with all the words capitalized", ()=>{
    expect(capLetter(randomNouns1)).toEqual(("Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew")
    expect(capLetter(randomNouns2)).toEqual("Temperature", "Database", "Chopsticks", "Mango", "Deduction");
    })
})


const capLetter = (array) => {
    var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
    // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
    var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
    // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
  var capArray = []
for(i = 1; i < array.length; i++){
      capArray.push(capLetter.charAt(0).toUpperCase(),capArray.slice(1));
  }
  return capArray.join(' ');
}
console.log(capLetter(randomNouns1))

I worked on this until I burnt myself out. I feel if I had more time to figure this out I could get it. I am struggling with my function.

// // --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// // a) Create a test with expect statements for each of the variables provided.


create a function ()=>{}
the argument will take a string and identify the first present vowel



describe("firstVowel", () =>{
    var vowelTester1 = "learn"
    // // Expected output: 1
    var vowelTester2 = "academy"
    // // Expected output: 0
    var vowelTester3 = "challenges"
    // // Expected output: 2
    it("takes in a string and identifies the index of the first vowel", ()=>{
        expect(firstVowel(vowelTester1)).toEqual(1);
        expect(firstVowel(vowelTester2)).toEqual(0);
        expect(firstVowel(vowelTester3)).toEqual(2);
    })
})
b) Create the function that makes the test pass.

create function that takes in string
set the variables
then set the array
create for loop 
return index

const firstVowel = (string) => {
    let vowel = ["a","e","i","o","u"]
    let array = string.split("")
    for(let i=0; i < array.length; i++){
        if(vowel.includes(array[i])) {
            return i  
        }
    }
}