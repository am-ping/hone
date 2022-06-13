/*
Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE- FRONT OF THE QUEUE)
   7      6      5      4      3            2      1
If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

Note: there will always be exactly one wolf in the array.

Examples
Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

Input: ["sheep", "sheep", "wolf"]
Output: "Pls go away and stop eating my sheep"
*/

function warnTheSheep(queue) {
    let i = queue.reverse().indexOf("wolf")
    return (i !== 0) ? `Oi! Sheep number ${i}! You are about to be eaten by a wolf!`
    : "Pls go away and stop eating my sheep"
}


/*
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000
*/

function past(h, m, s){
    return ( (h * 3600) + (m * 60) + s ) * 1000
}


/*
If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";
*/

function chromosomeCheck(sperm) {
    return (sperm.includes("XX")) ? "Congratulations! You're going to have a daughter."
    : "Congratulations! You're going to have a son."
}


/*
Complete the function that receives as input a string, and produces outputs according to the following table:

Input	                Output
"Jabroni"	        "Patron Tequila"
"School Counselor"	"Anything with Alcohol"
"Programmer"    	"Hipster Craft Beer"
"Bike Gang Member"	"Moonshine"
"Politician"    	"Your tax dollars"
"Rapper"	        "Cristal"
anything else	    "Beer"
*/

function getDrinkByProfession(param){
    param = param.toLowerCase()
    return (param === "jabroni") ? "Patron Tequila"
    : (param === "school counselor") ? "Anything with Alcohol"
    : (param === "programmer") ? "Hipster Craft Beer"
    : (param === "bike gang member") ? "Moonshine"
    : (param === "politician") ?	"Your tax dollars"
    : (param === "rapper") ?	"Cristal"
    : "Beer"
}


/*
Grasshopper - Function syntax debugging
A student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and fix them.

function main [verb, noun]
  return verb + noun
}
*/

let main = (verb, noun) => verb + noun


/*
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
*/

function stray(numbers) {
    numbers.sort((a,b) => a - b)
    return (numbers[0] === numbers[1]) ? numbers[numbers.length-1]
    : numbers[0]
}


/*
Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square
*/

function findNextSquare(sq) {
    let intCheck = Number.isInteger(Math.sqrt(sq))
    return (intCheck) ? (Math.sqrt(sq) + 1) ** 2 : -1
}


/*
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Examples
-1  =>  false
 0  =>  true
 3  =>  false
*/

let isSquare = function(n){
    return Math.sqrt(n) % 1 === 0
}


/*
Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.
Examples (input -> output)
'! !'                 -> '! !'
'123456789'           -> ''
'This looks5 grea8t!' -> 'This looks great!'
*/

function stringClean(s){
    return s.toString().replace(/\d/g,"") // the \d stands for digits
}

/*
Write a function that always returns 5. You can't use any of the following characters: 0123456789*+-/
*/

function unusualFive() {
    return "ookie".length
}


/*
Write a function that returns the total surface area and volume of a box as an array: [area, volume]
*/

function getSize(l, w, h) {
    let area = 2 * (l*w + l*h + w*h)
    let volume = l * w * h
    let arr = [area, volume]
    return arr
}

/*
Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

For Example:

[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]
So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.
*/

function sumOfMinimums(arr) {
    return arr.map(item => Math.min(...item)).reduce((a,b) => a + b)
}


/*
You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.
*/

function smallEnough(a, limit){
    return a.map(item => item <= limit).includes(false) ? false : true
}

/*
Kids under 14 old drink toddy.
Teens under 18 old drink coke.
Young under 21 old drink beer.
Adults 21 or more drink whisky.

Make a function that receive age, and return what they drink.
*/

function peopleWithAgeDrink(old) {
    return (old < 14) ? "drink toddy"
    : (old < 18) ? "drink coke"
    : (old < 21) ? "drink beer"
    : "drink whisky"
};

/*

*/