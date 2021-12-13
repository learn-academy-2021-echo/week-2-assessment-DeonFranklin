// // // ASSESSMENT 2: Coding Conceptual Questions

const { statement } = require("@babel/template")

// // // Examine the following examples.

// // // First, predict the outcome based on your understanding of the code.
// // // Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// // // --------------------1) What will this log?

var cohort = "Echo 2021"
 console.log(cohort.split(""))

a) Your answer: This will log the string with each spaced out seperated by comma.
b) Verify and explain: [
  'E', 'c', 'h',
  'o', ' ', '2',
  '0', '2', '1'
]
 The split method takes a given string and splits it into a new array without altering the original array.

// // // --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
  return `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

 a) Your answer: The console will log undefined because the variable name is never set and I feel there should be a return statement for the function to run.
-->undefined
 b) Verify and explain: The console logged
-->undefined
When I attempted to run the code with the return statement, the console returned
--> Hello, LEARN Student!


// // // --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
console.log(multBy2)

a) Your answer: The console will log
--> [ 8, 10, 12, 14, 16 ]
b) Verify and explain: The .map will map through each value of the array and multiply each value by 2.


// // // --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
console.log(onlyOdds)

a) Your answer: The console will log 
-->[11, 13, 15]
b) Verify and explain: The filter is set to determine which numbers are not divisible by 2.


 // --------------------5) What will this log?

 var myCodingSkills = {
   languages: ["JavaScript", "Ruby"],
   frameworks: ["React", "Ruby on Rails"],
   databases: "PostgreSQL",
   versionControl: "GitHub"
 }
 console.log(myCodingSkills.languages[0])

 a) Your answer: This will log
  -->Javascript
 b) Verify and explain: Because "Javascript" is in the zeroth index of languages under myCodingSkills.


// // // --------------------STRETCH: What will this log?

 class Learn {
   constructor(name){
     this.student = name,
     this.cohort = "Delta",
     this.year = 2021
   }
 }
 var learnStudent = new Learn("George")
 console.log(learnStudent)

 a) Your answer: The console should log the students name, cohort and year. 
 --> George, Delta, 2021
 b) Verify and explain:
 -->Learn { student: 'George', cohort: 'Delta', year: 2021 }
 I was unsure if the console would log the name of each field also.