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
Complete the function which converts a binary number (given as a string) to a decimal number.
*/

let binToDec = (bin) => parseInt(bin, 2)

/*
In this kata you will create a function that takes in a list and returns a list with the reverse order.
*/

let reverseList = (list) => list.reverse()

/*
Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.
*/

let isPalindrome = (line) => (line === line.split("").reverse().join(""))

/*
Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.
*/

let take = (arr, n) => arr.slice(0, n)

/*
You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

Examples (input -> output)
[1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
*/

function mergeArrays(arr1, arr2) {
    arr1.map(item => arr2.push(item))
    return arr2.sort((a,b) => a - b).filter((item, i) => item !== arr2[i-1])
}

/*
Your task is to write function factorial.
*/

function factorial(n){
    let arr = []
    if (n === 0) return 1
    for (let i = 1; i <= n; i++) {
      arr.push(i)
    }
    return arr.reduce((a,b)=> a * b, 1)
}

/*
Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi!!"
*/

const remove = string => string.replace(/!$/, '');

/*
Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.
*/

let angle = (n) => (n - 2) * 180

/*
Find the mean (average) of a list of numbers in an array.
*/

let findAverage = (nums) => nums.reduce((a,b) => a + b) / nums.length

/*
Your goal is to return multiplication table for number that is always an integer from 1 to 10.
For example, a multiplication table (string) for number == 5 looks like below:
1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
10 * 5 = 50
*/

function multiTable(number) {
    let table = '';
    
    for(let i = 1; i <= 10; i++) {
      table += `${i} * ${number} = ${i * number}${i < 10 ? '\n' : ''}`; 
    }
    return table;
}

/*
Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

The geese are any strings in the following array, which is pre-populated in your solution:
["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

For example, if this array were passed as an argument:
["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

Your function would return the following array:
["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
*/

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(b => !geese.includes(b));
};

/*
Your task is to find the first element of an array that is not consecutive.By not consecutive we mean not exactly 1 larger than the previous element of the array.
E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.
If the whole array is consecutive then return null.
The array will always have at least 2 elements and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!
*/

function firstNonConsecutive (arr) {
    for (let i = 0; i < arr.length - 1; ++i) {
      if (arr[i] + 1 !== arr[i + 1]) {
        return arr[i + 1]
      }
    }
    return null
}

/*
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
*/

function sumDigits(number) {
    return number.toString().replace("-","").split("").reduce((a,b) => +a + +b, 0)
}

/*
Write a function that gets you from 1 to n (inclusive) in an array
*/

function preFizz(n) {
    let arr = []
    for (let i = 1; i <= n; i++) {
      arr.push(i)
    }
    return arr
}


/*
Input: Array of elements
["h","o","l","a"]

Output: String with comma delimited elements of the array in th same order.
"h,o,l,a"
*/

let printArray = (array) => array.join(",")


/*
Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.
*/

let include = (arr, item) => arr.includes(item)

/*
Remove n exclamation marks in the sentence from left to right. n is positive integer.

Examples
remove("Hi!",1) === "Hi"
remove("Hi!",100) === "Hi"
remove("Hi!!!",1) === "Hi!!"
*/

function remove(s,n){
    for (let i = 1; i <= n; i++) {
      s = s.replace("!","")
    }
    return s
}

/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
*/

let fakeBin = (x) => x.replace(/[0-4]/g,"0").replace(/[5-9]/g,"1")

/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.
*/

function capitalize(s){
    let even = s.split("").map((item,i)=> (i % 2 === 0) ? item.toUpperCase() : item).join("")
    let odd = s.split("").map((item,i)=> (i % 2 !== 0) ? item.toUpperCase() : item).join('')
    return [even, odd]
}

/*
Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
*/

let removeUrlAnchor = (url) => url.split("#")[0]

/*
Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to print out an expression (like 28x^7). "^1" should not be truncated when exponent = 2.

For example:
derive(7, 8) --> this should output "56x^7" 
derive(5, 9) --> this should output "45x^8"
*/

let derive = (coefficient,exponent) => `${coefficient * exponent}x^${exponent-1}`


/*
If　a = 1, b = 2, c = 3 ... z = 26
Then l + o + v + e = 54
The input will always be in lowercase and never be empty.
*/

function wordsToMarks(string){
    let arr = []
    for (let i = 0; i < string.length; i++) {
      arr.push(string.charCodeAt(i))
    }
    return arr.map(item => +item - 96).reduce((a,b)=> a+b)
}

/*
Multiply each parameter by itself.
Add them all together.
Take the square root of the result.
Divide by two.
Example
predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
*/

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    let arr = [age1, age2, age3, age4, age5, age6, age7, age8]
    return Math.floor(Math.sqrt(arr.map(a => a * a).reduce((b,c) => b + c)) / 2)
}

/*
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
*/

const GetSum = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
}

/*
Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'

Examples (Input -> Output)
15  -> '101.25 Chinese Yuan'
465 -> '3138.75 Chinese Yuan'
*/

let usdcny = (usd) => `${(usd*6.75).toFixed(2)} Chinese Yuan`

/*
Write a simple regex to validate a username. Allowed characters are:

lowercase letters,
numbers,
underscore
Length should be between 4 and 16 characters (both included).
*/

function validateUsr(username) {
    return /^[0-9a-z_]{4,16}$/.test(username)
}


/*
Your task is to write function findSum.

Upto and including n, this function will return the sum of all multiples of 3 and 5.

For example:

findSum(5) should return 8 (3 + 5)

findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)
*/

function findSum(n) {
    let sum = 0
    for (let i = 3; i <= n; i++) {
      if (i % 3 === 0 || i % 5 === 0) sum += i
    }
    return sum
}


/*
Scenario
Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

Task
Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.
Notes
Array size is at least 1.
All numbers will be positive.

Input >> Output Examples
rowWeights([13, 27, 49])  ==>  return (62, 27)
rowWeights([80])  ==>  return (80, 0)
*/

function rowWeights(array){
    let team1 = 0
    let team2 = 0
    array.forEach((item,i) => (i % 2 === 0) ? team1 += item : team2 += item)
    return [team1, team2]
}
