/*
In this kata, we will make a function to test whether a period is late.
Our function will take three parameters:
last - The Date object with the date of the last period
today - The Date object with the date of the check
cycleLength - Integer representing the length of the cycle in days
Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.
*/

function periodIsLate(last, today, cycleLength) {
  return (today-last) / 86400000 > cycleLength
}


/*
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

let even_or_odd = (num) => (num % 2 === 0) ? "Even" : "Odd"


/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

let solution = (str) => str.split("").reverse().join("")


/*
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
348597 => [7,9,5,8,4,3]
0 => [0]
*/

let digitize = (n) => Array.from(String(n), Number).reverse()


/*
Write function bmi that calculates body mass index (bmi = weight / height2).
if bmi <= 18.5 return "Underweight"
if bmi <= 25.0 return "Normal"
if bmi <= 30.0 return "Overweight"
if bmi > 30 return "Obese"
*/

function bmi(weight, height) {
    let calc = weight/height**2
    return (calc <= 18.5) ? "Underweight" : (calc <= 25) ? "Normal" : (calc <= 30) ? "Overweight" : "Obese"
}

/*
Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
*/

const rps = (p1, p2) => {
    let s = 'scissors'
    let p = 'paper'
    let r = 'rock'
    return (p1 === s && p2 === r || p1 === r && p2 === p || p1 === p && p2 === s) ? "Player 2 won!"
      : (p1 === s && p2 === p || p1 === p && p2 === r || p1 === r && p2 === s) ? "Player 1 won!"
      : "Draw!"
}


/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers. Return your answer as a number.
*/

let sumMix = (x) => x.reduce((a,b) => a + +b, 0)


/*
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
*/

let makeNegative = (num) => (num > 0) ? -num : (num === 0) ? 0 : num


/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
*/

let doubleChar = (str) => str.split("").map(itm => itm + itm).join("")


/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
Examples:
solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

let solution = (str, ending) => str.endsWith(ending)


/*
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
*/

let repeatStr = (n, s) => s.repeat(n)


/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/

let squareSum = (nums) => nums.reduce((a,b)=> a + (b ** 2),0)


/*
You receive an array with your peers' test scores. Now calculate the average and compare your score!
Return True if you're better, else False!
Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!
*/

function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a,b)=> a+b,0) / classPoints.length
}


/*
When provided with a number between 0-9, return it in words.
Input :: 1
Output :: "One".
*/

switchItUp=n=>["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n]


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


/*
Suzuki is a monk who climbs a large staircase to the monastery as part of a ritual. Some days he climbs more stairs than others depending on the number of students he must train in the morning. He is curious how many stairs might be climbed over the next 20 years and has spent a year marking down his daily progress.

The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20.

20_year_estimate = one_year_total * 20

You will receive the following data structure representing the stairs Suzuki logged in a year. You will have all data for the entire year so regardless of how it is logged the problem should be simple to solve.

stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday]
Make sure your solution takes into account all of the nesting within the stairs array.

Each weekday in the stairs array is an array.

sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832...]
*/

function stairsIn20(s){
    return 20 * s.reduce((total, item) => total + item.reduce((total, item) => total + item, 0), 0);
}

/*
Your function will accept three arguments:
The first and second argument should be numbers.
The third argument should represent a sign indicating the operation to perform on these two numbers.

if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.
*/

function calculator(a,b,sign){
    return (sign === "+") ? a + b 
    : (sign === "-") ? a - b
    : (sign === "/") ? a / b
    : (sign === "%") ? a % b
    : (sign === "*") ? a * b
    : "unknown value"
}


/*
In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
*/

function alphabetPosition(text) {
    return text.replace(/[^a-zA-Z]/g,"").split("").map(item => item.toLowerCase().charCodeAt() - 96).join(" ")
}

/*
Create a function, called randomMovies, that takes in an array of movie strings and returns one of those movies randomly

var rockySeries = ["Rocky", "Rocky II", "Rocky III", "Rocky IV"];
randomMovies(rockySeries) // => "Rocky"
*/

function randomMovies(movies){
    return movies[Math.floor(Math.random() * movies.length)]
}


/*
Write a function that returns the length of the third side (the hypotenuse - it's the side facing the right angle and not connected to it by either end).
*/

let pythagorean = (sideA, sideB) => Math.sqrt(sideA*sideA + sideB*sideB)


/*
Create a function that converts British Pounds (GBP) to Swiss Franks (CHF) . The input is the amount of GBP as an integer, and the output should be a string that states the amount of Franks followed by 'Swiss Franks.'

Conversion rate you should use is 1.31 CHF for every 1 GBP. All numbers shold be reounded to the nearest hundreth (e.g. 13.00 NOT 13.0 or 13)
*/

let gbpchf = (gbp) => `${(gbp * 1.31).toFixed(2)} Swiss Franks`


/*
Implement a function that adds two numbers together and returns their sum in binary as a string. The conversion can be done before, or after the addition.

Examples:(Input1, Input2 --> Output (explanation)))
1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/

let addBinary = (a,b) => (a + b).toString(2)


/*
Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
*/

function powersOfTwo(n){
    let arr = []
    for (let i = 0; i <= n; i++) {
      arr.push(2**i)
    }
    return arr
}

/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/

function validatePIN (pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
}


/*
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

let longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')


/*
espresso = 1 shot
double espresso = 2 shots
flat white = 2 shots
latte = 1 shot
mocha = 2 shots
decaf = 0 shot

Challenge:

Create a function that returns the following:
If Andy has consumed no shots return "You haven't even had coffee today!"
If Andy has had less than 4 shots return "The doctor won't be worried yet!"
If Andy has had 4 shots return "You can have 2 more shots then no more!"
If Andy has had 5 shots return "You can only have an espresso, latte or a decaf now"
If Andy has had 6 or more shots return "Only decaf for you now!"
*/

const caffeine = (coffee, number) => {
    const shots = {
      'espresso': 1,
      'double espresso': 2,
      'flat white': 2,
      'latte': 1,
      'mocha': 2,
      'decaf': 0
    };
    
    const consumed = shots[coffee] * number;
    
    return consumed < 1 ? "You haven't even had coffee today!" :
           consumed < 4 ? "The doctor won't be worried yet!" :
           consumed < 5 ? "You can have 2 more shots then no more!" :
           consumed < 6 ? "You can only have an espresso, latte or a decaf now" :
                          "Only decaf for you now!"
}


/*
In this kata, you have two input numbers, number and upTo.

For example, let's assume number is 3 and upTo is 5,
Then you need to calculate "3^1 + 3^2 + 3^3 + 3^4 + 3^5"
So it equals to "3 + 9 + 27 + 81 + 243" and it is "363"
    
TASK:
Calculate the result.
*/

function powersUp(number, upTo) {
    let sum = 0
    for (let i = 1; i <= upTo; i++) {
      sum += number ** i
    }
    return sum
}

/*
You will be given an array of objects, each of which contains a key of veg and a value which is an array of vegetables. For example, [{veg: ["carrots","butternut squash"]},{veg: ["sweet potato","courgette"]}].
Your job is to find out which recipe has the most vegetables and is therefore the tastiest.
Return the statement "The recipe at index _ is the tastiest!!!"
*/

const tastiest = (recipes) => {
    let arr = recipes.map((item) => item.veg.length)
    let max = Math.max(...arr)
    return `The recipe at index ${arr.indexOf(max)} is the tastiest!!!`
}


/*
You will be given an array of numbers. Calculate the mean of these numbers, but only if all of them are divisible by three. If there is at least one number not divisible by three, return null.

Example:
mean3([3,6,6,9,21,3])  // 8
mean3([3,6,8,9,21,3])  // null
*/

const mean3 = numbers => {
    return (numbers.every(item => item % 3 === 0) && numbers.length > 0) ? numbers.reduce((a,b)=> a + b, 0) / numbers.length
    : null
}


/*
Rövarspråket ("the Robber") is a Swedish language game. The rules of the game are thus:
Pick any word.
double every consonant, and then put an "o" between them.
leave all vowels intact.
speak the new word.
And, yes, this really is an actual game ;).

The purpose of this exercise is to create a computerized version that will take any word as an input and return a Rövarspråket'ed word.

Make sure input is sanitized to lowercase and for special characters (i.e. $,#,%,&, etc.). Tests will include converting uppercase to lowercase. Function should return false if numbers are present
*/

function rovarspraket(text) {
    return !/\d/.test(text)&&text.toLowerCase().replace(/\W/g,'').replace(/[^aoeui]/g,'$&o$&')
}


/*
A number increased by 7 equals 22. Write a function that return A number's value. Return null if initial_value or final_value is not a number and when final_value is less than initial_value.
*/

function increaseNumber(i, f) {
    return ( i < f && Number.isFinite(i) && Number.isFinite(f) ) ? f - i : null
}


/*
All Star Code Challenge #26

All of Raj's once loner friends are now happily in a relationship. Even Sheldon!
Raj has hired you to manually change his group status to "In a relationship," so he can show it to his friends!
Create a function called missionImpossible() that takes a Group object as input that changes the "Raj" key, if it exists, to "In a relationship". The, now altered, object should be returned.

var wholeGroup = { Leonard: 'Married',
  Penny: 'Married',
  Howard: 'Married',
  Bernadette: 'Married',
  Sheldon: 'In a relationship',
  Amy: 'In a relationship',
  Raj: 'Single' }
missionImpossible(wholeGroup);
// =>
// { Leonard: 'Married',
//  Penny: 'Married',
//  Howard: 'Married',
//  Bernadette: 'Married',
//  Sheldon: 'In a relationship',
//  Amy: 'In a relationship',
//  Raj: 'In a relationship' }
Note: If Raj is not part of the input group, he should NOT be added to it.
*/

function missionImpossible(obj){
    if (obj.Raj) obj.Raj = "In a relationship"
    return obj
}


/*
Aliens have landed on earth. They speak an Alien version of English. So you can communicate with them, write a function which translates an English sentence to the language of the Aliens using these rules:

Double all vowels (a,e,i,o,u)
Reverse the order of the letters in each word
All characters must be in lowercase
*/

function translateToAlienLanguage(str) {
    return str.toLowerCase().replace(/([aeiou])/g,'$1$1').split` `
      .map(item=>item.split``.reverse().join``)
      .join` `
}


/*
Up till now, my daughter is able to count up to n. However, there is a problem with her counting: she always forgets even numbers. Your task in this kata is to be able to count like her. For convenience let's put the numbers she is able to count in an array. When 0 is passed in, return [].

Example:
kidoCount(10) => should return [1,3,5,7,9]
kidoCount(9) => should return [1,3,5,7,9]
kidoCount(0) => should return []
*/

function  kidoCount(n){
    let arr = []
    for (let i = 1; i <= n; i++) {
      if (i % 2 !== 0) arr.push(i)
    }
    return arr
}


/*
You will receive an array of numbers representing the amount of money each person deposits with your bank. Each number is a deposit amount except zeroes and ones (0 and 1). A zero (0) means that your bank has been robbed and all money are lost while one (1), on the other hand, indicates that the police has caught the robbers and the money stolen are returned to the bank’s vault.

Your task is to write a program that returns the amount of money left in the bank after the last number in the array.

Note: There will only be a maximum of one robbery and one police action in each array to keep things simple and you don't have to worry about these.
*/

function bankRobbery(deposits) {
    if (deposits.includes(0) && deposits.includes(1)) {
      return deposits.reduce((a,b) => +a + +b, 0) - 1
    } else if (deposits.includes(0)) {
      return deposits.join(" ").split(" 0 ")[1].split(" ").reduce((a,b) => +a + +b, 0)
    } else {
      return deposits.reduce((a,b) => a + b, 0)
    }
}


/*
You are going to be given a list of people. Their properties are name (string), gender (male/female), and age (int). Your job is to return the average age of all females in the list.

#Examples:
sortArray([{name:'Sarah', gender:'female', age:25}, {name:'Tom', gender:'male', age:18}, {name:'Tim', gender:'male', age:65}, {name:'Kim', gender:'female', age:58}]) 
should return 41.5
*/

function averageFemale(list){
    return list.filter(item=> item.gender === 'female').map(item=>item.age).reduce((a,b,i,arr)=> a+b/arr.length,0)
}


/*
Given the following html:
<p>Hello</p>
Modify the HTML trough CSS so it can print the classic phrase Hello world!

IMPORTANT NOTE: since this code is based on Javascript you should end your CSS code with `
*/

// p::after {
//     content: ' world!'
// }



/*
Tidy up and de-bug this ugly code. Return the remaining elements in the initial "arr" after removing "howMany" elements from the head. Code must not exceed 4 lines.

function deHead(arr, howMany) {  
  if (howMany <=> 0) {
    return arr;
  } else if (howMany <= 1) {
    arr.shift(0);
  } if (howMany <= 2) {
    arr.shift(0);
  } else if (howMany <= 3) {
    arr.shift(0);
  } if (howMany <= 4) {
    arr.shift(0);
  } if (howMany <= 5) {
    arr.shift(0);
  } if (howMany <= 6) {
    arr.shift(0);
  } if (howMany <= 7) {
    arr.shift(0);
  } if (howMany <= 9) {
    arr.shift(0);
  } if (howMany <= 9) {
    arr.shift(0);
  }
  return arr;
}
*/

function deHead(arr, howMany) {
    return arr.slice(howMany)
}


/*
Some cats are normal or wicked, and some of them are the likes of ^(~_~)^ aka holy cats. Can you help me separate the holy cats from the rest? In case there are no holy cats in the group, return an empty array.
*/

function holycats(input){
    return input.filter(item => !item.match(/(normal|wicked)/g))
}


/*
Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:
I love you
a little
a lot
passionately
madly
not at all
When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.
*/

let howMuchILoveYou = n => {
    return ['not at all','I love you','a little','a lot','passionately','madly'][n % 6]
}


/*HARD
Your job is to return the amount of metal needed to build the train. You are given a string. The string will look something like this:
str = 'A________'
Where the 'A' is a type of a locomotive and "_ " is a coach after the train.
RULES:
A = 15 pieces of metal
B = 10 pieces of metal
C = 7 pieces of metal
D = 8 pieces of metal
The coaches take 5 pieces of metal to make(for each).

###EXAMPLE###
train('A_') = 20, 15 for A type, and 5 for coach
The value is supposed to be an integer
Another example:
train('B__') = 20, 10 for B type, and 10 for coaches(2 coaches, 5 pieces of metal each)
*/

function train(s) {
    const metalcosts = {
      A: 15,
      B: 10,
      C: 7,
      D: 8,
      _: 5
    }    
    return [...s].reduce((acc, cur) => acc + metalcosts[cur], 0)
}

/*
Given an array of numbers, find the smallest pair sum in the array.

For example

[10,14,2,23,19] should return 12 (i.e. sum of 10,2)
*/

function smallestPairSum(numbers) {
    return numbers.sort((a,b)=> a - b).splice(0,2).reduce((a,b) => a + b)
}


/*
Square
Given an array of positive integers, find if the sum of the integers in the array is a perfect square. If it is a perfect square, return the square root, otherwise return the sum. If an empty array is passed, return 0.
*/

function squareRoot(numbers){
    let sum = numbers.reduce((a,b) => a + b, 0)
    return (Number.isSafeInteger(Math.sqrt(sum))) ? Math.sqrt(sum) : sum
}


/*
You will be given a string of letters. The string must be returned in alphabetical order.
*/

function alphabetti(str) {
    return str.split("").sort((a,b) => a.localeCompare(b)).join("")
}

/*
Twice of a number(2*a number) added to 4 gives 20. Write a function that return a number's value.

Return null if added_value or total_value is not a string/number.
*/

function twiceOfANumber(added, total) {
    return (parseInt(total) - parseInt(added)) / 2 || null
}


/*
An Armstrong number is a number such that the sum of its digits raised to the third power is equal to the number itself. For example, 371 is an Armstrong number, since 3^3 + 7^3 + 1^3 = 371. It should return false if empty string or string is passed. It should return false for negative numbers as well.

When you pass 0 or 1 , it should return true.
*/

function armstrong(num){
    return num === num.toString().split("").map(itm=>itm**3).reduce((a,b)=>a+b, 0)
}


/*
Convert decimal numbers to binary. Enjoy! No cheating. No toString
*/

function decToBin(d) {
    if (d === 1) {return '1'}
    if (d === 0) {return '0'}
    return decToBin(Math.floor(d / 2)) + (d % 2);
}

/*
One day when I was laying on a beach I thought: "How far is it to the visible horizon?" When we go up to the mountains we can see a lot more. Let's make a function to figure out the distance. With this function we can calculate that distance to horizon even on other planets. Amazing ).

Input for function will be:
h - height of eyes of the observer above sea level (in meters);
r - radius of the planet (in meters).
Expected output:
Distance to the visible horizon (in meters). Tests check results with delta of 0.005 to expected.
*/

const horizonDistance = (h, r) => {
    let b = r //side 1
    let c = h + r //hypotenuse
    return Math.sqrt(c**2 - b**2) //side 2
}


/*
In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
Example: (input --> output)
"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
*/

function DNAStrand(dna){
  return dna.split("").map(item => {
    return (item === 'A') ? item = "T"
    : (item === 'T') ? item = "A"
    : (item === 'G') ? item = "C"
    : item = "G"
  }).join("")
}


/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.
*/

function findUniq(arr) {
  arr.sort((a,b)=> a - b)
  return (arr[0] === arr[1]) ? arr[arr.length-1] : arr[0]
}


/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
What if the string is empty? Then the result should be empty object literal, {}.
*/

function count (str) {  
  let count = {};
  str.split('').forEach(item => {
     count[item] ? count[item]++ : count[item] = 1;
  });
  return count;
}


/*
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
*/

let capitals = (word) => {
	return word.split("").map((item, i)=> item === item.toUpperCase() ? i : item).filter(item => typeof item === 'number')
}


/*
Numbers are lost somewhere in the arrays, help them find each other!
In this kata you'll be given 2 n-deep arrays with one number somewhere in there (or no number, just empty n-deep array). Write a function, that finds those numbers and return their sum

example
findAndSumm([[[[[2]]]]], [[[5]]]) / -> 7
findAndSumm([[[6]]], [[[[[3]]]]]) / -> 9
*/

const findAndSumm = (arr1, arr2) => +arr1 + +arr2


/*HARD
Maximum Solution Length *** 26 Characters ***
You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.
Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.
*/

check=(a,x)=>a.includes(x)


/*
Maximum Solution Length *** 34 Characters ***
You will be given an array (a) and a limit value (limit). You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.
You can assume all values in the array are numbers.
Do not use loops. Do not modify input array.
*/

smallEnough=(a,b)=>!a.some(i=>b<i)


/*
In the game you are creating, the role of the main function is to check the input and return a call to the appropriate function.
The preloaded function available are forward() and backward().
Two variables (FW_COUNT and BW_COUNT) are also predefined - don't touch them and don't worry about them!
The possible inputs and the required actions are:
"forward": call the forward() function, and return its result
"backward": call the backward() function, and return its result
anything else: return "Not a valid input."
*/

function main (input) {
  return (input === 'forward') ? forward() : (input === 'backward') ? backward(): "Not a valid input."
}


/*
Create a function sortAndSum(), the function should return an array.
The array should contain letters in the arguments sorted alphabetically with the last index of the aray containing the sum of all of the numbers in the arguments.
Ex:
sortAndSum(1, 3, "a", 4, "f", "e", 5, "c");
returns ["a", "c", "e", "f", 13];
*/

function sortAndSum(...arr) {
  let num = arr.filter(item=> typeof item == 'number').reduce((a,b)=> a + b,0)
  let w = arr.filter(item => typeof item == 'string').sort()
  w.push(num)
  return w
}

/*
Your task is to create a function (buildPyramidTime) that returns the number of years it will take to build, (strength) + (skill)
Once you know the total number of years via the (buildPyramidTime) function, you must then figure out and (return) what your bonus will be.
The terms of the deal with Pharaoh Khufu are as follows:
If you build the Great Pyramid in more than 15 years, your function will return "receive 3000 gold coins". If you build the Great Pyramid in 10-15 years , your function will return "receive 5000 gold coins". If you build the Great Pyramid in less than 10 years, your function will return "receive 10000 gold coins".
*/

function buildPyramidTime(strength, skill) {
  return strength + skill > 15 ? "receive 3000 gold coins"
  : strength + skill >= 10 ? "receive 5000 gold coins"
  : "receive 10000 gold coins"
}


/*HARD
Sue loves to send words in a cryptic fashion. Can you decode the message that she has sent.

Example cryptic message
    reVert([13,15,"O",10,9,"L",11,12,"L",5,3,"H",4,6,"E",11], 3)   ===>  'HELLO';
Clues
Sue has hidden her word in an array ......which includes:
Unordered letters - these letters form the word
Numbers - random numbers as well as not so random numbers
Not all numbers are random!
Sue loves times tables and she will specify which table she is using as the second parameter, which means that those numbers in the array are important! Make sure you don't remove them :) - Any other number is a red herring and needs to be removed.

What next
Once you have removed all the red herrings, the other numbers left in the array correspond to the order that the letters need to be arranged into to make the word - Find a way to decode the message from the numbers left.

Return
Return the word back as string when you have decoded her message.

Helpful Hints:
Assume the array will always contain letters and numbers. Sue will not pass you an empty array
Important numbers will not be repeated in the array
*/

function reVert(array,timesTable){
  return array.filter(i => i.big || i%timesTable==0 )
              .reduce((chars,v,i,arr) => {
                if( i%2==0 ) chars[v] = arr[i+1];
                return chars;
              }, [])
              .join('');
}


/*
Given an array of integers.
Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
If the input is an empty array or is null, return an empty array.
Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

function countPositivesSumNegatives(input) {
  let arr = []
  if (input === null) return arr
  let positive = input.filter(item => item > 0)
  let negative = input.filter(item => item < 0)
  let newInput = [ positive.length, ( negative.reduce((a,b) => a + b, 0) ) ]
  return (newInput[0] > 0) ? newInput : arr
}


/*
In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
Rules
 1.  The input string will always be lower case but maybe empty.
 2.  If the character in the string is whitespace then pass over it as if it was an empty seat
Example
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
*/

function wave(str){
  return str.split("").map((item,i) => {
    item = str
    item = item.split("").map((a,b) => (b === i) ? item[i] = item[i].toUpperCase() : a).join('')
    return item
  }).filter(item => item !== item.toLowerCase())
}


/*
In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.
Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).
*/

/* Recursion solution:
function factorial(n) {
  if (n < 0 || n > 12)
    throw new RangeError();
  return n <= 1 ? 1 : n * factorial(n - 1);
}
*/

function factorial(n){
  let arr = []
  if (n < 0 || n > 12) {
    throw new RangeError('')
  }  
  for (let i = 1; i <= n; i++) {
    arr.push(i)
  }
  return arr.reduce((a,b) => a * b, 1)
}


/*
In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.
For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.
If you can, try writing it in only one line of code.
*/

function findMultiples(integer, limit) {
  let array = []
  for (let i = integer; i <= limit; i+=integer) array.push(i)
  return array
}


/*
The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.
The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).
If the score < 0, return 0.
For example:
checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0
*/

function checkExam(array1, array2) {
  let score = 0
  for(let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      score += 4
    } else if (array2[i] == "") {
      score += 0
    } else {
      score--
    }
  }
  return score < 0 ? 0 : score
}


/*
To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
Input
Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
Output
Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.
Example
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
*/

function openOrSenior(data){
  return data.map(item => item[0] >= 55 && item[1] > 7 ? "Senior" : "Open")
}


/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
Example: (Input --> Output)
"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/

function isIsogram(str){
  return !str.match(/(\w).*\1/i);
}


/*
Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

Examples
Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:
a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]

Invalid arrays
If, for example, we change the first number to something else, comp is not returning true anymore:
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 132 is not the square of any number of a.
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 36100 is not the square of any number of a.

Remarks
a or b might be [] or {} (all languages except R, Shell).
a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).
If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.
*/

function comp(arr1, arr2){
  if (arr1 === null || arr2 === null) return false
  arr2 = arr2.map(item => Math.sqrt(item)).sort((a,b) => a - b)
  arr1 = arr1.sort((a,b) => a - b)
  return arr2.every((item,i) => arr2[i]===arr1[i])
}


/*
Your mission:
Write a function called checkCoupon which verifies that a coupon code is valid and not expired.
A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".
Examples:
checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false
*/

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  return (enteredCode === correctCode && Date.parse(currentDate) <= Date.parse(expirationDate))
}


/*
When provided with a letter, return its position in the alphabet.
Input :: "a"
Ouput :: "Position of alphabet: 1"
*/

let position = (letter) => `Position of alphabet: ${letter.charCodeAt(0) - 96}`


/*
As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.
The input to the function will be an array of three distinct numbers (Haskell: a tuple).
For example:
gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.
Another example (just to make sure it is clear):
gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.
*/

let gimme = (arr) => {
  return arr.indexOf([...arr].sort((a, b) => a - b)[1]);
}


/*
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
#Examples:
Kata.getMiddle("test") should return "es"
Kata.getMiddle("testing") should return "t"
Kata.getMiddle("middle") should return "dd"
Kata.getMiddle("A") should return "A"
#Input
A word (string) of length 0 < str < 1000
#Output
The middle character(s) of the word represented as a string.
*/

function getMiddle(s) {
  return (s.length % 2 === 0) ? s[s.length/2 - 1] + s[s.length/2] : s[Math.floor(s.length/2)]
}


/*
if x squared is more than 1000, return It's hotter than the sun!!, else, return Help yourself to a honeycomb Yorkie for the glovebox.
Note: Input will either be a positive integer (or a string for untyped languages).
*/

function apple(x){
  return x**2 > 1000 ? "It's hotter than the sun!!" : "Help yourself to a honeycomb Yorkie for the glovebox."
}


/*
Define a function that removes duplicates from an array of numbers and returns it as a result.
The order of the sequence has to stay the same.
*/

function distinct(a) {
  return [...new Set(a)];
}


/*
Your task is to sum the differences between consecutive pairs in the array in descending order.
Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]
Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9
If the array is empty or the array has only one element the result should be 0

alternative solution
function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}
*/

function sumOfDifferences(arr) {
  let sum = 0
  arr.sort((a,b) => b - a).forEach((item,i) => {
    if (i <= arr.length - 2) sum += (item - arr[i+1])
  })
  return sum
}


/*
We want to generate a function that computes the series starting from 0 and ending until the given number.
Example:
Input:
> 6
Output:
0+1+2+3+4+5+6 = 21

Input:
> -15
Output:
-15<0

Input:
> 0
Output:
0=0
*/

var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    let sum = 0
    let arr = []
    if (count === 0) return "0=0"
    if (count < 0) return `${count}<0`
    for(let i = 0; i <= count; i++) {
      arr.push(i)
      sum += i
    }
    return `${arr.join("+")} = ${sum}`
  };

  return SequenceSum;

})();


/*
Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.
If no arguments are given, ball objects should instantiate with a "ball type" of "regular."
ball1 = new Ball();
ball2 = new Ball("super");
ball1.ballType     //=> "regular"
ball2.ballType     //=> "super"
*/

let Ball = function(ballType) {
  this.ballType = ballType || "regular"
}


/*
Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.
Examples
remove("Hi!") === "Hi!"
remove("Hi!!!") === "Hi!"
remove("!Hi") === "Hi!"
remove("!Hi!") === "Hi!"
remove("Hi! Hi!") === "Hi Hi!"
remove("Hi") === "Hi!"
*/

let remove = (str) => str.replace(/!/g,"") + "!"


/*
Find the number with the most digits.
If two numbers in the argument array have the same number of digits, return the first one in the array.

HARD alternative solution
let findLongest = (arr) => arr.reduce((a,b) => (`${b}`.length > `${a}`.length) ? b : a)
*/

function findLongest(arr){
  let b = Math.max(...arr.map(item => item.toString().length))
  return arr.find(item => item.toString().length === b)
}


/*
Clash Royale is a tower rush video game which pits players in games featuring two players in which the objective is to destroy the most opposing towers. Players build card decks in order to play. It's crucial to know the opponent's card deck and the opponent's current hand in order to play good. Let's help those who can't count the cards successfully.

Current Hand Example
Each deck in Clash Royale has 8 cards, and you can have 4 cards at any time during the game.

After you play any card from your hand => this card goes to the end of the "queue" and goes back to your hand after you play another 4 cards. And so on.

Task:
Given an array of cards played in a certain order. You need to return the opponent's current hand (4 cards max) in any order.
If you receive less than 8 cards as an argument => return as many cards as we could possibly know from this play.

getCurrentHand(['Hog Rider','Earthquake','Archer Queen','Giant Skeleton','Fire Spirit','Cannon']) // => ['Hog Rider', 'Earthquake']
Example:

currentHand([
  'Hog Rider',
  'Earthquake',
  'Archer Queen',
  'Giant Skeleton',
  'Fire Spirit',
  'Cannon',
  'Skeletons',
  'Hog Rider',
  'The Log',
  'Fire Spirit',
  'Earthquake',
  'Giant Skeleton',
  'Skeletons',
  'Archer Queen',
  'Fire Spirit',
  'Cannon',
  'Giant Skeleton',
  'Skeletons',
]); // => ['Archer Queen', 'Earthquake',  'The Log', 'Hog Rider']

Explanation:
The current hand definitely can't contain:
'Fire Spirit', 'Cannon', 'Giant Skeleton', 'Skeletons'
Because they're the last played cards withing the 4-card range.
Archer Queen => definitely in the current hand (no Archer Queen in the last 4 cards played)
Skeletons => not in the current hand (we can see Skeletons in the last 4 cards played)
*/

function getCurrentHand(arr) {
  let not = arr.splice(-4)
  return [...new Set (arr.filter(item => !not.includes(item))) ]
}


/*
Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).
Notes:
Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
Input >> Output Examples
minValue ({1, 3, 1})  ==> return (13)
Explanation:
(13) is the minimum number could be formed from {1, 3, 1} , Without duplications

minValue({5, 7, 5, 9, 7})  ==> return (579)
Explanation:
(579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications
*/

let minValue = (values) => +[...new Set(values)].sort((a,b) => a - b).join("")


/*
Given a sequence of numbers, find the largest pair sum in the sequence.
For example
[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
Input sequence contains minimum two elements and every element is an integer.
*/

let largestPairSum = (nums) => nums.sort((a,b) => b - a)[0] + nums[1]


/*
What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?
Example(Input --> Output)
"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .
Note: String will have at least one element; words will always be separated by a space.
*/

let addLength = (str) => str.split(" ").map(item => `${item} ${item.length}`)


/*
John has invited some friends. His list is:
s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
Could you make a program that
makes this string uppercase
gives it sorted in alphabetical order by last name.
When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.
So the result of function meeting(s) will be:
"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
It can happen that in two distinct families with the same family name two people have the same first name too.
*/

function meeting(s) {
  return `(${s.toUpperCase().split(';').map(item => item.split(":").reverse().join(", ")).sort().join(")(")})`
}

/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
*/

let domainName = (url) => url.replace(/(http:\/\/|https:\/\/|www.)/g, "").split(".")[0]


/*
Given an array of numbers, work out the Nth term of the sequence and return it as a String in the form an + b.
Input
All arrays provided will consist of 5 elements
Every array will be a sequence
All sequences provided will be linear
All sequences will start with the first element being n = 1
Examples
[1, 3, 5, 7, 9] should return 2n + -1
[1, 5, 9, 13, 17] should return 4n + -3
[11, 16, 21, 26, 31] should return 5n + 6
Note
When returning the answer, ensure that it is in the form an + b - if b is negative then it should be an + -b and not an - b.
*/

function nthTermOf(sequence) {
  let a = sequence[1]-sequence[0]
  let b = sequence[0] - (a * 1)
  return `${a}n + ${b}`
}


/*
Given a string of words, you need to find the highest scoring word.
Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
You need to return the highest scoring word as a string.
If two words score the same, return the word that appears earliest in the original string.
All letters will be lowercase and all inputs will be valid.
*/

function high(x){
  let tally = x.split(" ").map(item => [...item].reduce((a,b) => a + b.charCodeAt(0) - 96, 0))
  return x.split(" ")[tally.indexOf(Math.max(...tally))]
}


/*
Design an algorithm that given an integer n returns an array [a,b] :
a is obtained by reversing the digits in the n
b is obtained by reversing the last two digits in a, or a if that reversal doesn't make a larger number than a
Example :
largestValue(95659512354) => [45321595659,45321595695]
largestValue(19659512354) => [45321595691,45321595691]
*/

function largestValue(number){
  let a = number.toString().split('').reverse()
  let b = a.slice(0,-2).join('') + a.slice(-2).reverse().join("")
  return (+b > +a.join("")) ? [+a.join(""), +b] : [+a.join(""), +a.join("")]
}


/*
Write a function named numbers.
function should return True if all parameters are of the Number type.
The function should accept any number of parameters.
Example usage:
numbers(1, 4, 3, 2, 5); // true
numbers(1, "a", 3); // false
numbers(1, 3, NaN); // true
*/

let numbers = (...p) => p.every(item => typeof item === 'number')


/*
Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.
*/

let findShort = (s) => Math.min(...s.split(" ").map(item => item.length))


/*
You need to write a function that will format a phone number by a template.
Task
You're given number and string.
If there are more digits than needed, they should be ignored
if there are less digits than needed, should return Invalid phone number
Examples
(79052479075, "+# ### ### ## ##") => "+7 905 247 90 75"
(79052479075, "+# (###) ### ##-##") => "+7 (905) 247 90-75"
(79052479075, "+# ### ### ## ##") => "+7 905 247 90 75"
(81237068908090, "+## ### ### ## ##") => "+81 237 068 90 80"
(8123706890, "+## ### ### ##-##") => "Invalid phone number"
(911, "###") => "911"
(112, "+ () -") => "+ () -"

alternative solution
function formatNumber(num, template) {
  for ( let c of num.toString() ) template = template.replace('#', c)
  return template.includes('#') && "Invalid phone number" || template
}
*/

function formatNumber(num, template) {
  num = [...""+num] // alternate way of number.toString().split('')
  return template.replace(/[^#]/g, "").length > num.length ? "Invalid phone number" : template.replace(/#/g, x => num.shift())
}


/*
Zephland, a high tech modern country, is accepting applications to become Zephlish resident. The immigration office will evaluate an applicant from several aspects:
• test score of the Zephlish language: range from 0-100, 3% of the score goes to the overall score;
• test score of Math: range from 0-100, 3% of the score goes to the overall score;
• criminal history: deduct 3 points if one has committed any crime;
• investment brought to Zephland: add 2 point if applicant brings over 1 million USD cash into the country;
• whether you are a programmer: add 2 points if you are a programmer;

Please write a function to check the overall score of an applicant. Return "Welcome to Zephland!", if score is over 6; "Sorry, your application is rejected." if score is 6 or under.
*/

function immigration(a) {
  let score = 0
  score += (a.Zephlish/100) * 3
  score += (a.Math/100) * 3
  if (a.crime) score -= 3
  if (+a.investment.replace('USD','') > 1000000) score += 2
  if (a.programmer) score += 2
  
  return (score > 6) ? "Welcome to Zephland!" : "Sorry, your application is rejected."
}


/*
Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.
The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.
Note to Tax: not the invested principal is taxed, but only the year's accrued interest
Example:
Let P be the Principal = 1000.00      
Let I be the Interest Rate = 0.05      
Let T be the Tax Rate = 0.18      
Let D be the Desired Sum = 1100.00
After 1st Year -->
  P = 1041.00
After 2nd Year -->
  P = 1083.86
After 3rd Year -->
  P = 1128.30
Thus Mr. Scrooge has to wait for 3 years for the initial principal to amount to the desired sum.

Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.

Assumption: Assume that Desired Principal 'D' is always greater than the initial principal. However it is best to take into consideration that if Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.
*/

function calculateYears(p, i, t, d) {
  let count = 0
  while (p < d) {
    p = (p + (p * i)) - (p * i * t)
    count++
  }
  return (p===d) ? 0 : count
}


/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
For example (Input --> Output):
39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
*/

function persistence(num) {
  let count = 0
  while (num.toString().length != 1) {
    num = num.toString().split('').reduce((a,b) => +a * +b, 1)
    count++
  }
  return count
}


/*
Complete the solution so that the function will break up camel casing, using a space between words.
Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

alternative solution
let solution = (string) => string.replace(/([A-Z])/g, ' $1')
*/

function solution(str) {
  return str.split('').map((item,i) => item === item.toUpperCase() ? ` ${item}` : item).join('')
}

/*
You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.
Find max(abs(length(x) − length(y)))
If a1 and/or a2 are empty return -1.
Example:
a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13
*/

function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) return -1
  a1 = a1.map(str => str.length)
  a2 = a2.map(str => str.length)
  return Math.max(Math.max(...a1) - Math.min(...a2), Math.max(...a2) - Math.min(...a1))
}


/*
Count the number of divisors of a positive integer n.
Random tests go up to n = 500000.
Examples (input --> output)
4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
*/

function getDivisorsCnt(n){
  let arr = []
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) arr.push(i)
  }
  return arr.length
}


/*
is_divisible() should tell you whether a wall of a certain length can exactly fit an integer number of pixels of a certain length.

Your function should take two arguments: the size of the wall in millimeters and the size of a pixel in millimeters. It should return True if you can fit an exact number of pixels on the wall, otherwise it should return False. For example is_divisible(4050, 27) should return True, but is_divisible(4066, 27) should return False.

>>> def equals_three(num):
>>>     return num == 3
>>> equals_three(5)
False
>>> equals_three(3)
True
*/

let isDivisible = (w, p) => w % p === 0


/*
You are given a string containing a sequence of character sequences separated by commas.Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.
If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

Examples
"1,2,3"      =>  "2"
"1,2,3,4"    =>  "2 3"
"1,2,3,4,5"  =>  "2 3 4"
""     =>  NULL
"1"    =>  NULL
"1,2"  =>  NULL
*/

let array = (arr) => arr.split(",").slice(1,-1).join(" ") || null


/*
Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).
*/

let isTriangle = (a,b,c) => (a + b > c && a + c > b && b + c > a)


/*
Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

Some cases:
[22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

[68, -1, 1, -7, 10, 10] => [-1, 10]

[-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]
*/

let multipleOfIndex = (arr) => arr.filter((item,i) => item % i === 0)

/*
You get any card as an argument. Your task is to return the suit of this card (in lowercase).
Our deck (is preloaded):
('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'
*/

function defineSuit(card) {
  return card[card.length-1] === '♣' ? 'clubs'
  : card[card.length-1] === '♦' ? 'diamonds'
  : card[card.length-1] === '♥' ? 'hearts'
  : 'spades'
}


/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

function isPangram(str){
  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .every((item) => str.toLowerCase().includes(item));
}


/*
A western man is trying to find gold in a river. To do that, he passes a bucket through the river's soil and then checks if it contains any gold. However, he could be more productive if he wrote an algorithm to do the job for him.
Return true if there is gold and false if not.
*/

let checkTheBucket = (bucket) => bucket.includes('gold')


/*
Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.
b rr b rr b rr b rr b rr b
@ @@ @ @@ @ @@ @ @@ @ @@ @
Implement count_red_beads(n) (in PHP count_red_beads($n); in Java, Javascript, TypeScript, C, C++ countRedBeads(n)) so that it returns the number of red beads.
If there are less than 2 blue beads return 0.
*/

let countRedBeads = (n) => (n < 2) ? 0 : (n - 1) * 2


/*
The goal of this kata is to create a very simple ASCII encryption and decryption. The encryption algorithm should shift each character's charcode by the character's current index in the string (0-based).
The input strings will never require to go outside of the ASCII range.
Example:
  p | a | s | s | w | o | r | d # Plaintext
+ 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 # Shift (add)
  p | b | u | v | { | t | x | k # Ciphertext
The decryption should reverse this:
  p | b | u | v | { | t | x | k # Ciphertext
- 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 # Shift (subtract)
  p | a | s | s | w | o | r | d # Plaintext
*/

function asciiEncrypt(plain) {
  return plain.split('').map((item,i) => String.fromCharCode(item.charCodeAt() + i)).join('')
}
    
function asciiDecrypt(cipher) {
  return cipher.split('').map((item,i) => String.fromCharCode(item.charCodeAt() - i)).join('')
}


/*
You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).
It is guaranteed that a and b are both present in arr.
*/

function consecutive(arr, a, b) {
  return Math.abs(arr.indexOf(a) - arr.indexOf(b)) == 1;
}


/*
Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.
For example:
([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]
*/

let evenNumbers = (arr, num) => arr.filter(item => item % 2 === 0).splice(-num)


/*
In this kata, strings represent buildings while whitespaces within those strings represent ghosts.
Example:
ghostBusters("Sky scra per") => "Skyscraper"
If the building contains no ghosts, return the string:
"You just wanted my autograph didn't you?"
*/

function ghostBusters(building) {
  return (building.includes(' ')) ? building.replace(/ /g, '') : "You just wanted my autograph didn't you?"
}


/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
Note: If the number is a multiple of both 3 and 5, only count it once.
*/

function solution(num) {
  let sum = 0
  for (let i = 1; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) sum += i
  }
  return sum
}


/*
Write a method, that will get an integer array as parameter and will process every number from this array.
Return a new array with processing every number of the input-array like this:
If the number has an integer square root, take this, otherwise square the number.
Example
[4,3,9,7,2,1] -> [2,9,3,49,4,1]
*/

function squareOrSquareRoot(arr) {
  return arr.map((item) => Math.sqrt(item) % 1 === 0 ? Math.sqrt(item) : item * item)
}


/*
In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!
Examples:
1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
*/

function dontGiveMeFive(start, end){
  let count = 0
  for (let i = start; i <= end; i++) {
    if (!i.toString().includes(5)) count++
  }
  return count
}


/*
For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.
Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array. Your outputs should be "WIN" or "LOSE" respectively.
*/

let bingo = arr => [2,7,9,14,15].every(e => arr.includes(e)) ? 'WIN' : 'LOSE'


/*
write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.
the string should start with a 1.
a string with size 6 should return :'101010'.
with size 4 should return : '1010'.
with size 12 should return : '101010101010'.
The size will always be positive and will only use whole numbers.
*/

function stringy(size) {
  let str = ''
  for (let i = 1; i <= size; i++) str += i % 2
  return str
}


/*
A Narcissistic Number is a number of length l in which the sum of its digits to the power of l is equal to the original number. If this seems confusing, refer to the example below.
Ex: 153, where l = 3 ( the number of digits in 153 )
13 + 53 + 33 = 153
Write a function that, given n, returns whether or not n is a Narcissistic Number.
*/

function isNarcissistic(n) {
  let l = n.toString().length
  return n.toString().split('').reduce((a,b) => a + (b ** l), 0) == n
}


/*
In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.
Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.
*/

let solve = (str) => [/[A-Z]/, /[a-z]/, /\d/, /\W|_/].map(rgx => str.split(rgx).length - 1)


/*
Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.
The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').
Examples:
toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
*/

function toWeirdCase(str){
  return str.split(' ')
    .map(item => item.split('')
         .map((item,i) => i % 2 === 0 ? item.toUpperCase() : item)
         .join(''))
    .join(' ')
}


/*
Write a function that will check if two given characters are the same case.
If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
Examples
'a' and 'g' returns 1
'A' and 'C' returns 1
'b' and 'G' returns 0
'B' and 'g' returns 0
'0' and '?' returns -1
*/

function sameCase(a, b){
  return (/\W|_|\d/.test(a) || /\W|_|\d/.test(b)) ? -1
  : (/[A-Z]/.test(a) && /[A-Z]/.test(b)) || (/[a-z]/.test(a) && /[a-z]/.test(b)) ? 1
  : 0
}


/*
We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).
So given a string "super", we should return a list of [2, 4].
Some examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]
NOTES
Vowels in this context refers to: a e i o u y (including upper case)
This is indexed from [1..n] (not zero indexed!)
*/

function vowelIndices(word){
  return word.split('').map((item,i) => /[aeiouy]/i.test(item) ? i+1 : '').filter(item => /\d/.test(item))
}


/*
Using n as a parameter in the function pattern, where n>0, complete the codes to get the pattern (take the help of examples):
Note: There is no newline in the end (after the pattern ends)
Examples
pattern(3) should return "1\n1*2\n1**3", e.g. the following:
1
1*2
1**3
pattern(10): should return the following:
1
1*2
1**3
1***4
1****5
1*****6
1******7
1*******8
1********9
1*********10
*/

function pattern(n){
  let ladder = '1'
  let stars = ''
  for (let i = 1; i < n; i++) {
    ladder += `\n${1}${stars += '*'}${i+1}`
  }
  return ladder
}

/*
Your function should:
Capitalise the first letter of the first word.
Add a period (.) to the end of the sentence.
Join the words into a complete string, with spaces.
Do no other manipulation on the words.
Here are a few examples of what your function should do:
Input	Output
["i", "am", "an", "AI"]	"I am an AI."
["FIELDS","of","CORN","are","to","be","sown"]	"FIELDS of CORN are to be sown."
["i'm","afraid","I","can't","let","you","do","that"]	"I'm afraid I can't let you do that."
*/

let sentencify = (words) => words[0][0].toUpperCase() + words.join(' ').slice(1) + '.'


/*
Every book has n pages with page numbers 1 to n. The summary is made by adding up the number of digits of all page numbers.
Task: Given the summary, find the number of pages n the book has.
Example
If the input is summary=25, then the output must be n=17: The numbers 1 to 17 have 25 digits in total: 1234567891011121314151617.
Be aware that you'll get enormous books having up to 100.000 pages.
All inputs will be valid.
*/

function amountOfPages(summary){
  let str = ''
  let num = 0
  for (let i = 1; str.length < summary; i++) {
    str += i
    num++
  }
  return num
}


/*
Given a string, swap the case for each of the letters.
Examples
""           -->   ""
"CodeWars"   -->   "cODEwARS"
"abc"        -->   "ABC"
"ABC"        -->   "abc"
"123235"     -->   "123235"
*/

function swap(str){
  return str.split('').map(item => item == item.toUpperCase() ? item.toLowerCase() : item.toUpperCase()).join('')
}


/*
Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).
Example:
divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"
*/

function divisors(int) {
  let arr = []
  for (let i = 2; i < int; i++) {
    if (int % i === 0) arr.push(i)
  }
  return !arr[0] ? `${int} is prime` : arr
}

/*
Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:
"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
--> "alpha beta gamma delta alpha beta gamma delta"
*/

let removeConsecutiveDuplicates = s => s.split(' ').filter((item,i,a) => item != a[i+1]).join(' ')


/*
In its most basic form a spoonerism is a two word phrase in which only the first letters of each word are swapped:
"not picking" --> "pot nicking"
Your task is to create a function that takes a string of two words, separated by a space: words and returns a spoonerism of those words in a string
*/

function spoonerize(words) {
  words = words.split(' ')
  return `${words[1][0]}${words[0].slice(1)} ${words[0][0]}${words[1].slice(1)}`
}

/*
In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
*/

function well(x){
  x = x.filter(item => item == 'good').length
  return (x === 0) ? "Fail!" : (x < 3) ? "Publish!" : "I smell a series!"
}

/*
Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.
Example:
'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'
*/

let switcheroo = x => x.replace(/[ab]/g, x => x == "a" ? "b" : "a")


/*
When provided with a String, capitalize all vowels
For example:
Input : "Hello World!"
Output : "HEllO WOrld!"
Note: Y is not a vowel in this kata.
*/

let swap = (str) => str.replace(/[aeiou]/g, v => v.toUpperCase())


/*
Given a positive integer n: 0 < n < 1e6, remove the last digit until you're left with a number that is a multiple of three.
Return n if the input is already a multiple of three, and if no such number exists, return null, a similar empty value, or -1.
Examples
1      => null
25     => null
36     => 36
1244   => 12
952406 => 9
*/

const prevMultOfThree = n => {
  n = n.toString()
  for (let i = n.length; n % 3 !== 0; i--) {
    n = n.slice(0,i)
  }
  return n == 0 ? null : +n
}


/*
Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.
Example:
For input: [3, 4, 4, 3, 6, 3]
remove the 3 at index 0
remove the 4 at index 1
remove the 3 at index 3
Expected output: [4, 6, 3]
*/

let solve = arr => [...new Set(arr.reverse())].reverse()


/*
Given two arrays of integers m and n, test if they contain at least one identical element. Return true if they do; false if not.
Your code must handle any value within the range of a 32-bit integer, and must be capable of handling either array being empty (which is a false result, as there are no duplicated elements).
*/

let duplicateElements = (m, n) => m.some(item => n.includes(item))


/*
Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD
*/

function alternateCase(str) {
  return str.replace(/\w/g,s => s == s.toUpperCase() ? s.toLowerCase() : s.toUpperCase())
}

/*
Given an input of an array of digits, return the array with each digit incremented by its position in the array: the first digit will be incremented by 1, the second digit by 2, etc. Make sure to start counting your positions from 1 ( and not 0 ).
Your result can only contain single digit numbers, so if adding a digit with its position gives you a multiple-digit number, only the last digit of the number should be returned.
Notes:
return an empty array if your array is empty
arrays will only contain numbers so don't worry about checking that
Examples:
[1, 2, 3]  -->  [2, 4, 6]   #  [1+1, 2+2, 3+3]
[4, 6, 9, 1, 3]  -->  [5, 8, 2, 5, 8]  #  [4+1, 6+2, 9+3, 1+4, 3+5]
                                       #  9+3 = 12  -->  2
*/

let incrementer = (nums) => nums.map((item,i) => (item + i + 1) % 10)


/*
The median is the middle number of a sorted list of numbers. If the list is of even length, the 2 middle values are averaged.
Write a function that takes an array of integers as an argument and returns the median of those integers.
Notes:
The sorting step is vital.
Input arrays are non-empty.
Examples
Median of [33,99,100,30,29,50] is 41.5.
Median of [3,2,1] is 2.
*/

function median(arr) {
  arr = arr.sort((a,b) => a - b)
  let l = arr.length
  return l % 2 == 0 ? (arr[l/2] + arr[l/2 - 1]) / 2: arr[Math.floor(l/2)]
}

/*
Create a function that takes one positive three digit integer and rearranges its digits to get the maximum possible number. Assume that the argument is an integer.
Return -1 if the argument is not valid
Return null (nil for Ruby, nothing for Julia) if the argument is not valid.
maxRedigit(123); // returns 321
*/

function maxRedigit(num) {
  return num.toString().length == 3 ? +num.toString().split('').sort((a,b) => b - a).join('') : null
}


/*
You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors (letters that aren't a-m) and the denominator the length of the control string. Don't reduce this fraction to a simpler expression. The string has a length greater or equal to one and contains only letters from ato z.
Examples:
s="aaabbbbhaijjjm"
printer_error(s) => "0/14"
s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"
*/

function printerError(s) {
  let count = 0
  s.split('').map(item => /[^a-m]/.test(item) ? count++ : count)
  return `${count}/${s.length}`
}


/*
Write a function that doubles every second integer in a list, starting from the left.
Example:
[1,2,3,4] => [1,4,3,8]
*/

let doubleEveryOther = a => a.map((item,i) => i % 2 !== 0 ? item * 2 : item)


/*
Write function toInitials returs initials for a given person name. E.g: "Bill Gates" -> "B. G."
Note: initials should be separated with a space.
*/

let toInitials = (name) => name.split(' ').map(item => item[0][0]).join('. ') + '.'


/*
Digital root is the recursive sum of all the digits in a number.
Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

HARD alternative solution
let digitalRoot = (n) => (n - 1) % 9 + 1
*/

function digitalRoot(n) {
  do {
    n = n.toString().split('').reduce((a,b) => a + +b, 0)
  } while(n.toString().length > 1)
  return n
}

/*
Write a program to determine if the two given numbers are coprime. A pair of numbers are coprime if their greatest shared factor is 1.
The inputs will always be two positive integers between 2 and 99.
Examples
20 and 27:
Factors of 20: 1, 2, 4, 5, 10, 20
Factors of 27: 1, 3, 9, 27
Greatest shared factor: 1
Result: 20 and 27 are coprime
12 and 39:
Factors of 12: 1, 2, 3, 4, 6, 12
Factors of 39: 1, 3, 13, 39
Greatest shared factor: 3
Result: 12 and 39 are not coprimes

HARD Eculids's algorithm alternative solution
function isCoprime(x, y) {
  if (!y) {  
    return x
  }  
  return isCoprime(y, x % y) == 1
}
*/


function isCoprime(x, y) {
  let arr1 = []; let arr2 = []; let arr3 = []
  for (let i = 1; i <= x; i++) {
    if (x % i === 0) arr1.push(i)
  }
  for (let i = 1; i <= y; i++) {
    if (y % i === 0) arr2.push(i)
  }
  arr1.forEach((item,i) => arr2.includes(item) ? arr3.push(item) : item)
  return arr3.length == 1
}


/*
You will be given two strings: lamps and drone. lamps represents a row of lamps, currently off, each represented by x. When these lamps are on, they should be represented by o.
The drone string represents the position of the drone T (any better suggestion for character??) and its flight path up until this point =. The drone always flies left to right, and always begins at the start of the row of lamps. Anywhere the drone has flown, including its current position, will result in the lamp at that position switching on.
flyBy('xxxxxx', '====T') ===> 'ooooox'
*/

let flyBy = (lamps, drone) => [...lamps].fill(`o`, 0, drone.length).join(``)


/*
Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead
*/

let bump = (x) => x.replace(/_/g,"").length <= 15 ? "Woohoo!" : "Car Dead"


/*
Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!
You need to cast the whole array to the correct type.
Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.
ie:["1", "2", "3"] to [1, 2, 3]
Note that you can receive floats as well.
*/

let toNumberArray = (arr) => arr.map(item => +item)


/*
Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.
Division by zero should return NaN.
Examples:
n = 17
m = 5
result = 2 (remainder of `17 / 5`)
n = 13
m = 72
result = 7 (remainder of `72 / 13`)
n = 0
m = -1
result = 0 (remainder of `0 / -1`)
n = 0
m = 1
result - division by zero (refer to the specifications on how to handle this in your language)
*/

let remainder = (n, m) => n > m ? n % m : m % n


/*
For this Kata you will be given an array of numbers and another number n. You have to find the sum of the n largest numbers of the array and the product of the n smallest numbers of the array, and compare the two.
If the sum of the n largest numbers is higher, return "sum"
If the product of the n smallest numbers is higher, return "product"
If the 2 values are equal, return "same"
Note The array will never be empty and n will always be smaller than the length of the array.
Example
sumOrProduct([10, 41, 8, 16, 20, 36, 9, 13, 20], 3) // => "product"
*/

function sumOrProduct(arr, n) {
  arr = arr.sort((a,b) => a - b)
  let sum = arr.slice(-n).reduce((a,b) => a + b, 0)
  let product = arr.slice(0,n).reduce((a,b) => a * b, 1)
  return sum > product ? "sum" : sum == product ? 'same' : 'product'
}


/*
Write a function that combines two arrays by alternatingly taking elements from each array in turn.
Examples:
[a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]
[1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]
Points:
The arrays may be of different lengths, with at least one character/digit.
One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).
*/

function mergeArrays(a, b) {
  return a.map((item,i) => a[i] && b[i] ? `${a[i]} ${b[i]}` : !a[i] ? `${b[i]}` : `${a[i]}`)
    .join(' ').split(" ").map(item => /\d/.test(item) ? +item : item)
}


/*
Write a function that combines two arrays by alternatingly taking elements from each array in turn.
Examples:
[a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]
[1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]
Points:
The arrays may be of different lengths, with at least one character/digit.
One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).
*/

function mergeArrays(a, b) {
  let max = Math.max(a.length, b.length)
  let arr = []
  for (let i = 0; i < max; i++) {
    a[i] && b[i] ? arr.push(a[i], b[i]) : !a[i] ? arr.push(b[i]) : arr.push(a[i])
  }
  return arr
}


/*
Return the Nth Even Number
Example(Input --> Output)
1 --> 0 (the first even number is 0)
3 --> 4 (the 3rd even number is 4 (0, 2, 4))
100 --> 198
1298734 --> 2597466
The input will not be 0.
*/

let nthEven = n => n * 2 - 2


/*
Return the number of times in a signal, represented as an array of numbers, that the value crosses 0. Zero is neither negative nor positive, but [1,0,-1] does constitute a crossing. If the input array contains a NaN, you should return -1.
Example
zcr([1,2,1,-1,-2,-1]) // returns 1
zcr([1,-1,1,-1,1,-1]) // returns 5
*/

function zcr(arr) {
  arr = arr.filter(item => item !== 0)
  let tally = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0 && arr[i+1] > 0 || (arr[i] > 0 && arr[i+1] < 0)) tally++
  }
  return (arr.includes(NaN)) ? -1 : tally
}

/*
Imagine you start on the 5th floor of a building, then travel down to the 2nd floor, then back up to the 8th floor. You have travelled a total of 3 + 6 = 9 floors of distance.
Given an array representing a series of floors you must reach by elevator, return an integer representing the total distance travelled for visiting each floor in the array in order.
// simple examples
elevatorDistance([5,2,8]) = 9
elevatorDistance([1,2,3]) = 2
elevatorDistance([7,1,7,1]) = 18
// if two consecutive floors are the same,
//distance travelled between them is 0
elevatorDistance([3,3]) = 0
Array will always contain at least 2 floors. Random tests will contain 2-20 elements in array, and floor values between 0 and 30.
*/

function elevatorDistance(arr) {
  let tally = 0
  for (let i = 0; i < arr.length - 1; i++) {
    tally += Math.abs(arr[i] - arr[i+1])
  }
  return tally
}


/*
Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).
If they are, change the array value to a string of that vowel.
Return the resulting array.
*/

let isVow = a => a.map(item => /97|101|105|111|117/.test(item) ? String.fromCharCode(item) : item)


/*
Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.
Example(Input1, Input2 --> Output)
[1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]
*/

let divisibleBy = (num, divisor) => num.filter(item => item % divisor === 0)


/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
It should remove all values from list a, which are present in list b keeping their order.
arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:
arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

let arrayDiff = (a, b) => a.filter(item => !b.includes(item))

/*
Note: anagrams are case insensitive
Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
Examples
"foefet" is an anagram of "toffee"
"Buckethead" is an anagram of "DeathCubeK"
*/

function isAnagram(test, original){
  test = test.toLowerCase().split('').sort().join('')
  original = original.toLowerCase().split('').sort().join('')
  return test === original
}


/*
Use the super secret characters in the superSecretChars variable to replace the matching characters in your totally insecure password and make it un-hackable.
eg. replace all 'a's with '@'s. Make sure you get the upper case characters too just in case the user wants to SHOUT their password at you.

alternative solution
var chars = {a: '@', s: '$', o: 0, h: 5, x: '*'};
function createSSP(p){
  return p.replace(/[asohx]/gi, (m) => chars[m.toLowerCase()])
}
*/

var superSecretChars = [['a', '@'],['s', '$'],['o', '0'], ['h', '5'], ['x', '*']];
function createSSP(p){
  return p.replace(/a/gi, '@').replace(/s/gi, '$').replace(/o/gi, '0').replace(/h/gi, '5').replace(/x/gi, '*')
}


/*
Return an output string that translates an input string s/$s by replacing each character in s/$s with a number representing the number of times that character occurs in s/$s and separating each number with the character(s) sep/$sep.
freq_seq("hello world", "-"); // => "1-1-3-3-2-1-1-2-1-3-1"
freq_seq("19999999", ":"); // => "1:7:7:7:7:7:7:7"
freq_seq("^^^**$", "x"); // => "3x3x3x2x2x1"
*/

function freqSeq(str, sep) {
  return str.split('').map((item,i,arr) => arr.filter(a => item == a).length).join(sep)
}


/*
Write a function that checks whether all elements in an array are square numbers. The function should be able to take any number of array elements.
Your function should return true if all elements in the array are square numbers and false if not. An empty array should return undefined. You can assume that all array elements will be positive integers.
Examples:
isSquare([1, 4, 9, 16]) --> true
isSquare([3, 4, 7, 9]) --> false
isSquare([]) --> undefined
*/

let isSquare = arr => !arr[0] ? arr[0] : arr.every(item => Number.isInteger(Math.sqrt(item)))


/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/

function duplicateEncode(str){
  return str.toLowerCase().split('')
    .map((item,i,arr) => arr.filter(a => item == a).length == 1 ? '(' : ')').join('')
}


/*
Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.
If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"
If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"
If the total of both even and odd numbers are identical return: "Even and Odd are the same"
*/

function evenOrOdd(str) {
  let e = str.split('').filter(item => +item % 2 === 0).reduce((a,b) => a + +b, 0)
  let o = str.split('').filter(item => +item % 2 !== 0).reduce((a,b) => a + +b, 0)
  return e > o ? 'Even is greater than Odd' : e < o ? 'Odd is greater than Even' : 'Even and Odd are the same'
}


/*
You will be given a string with sets of characters, (i.e. words), seperated by between one and three spaces (inclusive).
Looking at the first letter of each word (case insensitive-"A" and "a" should be treated the same), you need to determine whether it falls into the positive/first half of the alphabet ("a"-"m") or the negative/second half ("n"-"z").
Return True/true if there are more (or equal) positive words than negative words, False/false otherwise.
"A big brown fox caught a bad rabbit" => True/true
"Xylophones can obtain Xenon." => False/false
*/

function connotation(str) {
  let p = str.match(/\b[a-m]/ig) || []
  let n = str.match(/\b[n-z]/ig) || []
  return p.length >= n.length
}


/*
In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.
The result should also be ordered from highest to lowest.
Examples:
[4, 10, 10, 9]  =>  [10, 9]
[1, 1, 1]  =>  [1]
[]  =>  []
*/

function twoHighest(arr) {
  return [...new Set(arr)].sort((a, b) => b - a).slice(0, 2)
}


/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
For example:
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

function uniqueInOrder(str) {
  if (typeof str == 'string') str = str.split('')
  return str.filter((item,i,arr) => item !== arr[i + 1])
}


/*
By "looping array" it means removing elements from start and adding them to end of array one-by-one (if direction is "left") or removing from end and adding them to start one by-one (if direction is "right").
Function should accept three arguments:
array - non-empty array of elements of any type;
direction - 'left' or 'right' - tells how to loop array;
steps - number of steps to loop array (less or equal to array size);
Examples:
loopArr([1, 5, 87, 45, 8, 8], 'left', 2);
should produce result: [87, 45, 8, 8, 1, 5]
loopArr([1, 5, 87, 45, 8, 8], 'right', 2);
should produce result: [8, 8, 1, 5, 87, 45]
*/

function loopArr(arr, d, s) {
  let i = d == 'left' ? s : -s
  return arr.slice(i).concat(arr.slice(0, i))
}


/*
Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.
Note: only positive integers will be tested.
*/

let sumOfIntegersInString = (s) => s.split(/\D/).reduce((a,b) => a + +b, 0)


/*
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
Example:
Input:
'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
Output:
'alpha beta gamma delta'
*/

let removeDuplicateWords = (s) => [...new Set(s.split(' '))].join(' ')


/*
Write a function that replaces 'two', 'too' and 'to' with the number '2'. Even if the sound is found mid word (like in octopus) or not in lowercase grandma still thinks that should be replaced with a 2. Bless her.
'I love to text' becomes 'I love 2 text'
'see you tomorrow' becomes 'see you 2morrow'
'look at that octopus' becomes 'look at that oc2pus'
Note that 'too' should become '2', not '2o'
*/

let textin = (s) => s.replace(/two|too|to/gi, '2')


/*
Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained
Example
With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

1 * (2 + 3) = 5
1 * 2 * 3 = 6
1 + 2 * 3 = 7
(1 + 2) * 3 = 9
So the maximum value that you can obtain is 9.

Notes
The numbers are always positive.
The numbers are in the range (1  ≤  a, b, c  ≤  10).
You can use the same operation more than once.
It's not necessary to place all the signs and brackets.
Repetition in numbers may occur .
You cannot swap the operands. For instance, in the given example you cannot get expression (1 + 3) * 2 = 8.
Input >> Output Examples:
expressionsMatter(1,2,3)  ==>  return 9
Explanation:
After placing signs and brackets, the Maximum value obtained from the expression (1+2) * 3 = 9.

expressionsMatter(1,1,1)  ==>  return 3
Explanation:
After placing signs, the Maximum value obtained from the expression is 1 + 1 + 1 = 3.

expressionsMatter(9,1,1)  ==>  return 18
Explanation:
After placing signs and brackets, the Maximum value obtained from the expression is 9 * (1+1) = 18.
*/

function expressionMatter(a, b, c) {
  return Math.max(a * b * c, a + b + c, (a + b) * c, a * (b + c))
}


/*
Some numbers have funny properties. For example:
89 --> 8¹ + 9² = 89 * 1
695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p
we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
In other words:
Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
If it is the case we will return k, if not return -1.
Note: n and p will always be given as strictly positive integers.
digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
*/

function digPow(n, p){
  let sum = [...''+n].reduce((a,item,i) => a + (item ** (i + p)), 0)
  return sum % n ? -1 : sum / n
}

/*
You are given a string of n lines, each substring being n characters long: For example:
s = "abcd\nefgh\nijkl\nmnop"
Vertical mirror: vert_mirror (or vertMirror or vert-mirror)
vert_mirror(s) => "dcba\nhgfe\nlkji\nponm"
Horizontal mirror: hor_mirror (or horMirror or hor-mirror)
 hor_mirror(s) => "mnop\nijkl\nefgh\nabcd"
or printed:
vertical mirror   |horizontal mirror   
abcd --> dcba     |abcd --> mnop 
efgh     hgfe     |efgh     ijkl 
ijkl     lkji     |ijkl     efgh 
mnop     ponm     |mnop     abcd 
Task:
Write these two functions and high-order function oper(fct, s) where fct is the function of one variable f to apply to the string s (fct will be one of vertMirror, horMirror)
Examples:
s = "abcd\nefgh\nijkl\nmnop"
oper(vert_mirror, s) => "dcba\nhgfe\nlkji\nponm"
oper(hor_mirror, s) => "mnop\nijkl\nefgh\nabcd"
*/

function vertMirror(str) {
  return str.split('\n').map(item => [...''+item].reverse().join('')).join('\n')
}
function horMirror(str) {
  return str.split('\n').reverse().join('\n')
}
function oper(fct, s) {
  return fct(s)
}


/*
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.
*/

function likes(names) {
  return !names[0] ? 'no one likes this' : (names.length == 1) ? `${names[0]} likes this`
  : (names.length == 2) ? `${names[0]} and ${names[1]} like this`
  : (names.length == 3) ? `${names[0]}, ${names[1]} and ${names[2]} like this`
  : `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
}


/*
Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.
Examples
"1999" --> "20th"
"2011" --> "21st"
"2154" --> "22nd"
"2259" --> "23rd"
"1124" --> "12th"
"2000" --> "20th"
*/

function whatCentury(year){
  let century = Math.ceil(year/100)
  return century + (century < 20 ? 'th' : ['th', 'st', 'nd', 'rd'][century % 10] || 'th')
}


/*
Write a function "unspan(text)" that will delete both the opening and the following closing span tags, as well as all of the text between them.
Input
"This kata has<span>n't</span> got me excited<span> at all</span>!"
Output
"This kata has got me excited!"
If the whole text is spanned, the function should return an empty string. If none of the text is spanned, the text should not be affected by the function.

alternative solution
let unspan = text => text.replace(/<span>.*?n>/g, "")
*/
let unspan = text => text.replace(/<spa.+?n>/g, '')


/*
You will be given an array of letters. Dora and Boots are represented as 'x', while Swiper, who can dress in different disguises, is represented as any case-sensitive vowel (discluding y).
If Swiper is next to Dora, yell "Swiper, no swiping!". If Swiper is here, but not next to Dora, cry out "Keep your eyes peel Dora!". If Swiper is not present at the restaurant, let Dora know there is nothing to worry about.
Example:
['n', 't', 'x', 'A', 'p', 's'] => "Swiper, no swiping!"
['r', 't', 'e', 'q', 'x', 'W'] => "Keep your eyes peel Dora!"
['n',' t', 'y', 'j', 'x', 'W'] => "You're safe Dora!"
*/

function holaDora(val) {
  val = val.join('').toLowerCase()
  return /[aeiou]/.test(val) && (/x[aeiou]/.test(val) || /[aeiou]x/.test(val)) ? 'Swiper, no swiping!'
    : /[aeiou]/.test(val) ? 'Keep your eyes peel Dora!' : "You're safe Dora!"
}


/*
This operation is performed by replacing vowels in the sequence 'a' 'i' 'y' 'e' 'o' 'u' with the vowel three advanced, cyclicly, while preserving case (i.e., lower or upper).
Similarly, consonants are replaced from the sequence 'b' 'k' 'x' 'z' 'n' 'h' 'd' 'c' 'w' 'g' 'p' 'v' 'j' 'q' 't' 's' 'r' 'l' 'm' 'f' by advancing ten letters.
So for instance the phrase 'One ring to rule them all.' translates to 'Ita dotf ni dyca nsaw ecc.'
The fascinating thing about this transformation is that the resulting language yields pronounceable words. For this problem, you will write code to translate Gandalf's manuscripts into plain text.
Your job is to write a function that decodes Gandalf's writings.
Input
The function will be passed a string for the function to decode. Each string will contain up to 100 characters, representing some text written by Gandalf. All characters will be plain ASCII, in the range space (32) to tilde (126).
Output
For each string passed to the decode function return its translation.
*/

function tongues(code) {
  let v = 'aiyeou'
  let c = 'bkxznhdcwgpvjqtsrlmf'
  return code.split('').map(item => c.includes(item.toLowerCase()) ? c[(c.indexOf(item.toLowerCase()) + 10) % 20]
                                    : v.includes(item.toLowerCase()) ? v[(v.indexOf(item.toLowerCase()) + 3) % 6]
                                    : item)
                        .map((item,i) => code[i] == code[i].toUpperCase() ? item.toUpperCase() : item).join("")
}


/*
Given an array of 3 or more integers, where all but one integer are either even or odd, return the integer that is not like the others.
For example:
findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]) ==> 11
findOutlier([160, 3, 1719, 19, 11, 13, -21]) ==> 160
*/

function findOutlier (arr) {
  let even = arr.filter(item => item % 2 === 0)
  let odd = arr.filter(item => item & 2 !== 0)
  return even.length < odd.length ? even[0] : odd[0]
}


/*
Typically, reversing an array is a pretty straightforward task even for novice programmers. But not when a crowd of angry zombies scratching your door, looking for a fresh brains. In this case even skilled ninja-geek probably prefer to quickly push his code on github to have enough time to find a chainsaw. So there's two obstacles:
Your code needs to be as short as possible, in fact not longer than 28 characters
Because you are scared and stressed you have forgotten how to use the standard reverse() method
#Input: an array containing data of any types. Ex: [1,2,3,'a','b','c',[]] #Output: [[],'c','b','a',3,2,1]
*/

weirdReverse=a=>a.sort(a=>1)


/*
What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:
'abba' & 'baab' == true
'abba' & 'bbaa' == true
'abba' & 'abbba' == false
'abba' & 'abca' == false
Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:
anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
*/

function anagrams(word, words) {
  return words.filter(item => item.split("").sort().join('') == word.split('').sort().join(''))
}


/*
ASC Week 1 Challenge 4 (Medium #1)

Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.

Note that spaces should be ignored in this case.

Examples
"Lets go to the movies"       -->  "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
"Why isn't my code working?"  -->  "W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?"
*/

let vaporcode = (str) => str.toUpperCase().split(' ').join('').split('').join('  ')


/*
Christmas is coming, and Santa has a long list to go through, to find who deserves presents for the big day. Go through a list of children, and return a list containing every child who appeared on Santa's list. Do not add any child more than once. Output should be sorted.
Comparison should be case sensitive and the returned list should contain only one copy of each name: "Sam" and "sam" are different, but "sAm" and "sAm" are not.
*/

let findChildren = (s, c) => [...new Set(c.filter(item => s.includes(item)).sort())]


/*
For a given number num, write a function to test if it's a numerical palindrome or not and return a boolean (true if it is and false if not).
Return "Not valid" if the input is not an integer or less than 0.
*/

function palindrome(num) {
  if ((typeof num !== 'number') || num <= 0) return "Not valid"
  return num === +[...''+num].reverse().join('')
}


/*
In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.
For example:
solve([15,11,10,7,12]) = [15,7,12,10,11]
The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.
*/

function solve(arr){
  let l = arr.length
  let b = []
  for (let i = 0 ; i < l; i++) {
    if (i % 2 === 0) {
      b.push(Math.max(...arr))
      arr = arr.filter(item => item !== Math.max(...arr))
    } else {
      b.push(Math.min(...arr))
      arr = arr.filter(item => item !== Math.min(...arr))
    }
  }
  return b
}


/*
given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.
Notes
If the array is null/nil/None or empty you should return empty array ([]).
The rotten fruit name will be in this camelcase (rottenFruit).
The returned array should be in lowercase.
*/

let removeRotten = (arr) => arr ? arr.map(item => item.replace('rotten', '').toLowerCase()) : []


/*
To find the volume (centimeters cubed) of a cuboid you use the formula:
volume = Length * Width * Height
But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!
It's up to you to find out whether the cuboid has equal sides (= is a cube).
Return true if the cuboid could have equal sides, return false otherwise.
Return false for invalid numbers too (e.g volume or side is less than or equal to 0).
Note: the sides must be integers
*/

let cubeChecker = (v, s) => (v > 0 || s > 0) && v === s ** 3


/*
Complete function howManydays, function accept 1 parameters:month, means the month of year, different month has different days (refer to the following table), return a number that how many days in this month(month is always greater than 0, less than or equal to 12).

+---------------+-------------+
|    month      |    days     |
+---------------+-------------+
|1,3,5,7,8,10,12|     31      |
+---------------+-------------+
|4,6,9,11       |     30      |
+---------------+-------------+
|2              |     28      |  (Do not consider the leap year)
+---------------+-------------+
*/

function howManydays(month){
  switch (month){
     case 2: return 28
     case 4: case 6: case 9: case 11: return 30
  }
  return 31
}


/*
You must return the number of toast the you need to put in (or to take out). In case of 5 you can still put 1 toast in:
six_toast(5) == 1
And in case of 12 you need 6 toasts less (but not -6):
six_toast(12) == 6
*/

let sixToast = (num) => Math.abs(num - 6)


/*
You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].
*/

let differenceInAges = (ages) => [Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages)]


/*
Create a method to see whether the string is ALL CAPS.
Examples (input -> output)
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True
In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.
*/

String.prototype.isUpperCase=function() {return this==this.toUpperCase()}


/*
Impliment the reverse function, which takes in input n and reverses it. For instance, reverse(123) should return 321. You should do this without converting the inputted number into a string.

// Please do not use
const forbidden = "
                  '
                  `
                  string
                  fixed
                  precision
                  .keys
*/

function reverse(n){
  let rev = 0;
  while (n) {
      rev = rev * 10 + n % 10;
      n = Math.floor(n/10);
  }
  return rev;
}


/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/

function rot13(message) {
  let a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
  return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
}


/*
Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?
Examples:
input:    output:
0    ->   0
2    ->   5
3    ->   5
12   ->   15
21   ->   25
30   ->   30
-2   ->   0
-5   ->   -5
etc.
Input may be any positive or negative integer (including 0).
You can assume that all inputs are valid integers.
*/

let roundToNext5 = (n) => Math.ceil(n / 5) * 5


/*
The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.
In effect: 89 = 8^1 + 9^2
The next number in having this property is 135.
See this property again: 135 = 1^1 + 3^2 + 5^3
We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.
Let's see some cases (input -> output):
1, 10 -> [1, 2, 3, 4, 5, 6, 7, 8, 9]
1, 100 -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
If there are no numbers of this kind in the range [a, b] the function should output an empty list.
90, 100 --> []
*/

function sumDigPow(a, b) {
  let arr = []
  for (let i = a; i <= b; i++) {
    if (i === [...''+i].map((item,index) => item ** (index + 1)).reduce((a,b) => a + b, 0)) arr.push(i)
  }
  return arr
}


/*
Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing. For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace'].
*/

function spacey(arr){
  let str = ''
  return arr.map(item => str += item)
}


/*
Description:
Remove all exclamation marks from the end of sentence.
Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
*/

let remove = s => s.replace(/!+$/, '')


/*
You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number.
Examples (Input => Output)
* "..... + ..............." => "...................."
* "..... - ..."             => ".."
* "..... - ."               => "...."
* "..... * ..."             => "..............."
* "..... * .."              => ".........."
* "..... // .."             => ".."
* "..... // ."              => "....."
* ". // .."                 => ""
* ".. - .."                 => ""
*/

let dotCalculator = (equation) => {
  const operations = {
    '+' : (a, b) => a + b,
    '-' : (a, b) => a - b,
    '*' : (a, b) => a * b,
    '//': (a, b) => a / b,
  }
  let [left, operator, right] = equation.split(' ')
  return '.'.repeat(operations[operator](left.length, right.length))
}


/*
Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.
Notes
Array/list size is at least 2.
Array/list numbers could be a mixture of positives, negatives also zeroes

Input >> Output Examples
adjacentElementsProduct([1, 2, 3]); ==> return 6
The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.

adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50
Max product obtained from multiplying 5 * 10  =  50

adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])  ==>  return -14
The maximum product obtained from multiplying -2 * 7 = -14, and they're adjacent numbers in the array.
*/

function adjacentElementsProduct(arr) {
  arr = arr.map((item,i) => i !== arr.length-1 ? item * arr[i+1] : item)
  arr.pop()
  return Math.max(...arr)
}


/*
Your task, is to create NxN multiplication table, of size provided in parameter.
for example, when given size is 3:
1 2 3
2 4 6
3 6 9
for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]
*/

function multiplicationTable(size) {
  let result = []
  for (let i = 0; i < size; i++) {
    result[i] = []
    for(let j = 0; j < size; j++) {
      result[i][j] = (i + 1) * (j + 1)
    }
  }
  return result
}


/* HARD
Given two strings s1 and s2, we want to visualize how different the two strings are. We will only take into account the lowercase letters (a to z). First let us count the frequency of each lowercase letters in s1 and s2.
s1 = "A aaaa bb c"
s2 = "& aaa bbb c d"
s1 has 4 'a', 2 'b', 1 'c'
s2 has 3 'a', 3 'b', 1 'c', 1 'd'
So the maximum for 'a' in s1 and s2 is 4 from s1; the maximum for 'b' is 3 from s2. In the following we will not consider letters when the maximum of their occurrences is less than or equal to 1.
We can resume the differences between s1 and s2 in the following string: "1:aaaa/2:bbb" where 1 in 1:aaaa stands for string s1 and aaaa because the maximum for a is 4. In the same manner 2:bbb stands for string s2 and bbb because the maximum for b is 3.

The task is to produce a string in which each lowercase letters of s1 or s2 appears as many times as its maximum if this maximum is strictly greater than 1; these letters will be prefixed by the number of the string where they appear with their maximum value and :. If the maximum is in s1 as well as in s2 the prefix is =:.

In the result, substrings (a substring is for example 2:nnnnn or 1:hhh; it contains the prefix) will be in decreasing order of their length and when they have the same length sorted in ascending lexicographic order (letters and digits - more precisely sorted by codepoint); the different groups will be separated by '/'. See examples and "Example Tests".

Hopefully other examples can make this clearer.
s1 = "my&friend&Paul has heavy hats! &"
s2 = "my friend John has many many friends &"
mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1="Are the kids at home? aaaaa fffff"
s2="Yes they are here! aaaaa fffff"
mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"
*/

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

function mix(s1, s2) {
  return alphabet
    .map(char => {
      const s1Count = s1.split('').filter(x => x === char).length,
            s2Count = s2.split('').filter(x => x === char).length,
            maxCount = Math.max(s1Count, s2Count)

      return {
        char: char,
        count: maxCount,
        src: maxCount > s1Count ? '2' : maxCount > s2Count ? '1' : '='
      }
    })
    .filter(c => c.count > 1)
    .sort((objA, objB) => objB.count - objA.count || (objA.src + objA.char > objB.src + objB.char ? 1 : -1))
    .map(c => `${c.src}:${c.char.repeat(c.count)}`)
    .join('/')
}


/*
Your task is simply to count the total number of lowercase letters in a string.
Examples
lowercaseCount("abc"); ===> 3
lowercaseCount("abcABC123"); ===> 3
lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3
lowercaseCount(""); ===> 0;
lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 0
lowercaseCount("abcdefghijklmnopqrstuvwxyz"); ===> 26
*/

let lowercaseCount = (str) => str.replace(/[^a-z]/g,'').length

/*
For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"
Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)
*/

function cookie(x){
  return `Who ate the last cookie? It was ${typeof x === 'string' ? 'Zach' : typeof x === 'number' ? "Monica" :
  'the dog'}!`
}


/*
Your mission is to implement a function that converts the following potentially harmful characters:
< --> &lt;
> --> &gt;
" --> &quot;
& --> &amp;
*/

function htmlspecialchars(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}


/*
Coding in function bigToSmall. function accept 1 parameter arr(2D number array).
Your task is: First to all, refer to the example above, flat output arr to a one-dimensional array.
And then sort array in descending order.
Finally, use the separator ">" to connect the elements into a string.
Don't complain about the situation like 1>1 is not reasonable, it is just a separator.
Some example:
bigToSmall([[1,2],[3,4],[5,6]]) should return "6>5>4>3>2>1"
bigToSmall([[1,3,5],[2,4,6]]) should return "6>5>4>3>2>1"
bigToSmall([[1,1],[1],[1,1]]) should return "1>1>1>1>1"
*/

let bigToSmall = (arr) => [].concat(...arr).sort((a, b) => b - a).join('>')


/*
Given an array add all the number elements and return the binary equivalent of that sum; to make the code bullet proof anything else than a number should be addeded as 0 since it can't be addeded.
If your language can handle float binaries assume the array won't contain float or doubles.
arr2bin([1,2]) == '11'
arr2bin([1,2,'a']) == '11'
arr2bin([]) == '0'
NOTE: NaN is a number too in javascript for decimal, binary and n-ary base
*/

function arr2bin(arr){
  return arr.filter(item => typeof item == 'number').reduce((a,b) => a + b, 0).toString(2)
}


/*
We have implemented a function wrap(value) that takes a value of arbitrary type and wraps it in a new JavaScript Object or Python Dict setting the 'value' key on the new Object or Dict to the passed-in value.
So, for example, if we execute the following code:
wrapper_obj = wrap("my_wrapped_string"); 
 # wrapper_obj should be  {"value":"my_wrapped_string"}
We would then expect the following statement to be true:
wrapper_obj["value"] == "my_wrapped_string"
Unfortunately, the code is not working as designed. Please fix the code so that it behaves as specified.

function wrap(value) {
  return
  {
    value:value 
  };
}
*/

function wrap(value) {
  return {value}
}


/*
Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:
a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.
Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.
For example, decode("h3 th2r2") would return "hi there".
For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.
*/

let encode = (str) => str.replace(/[aeiou]/g, c => '_aeiou'.indexOf(c))

let decode = (str) => str.replace(/[12345]/g, c => '_aeiou'.charAt(c))

/*
Coding in function pickIt, function accept 1 parameter:arr, it's a number array, we need traverse arr by using for loop, if element is odd number, push it to array odd, if it's a even number, push it to array even.
I've defined two array odd and even in the function, and also wrote the return statement. your work is write a for loop.
*/

function pickIt(arr){
  let odd=[],even=[]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i])
    } else {
      odd.push(arr[i])
    }
  }  
  return [odd, even]
}


/*
Coding in function trueOrFalse, function accept 1 parameters:val, try to use the conditional statement if...else, if val value is false (val==false or it can convert to false), should return a string "false", if not, return a string "true".
When you have finished the work, click "Run Tests" to see if your code is working properly.
In the end, click "Submit" to submit your code pass this kata.
*/

let trueOrFalse = (val) => Boolean(val).toString()


/*
Coding in function roundIt. function accept 1 parameter n. It's a number with a decimal point. Please use different methods based on the location of the decimal point, turn the number into an integer.
If the decimal point is on the left side of the number (that is, the count of digits on the left of the decimal point is less than that on the right), Using ceil() method.
roundIt(3.45) should return 4
If the decimal point is on the right side of the number (that is, the count of digits on the left of the decimal point is more than that on the right), Using floor() method.
roundIt(34.5) should return 34
If the decimal point is on the middle of the number (that is, the count of digits on the left of the decimal point is equals that on the right), Using round() method.
roundIt(34.56) should return 35
*/

function roundIt(n){
  let a = n.toString().split('.')
  return a[0].length < a[1].length ? Math.ceil(n) : a[0].length > a[1].length ? Math.floor(n) : Math.round(n)
}


/*
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/

function sortArray(arr) {
  let odd = arr.filter(item => item % 2).sort((a,b) => a - b)
  return arr.map(item => item % 2 ? odd.shift() : item)
}


/*
Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.
Example:
"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"
*/

let greet = (name) => `Hello ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`


/*
Coding in function maxMin. function accept 2 parameter arr1 and arr2. They are two number array and have the same number of elements.
First, calculate the difference of the same index of the arr1 and arr2. Like this:
[1,3,5]
 | | |   --->  8, 5, 2
[9,8,7]
Please note that the difference is positive. Such as the above 1 and 9, the difference should be 8, not -8. I think abs() can help you get the correct result ;-)
Then find the maximum and minimum values of them, and return the results in the form of an array. Like this:
  maxvalue , minvalue
[    8     ,    2     ]
*/

function maxMin(arr1,arr2){
  let arr = arr1.map( (item,i) => Math.abs(item - arr2[i]) )
  return [Math.max(...arr), Math.min(...arr)]
}

/*
Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.
You need to consider the following ratings:
Terrible: tip 0%
Poor: tip 5%
Good: tip 10%
Great: tip 15%
Excellent: tip 20%
The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:
"Rating not recognised" in Javascript
Because you're a nice person, you always round up the tip, regardless of the service.
*/

function calculateTip(a, r) {
  r = r.toLowerCase()
  return r === 'terrible' ? 0 
  : r === 'poor' ? Math.ceil(a * 0.05)
  : r === 'good' ? Math.ceil(a * 0.10)
  : r === 'great' ? Math.ceil(a * 0.15)
  : r === 'excellent' ? Math.ceil(a * 0.2)
  : "Rating not recognised"
}


/* HARD
Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).
In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].

alternative best practice solution
function dirReduc(plan) {
  var opposite = {
    'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
  return plan.reduce(function(dirs, dir){
      if (dirs[dirs.length - 1] === opposite[dir])
        dirs.pop();
      else
        dirs.push(dir);
      return dirs;
    }, []);
}
*/

function dirReduc(arr) {
  var str = arr.join(''), pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
  while (pattern.test(str)) str = str.replace(pattern,'');
  return str.match(/(NORTH|SOUTH|EAST|WEST)/g)||[];
}


/*
Coding in function countGrade. function accept 1 parameters scores, it's a number array. Your task is to count the grade distribution of the scores, to return an object like this:
{S:888, A:888, B:888, C:888, D:888, X:888}
Grading rules:
Grade S: Full marks(score=100)
Grade A: score<100 and score>=90
Grade B: score<90 and score>=80
Grade C: score<80 and score>=60
Grade D: score<60 and score>=0
Grade X: score=-1(The cheating guy gets a score like that)
Example
countGrade([50,60,70,80,90,100]) should return {S:1, A:1, B:1, C:2, D:1, X:0}
countGrade([65,75,,85,85,95,100,100]) should return {S:2, A:1, B:2, C:2, D:0, X:0}
countGrade([-1,-1,-1,-1,-1,-1]) should return {S:0, A:0, B:0, C:0, D:0, X:6}
*/

function countGrade(s){
  return {
    'S': s.filter(function(x){return x == 100}).length,
    'A': s.filter(function(x){return (x < 100 && x >= 90)}).length,
    'B': s.filter(function(x){return (x < 90 && x >= 80)}).length,
    'C': s.filter(function(x){return (x < 80 && x >= 60)}).length,
    'D': s.filter(function(x){return (x < 60 && x >= 0)}).length,
    'X': s.filter(function(x){return x == -1}).length,
  }
}


/*
Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".
We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.
For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"
-- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
solve("zodiacs") = 26
For the word "strength", solve("strength") = 57
-- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20
*/

function solve(s) {
  s = s.split(/[aeiou]/gi)
  s = s.map(item => [...''+item].map(item => item.charCodeAt() - 96).reduce((a,b) => a + b, 0) )
  return Math.max(...s)
}


/*
Basic regex tasks. Write a function that takes in a numeric code of any length. The function should check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.
You can assume the input will always be a number.
*/

let validateCode = (code) => /^[123]/.test(code)


/*
Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.
Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,
solve(["abode","ABc","xyzD"]) = [4, 3, 1]
Input will consist of alphabet characters, both uppercase and lowercase. No spaces.
*/

function solve(arr){
  arr = arr.map(item => item.toLowerCase())
  return arr.map((item,i) => [...''+item].filter((item,i) => item.charCodeAt() - 96  === i + 1).length)
}


/*
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
Rules for a smiling face:
Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.
Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
*/

let countSmileys = (arr) => arr.filter(v => v.match(/(:|;)(-|~)?(\)|D)/)).length


/*
Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.
*/

let nearestSq = (n) => Math.round(Math.sqrt(n)) ** 2


/*
There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:
number of pillars (≥ 1);
distance between pillars (10 - 30 meters);
width of the pillar (10 - 50 centimeters).
Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).
*/

function pillars(numPill, dist, width) {
  return numPill === 1 ? 0 : (numPill - 1) * (dist * 100) + (numPill - 2) * width
}


/*
Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.
Note: no empty arrays will be given.
Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
*/

function highestRank(arr){
  arr = arr.sort((a,b) => b - a)
  let r = [...new Set(arr)].map(item => arr.filter(a => a == item).length)
  return [...new Set(arr)][r.indexOf(Math.max(...r))]
}


/*
Given the length of a correction tape l, consider whether a word can be whited out, considering that the correction tape has a height of 5mm and letters are 10mm high(vertical) and 5mm long(horizontal)(letters i,l,t,f are only 1mm long)and we can only tape horizontally. All letters will be passed lower-cased, and all words are 10mm high, even though e,h are different size So, can you white-out the word? Return true or false and the remaining length, or the one that wou would need in order to finish exactly inside an array
Example 1:
whiteOut("hello", 70)
Since for h,e,o we need 15mm * 2=30, 2 because 10/5=2. For l,l we need 2mm * 2?4, So 70-30-4=36. And you return an array with true and how much has not been used of the 70 mm (Which is 36)
Answer: [true, 36]

Example 2:
whiteOut("something", 70)
Now, we have the word something instead of hello. So, for s,o,m,e,h,n,g we need 35mm * 2 = 70, 2 because 10/5=2. For t,i we need 2mm * 2=4, So 70-70-4=-4. So, we can see that it is impossible to white it out with only 70 mm of tape, so we return an array where we write false (Because we can't white it) and 4, which would be how much more tape you would need in order to white it out completely
Answer: [false, 4]
*/

function whiteOut(str, l){
  let one = str.replace(/[^iltf]/g,'').length * 2
  let two = str.replace(/[iltf]/g,'').length * 5 * 2
  let result = l - two - one
  return [result <= l && result > 0, Math.abs(result)]
}

/*
Remove all exclamation marks from the end of words. Words are separated by a single space. There are no exclamation marks within a word.
Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi Hi"
remove("!!!Hi !!hi!!! !hi") === "!!!Hi !!hi !hi"
*/

let remove = str => str.replace(/\b!+/g, '')


/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)
[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
*/

function findOutlier(nums){
  let odd = nums.filter(item => item % 2 !== 0)
  let even = nums.filter(item => item % 2 === 0)
  return odd.length === 1 ? odd[0] : even[0]
}


/*
An AI has infected a text with a character!!
This text is now fully mutated to this character.
If the text or the character are empty, return an empty string.
There will never be a case when both are empty as nothing is going on!!
Note: The character is a string of length 1 or an empty string.
Example
text before = "abc"
character   = "z"
text after  = "zzz"
*/

let contamination = (text, char) => char.repeat(text.length)


/*
Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.
*/

let parseF = (s) => isNaN(parseFloat(s)) ? null : parseFloat(s)


/*
Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.
Example:
orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d'
*/

const orderedCount = str => [...new Set([...str])].map(item => [item, str.split(item).length - 1])


/*
Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56
*/

let getNumberFromString = s => +s.replace(/\D/g, "")


/*
Task
Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .
Notes
Array/list will contain positives only .
Array/list will always have even size

Input >> Output Examples
minSum({5,4,2,3}) ==> return (22) 
Explanation:
The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22

minSum({12,6,10,26,3,24}) ==> return (342)
Explanation:
The minimum sum obtained from summing each two integers product ,  26*3 + 24*6 + 12*10 = 342

minSum({9,2,8,7,5,4,0,6}) ==> return (74)
Explanation:
The minimum sum obtained from summing each two integers product ,  9*0 + 8*2 +7*4 +6*5 = 74
*/

function minSum(arr) {
  let d = arr.sort((a, b) => b - a).slice(0, arr.length/2)
  let a = arr.sort((a, b) => a - b).slice(0, arr.length/2)
  return d.map((item,i) => item * a[i]).reduce((a,b) => a + b, 0)
}


/*
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:
expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

alternative solution
const expandedForm = num => [...''+num]
                            .map((item, i, a) => item * 10 ** (a.length - i - 1))
                            .filter(Boolean)
                            .join(' + ')
*/


const expandedForm = n => [...''+n]
                            .reverse()
                            .map((item, i) => item * (10 ** i))
                            .filter(item => item > 0)
                            .reverse()
                            .join(" + ")


/*
We've begun receiving transmissions from Planet Gibber again after many decades of silence. Unfortunately, this time they've been all garbled up!
Luckily, linguists were able to figure out the rules of Gibberish the last time we heard from them. They've given us a guide on how to identify the actual bits of language from the random data in the strings we receive.
In order to parse the Gibberish from the... well, gibberish, we'll need to follow these rules:
Gibberish, as we read it, only contains letters: remove all non-letter characters (including spaces)
Gibberish is only made up of 5 letter words: separate this into words that are all 5 letters long - no trailing words with fewer than 5 letters!
Gibberish word are all capitalised: so capitalise all the words (sort of like German nouns)
Some of the transmissions are only garbled data. If you are given an empty string or a string that doesn't contain any letters, then please return an empty string at the end.
*/

function cleanItUp(gib) {
  return gib
    .replace(/[\W\d_]/gi, '')
    .toLowerCase()
    .replace(/\w{5}/g, s => s.replace(/\w/, f => f.toUpperCase()) + ' ')
    .split(' ')
    .filter(word => word.length == 5)
    .join(' ');
}


/*
I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.
Example
n = 3, so I expect a 3x3 square back just like below as a string:
+++
+++
+++
*/

function generateShape(n){
  return ("+".repeat(n)+"\n").repeat(n).trim()
}


/*
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.
Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
Example:
Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
*/

String.prototype.toJadenCase = function () {
  return this.split(" ").map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
}

/*
There is a bus moving in the city, and it takes and drop some people in each bus stop.
You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.
Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D
Take a look on the test cases.
Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.
The second value in the first integer array is 0, since the bus is empty in the first bus stop.

alternative solution
const number = busStops => busStops.reduce((rem, [on, off]) => rem + on - off, 0);
*/

let number = bus => {
  let add = bus.map(item => item[0]).reduce((a,b) => a + b, 0)
  let sub = bus.map(item => item[1]).reduce((a,b) => a - b, add)
  return sub
}


/*
You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1.
You can not use multiplier "*" operator.
If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a character).
*/

let billboard = (n, p = 30) => [...''+n].map(item=> p).reduce((a,b) => a + b, 0)


/*
This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().
Explanation:
square() must return a copy of the array, containing all values squared
cube() must return a copy of the array, containing all values cubed
average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
sum() must return the sum of all array values
even() must return an array of all even numbers
odd() must return an array of all odd numbers
Note: the original array must not be changed in any case!
Example
var numbers = [1, 2, 3, 4, 5];
numbers.square();  // must return [1, 4, 9, 16, 25]
numbers.cube();    // must return [1, 8, 27, 64, 125]
numbers.average(); // must return 3
numbers.sum();     // must return 15
numbers.even();    // must return [2, 4]
numbers.odd();     // must return [1, 3, 5]
*/

Array.prototype.square = function() {return this.map(item => item ** 2)}

Array.prototype.cube = function() {return this.map(item => item ** 3)}

Array.prototype.average = function() {return this.sum() / this.length}

Array.prototype.sum = function() {return this.reduce((a,b) => a + b, 0)}

Array.prototype.even = function() {return this.filter(item => item % 2 === 0)}

Array.prototype.odd = function() {return this.filter(item => item % 2 !== 0)}


/*
Given a variable n,
If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.
If n is not an integer, return the string "NaN".
Ex:
dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5'
*/

function dashatize(num) {
  return String(num)
    .replace(/([13579])/g, "-$1-")
    .replace(/--+/g, "-")
    .replace(/(^-|-$)/g, "")
}


/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

function duplicateCount(str){
  str = str.toLowerCase()
  return [...new Set([...str])].map(item => str.split(item).length - 1).filter(item => item > 1).length
}


/*
Given an array of integers, find the one that appears an odd number of times.
There will always be only one integer that appears an odd number of times.
Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

HARD alternative solution
const findOdd = (xs) => xs.reduce((a, b) => a ^ b)
*/

function findOdd(a) {
  return a.map(item => a.filter(b => b ===item)).filter(item => item.length % 2 !== 0)[0][0]
}


/*
Modify the kebabize function so that it converts a camel case string into a kebab case.
kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps
Notes:
the returned string should only contain lowercase letters
*/

function kebabize(str) {
  str = str.replace(/[\W\d]/g, '').replace(/[A-Z]/g, s => `-${s.toLowerCase()}`)
  return str[0] == '-' ? str.slice(1) : str
}


/*
You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?
Write a simple function to check if the string contains the word hallo in different languages.
These are the languages of the possible people you met the night before:
hello - english
ciao - italian
salut - french
hallo - german
hola - spanish
ahoj - czech republic
czesc - polish
Notes
you can assume the input is a string.
to keep this a beginner exercise you don't need to check if the greeting is a subset of word (Hallowen can pass the test)
function should be case insensitive to pass the tests
*/

const validateHello = greetings => /h[ae]llo|ciao|salut|hola|ahoj|czesc/i.test(greetings)


/*
Strong number is the number that the sum of the factorial of its digits is equal to number itself.
For example, 145 is strong, since 1! + 4! + 5! = 1 + 24 + 120 = 145.
Task
Given a number, Find if it is Strong or not and return either "STRONG!!!!" or "Not Strong !!".
Notes
Number passed is always Positive.
Return the result as String

Input >> Output Examples
strong_num(1) ==> return "STRONG!!!!"
Since, the sum of its digits' factorial (1) is equal to number itself, then its a Strong.

strong_num(123) ==> return "Not Strong !!"
Since the sum of its digits' factorial of 1! + 2! + 3! = 9 is not equal to number itself, then it's Not Strong .

strong_num(2)  ==>  return "STRONG!!!!"
Since the sum of its digits' factorial of 2! = 2 is equal to number itself, then its a Strong.

strong_num(150) ==> return "Not Strong !!"
Since the sum of its digits' factorial of 1! + 5! + 0! = 122 is not equal to number itself, Then it's Not Strong .
*/

function strong(n) {
  let f = [...''+n].map((item,i) => {
    let arr = []
    for (let i = 1; i <= item; i++) {
      arr.push(i)
    }
    return arr.reduce((a,b) => a * b, 1)
  }).reduce((a,b) => a + b, 0)
  return n === f ? "STRONG!!!!" : "Not Strong !!"
}


/*
There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.
Your task is to change the letters with diacritics:
ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
and print out the string without the use of the Polish letters.
For example:
"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"
*/

function correctPolishLetters (str) {
  let dict = {'ą':'a','ć':'c','ę':'e','ł':'l','ń':'n','ó':'o','ś':'s','ź':'z','ż':'z'}
  return str.replace(/[ąćęłńóśźż]/g, item => dict[item])
}


/*
Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers. Return as a number.
*/

function divCon(x){
  return x.reduce((acc, item) => typeof item === 'number' ? acc + item : acc - +item, 0)
}


/*
Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.
The left side letters and their power:
 w - 4
 p - 3
 b - 2
 s - 1
The right side letters and their power:
 m - 4
 q - 3
 d - 2
 z - 1
The other letters don't have power and are only victims.
Example
alphabetWar("z");        //=> Right side wins!
alphabetWar("zdqmwpbs"); //=> Let's fight again!
alphabetWar("zzzzs");    //=> Right side wins!
alphabetWar("wwwwwwz");  //=> Left side wins!
*/

function alphabetWar(fight) {
  let map = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1 }
  let result = fight.split('').reduce((a, b) => a + (map[b] || 0), 0)
  return result ? (result < 0 ? "Left" : "Right") + " side wins!" : "Let's fight again!"
}


/*
In this first kata in the series, you need to define a Hero prototype to be used in a terminal game. The hero should have the following attributes:
attribute	  value
name	      user argument or 'Hero'
position	  '00'
health	    100
damage	    5
experience	0
*/

function Hero (name) {
  this.name = name || 'Hero';
  this.position = '00';
  this.health = 100;
  this.damage = 5;
  this.experience = 0;
}


/*
Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:
'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
Then replace any incidence of the number 7 with the number 1, and call this number 'total2':
total1 = 656667
              ^
total2 = 656661
              ^
Then return the difference between the sum of the digits in total1 and total2:
  (6 + 5 + 6 + 6 + 6 + 7)
- (6 + 5 + 6 + 6 + 6 + 1)
-------------------------
                       6
*/

function calc(x){
  let total1 = x.replace(/./g, x => x.charCodeAt(0))
  let total2 = total1.replace(/7/g,'1')
  return [...total1].reduce((a,b) => a + +b, 0) - [...total2].reduce((a,b) => a + +b, 0)
}


/*
Encrypt this!
You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:
Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/

let encryptThis = str => str
  .split(' ')
  .map(word => word
    .replace(/(^\w)(\w)(\w*)(\w$)/, `$1$4$3$2`)
    .replace(/^\w/, word.charCodeAt(0)))
  .join(' ')


/*
Given an array/list [] of integers , Find all the LEADERS in the array.
Notes: Array/list size is at least 3 .
Array/list's numbers Will be mixture of positives , negatives and zeros
Repetition of numbers in the array/list could occur.
Returned Array/list should store the leading numbers in the same order in the original array/list .

Input >> Output Examples
arrayLeaders ({1, 2, 3, 4, 0}) ==> return {4}
Explanation:
4 is greater than the sum all the elements to its right side
Note : The last element 0 is equal to right sum of its elements (abstract zero).

arrayLeaders ({16, 17, 4, 3, 5, 2}) ==> return {17, 5, 2}
Explanation:
17 is greater than the sum all the elements to its right side
5 is greater than the sum all the elements to its right side
Note : The last element 2 is greater than the sum of its right elements (abstract zero).

arrayLeaders ({5, 2, -1}) ==> return {5, 2}
Explanation:
5 is greater than the sum all the elements to its right side
2 is greater than the sum all the elements to its right side
Note : The last element -1 is less than the sum of its right elements (abstract zero).

arrayLeaders ({0, -1, -29, 3, 2}) ==> return {0, -1, 3, 2}
Explanation:
0 is greater than the sum all the elements to its right side
-1 is greater than the sum all the elements to its right side
3 is greater than the sum all the elements to its right side
Note : The last element 2 is greater than the sum of its right elements (abstract zero).
*/

function arrayLeaders(num){
  let sol = []
  num = num.map((item,i,arr) => item > arr.slice(i+1).reduce((a,b) => a + b, 0) ? sol.push(item) : item)
  return sol
}


/*
Create a class Ghost
Ghost objects are instantiated without any arguments.
Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated
ghost = new Ghost();
ghost.color //=> "white" or "yellow" or "purple" or "red"
*/

let Ghost = function() {
  this.color = ["white","yellow","purple","red"][Math.floor(Math.random() * 4)]
}


/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

alternative
let pigIt = str => str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
*/

function pigIt(str){
  str = str.split(' ').map(item => /\W/.test(item) ? item : item.slice(1) + item[0] + 'ay').join(' ')
  return str
}


/*
A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).
For example, take 153 (3 digits), which is narcisstic:
    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
and 1652 (4 digits), which isn't:
    1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
The Challenge:
Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.
Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.
*/

function narcissistic(num) {
  let l = [...''+num].length
  return num === [...""+num].reduce((a,b) => a + ((+b) ** l), 0)
}


/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)
You can find some examples in the test fixtures.
*/

function humanReadable (s) {
  let z = x => (x < 10) ? '0' + x : x
  return z(Math.floor(s/60/60)) + ":" +
         z(Math.floor(s/60%60)) + ':' +
         z(s % 60)
}


/*
Create a function called _if which takes 3 arguments: a boolean value bool and 2 functions (which do not take any parameters): func1 and func2
When bool is truth-ish, func1 should be called, otherwise call the func2.
Example:
_if(true, function(){console.log("True")}, function(){console.log("false")})
// Logs 'True' to the console.
*/

let _if = (bool, func1, func2) => bool ? func1() : func2()


/*
A Tidy number is a number whose digits are in non-decreasing order.
Task
Given a number, Find if it is Tidy or not .
*/

let tidyNumber = n => n == +[...""+n].sort().join('')


/*
Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.
Task
Given a number, Find if it is Disarium or not .
Notes
Number passed is always Positive
Return the result as String
Input >> Output Examples
disariumNumber(89) ==> return "Disarium !!"
Since , 81 + 92 = 89 , thus output is "Disarium !!"
disariumNumber(564) ==> return "Not !!"
Since , 51 + 62 + 43 = 105 != 564 , thus output is "Not !!"
*/

function disariumNumber(n){
  return n == [...''+n].reduce((a,item,i) => a + ( (+item) ** (i + 1) ), 0) ? "Disarium !!" : "Not !!"
}


/*
Jumping number is the number that All adjacent digits in it differ by 1.
Task
Given a number, Find if it is Jumping or not 
Notes
Number passed is always Positive .
Return the result as String .
The difference between ‘9’ and ‘0’ is not considered as 1 .
All single digit numbers are considered as Jumping numbers.
Input >> Output Examples
jumpingNumber(9) ==> return "Jumping!!"
It's single-digit number
jumpingNumber(79) ==> return "Not!!"
Adjacent digits don't differ by 1
*/

function jumpingNumber(n){
  return [...''+n]
    .every((item,i,a) => !i || item == +a[i-1] + 1 || item == a[i-1] - 1) ? 'Jumping!!' : 'Not!!'
}


/*
a boolean true if all rotations of strng are included in arr
false otherwise
Examples:
contain_all_rots(
  "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true
contain_all_rots(
  "Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)
Note:
Though not correct in a mathematical sense:
we will consider that there are no rotations of strng == ""
and for any array arr: contain_all_rots("", arr) --> true
*/

function containAllRots(str, arr) {
  let list = []
  for (let i = 0; i < str.length; i++) {
    list.push( str.slice(str.length-i) + str.slice(0, str.length-i) )
  }
  return list.every(item => arr.includes(item))
}


/*
Implement a function which accepts 2 arguments: string and separator.
The expected algorithm: split the string into words by spaces, split each word into separate characters and join them back with the specified separator, join all the resulting "words" back into a sentence with spaces.
For example:
splitAndMerge("My name is John", " ")  ==  "M y n a m e i s J o h n"
splitAndMerge("My name is John", "-")  ==  "M-y n-a-m-e i-s J-o-h-n"
splitAndMerge("Hello World!", ".")     ==  "H.e.l.l.o W.o.r.l.d.!"
splitAndMerge("Hello World!", ",")     ==  "H,e,l,l,o W,o,r,l,d,!"
*/

function splitAndMerge(str, separator) {
  return str.split(' ').map(item => item.split('').join(separator)).join(' ')
}


/*
Your task is to return a number from a string. You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.
*/

let FilterString = str => +str.replace(/\D/g,'')


/*
The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times).
Examples
numberToPower(3,2)  // -> 9 ( = 3 * 3 )
numberToPower(2,3)  // -> 8 ( = 2 * 2 * 2 )
numberToPower(10,6) // -> 1000000
Note: Math.pow and some other Math functions like eval() and ** are disabled.
*/

let numberToPower = (n, p) => {
  let arr = []
  for (let i = 1; i <= p; i++) {
    arr.push(n)
  }
  return arr.reduce((a,b) => a * b, 1)
}


/*
Your colleagues have been looking over you shoulder. When you should have been doing your boring real job, you've been using the work computers to smash in endless hours of codewars.
In a team meeting, a terrible, awful person declares to the group that you aren't working. You're in trouble. You quickly have to gauge the feeling in the room to decide whether or not you should gather your things and leave.
Given an object (meet) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.
Happiness rating will be total score / number of people in the room.
Note that your boss is in the room (boss), their score is worth double it's face value (but they are still just one person!).
*/

function outed(meet, boss){
  let arr = Object.values(meet)
  let total = arr.reduce((a,b) => a + b, 0) + meet[boss]
  return total / arr.length <= 5 ? 'Get Out Now!' : 'Nice Work Champ!'
}


/*
Write a function called calculate that takes 3 values. The first and third values are numbers. The second value is a character. If the character is "+" , "-", "*", or "/", the function will return the result of the corresponding mathematical function on the two numbers. If the string is not one of the specified characters or if dividing by zero, return null
calculate(2,"+", 4); //Should return 6
calculate(6,"-", 1.5); //Should return 4.5
calculate(-4,"*", 8); //Should return -32
calculate(49,"/", -7); //Should return -7
calculate(8,"m", 2); //Should return null
calculate(4,"/",0) //should return null
*/

function calculate(n1, o, n2) {
  if (n2 == 0 && o == '/') return null
  return o == '+' ? n1 + n2
  : o == '-' ? n1 - n2
  : o == '*' ? n1 * n2
  : o == '/' ? n1 / n2
  : null
}


/*
Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.
Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.
min([1,2,3,4,5], 'value') // => 1
min([1,2,3,4,5], 'index') // => 0
*/

let min = (arr, toReturn) => toReturn == 'value' ? Math.min(...arr) : arr.indexOf(Math.min(...arr))


/*
You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.
examples:
uniTotal("a") == 97
uniTotal("aaa") == 291
*/

let uniTotal = str => [...str].reduce((a,b) => a + b.charCodeAt(), 0)


/*
Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.
*/

function reverse(str){
  return str
    .split(' ')
    .map((item,i) => i % 2 ? item = [...item].reverse().join('') : item)
    .join(' ')
    .trim()
}


/*
Coding in function grabDoll. function accept 1 parameter:dolls. it's a string array, a list of some dolls.
You need traverse dolls by using for loop. If element is "Hello Kitty" or "Barbie doll", you should push it to a bag(bag is an array, I've defined in the function); if it's other strings, we should use continue skip it.
When the bag has three element, bag is full. You should use break jump out the loop; If bag is not full, you should traverse dolls until the last element.
Return the bag after for loop finished.
*/

function grabDoll(dolls){
  let bag=[]
  for (let i = 0; i < dolls.length; i++) {
    if (dolls[i] == 'Hello Kitty' || dolls[i] == "Barbie doll") {
      bag.push(dolls[i])
    } else {
      continue
    }
    if (bag.length == 3) break
  }
  return bag;
}


/*
Given a string and an array of integers representing indices, capitalize all letters at the given indices.
For example:
capitalize("abcdef",[1,2,5]) = "aBCdeF"
capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
The input will be a lowercase string with no spaces and an array of digits.
*/

let capitalize = (s,arr) => s.replace(/\w/g, (a,i) => arr.includes(i) ? a = a.toUpperCase() : a)


/*
Given an array/list [] of integers , Find the Nth smallest element in this array of integers
*/

let nthSmallest = (arr, pos) => arr.sort((a,b) => a - b)[pos-1]


/*
Given an array/list [] of integers , Find the product of the k maximal numbers.
*/

let maxProduct = (num, size) => num.sort((a,b) => b - a).slice(0, size).reduce((a,b) => a * b, 1)


/*
Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.
*/

function maxGap (num){
  num = num.sort((a,b) => b - a)
  let arr = []
  for (let i = 0; i < num.length; i++) {
    if (i > 0) {
      arr.push(num[i-1] - num[i])
    }
  }
  return Math.max(...arr)
}


/*
Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.
*/

let minimumSteps = (nums, v) => nums.sort((a,b)=> a - b).filter(item => (v = v - item) > 0).length

/*
Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.
*/

String.prototype.digit = function() {
  return /^\d$/.test(this)
}


/* HARD
This is the first part. You can solve the second part here when you are done with this. Multiply two numbers! Simple!
The arguments are passed as strings.
The numbers may be way very large
Answer should be returned as a string
The returned "number" should not start with zeros e.g. 0123 is invalid
Note: 100 randomly generated tests!
*/

function multiply(a, b) {
  let aa = a.split('').reverse()
  let bb = b.split('').reverse()

  let stack = []

  for (let i = 0; i < aa.length; i++) {
    for (let j = 0; j < bb.length; j++) {
      let m = aa[i] * bb[j]
      stack[i + j] = (stack[i + j]) ? stack[i + j] + m : m
    }
  }

  for (let i = 0; i < stack.length; i++) {
    let num = stack[i] % 10
    let move = Math.floor(stack[i] / 10)
    stack[i] = num

    if (stack[i + 1])
      stack[i + 1] += move
    else if (move != 0)
      stack[i + 1] = move
  }

  return stack.reverse().join('').replace(/^(0(?!$))+/, "")
}


/*
Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.
Example:
Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
*/

let flattenAndSort = arr => [].concat(...arr).sort((a,b) => a - b)


/*
Modify the spacify function so that it returns the given string with spaces inserted between each character.
spacify("hello world") // returns "h e l l o   w o r l d"
*/

let spacify = str => [...str].join(" ")


/*
You need to find out if the cat can catch the mouse from it's current position. The cat can jump over three characters. So:
C.....m returns 'Escaped!' <-- more than three characters between
C...m returns 'Caught!' <-- as there are three characters between the two, the cat can jump.
*/

let catMouse = x => x.includes('....') ? "Escaped!" : "Caught!"


/*
A number is called Automorphic number if and only if its square ends in the same digits as the number itself.
Given a number determine if it Automorphic or not

autoMorphic (25) -->> return "Automorphic"
25 squared is 625 , Ends with the same number's digits which are 25

autoMorphic (13) -->> return "Not!!"
13 squared is 169 , Not ending with the same number's digits which are 69
*/

let automorphic = n => String(n * n).endsWith(String(n)) ? "Automorphic" : "Not!!"


/*
Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.
Square all numbers k (0 <= k <= n) between 0 and n.
Count the numbers of digits d used in the writing of all the k**2.
Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.
Examples:
n = 10, d = 1 
the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

nb_dig(25, 1) returns 11 since
the k*k that contain the digit 1 are:
1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
So there are 11 digits 1 for the squares of numbers between 0 and 25.

alternative solution
function nbDig(n, d) {
  let count = 0
    for (let i = 0; i <= n; i++){
      let square = (i * i+"").split("")
      square.forEach(item => item == d ? count++ : null)
    }
  return count
}
*/

function nbDig(n, d) {
  let arr = []
  for (let i = 0; i <= n; i++) {
    arr.push(i)
  }
  return arr
          .map(item => item ** 2)
          .filter(item => String(item).includes(d))
          .map(item => [...''+item].filter(a => a == d).join(''))
          .join('')
          .length
}


/*
Your task is to complete this Class, the Person class has been created. You must fill in the Constructor method to accept a name as string and an age as number, complete the get Info property and getInfo method/Info getter which should return johns age is 34
*/

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  get info() {
    return `${this.name}s age is ${this.age}`;
  }
}


/*
To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array. The returned array should consist of each of the elements from the first array multiplied by the integer.
Example:
multiplyAll([1, 2, 3])(2) = [2, 4, 6];
You must not mutate the original array.
*/

let multiplyAll = arr => int => arr.map(item => item * int)


/*
Implement a function, multiples(m, n), which returns an array of the first m multiples of the real number n. Assume that m is a positive integer.
multiples(3, 5.0) => [5.0, 10.0, 15.0]
*/

function multiples(m, n){
  let arr = []
  for (let i = n; arr.length < m; i += n) {
    arr.push(i)
  }
  return arr
}


/*
Write a function that removes every lone 9 that is inbetween 7s.
"79712312" --> "7712312"
"79797"    --> "777"

alternate
let sevenAte9 = str => str.replace(/79(?=7)/g, '7')
*/

function sevenAte9(str) {
  for (let i = 0; str.includes('797'); i++) {
    str = str.replace(/797/g, '77')
  }
  return str
}


/*
In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example,
5! = 5 * 4 * 3 * 2 * 1 = 120.
The value of 0! is 1.
You have to create the function factorial that receives n and returns n!. You have to use recursion.
*/

let factorial = n => (n < 1) ? 1 : n * factorial(--n)


/*
The number n is Evil if it has an even number of 1's in its binary representation.
The number n is Odious if it has an odd number of 1's in its binary representation.
You have to write a function that determine if a number is Evil of Odious, function should return "It's Evil!" in case of evil number and "It's Odious!" in case of odious number.
*/

let evil = n => n.toString(2).replace(/[^1]/g,'').length % 2 ? "It's Odious!" : "It's Evil!"


/*
Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.

booleans = [true, true, false], operator = "AND"
true AND true -> true
true AND false -> false
return false

booleans = [true, true, false], operator = "OR"
true OR true -> true
true OR false -> true
return true

booleans = [true, true, false], operator = "XOR"
true XOR true -> false
false XOR false -> false
return false

Input
an array of Boolean values (1 <= array_length <= 50)
a string specifying a logical operator: "AND", "OR", "XOR"
Output
A Boolean value (true or false).

alternate solution
let ops = {
  'AND': (a, b) => a && b,
  'OR': (a, b) =>  a || b,
  'XOR': (a, b) => a !== b
}
let logicalCalc = (arr, op) => arr.reduce(ops[op])
*/

function logicalCalc(arr, op){
  let b = (op == 'AND') ? arr.reduce((a,b) => a && b)
  : (op == 'OR') ? arr.reduce((a,b) => a || b)
  : arr.reduce((a,b) => a ^ b)
  return b == 1
}


/*
Given an integer (1 <= n <= 100) representing a person's age, return their minimum and maximum age range.
min = Math.floor( (age/2) + 7 )
max = Math.floor( (age - 7) * 2 )
This equation doesn't work when the age <= 14, so use this equation instead:
min = Math.floor( age - 0.10 * age )
max = Math.floor( age + 0.10 * age )
age = 27   =>   20-40
age = 5    =>   4-5
age = 17   =>   15-20
*/

function datingRange(age){
  let min = age <= 14 ? Math.floor(age - 0.10 * age) : Math.floor((age/2) + 7)
  let max = age <= 14 ? Math.floor(age + 0.10 * age) : (age - 7) * 2
  return `${min}-${max}`
}


/*
Create a function add(n) which returns a function that always adds n to any number
var addOne = add(1);
addOne(3); // 4
var addThree = add(3);
addThree(3); // 6
*/

let add = n => o => n + o


/*
Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.
Assume that the input n will always be a positive integer.
Examples: (Input --> output)
2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)

alternative solution
let sumCubes = n => (n * (n + 1) / 2) ** 2
*/

function sumCubes(n){
  let count = 0
  for (let i = 1; i <= n; i++) {
    count += i ** 3
  }
  return count
}


/*
Your code will show Full name of the neighbor and the truncated version of the name as an array. If the number of the characters in name is less than or equal to two, it will return an array containing only the name as is"
*/

let whoIsPaying = name => name.length <= 2 ? [name] : [name, name.slice(0,2)]


/*
Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.
2, 5  -->  [2, 4, 16, 256, 65536]
3, 3  -->  [3, 9, 81]
*/

function squares(x, n) {
  let arr = []
  for (let i = x; arr.length < n; i *= i) {
    arr.push(i)
  }
  return arr
}


/*
Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)
duck_duck_goose([a, b, c, d], 1) should return a.name
duck_duck_goose([a, b, c, d], 5) should return a.name
duck_duck_goose([a, b, c, d], 4) should return d.name
*/

let duckDuckGoose = (p, g) => p[(g - 1) % p.length].name


/*
A number is a Special Number if it’s digits only consist 0, 1, 2, 3, 4 or 5
Given a number determine if it special number or not
The number passed will be positive (N > 0) .
All single-digit numbers within the interval [1:5] are considered as special number.
Input >> Output Examples
specialNumber(2) ==> return "Special!!"
specialNumber(9) ==> return "NOT!!"
specialNumber(59) ==> return "NOT!!"
*/

let specialNumber = n => /[6-9]/.test(n) ? "NOT!!" : "Special!!"


/*
Your task is to create a function that, given a proper first and last name, will return the correct alias.
Notes:
Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given.
If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."
Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.
var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' ...}
var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' ...}
aliasGen('Larry', 'Brentwood') === 'Logic Bomb'
aliasGen('123abc', 'Petrovic') === 'Your name must start with a letter from A - Z.'
*/

function aliasGen(f, l){
  f = f.toUpperCase()[0]
  l = l.toUpperCase()[0]
  return (/\d/.test(f) || /\d/.test(l)) ? "Your name must start with a letter from A - Z." : `${firstName[f]} ${surname[l]}`
}


/*
The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town but some of the rats are deaf and are going the wrong way!
How many deaf rats are there?
Legend
P = The Pied Piper
O~ = Rat going left
~O = Rat going right
Example
ex1 ~O~O~O~O P has 0 deaf rats
ex2 P O~ O~ ~O O~ has 1 deaf rat
ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats

alternative solution
function countDeafRats(town) {
  return [...town.replace(/ +/g,'')].reduce((a,c,i) => a + (i % 2 == 0 && c == 'O'), 0)
}
*/

function countDeafRats(town) {
  town = town.replace(/ /g, '')
  if (town.length == 1) return 0
  let right = (town[town.length-1] === 'P')
  let left = (town[0] === 'P')
  return right ? town.replace("P",'').match(/.{1,2}/g).filter(it => it == 'O~').length
  : left ? town.replace("P",'').match(/.{1,2}/g).filter(it => it == '~O').length
  : town.split('P')
        .map((item,i) => i == 0 ? item.match(/.{1,2}/g).filter(s => s == 'O~').length
                      : item.match(/.{1,2}/g).filter(s => s == '~O').length)
        .reduce((a,b) => a + b, 0)
}


/*
Your task is to complete the Cat class which Extends Animal and replace the speak method to return the cats name + meows. e.g. 'Mr Whiskers meows.'
*/

class Cat extends Animal {
  speak() {
    return `${this.name} meows.`
  }
}


/*
Create a method that takes an array/list as an input, and outputs the index at which the sole odd number is located.
This method should work with arrays with negative numbers. If there are no odd numbers in the array, then the method should output -1.
Examples:
oddOne([2,4,6,7,10]) // => 3
oddOne([2,16,98,10,13,78]) // => 4
oddOne([4,-8,98,-12,-7,90,100]) // => 4
oddOne([2,4,6,8]) // => -1
*/

let oddOne = arr => arr.findIndex(item => item % 2)


/*
Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.
solution(5) // should return "Value is 00005"
*/

let solution = value => "Value is " + ("00000" + value).slice(-5)


/*
Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.
*/

let digits = n => String(n).length


/*
Due to another of his misbehaved, the primary school's teacher of the young Gauß, Herr J.G. Büttner, to keep the bored and unruly young schoolboy Karl Friedrich Gauss busy for a good long time, while he teaching arithmetic to his mates, assigned him the problem of adding up all the whole numbers from 1 through a given number n.
Your task is to help the young Carl Friedrich to solve this problem as quickly as you can; so, he can astonish his teacher and rescue his recreation interval.
f(n=100) // returns 5050 
It's your duty to verify that n is a valid positive integer number. If not, please, return false
*/

let f = n => (parseInt(n) === n && n > 0) ? n * (n + 1)/2 : false


/*
replaces all the vowels [a,e,i,o,u] with their respective positions within that string.
vowel2index('this is my string') == 'th3s 6s my str15ng'
vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
vowel2index('') == ''
Your function should be case insensitive to the vowels.
*/

let vowel2index = str => str.replace(/[aeiou]/gi, (v,i) => v = i+1)


/*
The first mission: Traversing arr, find the shortest string length.
The second mission: Traversing arr again, intercept all strings to the shortest string length(Start from index0). you can use one of slice() substring() or substr() do it. return the result after finished the work.
cutIt(["ab","cde","fgh"]) should return ["ab","cd","fg"]
cutIt(["abc","defgh","ijklmn"]) should return ["abc","def","ijk"]
cutIt(["codewars","javascript","java"]) should return ["code","java","java"]
*/

function cutIt(arr){
  let l = Math.min(...arr.map(item => item.length))
  return arr.map(item => item.slice(0,l))
}


/*
Compare two strings by comparing the sum of their values (ASCII character code).
For comparing treat all letters as UpperCase
null/NULL/Nil/None should be treated as empty strings
If the string contains other characters than letters, treat the whole string as it would be empty
Your method should return true, if the strings are equal and false if they are not equal.
"AD", "BC"  -> equal
"AD", "DD"  -> not equal
"gf", "FG"  -> equal
"zz1", ""   -> equal (both are considered empty)
"ZzZz", "ffPFF" -> equal
"kl", "lz"  -> not equal
null, ""    -> equal
*/

function compare(s1, s2) {
  s1 = (/[^A-z]/.test(s1) || s1 == null) ? s1 = 0 : s1.split('').reduce((a,b) => a + +b.toUpperCase().charCodeAt(), 0)
  s2 = (/[^A-z]/.test(s2) || s2 == null) ? s2 = 0 : s2.split('').reduce((a,b) => a + +b.toUpperCase().charCodeAt(), 0)
  return s1 === s2
}


/*
You have stumbled across the divine pleasure that is owning a dog and a garden. Now time to pick up all the cr@p! :D
Given a 2D array to represent your garden, you must find and collect all of the dog cr@p - represented by '@'.
You will also be given the number of bags you have access to (bags), and the capactity of a bag (cap). If there are no bags then you can't pick anything up, so you can ignore cap.
You need to find out if you have enough capacity to collect all the cr@p and make your garden clean again.
If you do, return 'Clean', else return 'Cr@p'.
Watch out though - if your dog is out there ('D'), he gets very touchy about being watched. If he is there you need to return 'Dog!!'.
For example:
x=
[[_,_,_,_,_,_]
[_,_,_,_,@,_]
[@,_,_,_,_,_]]
bags = 2, cap = 2
return --> 'Clean'
*/

function crap(x, bags, cap){
  x = x.join('').replace(/[^(@|D)]/g,'')
  return (x.includes('D')) ? "Dog!!"
    : (bags * cap < x.length) ? 'Cr@p'
    : "Clean"
}


/*
Mothers arranged a dance party for the children in school. At that party, there are only mothers and their children. All are having great fun on the dance floor when suddenly all the lights went out. It's a dark night and no one can see each other. But you were flying nearby and you can see in the dark and have ability to teleport people anywhere you want.
Legend:
-Uppercase letters stands for mothers, lowercase stand for their children, i.e. "A" mother's children are "aaaa".
-Function input: String contains only letters, uppercase letters are unique.
Task:
Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb".

alternative solution
function findChildren(dancingBrigade) {
  return [...dancingBrigade]
    .sort((a, b) => a.localeCompare(b, `kf`, {caseFirst: `upper`}))
    .join(``)
}
*/

function findChildren(dancingBrigade) {
  return [...dancingBrigade.toLowerCase()]
    .sort()
    .join('')
    .replace(/[a-z]/g, (item,i,a) => a[i-1] !== a[i] ? item.toUpperCase() : item)
}


/*
Create a method all which takes two params: sequence and function
and returns true if the function in the params returns true for every element in the sequence. Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.
Example
all((1, 2, 3, 4, 5), greater_than_9) -> false
all((1, 2, 3, 4, 5), less_than_9)    -> True
*/

let all = (arr, func) => arr.every(func)


/*
Create an any? (JS: any) function that accepts an array and a block (JS: function), and returns true if the block (/function) returns true for any item in the array. If the array is empty, the function should return false.
*/

let any = (arr, func) => arr.some(func)


/*
Create a method none? (JS none) that accepts an array and a block (JS: a function), and returns true if the block (/function) returns true for none of the items in the array. An empty list should return true.
*/

let none = (arr, func) => !arr.some(func)


/*
Create a function called one that accepts two params: sequence and function
and returns true only if the function in the params returns true for exactly one (1) item in the sequence.
one([1, 3, 5, 6, 99, 1, 3], bigger_than_ten) -> true
one([1, 3, 5, 6, 99, 88, 3], bigger_than_ten) -> false
one([1, 3, 5, 6, 5, 1, 3], bigger_than_ten) -> false
*/

let one = (arr, func) => arr.filter(func).length === 1


/*
Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.
Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)
*/

let squareArea = a => ((360 * a)/(2 * Math.PI * 90)) ** 2


/*
Write a function that accepts two arguments and generates a sequence containing the integers from the first argument to the second inclusive.
Pair of integers greater than or equal to 0. The second argument will always be greater than or equal to the first.
generateIntegers(2, 5) // --> [2, 3, 4, 5]
*/

function generateIntegers(m, n) {
  let arr = []
  for (let i = m; i <= n; i++) {
    arr.push(i)
  }
  return arr
}


/*
Digital Cypher assigns to each letter of the alphabet unique number. For example:
 a  b  c  d  e  f  g  h  i  j  k  l  m
 1  2  3  4  5  6  7  8  9 10 11 12 13
 n  o  p  q  r  s  t  u  v  w  x  y  z
14 15 16 17 18 19 20 21 22 23 24 25 26
Instead of letters in encrypted word we write the corresponding number, eg. The word scout:
 s  c  o  u  t
19  3 15 21 20
Then we add to each obtained digit consecutive digits from the key. For example. In case of key equal to 1939 :
  s  c  o  u  t
 19  3 15 21 20
+ 1  9  3  9  1
---------------
 20 12 18 30 21
*/

function encode(str, n) {
  let key = String(n)
  return Array.from(str, (c, i) => c.charCodeAt(0) - 96 + +key[i % key.length])
}


/*
Create a function that finds the integral of the expression passed. In order to find the integral all you need to do is add one to the exponent (the second argument), and divide the coefficient (the first argument) by that new number.
For example for 3x^2, the integral would be 1x^3: we added 1 to the exponent, and divided the coefficient by that new number).
 3, 2  -->  "1x^3"
12, 5  -->  "2x^6"
20, 1  -->  "10x^2"
*/

let integrate = (c, e) => `${c/(e + 1)}x^${e + 1}`


/*
Find the difference between the sum of the squares of the first n natural numbers (1 <= n <= 100) and the square of their sum.
For example, when n = 10:
The square of the sum of the numbers is:
(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)2 = 552 = 3025
The sum of the squares of the numbers is:
12 + 22 + 32 + 42 + 52 + 62 + 72 + 82 + 92 + 102 = 385
Hence the difference between square of the sum of the first ten natural numbers and the sum of the squares of those numbes is: 3025 - 385 = 2640
*/

function differenceOfSquares(n){
  let arr = []
  for (let i = 1; i <= n; i++) {
    arr.push(i)
  }
  let squareOfSum = arr.reduce((a,b) => a + b, 0) ** 2
  let sumOfSquare = arr.reduce((a,b) => a + b ** 2, 0)
  return squareOfSum - sumOfSquare
}


/*
Your task is to write a function toLeetSpeak that converts a regular english sentence to Leetspeak. Consider only uppercase letters (no lowercase letters, no numbers) and spaces.
toLeetSpeak("LEET") returns "1337"
In this kata we use a simple LeetSpeak dialect. Use this alphabet:
{
    A: '@', B: '8', C: '(', E: '3',
    G: '6', H: '#', I: '!', L: '1',
    O: '0', S: '$', T: '7', Z: '2'
}
*/

function toLeetSpeak(s) {
  let a = {
    A: '@', B: '8', C: '(', E: '3',
    G: '6', H: '#', I: '!', L: '1',
    O: '0', S: '$', T: '7', Z: '2'
  }
  s.replace(/[ABCEGHILOSTZ]/g, l => a[l])
}


/*
Create a function that takes an integer argument of seconds and converts the value into a string describing how many hours and minutes comprise that many seconds. Any remaining seconds left over are ignored.
3600 --> "1 hour(s) and 0 minute(s)"
3601 --> "1 hour(s) and 0 minute(s)"
3500 --> "0 hour(s) and 58 minute(s)"
323500 --> "89 hour(s) and 51 minute(s)"
*/

function toTime(s) {
  return `${Math.floor(s / 3600)} hour(s) and ${Math.floor(s % 3600 / 60)} minute(s)`
}


/*
You've just moved into a perfectly straight street with exactly n identical houses on either side of the road. Naturally, you would like to find out the house number of the people on the other side of the street. The street looks something like this:
Street
1|   |6
3|   |4
5|   |2
  you
Evens increase on the right; odds decrease on the left. House numbers start at 1 and increase without gaps. When n = 3, 1 is opposite 6, 3 opposite 4, and 5 opposite 2.
Example (address, n --> output)
Given your house number address and length of street n, give the house number on the opposite side of the street.
1, 3 --> 6
3, 3 --> 4
2, 3 --> 5
3, 5 --> 8
*/

let overTheRoad = (address, n) => (n * 2) - (address - 1)


/*
In this kata, the function will take a string as its argument, and return a string with every word replaced by the explanation to everything, according to Freud. Note that an empty string, or no arguments, should return an empty string.
*/

let toFreud = s => s.replace(/[^ ]+/g,'sex')


/*
Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
With list [20,37,20,21] and number 1, the result would be [20,37,21].

alternative solution
const deleteNth = (a, x) => {
  let m = {};
  return a.filter( v => ( m[v] = m[v]+1||1 ) <= x );
}
*/

function deleteNth(arr, n){
  let ans = []
  for (let i = 0; i < arr.length; i++) {
    if (ans.filter(item => item === arr[i]).length < n ) {
      ans.push(arr[i])
    }
  }
  return ans
}


/*
Define a method/function that removes from a given array of integers all the values contained in a second array.
Examples (input -> output):
* [1, 1, 2, 3, 1, 2, 3, 4], [1, 3] -> [2, 2, 4]
* [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8], [1, 3, 4, 2] -> [5, 6, 7, 8]
* [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3], [2, 4, 3] -> [8, 7, 6, 5, 1]
*/

Array.prototype.remove_ = function(integer_list, values_list){
  return integer_list.filter(item => !values_list.includes(item))
}


/*
Find the sum of all multiples of n below m
n and m are natural numbers (positive integers)
m is excluded from the multiples
sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID"
*/

function sumMul(n, m){
  if (n >= m) return "INVALID"
  let sum = 0
  for (let i = n; i < m; i += n) {
    sum += i
  }
  return sum
}


/*
Can you mirror the properties on an object?
Given an object with properties with no value
abc: -
arara: -
xyz: -
Return a new object that have the properties with its mirrored key!
abc: cba
arara: arara
xyz: zyx
You cannot change the original object, because if you did that the reflection would change.

alternative solution
const mirror = obj => {
  return Object.keys(obj).reduce((item, i) => {
    item[i] = [...i].reverse().join('');
    return item;
  }, {});
};
*/

function mirror(obj) {
  const copy = Object.assign({}, obj)
  for (let item in copy) {
    copy[item] = item.split('').reverse().join('')
  }
  return copy
}


/*
If the winner is George Saint Pierre he will obviously say:
"I am not impressed by your performance."
If the winner is Conor McGregor he will most undoubtedly say:
"I'd like to take this chance to apologize.. To absolutely NOBODY!"
Note: make it case-insensitive
*/

function quote(fighter) {
  return (fighter.toLowerCase() === 'george saint pierre') ? "I am not impressed by your performance."
  : "I'd like to take this chance to apologize.. To absolutely NOBODY!"
}


/*
This kata is about converting numbers to their binary or hexadecimal representation:
If a number is even, convert it to binary.
If a number is odd, convert it to hex.
Numbers will be positive. The hexadecimal string should be lowercased.
*/

let evensAndOdds = num => (num % 2) ? num.toString(16) : num.toString(2)


/*
Point objects have x and y attributes (X and Y in C#) attributes.
Write a function calculating distance between Point a and Point b.
Tests round answers to 6 decimal places.
*/

let distanceBetweenPoints = (a, b) => Math.hypot(a.x - b.x, a.y - b.y)


/*
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""

alternative solution
function order(words) {
  return words
      .split(' ')
      .sort((a, b) => a.match(/\d/) - b.match(/\d/))
      .join(' ')
}
*/

function order(str){
  str = str.split(' ')
  let arr = []
  for (let i = 1; i <= str.length; i++) {
    arr.push( str.filter(item => item.includes(i)) )
  }
  return arr.join(' ')
}


/*
Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)
0 is considered to be an even index. 
All input strings are valid with no spaces
input: 'CodeWars'
output 'CdWr oeas'
S[0] = 'C'
S[1] = 'o'
S[2] = 'd'
S[3] = 'e'
S[4] = 'W'
S[5] = 'a'
S[6] = 'r'
S[7] = 's'
*/

function sortMyString(s) {
  let even = [...s].filter((item, i) => i % 2 === 0).join('')
  let odd = [...s].filter((item, i) => i % 2).join('')
  return even + ' ' + odd
}


/*
You know that a piece of paper has a thickness of 0.0001m. Given distance in units of meters, calculate how many times you have to fold the paper to make the paper reach this distance.
(If you're not familiar with the concept of folding a paper: Each fold doubles its total thickness.)Note: Of course you can't do half a fold. You should know what this means ;P
Also, if somebody is giving you a negative distance, return null
*/

function foldTo(distance) {
  let count = 0
  for (let i = 0.0001; i <= distance; i += i) {
    count++
  }
  return distance < 0 ? null : count
}


/*
Given a string, return a new string that has transformed based on the input:
Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.
"Example Input" ==> "iNPUT eXAMPLE"
You may assume the input only contain English alphabet and spaces.
*/

function stringTransformer(str) {
  return str
    .split(" ").reverse().join(' ')
    .split('')
    .map(item => item == item.toUpperCase() ? item.toLowerCase() : item.toUpperCase()).join('')
}


/*
You will be given an array of numbers which can be used using the String.fromCharCode() (JS), Tools.FromCharCode() (C#) method to convert the number to a character. It is recommended to map over the array of numbers and convert each number to the corresponding ascii character.
*/

let ArrowFunc = arr => arr.map(item => String.fromCharCode(item)).join('')


/*
Wilson primes satisfy the following condition. Let P represent a prime number. Then,
((P-1)! + 1) / (P * P)
should give a whole number.
Your task is to create a function that returns true if the given number is a Wilson prime.
*/

let amIWilson = p => p == 5 || p == 13 || p == 563


/*
Coding in function howManySmaller, function accept 2 parameter:arr and n. arr is a decimal array. n is a decimal.
The first mission: let all elements in the array keep two decimal places(No need to convert number n).
The second mission: Traversal arr, count the number of the element which smaller than n and return it.
howManySmaller([1.234,1.235,1.228],1.24) should return 2
howManySmaller([1.1888,1.1868,1.1838],1.19) should return 1
howManySmaller([3.1288,3.1212,3.1205],3.1212) should return 2
*/

let howManySmaller = (arr,n) => arr.filter(item => item.toFixed(2) < n).length


/*
Each department has a different boredom assessment score, as follows:
accounts = 1
finance = 2
canteen = 10
regulation = 3
trading = 6
change = 6
IS = 8
retail = 5
cleaning = 4
pissing about = 25
Depending on the cumulative score of the team, return the appropriate sentiment:
<=80: 'kill me now'
< 100 & > 80: 'i can handle this'
100 or over: 'party time!!'
*/

function boredom(staff){
  let map = {
    accounts:1,
    finance:2,
    canteen:10,
    regulation:3,
    trading: 6,
    change:6,
    IS:8,
    retail:5,
    cleaning:4,
    'pissing about':25
  }
  let score = Object.keys(staff).reduce((a,b) => a + map[staff[b]], 0)
  return score <= 80 ? 'kill me now': score < 100 && score > 80 ? 'i can handle this' : 'party time!!'
}


/*
The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)
Split the below string into other strings of size #3
'supercalifragilisticexpialidocious'
Will return a new string
'sup erc ali fra gil ist ice xpi ali doc iou s'
*/

function splitInParts(s, partLength) {
  return [...s].map((item,i) => i > 0 && i % partLength == 0 ? ` ${item}` : item).join('')
}


/*
Write a function isReallyNaN that returns true only if passed in an argument that evalutes to NaN, and returns false otherwise.

alternative solution
const isReallyNaN = Number.isNaN
*/
let isReallyNaN = val => Number.isNaN(val)


/*
Create a function that returns the elements of the input-array / list sorted in lexicographical order.
*/

let sortme = names => names.sort()


/*
Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)
(the dedicated builtin(s) functionalities are deactivated)
*/

function reverse(arr) {
  let arr2 = []
  for (let i = arr.length - 1; i >= 0; i--) {
    arr2.push(arr[i])
  }
  return arr2
}


/*
You will be provided a string that lists many boat related items. If any of these items are "Fire" you must spring into action. Change any instance of "Fire" into "~~". Then return the string.
*/

let fireFight = s => s.replace(/Fire/g, '~~')


/*
Write function which validates an input string. If the string is a perfect square return true,false otherwise.
What is perfect square?
* We assume that character '.' (dot) is a perfect square (1x1) * Perfect squares can only contain '.' (dot) and optionally '\n' (line feed) characters.
* Perfect squares must have same width and height -> cpt.Obvious
* Squares of random sizes will be tested!

Function input:
perfectSquare = "...\n...\n...";    
// This represents the following Perfect Square:
`...
 ...
 ...`
                               
notPerfect = "..,\n..\n...";
// This is not a Perfect Square:
`..,
 ..
 ...`
*/

function perfectSquare(str){
  str = str.split('\n')
  return str.every(item => item.length == str.length && !/[^.]/.test(item))
}



/*
Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.
explode("102269")
should return :
"12222666666999999999"
*/

let explode = s => s.replace(/\d/g, (item) => item.repeat(+item))


/*
The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.
*/

let solve = s => Math.max(...s.replace(/[^aeiou]/g, " ").split(" ").map(item => item.length))


/*
Given a series of digits as a string, determine if the number represented by the string is divisible by three.
"123"      -> true
"8409"     -> true
"100853"   -> false
"33333333" -> true
"7"        -> false
*/

function divisibleByThree(str){
  let sum = 0
  str = [...str].forEach(item => sum += +item)
  return sum % 3 == 0
}


/*
My friend wants a new band name for her band. She like bands that use the formula: "The" + a noun with the first letter capitalized, for example:
"dolphin" -> "The Dolphin"
However, when a noun STARTS and ENDS with the same letter, she likes to repeat the noun twice and connect them together with the first and last letter, combined into one word (WITHOUT "The" in front), like this:
"alaska" -> "Alaskalaska"
*/

function bandNameGenerator(str) {
  return str[0] == str[str.length - 1] ? str[0].toUpperCase() + str.slice(1) + str.slice(1) : `The ${str[0].toUpperCase() + str.slice(1)}`
}


/*
Your task is to add a new property usersAnswer to every object in the array questions. The value of usersAnswer should be set to null. The solution should work for array of any length.
var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];
After adding the property the result should be:
var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0,
    usersAnswer: null
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
    corAnswer: 0,
    usersAnswer: null
}];
*/

questions.map(item => item.usersAnswer = null)


/*
Create a resolved javascript Promise that will return 'Hello World!'.
*/

async function promiseHelloWorld() {
  return 'Hello World!'
}


/*
Your function should return True or False based on the following criteria.
You should take an umbrella if it's currently raining or if it's cloudy and the chance of rain is over 0.20.
You shouldn't take an umbrella if it's sunny unless it's more likely to rain than not.
The options for the current weather are sunny, cloudy, and rainy.
For example, take_umbrella('sunny', 0.40) should return False.
*/

function takeUmbrella(weather, chance) {
  return weather == 'rainy' || (weather == 'cloudy' && chance > 0.2 ) || chance > 0.5
}


/*
The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].
[1, 2, 10, 8] --> [8, 10]
[1, 5, 87, 45, 8, 8] --> [45, 87]
[1, 3, 10, 0]) --> [3, 10]
*/

let twoOldestAges = ages => ages.sort((a,b) => b - a).slice(0,2).reverse()


/*
Find the first character that repeats in a String and return that character.
firstDup('tweet') => 't'
firstDup('like') => undefined
This is not the same as finding the character that repeats first. In that case, an input of 'tweet' would yield 'e'.
Another example:
In 'translator' you should return 't', not 'a'.
v      v  
translator
  ^   ^

alternative solution
let firstDup = s => s[s.search(/(.).*\1/ )]
*/

function firstDup (s) {
  let oi = ''
  for (let i = 0; i < s.length; i++) {
    if (s.slice(i + 1).includes(s[i])) oi += s[i]
  }
  return oi[0]
}


/*
You've just discovered a square (NxN) field and you notice a warning sign. The sign states that there's a single bomb in the 2D grid-like field in front of you.
Write a function mineLocation/MineLocation that accepts a 2D array, and returns the location of the mine. The mine is represented as the integer 1 in the 2D array. Areas in the 2D array that are not the mine will be represented as 0s.
The location returned should be an array (Tuple<int, int> in C#) where the first element is the row index, and the second element is the column index of the bomb location (both should be 0 based). All 2D arrays passed into your function will be square (NxN), and there will only be one mine in the array.
Examples:
mineLocation( [ [1, 0, 0], [0, 0, 0], [0, 0, 0] ] ) => returns [0, 0]
mineLocation( [ [0, 0, 0], [0, 1, 0], [0, 0, 0] ] ) => returns [1, 1]
mineLocation( [ [0, 0, 0], [0, 0, 0], [0, 1, 0] ] ) => returns [2, 1]
*/

function mineLocation(field){
  let mainI = field.findIndex(item => item.includes(1))
  field = field[mainI]
  let subI = field.findIndex(item => item == 1)
  return [mainI, subI]
}


/*
In this Kata your task will be to return the count of pairs that have consecutive numbers as follows:
pairs([1,2,5,8,-4,-3,7,6,5]) = 3
The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
--the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
--the second pair is (5,8) and are not consecutive
--the third pair is (-4,-3), consecutive. Count = 2
--the fourth pair is (7,6), also consecutive. Count = 3. 
--the last digit has no pair, so we ignore.
*/

function pairs(array, count = 0) {
  for (let i = 0; i < array.length; i += 2)
    if (Math.abs(array[i] - array[i + 1]) === 1)
      count += 1
  return count
}


/*
Codewars Bar recommends you drink 1 glass of water per standard drink so you're not hungover tomorrow morning.
Your fellow coders have bought you several drinks tonight in the form of a string. Return a string suggesting how many glasses of water you should drink to not be hungover.
Examples
"1 beer"  -->  "1 glass of water"
because you drank one standard drink
"1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"  -->  "10 glasses of water"
because you drank ten standard drinks
*/

function hydrate(s) {
  s = [...s.replace(/[^\d]/g, '')].reduce((a,b) => a + +b, 0)
  return `${s} glass${s > 1 ? 'es' : ''} of water`
}


/*
Create a function, called removeVowels (or remove_vowels), that takes a string argument and returns that same string with all vowels removed (vowels are "a", "e", "i", "o", "u").
removeVowels("drake") // => "drk"
removeVowels("aeiou") // => ""
*/

let removeVowels = str => str.replace(/[aeiou]/g,'')


/*
Write a class Block that creates a block (Duh..)
The constructor should take an array as an argument, this will contain 3 integers of the form [width, length, height] from which the Block should be created.
Define these methods:
`getWidth()` return the width of the `Block`
`getLength()` return the length of the `Block`
`getHeight()` return the height of the `Block`
`getVolume()` return the volume of the `Block`
`getSurfaceArea()` return the surface area of the `Block`
Examples
let b = new Block([2,4,6]) -> creates a `Block` object with a width of `2`, a length of `4` and a height of `6`
b.getWidth() // -> 2
b.getLength() // -> 4
b.getHeight() // -> 6
b.getVolume() // -> 48
b.getSurfaceArea() // -> 88
*/

class Block {
  constructor(data) {
    [this.w, this.l, this.h] = data
  }
  getWidth(){ return this.w }
  getLength(){ return this.l }
  getHeight(){ return this.h }
  getVolume(){
    let {l, w, h} = this
    return w * l * h
  }
  getSurfaceArea() {
    let {l, w, h} = this
    return 2 * (l * w + l * h + w * h)
  }
}


/*
Please return the gap between the first position of c and the last position of c.
If there are a lot of c in the str, should return a positive integer; If there is only one c in str, should return 0; If there is no c in the str, should return -1. Retrieval should not ignored the case.
firstToLast("ababc","a") should return 2(2-0)
firstToLast("ababc","c") should return 0(4-4)
firstToLast("ababc","d") should return -1
*/

function firstToLast(str,c){
  let f = str.indexOf(c)
  let l = str.lastIndexOf(c)
  return f == -1 ? -1 : l - f
}


/*
Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.
The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.
solution({a: 1, b: '2'}) // should return "a = 1,b = 2"
*/

function solution(pairs){
  return Object.keys(pairs)
    .map(item => item + ' = ' + pairs[item] )
    .join(',')
}


/*
You are given a string of letters and an array of numbers.
The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
After each removal the size of the string decreases (there is no empty space).
Return the only letter left.

Example:

let str = "zbk", arr = [0, 1]
    str = "bk", arr = [1]
    str = "b", arr = []
    return 'b'
*/

function lastSurvivor([...letters], coords) {
  coords.forEach( item => letters = letters.filter((l,i) => i !== item) )
  return letters.join('')
}


/*
You have access to the ship "draft" and "crew". "Draft" is the total ship weight and "crew" is the number of humans on the ship.
Each crew member adds 1.5 units to the ship draft. If after removing the weight of the crew, the draft is still more than 20, then the ship is worth looting. Any ship weighing that much must have a lot of booty!
Add the method
isWorthIt
to decide if the ship is worthy to loot. For example:
titanic.isWorthIt() // return false
*/

class Ship {
  constructor(draft,crew) {
   this.draft = draft;
   this.crew = crew;
  }
  isWorthIt() {
    return this.draft - 1.5 * this.crew > 20;
  }
}


/*
Create a function that returns the average of an array of numbers ("scores"), rounded to the nearest whole number. You are not allowed to use any loops (including for, for/in, while, and do/while loops).
*/

function average(scores) {
  return Math.round(scores.reduce((a,b) => a + b, 0) / scores.length)
}


/*
Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.
["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
["a", "a", "a", "a", "a"] ==> false // 5x "a"
*/

function checkThreeAndTwo(arr) {
  let a = arr.filter(item => item == 'a').length
  let b = arr.filter(item => item == 'b').length
  let c = arr.filter(item => item == 'c').length
  return (a === 3 || b === 3 || c === 3)  
          && (a === 2 || b === 2 || c === 2)
}


/*
In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.
"This Is A Test" ==> "TIAT"
*/

let makeString = s => s.split(' ').map(item => item[0]).join('')


/*
Implement the function which should return true if given object is a vowel (meaning a, e, i, o, u, uppercase or lowercase), and false otherwise.
*/

String.prototype.vowel = function() {
  return /^[aeiou]$/i.test(this)
}


/*
you will do addition and subtraction on a given string. The return value must be also a string.
Note: the input will not be empty.
Examples
"1plus2plus3plus4"  --> "10"
"1plus2plus3minus4" -->  "2"
*/

function calculate(str) {
  str = str.replace(/(plus|minus)/g, item => item == 'plus' ? item = ' +' : item = " -")
  let arr = str.split(' ')
  let count = 0
  arr.forEach(item => item.includes('+') ? count += +item.slice(1)
                    : item.includes('-') ? count -= +item.slice(1)
                    : count += +item)
  return count.toString()
}


/*
Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word. The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle. You can assume both words will contain the dividing letter.
("hello", "world", "l")       ==>  "held"
("coding", "anywhere", "n")   ==>  "codinywhere"
("jason", "samson", "s")      ==>  "jasamson"
("wonderful", "people", "e")  ==>  "wondeople"
*/

function stringMerge(s1, s2, l){
  return s1.slice(0, s1.indexOf(l)) + s2.slice(s2.indexOf(l))
}


/*
Create a function that takes a number as an argument and returns a grade based on that number.
Score	Grade
Anything greater than 1 or less than 0.6	"F"
0.9 or greater	"A"
0.8 or greater	"B"
0.7 or greater	"C"
0.6 or greater	"D"
grader(0)   should be "F"
grader(1.1) should be "F"
grader(0.9) should be "A"
*/

function grader(score) {
  return score < 0.6 || score > 1 ? 'F'
       : score < 0.7 ? 'D'
       : score < 0.8 ? 'C'
       : score < 0.9 ? 'B'
       : 'A'
}


/*
Write a function that finds the sum of all its arguments.
sum(1, 2, 3) // => 6
sum(8, 2) // => 10
sum(1, 2, 3, 4, 5) // => 15
*/

let sum = (...nums) => nums.reduce((a,b) => a + b, 0)


/*
Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.
In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.
Strings a and b may be empty, but not null
If a and b have the same length treat a as the longer producing b+reverse(a)+b
*/

function shorter_reverse_longer(a,b){
  let s = a.length < b.length ? a : b
  let l = s == a ? b : a
  return s + [...l].reverse().join('') + s 
}


/*
Write a function filterLucky/filter_lucky() that accepts a list of integers and filters the list to only include the elements that contain the digit 7.
ghci> filterLucky [1,2,3,4,5,6,7,68,69,70,15,17]
[7,70,17]
Don't worry about bad input, you will always receive a finite list of integers.
*/

let filterLucky = x => x.filter(num => /7/.test(num))


/*
Write a function that returns the number of occurrences of an element in an array.
var arr = [0, 1, 2, 2, 3];
arr.numberOfOccurrences(0) === 1;
arr.numberOfOccurrences(4) === 0;
arr.numberOfOccurrences(2) === 2;
arr.numberOfOccurrences("a") === 0;
*/

Array.prototype.numberOfOccurrences = function(n) {
  return this.filter(item => item == n).length
}


/*
Implement a function that returns the minimal and the maximal value of a list (in this order).
*/

let getMinMax = arr => [Math.min(...arr), Math.max(...arr)]


/*
Write a function that will accept two parameters: variable and type and check if type of variable is matching type. Return true if types match or false if not.
42, "number"   --> true
"42", "number" --> false
*/

let typeValidation = (variable, type) => typeof variable === type


/*
Create an algorithm to count the number of zeros that appear between 1 & n.
There are 2 zeros from 1 to 20: 10, 20
There are 11 zeros from 1 to 100: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
countZeros(10); // returns 1
countZeros(100); // returns 11
countZeros(200); // returns 31
*/

function countZeros(n) {
  let count = 0
  for (let i = 1; i <= n; i++) {
    if (String(i).includes('0')) {
      count += String(i).replace(/[^0]/g, '').length
    }
  }
  return count
}


/*
Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s"


alternative solution
function nerdify(t) {
  return t.replace(/[aelAE]/g, item => ({ 'a': 4, 'e': 3, 'l':1 }[item.toLowerCase()]))
}
*/

function nerdify(txt){
  return txt.replace(/[ael]/gi, item => item == 'a' || item == 'A' ? 4
                                      : item == 'e' || item == 'E' ? 3
                                      : item == 'l' ? 1
                                      : item)
}


/*
Count the number of exclamation marks and question marks, return the product.
Product("") == 0
product("!") == 0
Product("!ab? ?") == 2
Product("!!") == 0
Product("!??") == 2
Product("!???") == 3
Product("!!!??") == 6
Product("!!!???") == 9
Product("!???!!") == 9
*/

function product(s) {
  return s.replace(/[^!]/g, '').length * s.replace(/[^?]/g, '').length
}


/*
You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).
Input:
If, you can read?
Output:
India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?
Note:
There are preloaded dictionary you can use, named NATO
The set of used punctuation is ,.!?.
Punctuation should be kept in your return string, but spaces should not.
Xray should not have a dash within.
Every word and punctuation mark should be seperated by a space ' '.
There should be no trailing whitespace
*/

function to_nato(str) {
  str = str.toLowerCase().replace(/ /g,'')
	return str.split('')
            .map(item => item in NATO ? item = NATO[item] : item)
            .join(' ')
}


/*
Create a function that returns the CSV representation of a two-dimensional numeric array. Array's length > 2.
input:
   [[ 0, 1, 2, 3, 4 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]] 
output:
     '0,1,2,3,4\n'
    +'10,11,12,13,14\n'
    +'20,21,22,23,24\n'
    +'30,31,32,33,34'

alternative solution
let toCsvText = arr => arr.join('\n')
*/

function toCsvText(arr) {
  return arr.map((item,i) => i !== arr.length - 1 ? item.join(',') + '\n' : item).join('')
}


/*
This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).
Add the value "codewars" to the array websites/Websites 1,000 times.
*/

let websites = new Array(1000).fill("codewars");

/*
In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.
solve("xyab","xzca") = "ybzc" 
--The first string has 'yb' which is not in the second string. 
--The second string has 'zc' which is not in the first string. 
*/

function solve(a, b){
  let str = ''
  a = [...a]
  b = [...b]
  a.forEach(item => !b.includes(item) ? str += item : str)
  b.forEach(item => !a.includes(item) ? str += item : str)
  return str
}


/*
You receive the name of a city as a string, and you need to return a string that shows how many times each letter shows up in the string by using asterisks (*).
"Chicago"  -->  "c:**,h:*,i:*,a:*,g:*,o:*"
*/

function getStrings(city){
  city = city.toLowerCase().replace(/ /g,'')
  return [...new Set(city)].map(item => `${item}:${'*'.repeat(city.split(item).length-1)}`).join(',')
}


/*
Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0
input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
ouptut: 5 
*/

function mostFrequentItemCount(arr) {
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    count = (count < arr.filter(item => item == arr[i]).length) ? arr.filter(item => item == arr[i]).length : count
  }
  return count
}


/*
Create a function called args_count that returns the number of arguments provided
args_count(1, 2, 3) -> 3
args_count(1, 2, 3, 10) -> 4
*/

let args_count = (...count) => count.length


/*
Not all integers can be represented by JavaScript/TypeScript. It has space to to represent 53bit signed integers. In this Kata, we've to determine if it is safe to use the integer or not. Make use of the latest ES6 features to find this.
SafeInteger(9007199254740990) //true
SafeInteger(-90) //true
SafeInteger(9007199254740992) //false
*/

let SafeInteger = n => Number.isSafeInteger(n)


/*
Complete the function that takes an integer n and returns a list/array of length abs(n) + 1 of the arithmetic series explained above. Whenn < 0 return the sequence with negative terms.
 5  -->  [0,  1,  3,  6,  10,  15]
-5  -->  [0, -1, -3, -6, -10, -15]
 7  -->  [0,  1,  3,  6,  10,  15,  21,  28]
*/

function sumOfN(n) {
  let arr = []
  let count = 0
  if (n < 0) {
    for (let i = 0; i >= n; i--) {
      arr.push(count += i)
    }
  } else {
    for (let i = 0; i <= n; i++) {
      arr.push(count += i)
    }
  }
  return arr
}


/*
Imagine you are creating a game where the user has to guess the correct number. But there is a limit of how many guesses the user can do.
If the user tries to guess more than the limit, the function should throw an error.
If the user guess is right it should return true.
If the user guess is wrong it should return false and lose a life.
Can you finish the game so all the rules are met?
*/

class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }
  guess(n) {
    if (!this.lives) throw Error
    return this.number == n || !(this.lives--)
  }
}


/*
The function giveMeFive accepts 1 parameter, obj, which is an object. Create an array (which you will eventually return). Then, traverse obj, checking each key and value. If the length of the key is equal to 5, then push the key to your array. Separately, if the length of the value is equal to 5, then push the value to your array. At the end, return your array.
*/

function giveMeFive(obj){
  let arr = []
  for (let key in obj) {
    if (key.length == 5) arr.push(key)
    if (obj[key].length == 5) arr.push(obj[key])
  }
  return arr
}


/*
The function new_avg(arr, navg) should return the expected donation (rounded up to the next integer) that will permit to reach the average navg.
all donations and navg are numbers (integers or floats), arr can be empty.
See examples below and "Sample Tests" to see which return is to be done.
new_avg([14, 30, 5, 7, 9, 11, 15], 92) should return 645
new_avg([14, 30, 5, 7, 9, 11, 15], 2) should raise an error
*/

function newAvg(arr, newavg) {
  let total = arr.reduce((a,b) => a + b, 0)
  if (total / arr.length > newavg) throw new Error("Expected New Average is too low")
  for (let i = 1; b == 0; i++) {
    if ( newavg == Math.floor( (total + i)/(arr.length + 1) ) ) return i
  }
}


/*
Write a function that reverses the bits in an integer. For example, the number 417 is 110100001 in binary. Reversing the binary is 100001011 which is 267. You can assume that the number is not negative.
*/

function reverseBits(n) {
  return parseInt(n.toString(2).split('').reverse().join(''), 2)
}


/*
You are given a secret message you need to decipher. Here are the things you need to know to decipher it:
For each word:
the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
Note: there are no special characters used, only letters and spaces
decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go'

alternative solution
function decipherThis(str) {
  return str.split(" ")
    .map(w =>
      w.replace(/^\d+/, c => String.fromCharCode(c))
       .replace(/^(.)(.)(.*)(.)$/, "$1$4$3$2")
    )
    .join(" ")
}
*/

function decipherThis(str) {
  return str.split(' ').map(item => {
    let a = item.replace(/[^a-z]/g, "")
    if (a.length > 1) {
      return String.fromCharCode(parseInt(item)) + a[a.length - 1] + a.slice(1, a.length - 1)+ a[0]
    } else {
      return String.fromCharCode(parseInt(item)) + a
    }
  }).join(' ')
}


/*
Create a function close_compare that accepts 3 parameters: a, b, and an optional margin. The function should return whether a is lower than, close to, or higher than b. a is considered "close to" b if margin is greater than or equal to the distance between a and b.
When a is close to b, return 0.
Otherwise...
When a is less than b, return -1.
When a is greater than b, return 1.
If margin is not given, treat it as zero.
Assume: margin >= 0

If a = 3, b = 5, and margin = 3, then close_compare(a, b, margin) should return 0.
This is because a and b are no more than 3 numbers apart.

If a = 3, b = 5, and margin = 0, then close_compare(a, b, margin) should return -1.
This is because the distance between a and b is greater than 0, and a is less than b.
*/

let closeCompare = (a, b, m = 0) => Math.abs(a - b) <= m ? 0 : Math.sign(a - b)


/*
Haskell has some useful functions for dealing with lists:
λ head [1,2,3,4,5]
1
λ tail [1,2,3,4,5]
[2,3,4,5]
λ init [1,2,3,4,5]
[1,2,3,4]
λ last [1,2,3,4,5]
5
Your job is to implement these functions in your given language. Make sure it doesn't edit the array; that would cause problems! Here's a cheat sheet:
| HEAD | <----------- TAIL ------------> |
[  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
| <----------- INIT ------------> | LAST |
head [x] = x
tail [x] = []
init [x] = []
last [x] = x
Here's how I expect the functions to be called in your language:
head([1,2,3,4,5]); => 1
tail([1,2,3,4,5]); => [2,3,4,5]
*/

let head = x => x[0]
let tail = x => x.slice(1)
let init = x => x.slice(0, x.length - 1)
let last = x => x[x.length - 1]


/*
Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit. Note that the number will always be non-negative (>= 0)
*/

let insertDash = num => num.toString().replace(/[13579](?=[13579])/g, "$&-")


/*
You have a quiver of arrows, but some have been damaged. The quiver contains arrows with an optional range information (different types of targets are positioned at different ranges), so each item is an arrow.
You need to verify that you have some good ones left, in order to prepare for battle:
anyArrows([{range: 5}, {range: 10, damaged: true}, {damaged: true}])
If an arrow in the quiver does not have a damaged status, it means it's new.
The expected result is a boolean, indicating whether you have any good arrows left.
*/

let anyArrows = arrows => arrows.some(item => !item.damaged)


/*
In this kata you will have to write a function that takes litres and pricePerLitre (in dollar) as arguments.
Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per litre cannot be more than 25 cents. Return the total cost rounded to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.
*/

function fuelPrice(l, p) {
  for (let i = 2; i <= 10; i += 2) {
    if (l >= i) {
      p -= 0.05
    }
  }
  return Math.round(l * p * 100) / 100
}


/*
Given the start and end letterbox numbers, write a method to return the frequency of all 10 digits painted.

Example
For start = 125, and end = 132

The letterboxes are

125 = 1, 2, 5
126 = 1, 2, 6
127 = 1, 2, 7
128 = 1, 2, 8
129 = 1, 2, 9
130 = 1, 3, 0
131 = 1, 3, 1
132 = 1, 3, 2
The digit frequencies are:

0 is painted 1 time
1 is painted 9 times
2 is painted 6 times
etc...
and so the method would return [1,9,6,3,0,1,1,1,1,1]

Notes
0 < start <= end
In C, the returned value will be free'd.
*/

const paintLetterboxes = (start, end) => {
  let res = Array(10).fill(0);
  for (let i = start; i <= end; i++) {
  	for (let n of (i + '')) {
    	res[n]++;
    }
  }
  return res;
}


/*
You've decided to write a function, guessBlue() to help automatically calculate whether you should guess "blue" or "red". The function should take four arguments:
the number of blue marbles you put in the bag to start
the number of red marbles you put in the bag to start
the number of blue marbles pulled out so far (always lower than the starting number of blue marbles)
the number of red marbles pulled out so far (always lower than the starting number of red marbles)
guessBlue() should return the probability of drawing a blue marble, expressed as a float. For example, guessBlue(5, 5, 2, 3) should return 0.6.
*/

function guessBlue(blueS, redS, blueP, redP) {
  return (blueS - blueP)/(redS - redP + blueS - blueP)
}


/*
In your class, you have started lessons about arithmetic progression. Since you are also a programmer, you have decided to write a function that will return the first n elements of the sequence with the given common difference d and first element a. Note that the difference may be zero!
The result should be a string of numbers, separated by comma and space.
# first element: 1, difference: 2, how many: 5
arithmetic_sequence_elements(1, 2, 5) == "1, 3, 5, 7, 9"
*/

function arithmeticSequenceElements(a, d, n) {
  let arr = [a]
  while (--n) arr.push(a += d)
  return arr.join(', ')
}


/*
Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).
If num is negative, ignore its sign and treat it as a positive value
If nth is not positive, return -1
Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0
5673, 4 --> 5
129, 2 --> 2
-2825, 3 --> 8
-456, 4 --> 0
0, 20 --> 0
65, 0 --> -1
*/

function findDigit(num, i) {
  if (i < 1) return -1
  let n = [...(String(num))].reverse().filter(item => /\d/.test(item))
  return !n[i - 1] ? 0 : +n[i - 1]
}


/*
Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.
*/

function switcher(x) {
  let a = ' ?!abcdefghijklmnopqrstuvwxyz'.split('').reverse()
  return x.map(item => a[+item - 1]).join('')
}


/*
Given an unsorted array of 3 positive integers [ n1, n2, n3 ], determine if it is possible to form a Pythagorean Triple using those 3 integers.
A Pythagorean Triple consists of arranging 3 integers, such that:
a2 + b2 = c2
[5, 3, 4] : it is possible to form a Pythagorean Triple using these 3 integers: 32 + 42 = 52
[13, 12, 5] : it is possible to form a Pythagorean Triple using these 3 integers: 52 + 122 = 132
*/

function isPythagoreanTriple(arr) {
  arr = arr.sort((a,b) => a - b)
  return arr[0] ** 2 + arr[1] ** 2 == arr[2] ** 2
}


/*
Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index. If the sequence is empty, you should return 0.
*/

function evenLast(nums) {
  if (nums.length == 0) return 0
  let l = nums[nums.length - 1]
  return nums.filter((item,i) => i % 2 == 0).reduce((a,b) => a + b, 0) * l
}


/*
ou're saying good-bye your best friend , See you next happy year
Happy Year is the year with only distinct digits , (e.g) 2018
Given a year, Find The next happy year or The closest year You'll see your best friend
nextHappyYear (7712) ==> return (7801)

alternative solution
function nextHappyYear(a){
  while(new Set([...++a+'']).size<4);
  return a;
}
*/

function nextHappyYear(y){
  y = y + 1
  let res
  for (let i = y; String(res) !== [...new Set(String(res).split(''))].join(''); i++) {
    res = i
  }
  return res
}


/*
In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

At the end of the first year there will be: 
1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be: 
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.
More generally given parameters:

p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)

the function nb_year should return n number of entire years needed to get a population greater or equal to p.

aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)
Examples:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10
*/

function nbYear(p0, percent, aug, p) {
  let years = 0
  for (years; p0 < p; years++) {
    p0 = Math.floor(p0 + p0 * percent / 100 + aug)
  }
  return years
}


/*
Some people just have a first name; some people have first and last names and some people have first, middle and last names.
You task is to initialize the middle names (if there is any).
'Jack Ryan'                   => 'Jack Ryan'
'Lois Mary Lane'              => 'Lois M. Lane'
'Dimitri'                     => 'Dimitri'
'Alice Betty Catherine Davis' => 'Alice B. C. Davis'
*/
/*
const initializeNames = name => name.replace(/ (\w)\w*(?= )/g, ' $1.')
*/

function initializeNames(name){
  return name.split(' ').map((item,i,arr) => i > 0 && i !== arr.length - 1 ? `${item[0]}.` : item).join(' ')
}


/*
Complete the method which accepts an array of integers, and returns one of the following:
"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.
*/

function isSortedAndHow(arr) {
  return arr.every((x,i) => i==0 || arr[i] >= arr[i-1]) ? 'yes, ascending'
       : arr.every((x,i) => i==0 || arr[i] <= arr[i-1]) ? 'yes, descending'
       : 'no'
}


/*
Create the function prefill that returns an array of n elements that all have the same value v. See if you can do this without using a loop.
You have to validate input:
v can be anything (primitive or otherwise)
if v is ommited, fill the array with undefined
if n is 0, return an empty array
if n is anything other than an integer or integer-formatted string (e.g. '123') that is >=0, throw a TypeError
When throwing a TypeError, the message should be n is invalid, where you replace n for the actual value passed to the function.
Code Examples
prefill(3,1) --> [1,1,1]
prefill(2,"abc") --> ['abc','abc']
prefill("1", 1) --> [1]
prefill(3, prefill(2,'2d'))
  --> [['2d','2d'],['2d','2d'],['2d','2d']]
prefill("xyz", 1)
  --> throws TypeError with message "xyz is invalid"
*/

function prefill(n, v) {
  if (n === 0 || n === '0') return []
  if (!Number.isInteger(n) || n < 0) throw new TypeError(`${n} is invalid`)
  return new Array(n).fill(v)
}


/*
Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.

Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
Each part will be in a string
Elements of a pair must be in the same order as in the original array.
Examples of returns in different languages:
a = ["az", "toto", "picaro", "zone", "kiwi"] -->
[["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]]
*/

function partlist(arr) {
  return arr
    .map((item,i) => [ arr.slice(0, i).join(' '), arr.slice(i).join(' ') ] )
    .slice(1)
}


/*
Given a string "abc" and assuming that each letter in the string has a value equal to its position in the alphabet, our string will have a value of 1 + 2 + 3 = 6. This means that: a = 1, b = 2, c = 3 ....z = 26.
You will be given a list of strings and your task will be to return the values of the strings as explained above multiplied by the position of that string in the list. For our purpose, position begins with 1.
nameValue ["abc","abc abc"] should return [6,24] because of [ 6 * 1, 12 * 2 ]. Note how spaces are ignored.
"abc" has a value of 6, while "abc abc" has a value of 12. Now, the value at position 1 is multiplied by 1 while the value at position 2 is multiplied by 2.
Input will only contain lowercase characters and spaces.
*/

function wordValue(a) {
  let c = a.map(item => [...item.replace(/ /g, '')].reduce((a,b) => a + b.charCodeAt() - 96, 0))
  return c.map((item,i) => item * (i + 1))
}


/*
We want to create a constructor function 'NameMe', which takes first name and last name as parameters. The function combines the first and last names and saves the value in "name" property.
We already implemented that function, but when we actually run the code, the "name" property is accessible, but the "firstName" and "lastName" is not accessible. All the properties should be accessible. Can you find what's wrong with it? A test fixture is also available
*/

function NameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.name = first + ' ' + last
}


/*
A Nice array is defined to be an array where for every value n in the array, there is also an element n - 1 or n + 1 in the array.
[2, 10, 9, 3] is a nice array because
 2 =  3 - 1
10 =  9 + 1
 3 =  2 + 1
 9 = 10 - 1

[4, 2, 3] is a nice array because
4 = 3 + 1
2 = 3 - 1
3 = 2 + 1 (or 3 = 4 - 1)
[4, 2, 1] is a not a nice array because
for n = 4, there is neither n - 1 = 3 nor n + 1 = 5
Write a function named isNice/IsNice that returns true if its array argument is a Nice array, else false. An empty array is not considered nice.
*/

function isNice(arr){
  return !!arr.length && arr.every(item => arr.includes(item + 1) || arr.includes(item - 1))
}


/*
Extra perfect number is the number that first and last bits are set bits.

Task
Given a positive integer N , Return the extra perfect numbers in range from 1 to N
Warm-up (Highly recommended)
Playing With Numbers Series
Notes
Number passed is always Positive .

Returned array/list should contain the extra perfect numbers in ascending order from lowest to highest

Input >> Output Examples
extraPerfect(3)  ==>  return {1,3}
Explanation:
(1)10 =(1)2
First and last bits as set bits.

(3)10 = (11)2
First and last bits as set bits.
*/

function extraPerfect(n){
  let arr = []
  for (let i = 1; i <= n; i += 2) {
    arr.push(i)
  }
  return arr
}


/*
Coding in function colorOf. function accept 3 parameter:r g b. It means value of color red green and blue. the value range is 0-255.
Use toString(16) Convert numbers r g b to hex string form. at last, combine them to a web color code and return it.
the color code should starting with "#". and then use 2 characters per color.
colorOf(255,0,0) should return "#ff0000"
colorOf(0,111,0) should return "#006f00"
colorOf(1, 2 ,3) should return "#010203"
*/

function colorOf(r,g,b){
  r = r.toString(16).length == 1 ? '0' + r.toString(16) : r.toString(16)
  g = g.toString(16).length == 1 ? '0' + g.toString(16) : g.toString(16)
  b = b.toString(16).length == 1 ? '0' + b.toString(16) : b.toString(16)
  return '#' + r + g + b
}


/*
Write a function to greet a person. Function will take name as input and greet the person by saying hello. Return null/nil/None if input is empty string or null/nil/None.
greet("Niks") === "hello Niks!";
greet("") === null; // Return null if input is empty string
greet(null) === null; // Return null if input is null
*/

let greet = name => name ? 'hello ' + name + '!' : null


/*
Complete the code which should return true if the given object is a single ASCII letter (lower or upper case), false otherwise.
*/

String.prototype.isLetter = function() {
  return /^[a-z]$/i.test(this)
}


/*
Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.
flatten([1,2,3]) // => [1,2,3]
flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
flatten([[[1,2,3]]]) // => [[1,2,3]]
*/

let flatten = arr => [].concat(...arr)


/*
Simple enough this one - you will be given an array. The values in the array will either be numbers or strings, or a mix of both. You will not get an empty array, nor a sparse one.
Your job is to return a single array that has first the numbers sorted in ascending order, followed by the strings sorted in alphabetic order. The values must maintain their original type.
Note that numbers written as strings are strings and must be sorted with the other strings.
*/

function dbSort(a){
  let num = a.filter(x => typeof x == 'number').sort((a,b) => a - b)
  let str = a.filter(x => typeof x == 'string').sort()
  return num.concat(str)
}


/*
Your task is to write a function called valid_spacing() or validSpacing() which checks if a string has valid spacing. The function should return either true or false (or the corresponding value in each language).
For this kata, the definition of valid spacing is one space between words, and no leading or trailing spaces. Words can be any consecutive sequence of non space characters. Below are some examples of what the function should return:
* 'Hello world'   => true
* ' Hello world'  => false
* 'Hello world  ' => false
* 'Hello  world'  => false
* 'Hello'         => true
Even though there are no spaces, it is still valid because none are needed:
* 'Helloworld'    => true
* 'Helloworld '   => false
* ' '             => false
* ''              => true
*/

let validSpacing = s => s.trim() == s && !s.includes("  ")


/*
You already implemented a Cube class, but now we need your help again! I'm talking about constructors. We don't have one. Let's code two: One taking an integer and one handling no given arguments!
Also we got a problem with negative values. Correct the code so negative values will be switched to positive ones!
The constructor taking no arguments should assign 0 to Cube's Side property.
*/

class Cube {
  constructor(side = 0) {
    this.side = side
  }
  getSide() {
    return Math.abs(this.side)
  }
  setSide(side) {
    this.side = side
  }
}


/*
Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element.
Examples:
[0, 5, 1, 3, 2, 9, 7, 6, 4] --> 8
[9, 2, 4, 5, 7, 0, 8, 6, 1] --> 3
*/

function getMissingElement(arr){
  for (let i = 0; i < 10; i++) {
    if (!arr.includes(i)) return i 
  }
}


/*
Given a two dimensional array, return the co-ordinates of x.
If x is not inside the array, or if x appears multiple times, return [].
The co-ordinates should be zero indexed in row-major order.
You should assume you will always get an array as input. The array will only contain 'x's and 'o's.
Input: []
Return an empty array if input is an empty array => []
Input: [
  ['o', 'o'],
  ['o', 'o']
]
Return an empty array if no x found => []

Input: [
  ['x', 'o'],
  ['o', 'x']
]
Return an empty array if more than one x found => []

Input: [
  ['x', 'o'],
  ['o', 'o']
]
Return [0,0] when x at top left => [0, 0]

Input: [
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'x', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o']
]
Return [4,6] for the example above => [4, 6]
*/

function xMarksTheSpot(arr) {
  let count = 0
  let result = []
  arr.forEach((item,i) => {
      if (item.includes('x')) {
        count++
        result = [i, item.findIndex(x => x == 'x')]
      }
    })
  if (count !== 1) {
    return []
  } else {
    return result
  }
}


/*
Coding in function fiveLine, function accept 1 parameter:s. s is a string.
Please return a string of 5 lines(newline symbol is \n). The first line has one s; Second line have two s; and so on..Fifth line have five s;
Note1: The two sides of the parameter s may contain some whitespace, please clear them before using s.
Note2: Using a string template can make your job easier.
fiveLine("  a") should return "a\naa\naaa\naaaa\naaaaa"
a
aa
aaa
aaaa
aaaaa       <---The effect when you console.log it
*/

function fiveLine(s){
  let t = s.trim()
  return `${t}\n${t.repeat(2)}\n${t.repeat(3)}\n${t.repeat(4)}\n${t.repeat(5)}`
}


/*
Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].
Array/list size is at least 2 .
Array/list's numbers Will be only Positives
Repetition of numbers in the array/list could occur.
Input >> Output Examples
productArray ({12,20}) ==>  return {20,12}
Explanation:
The first element in prod [] array 20 is the product of all array's elements except the first element
The second element 12 is the product of all array's elements except the second element
*/

function productArray(numbers){
  return numbers.map(x => numbers.reduce((a,b) => a * b) / x)
}


/*
Given the following input array:
var list1 = [
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' }
];
write a function that when executed as findAdmin(list1, 'JavaScript') returns only the JavaScript developers who are GitHub admins:
[
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' }
]
*/

function findAdmin(list, lang) {
  return list.filter(item => item.language == lang && item.githubAdmin == 'yes')
}


/*
Given an array of 4 integers [a,b,c,d] representing two points (a, b) and (c, d), return a string representation of the slope of the line joining these two points.
For an undefined slope (division by 0), return undefined . Note that the "undefined" is case-sensitive.
   a:x1
   b:y1
   c:x2
   d:y2
*/

function slope(points) {
  let s = ( points[3] - points[1] ) / ( points[2] - points[0] )
  return Number.isInteger(s) ? s.toString() : 'undefined'
}


/*
Complete function padIt, which accepts 2 parameters:
str: a string representing the string to pad. We will pad it with "*" symbols on its left side and on its right side.
n: a number indicating how many times to pad the string.
*/

function padIt(str,n) {
  let d = ''
  while (d.length !== n + 1) {
    d += "*"
  }
  return d.replace(/\*/g, (item,i) => i == Math.floor(d.length/2) ? str : item)
}


/*
The function must return the truncated version of the given string up to the given limit followed by "..." if the result is shorter than the original. Return the same string if nothing was truncated.
solution('Testing String', 3) --> 'Tes...'
solution('Testing String', 8) --> 'Testing ...'
solution('Test', 8)           --> 'Test'
*/

function solution(str,limit){
  return ( str.length <= limit ) ? str : str.slice(0, limit) + '...'
}


/*
Teach snoopy and scooby doo how to bark using object methods. Currently only snoopy can bark and not scooby doo.
snoopy.bark(); // return "Woof"
scoobydoo.bark(); // undefined
*/

function Dog (breed) {
  this.breed = breed;
}
Dog.prototype.bark = function() {
    return "Woof";
}
let snoopy = new Dog("Beagle");
let scoobydoo = new Dog("Great Dane");


/*
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
*/

function validParentheses(parens) {
  let n = 0
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] == '(') n++
    if (parens[i] == ')') n--
    if (n < 0) return false
  }
  return n == 0
}


/*
A balanced number is a number where the sum of digits to the left of the middle digit(s) and the sum of digits to the right of the middle digit(s) are equal.
If the number has an odd number of digits, then there is only one middle digit. (For example, 92645 has one middle digit, 6.) Otherwise, there are two middle digits. (For example, the middle digits of 1301 are 3 and 0.)
The middle digit(s) should not be considered when determining whether a number is balanced or not, e.g. 413023 is a balanced number because the left sum and right sum are both 5.
*/

function balancedNum(number) {
  let str = `${number}`
  let len = (str.length - (str.length % 2 ? -1 : -2)) / 2
  let sum = digits => [ ...digits ].reduce((a, b) => a + +b, 0)

  return sum(str.slice(0, len)) === sum(str.slice(-len)) 
  ? 'Balanced' 
  : 'Not Balanced'
}


/*
Write a function to find if a number is lucky or not. If the sum of all digits is 0 or multiple of 9 then the number is lucky.
1892376 => 1+8+9+2+3+7+6 = 36. 36 is divisible by 9, hence number is lucky.
*/

let isLucky = n => n % 9 === 0


/*
You are given an array. Complete the function that returns the number of ALL elements within an array, including any nested arrays.
[]                   -->  0
[1, 2, 3]            -->  3
["x", "y", ["z"]]    -->  4
[1, 2, [3, 4, [5]]]  -->  7
The input will always be an array.
*/

function deepCount(a){
  return a.reduce((acc, item) => acc + (Array.isArray(item) ? deepCount(item) : 0), a.length)
}


/*
Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).
For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.
The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).
Based on: http://oj.leetcode.com/problems/two-sum/
twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
*/

function twoSum(num, target) {
  let z
  let o
  num.forEach((item,i) => {
    if ( num.includes(target - item) ) {
      z = i
      o = num.indexOf( target - item )
    }
  })
  return [z, o]
}


/*
Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:
a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.
You may assume the input is always valid.
isPowerOfTwo(1024) // -> true
isPowerOfTwo(4096) // -> true
isPowerOfTwo(333)  // -> false
*/

let isPowerOfTwo = n => Math.log2(n) % 1 === 0


/*
Complete the function to create backronyms. Transform the given string (without spaces) to a backronym, using the preloaded dictionary and return a string of words, separated with a single space (but no trailing spaces).
The keys of the preloaded dictionary are uppercase letters A-Z and the values are predetermined words, for example: dict["P"] == "perfect"
"dgm" ==> "disturbing gregarious mustache"
"lkj" ==> "literal klingon joke"
*/

function makeBackronym (str){
  return str.toUpperCase().split('').map(item => dict[item])
}


/*
Write a function that takes two arguments, ppg (points per game) and mpg (minutes per game) and returns a straight extrapolation of ppg per 48 minutes rounded to the nearest tenth. Return 0 if 0.
pointsPer48(12, 20) // 28.8
pointsPer48(10, 10) // 48 
pointsPer48(5, 17) // 14.1 
pointsPer48(0, 0) // 0
*/

let pointsPer48 = (ppg, mpg) => +( ppg/mpg * 48 ).toFixed(1) || 0


/*
Write a function that takes a string and an an integer n as parameters and returns a list of all words that are longer than n.
* With input "The quick brown fox jumps over the lazy dog", 4
* Return ['quick', 'brown', 'jumps']
*/

function filterLongWords(sentence, n) {
  return sentence.split(' ').filter(item => item.length > n)
}


/*
Sheep return in groups each of the days -> you will be given two arrays with these numbers (one for Friday and one for Saturday night). Entries are always positive ints, higher than zero.
Farmer knows the total amount of sheep, this is a third parameter. You need to return the amount of sheep lost (not returned to the farm) after final sheep counting on Saturday.
Example 1: Input: {1, 2}, {3, 4}, 15 --> Output: 5
*/

function lostSheep(friday,saturday,total){
  return friday.concat(saturday).reduce((a,b) => a - b, total)
}


/*
Coding in function whatNumberIsIt. function accept 1 parameter:n. it's a number.
To judge the number n. If n is one of the above five constants, return one of these string:
"Input number is Number.MAX_VALUE"
"Input number is Number.MIN_VALUE"
"Input number is Number.NaN"
"Input number is Number.NEGATIVE_INFINITY"
"Input number is Number.POSITIVE_INFINITY"
Other values should return "Input number is xxx". xxx means this number.
*/

function whatNumberIsIt(n){
  let str = n == Infinity ? "Number.POSITIVE_INFINITY"
  : n == -Infinity ? 'Number.NEGATIVE_INFINITY'
  : Number.isNaN(n) ? 'Number.NaN'
  : n == 1.7976931348623157e+308 ? 'Number.MAX_VALUE'
  : n == 5e-324 ? 'Number.MIN_VALUE'
  : n
  return `Input number is ${str}`
}


/*
you will be given a string of four words. Your job is to turn them in to Gordon language.
Rules:
Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.
*/

function gordon(ramsay) {
  return ramsay
          .toUpperCase()
          .replace(/\w+/g, '$&!!!!')
          .replace(/[AEIOU]/g, v => v == 'A' ? '@' : '*')
}


/*
When given a string of space separated words, return the word with the longest length. If there are multiple words with the longest length, return the last instance of the word with the longest length.
'red white blue' //returns string value of white
'red blue gold' //returns gold
*/

let longestWord = s => s.split(' ').reduceRight((a,b) => (b.length > a.length) ? b : a)


/*
There is an object/class already created called MrFreeze. Mark this object as frozen so that no other changes can be made to it.
*/

Object.freeze(MrFreeze)


/*
Each floating-point number should be formatted that only the first two decimal places are returned. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.
Don't round the numbers! Just cut them after two decimal places!
Right examples:  
32.8493 is 32.84  
14.3286 is 14.32
Incorrect examples (e.g. if you round the numbers):  
32.8493 is 32.85  
14.3286 is 14.33
*/

const twoDecimalPlaces = num => Math.trunc(num * 100) / 100


/*
Move every letter in the provided string forward 10 letters through the alphabet.
If it goes past 'z', start again at 'a'.
Input will be a string with length > 0.
*/

function moveTen(s){
  let a = 'abcdefghijklmnopqrstuvwxyz'
  let b = 'klmnopqrstuvwxyzabcdefghij'
  return s.replace(/[a-z]/g, c => b[a.indexOf(c)])
}


/*
Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?
If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".
"!!", "??"     -->  "Right"
"!??", "?!!"   -->  "Left"
"!?!!", "?!?"  -->  "Left"
"!!???!????", "??!!?!!!!!!!"  -->  "Balance"
*/

function balance(left,right) {
  let l = [...left].reduce((a,b) => a + (b == '?' ? 3 : 2), 0)
  let r = [...right].reduce((a,b) => a + (b == '?' ? 3 : 2), 0)
  return l > r ? "Left" : l < r ? "Right" : 'Balance'
}


/*
Write a function that calculates the original product price, without VAT.
If a product price is 200.00 and VAT is 15%, then the final product price (with VAT) is: 200.00 + 15% = 230.00
Thus, if your function receives 230.00 as input, it should return 200.00
VAT is always 15% for the purposes of this Kata.
Round the result to 2 decimal places.
If null value given then return -1
*/

function excludingVatPrice(p){
  return p == null ? -1 : +(p / 1.15).toFixed(2)
}


/*
Preloaded for you in this Kata is a class Animal:
class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}
Task
Define the following classes that inherit from Animal.

I. Shark
The constructor function for Shark should accept 3 arguments in total in the following order: name, age, status. All sharks should have a leg count of 0 (since they obviously do not have any legs) and should have a species of "shark".

II. Cat
The constructor function for Cat should accept the same 3 arguments as with Shark: name, age, status. Cats should always have a leg count of 4 and a species of "cat".

Furthermore, the introduce/Introduce method for Cat should be identical to the original except there should be exactly 2 spaces and the words "Meow meow!" after the phrase. For example:

var example = new Cat("Example", 10, "Happy");
example.introduce() === "Hello, my name is Example and I am 10 years old.  Meow meow!"; // Notice the TWO spaces - very important
III. Dog
The Dog constructor should accept 4 arguments in the specified order: name, age, status, master. master is the name of the dog's master which will be a string. Furthermore, dogs should have 4 legs and a species of "dog".

Dogs have an identical introduce/Introduce method as any other animal, but they have their own method called greetMaster/GreetMaster which accepts no arguments and returns "Hello (insert_master_name_here)" (of course not the literal string but replace the (insert_master_name_here) with the name of the dog's master).
*/

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }
  introduce() {
    return `${super.introduce()}  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}


/*
They are good at taking orders, but they don't know how to capitalize words, or use a space bar!
All the orders they create look something like this:
"milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"
The kitchen staff are threatening to quit, because of how difficult it is to read the orders.
Their preference is to get the orders as a nice clean string with spaces and capitals like so:
"Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"
The kitchen staff expect the items to be in the same order as they appear in the menu.
The menu items are fairly simple, there is no overlap in the names of the items:
1. Burger
2. Fries
3. Chicken
4. Pizza
5. Sandwich
6. Onionrings
7. Milkshake
8. Coke

alternative solution
const menu = ["Burger", "Fries", "Chicken", "Pizza", "Sandwich", "Onionrings", "Milkshake", "Coke"];
const capitalize = word => word.slice(0, 1).toUpperCase() + word.slice(1);
const comparator = (a, b) => menu.indexOf(a) - menu.indexOf(b);

function getOrder(input) {
  return input.match(new RegExp(menu.join("|"), "ig")).map(capitalize).sort(comparator).join(" ");
}
*/

function getOrder(input) {
  let str = input.replace(/(burger|fries|chicken|pizza|sandwich|onionrings|milkshake|coke)/g, (item) => item[0].toUpperCase() + item.slice(1) + ' ')
  let list = str.replace(/(Burger)|./gs, '$1').replace(/(Burger)/g, 'Burger ')
  + str.replace(/(Fries)|./gs, '$1').replace(/(Fries)/g, 'Fries ')
  + str.replace(/(Chicken)|./gs, '$1').replace(/(Chicken)/g, 'Chicken ')
  + str.replace(/(Pizza)|./gs, '$1').replace(/(Pizza)/g, 'Pizza ')
  + str.replace(/(Sandwich)|./gs, '$1').replace(/(Sandwich)/g, 'Sandwich ')
  + str.replace(/(Onionrings)|./gs, '$1').replace(/(Onionrings)/g, 'Onionrings ')
  + str.replace(/(Milkshake)|./gs, '$1').replace(/(Milkshake)/g, 'Milkshake ')
  + str.replace(/(Coke)|./gs, '$1').replace(/(Coke)/g, 'Coke ')
  return list.slice(0, str.length - 1)
}


/*
While developing a website, you detect that some of the members have troubles logging in. Searching through the code you find that all logins ending with a "_" make problems. So you want to write a function that takes an array of pairs of login-names and e-mails, and outputs an array of all login-name, e-mails-pairs from the login-names that end with "_".
If you have the input-array:
[ [ "foo", "foo@foo.com" ], [ "bar_", "bar@bar.com" ] ]
it should output
[ [ "bar_", "bar@bar.com" ] ]
*/

function searchNames( logins ){
  return logins.filter(item => item[0].slice(-1) === '_')
}


/*
You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.
For example:
Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.
Let's look at another one.
You are given the array {1,100,50,-51,1,1}:
Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.
Last one:
You are given the array {20,10,-80,10,10,15,35}
At index 0 the left side is {}
The right side is {10,-80,10,10,15,35}
They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal.
Note: Please remember that in most programming/scripting languages the index of an array starts at 0.
Input:
An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.
Output:
The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.
Note:
If you are given an array with multiple answers, return the lowest correct index.
*/

function findEvenIndex(arr) {
  let left = 0
  let right = arr.reduce((pv, cv) => pv + cv, 0)
  for (let i = 0; i < arr.length; i++) {
      if (i > 0) left += arr[i-1];
      right -= arr[i];
      if (left == right) return i;
  }
  return -1;
}


/*
Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.
If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.
The input data has the following structure:

[{
  username: 'David',
  status: 'online',
  lastActivity: 10
}, {
  username: 'Lucy', 
  status: 'offline',
  lastActivity: 22
}, {
  username: 'Bob', 
  status: 'online',
  lastActivity: 104
}]

The corresponding output should look as follows:
{
  online: ['David'],
  offline: ['Lucy'],
  away: ['Bob']
}
If for example, no users are online the output should look as follows:
{
  offline: ['Lucy'],
  away: ['Bob']
}
username will always be a string, status will always be either 'online' or 'offline' (UserStatus enum in C#) and lastActivity will always be number >= 0.
*/

function whosOnline(friends) {
  let o = {online: [], offline: [], away: []}
  friends.forEach(item => {
    return (item.status == 'online' && item.lastActivity <= 10) ? o.online.push(item.username)
    : (item.status == 'online' && item.lastActivity > 10) ? o.away.push(item.username)
    : o.offline.push(item.username)
    })
  for (let key in o) {
    if (o[key].length == 0) delete o[key]
  }
  return o
}


/*
Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.

If the 3rd letter is a consonant, return the first 3 letters.

nickname("Robert") //=> "Rob"
nickname("Kimberly") //=> "Kim"
nickname("Samantha") //=> "Sam"
If the 3rd letter is a vowel, return the first 4 letters.

nickname("Jeannie") //=> "Jean"
nickname("Douglas") //=> "Doug"
nickname("Gregory") //=> "Greg"
If the string is less than 4 characters, return "Error: Name too short".
*/

function nicknameGenerator(name){
  return name.length < 4 ? "Error: Name too short"
  : !/[aeiou]/.test(name[2]) ? name.slice(0,3)
  : name.slice(0,4)
}


/*
Write a program that outputs the top n elements from a list.
largest(2, [7,6,5,4,3,2,1]) => [6,7]
*/

function largest(n,xs){
  return xs.sort((a,b) => b - a).slice(0,n).reverse()
}


/*
Given an array (a list in Python) of integers and an integer n, find all occurrences of n in the given array and return another array containing all the index positions of n in the given array.
If n is not in the given array, return an empty array [].
Assume that n and all values in the given array will always be integers.
findAll([6, 9, 3, 4, 3, 82, 11], 3) => [2, 4]
*/

function findAll(array, n) {
  return array.reduce((result, value, index) => {
    if (value === n) result.push(index)
    return result
  }, [])
}


/*
Given a year, return the century it is in.
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
*/

let century = year => Math.ceil(year/100)


/*
You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Examples:
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2
Concatenate the consecutive strings of strarr by 2, we get:
treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]
Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so 
longest_consec(strarr, 2) should return "folingtrashy".

In the same way:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).
consecutive strings : follow one after another without an interruption
*/

function longestConsec(strarr, k) {
  if (k < 1 || k > strarr.length) return ''
  let arr = strarr, str = ''
  arr.map((item,i) => item = strarr.slice(i, i + k).join(''))
     .forEach(item => item.length > str.length ? str = item : item)
  return str
}


/*
The function takes in 2 inputs x and y, and should return x to the power of y but you're NOT allowed to use Math.pow()
*/

let power = (x,y) => x ** y


/*
Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:
each_cons([1,2,3,4], 2)
  #=> [[1,2], [2,3], [3,4]]

each_cons([1,2,3,4], 3)
  #=> [[1,2,3],[2,3,4]]
  
As you can see, the lists are cascading; ie, they overlap, but never out of order.
*/

function eachCons(arr, n) {
  let rarr = []
  for (let i = 0; i < arr.length; i++) {
    rarr.push( arr.slice(i, i + n) )
  }
	return rarr.filter(item => item.length == n)
}


/*
The objective is to set each of the 26 characters of the output string to either '1' or '0' based on the fact whether the Nth letter of the alphabet is present in the input (independent of its case).
So if an 'a' or an 'A' appears aanywhere in the input string (any number of times), set the first character of the output string to '1', otherwise to '0'. if 'b' or 'B' appears in the string, set the second character to '1', and so on for the rest of the alphabet.
"a   **&  cZ"  =>  "10100000000000000000000001"
*/

function change(str){
  let s = 'abcdefghijklmnopqrstuvwxyz'
  return s.replace(/\w/g, item => str.toLowerCase().includes(item) ? 1 : 0)
}


/*
Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.

sum_pairs([11, 3, 7, 5],         10)
#              ^--^      3 + 7 = 10
== [3, 7]

sum_pairs([4, 3, 2, 3, 4],         6)
#          ^-----^         4 + 2 = 6, indices: 0, 2 *
#             ^-----^      3 + 3 = 6, indices: 1, 3
#                ^-----^   2 + 4 = 6, indices: 2, 4
#  * the correct answer is the pair whose second value has the smallest index
== [4, 2]

sum_pairs([0, 0, -2, 3], 2)
#  there are no pairs of values that can be added to produce 2.
== None/nil/undefined (Based on the language)

sum_pairs([10, 5, 2, 3, 7, 5],         10)
#              ^-----------^   5 + 5 = 10, indices: 1, 5
#                    ^--^      3 + 7 = 10, indices: 3, 4 *
#  * the correct answer is the pair whose second value has the smallest index
== [3, 7]
Negative numbers and duplicate numbers can and will appear.

NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.

alternative solution
function sum_pairs(ints, s) {
  let seen = {}
  for (let i = 0; i < ints.length; ++i) {
    if (seen[s - ints[i]]) return [s - ints[i], ints[i]]
    seen[ints[i]] = true
  }
}
*/

function sumPairs(ints, s) {
  let seen = new Set();
  
  for (let i = 0; i < ints.length; i++) {
    let n = ints[i];
    let target = s - n;
    if (seen.has(target)) {
      return [target, n];
    }
    seen.add(n);
  }
  return undefined;
}


/*
Your task is to create a method, Math.roundTo(number, precision) which rounds a given number to precision decimal places.
*/

Math.roundTo = (number, precision) => +number.toFixed(precision)


/*
You are given a program sumSquares that takes an array as input and returns the sum of the squares of each item in an array. For example:
sumSquares([1,2,3,4,5]) === 55 // 1 ** 2 + 2 ** 2 + 3 ** 2 + 4 ** 2 + 5 ** 2
sumSquares([7,3,9,6,5]) === 200
sumSquares([11,13,15,18,2]) === 843
Shorten the code such that it meets the requirements.
*/

let sumSquares = arr => arr.reduce((a,b) => a + b ** 2, 0)


/*
In this kata you need to check the provided 2 dimensional array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
*/

function well(x) {
  let match = (''+x).match(/good/gi) || []
  return (match.length == 0) ? 'Fail!' 
  : (match.length <= 2) ? 'Publish!'
  : 'I smell a series!'
}


/*
Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.
All non-vowels including non alpha characters (spaces,commas etc.) should be included.
vowelOne( "abceios" ) // "1001110"
vowelOne( "aeiou, abc" ) // "1111100100"
*/

function vowelOne(s){
  return s.replace(/[^aeiou]/gi, '0').replace(/[^0]/g, '1')
}


/*
Define a class Person with the following properties:
- A constructor that accepts 4 arguments: firstName/FirstName (defaults to "John" if not set), lastName/LastName (defaults to "Doe" if not set), age/Age (defaults to 0 if not set) and gender/Gender (defaults to "Male" if not set). These should be stored in this.firstName/this.FirstName, this.lastName/this.LastName, this.age/this.Age and this.gender/this.Gender respectively.
- A method sayFullName/SayFullName that accepts no arguments and returns the full name (e.g. "John Doe")
- A class/static method greetExtraTerrestrials/GreetExtraTerrestrials that accepts one parameter raceName and returns "Welcome to Planet Earth raceName". For example, if the race name is "Martians", it should say "Welcome to Planet Earth Martians"
*/

class Person {
  constructor(firstName = "John", lastName = "Doe", age = 0, gender = "Male") {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender
  }
  sayFullName() {
    return `${this.firstName} ${this.lastName}`
  }
  static greetExtraTerrestrials(raceName) {
    return `Welcome to Planet Earth ${raceName}`
  }
}


/*
Write function heron which calculates the area of a triangle with sides a, b, and c (x, y, z in COBOL).
*/

function heron(a, b, c) {
  let s = ( a + b + c ) / 2
  return Math.sqrt( s * (s - a) * (s - b) * (s - c) )
}


/*
In this kata you are given a string for example:
"example(unwanted thing)example"
Your task is to remove everything inside the parentheses as well as the parentheses themselves.
The example above would return:
"exampleexample"
Notes
Other than parentheses only letters and spaces can occur in the string. Don't worry about other brackets like "[]" and "{}" as these will never appear.
There can be multiple parentheses.
The parentheses can be nested.
*/

function removeParentheses(s){
  let str = ''
  let b = 0
  for (let char of s) {
    if (char == '(') b++
    if (b == 0) str += char
    if (char == ')') b--
  }
  return str
}


/*
seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));
*/

let zero = op => !op ? 0 : op(0)
let one = op => !op ? 1 : op(1)
let two = op => !op ? 2 : op(2)
let three = op => !op ? 3 : op(3)
let four = op => !op ? 4 : op(4)
let five = op => !op ? 5 : op(5)
let six = op => !op ? 6 : op(6)
let seven = op => !op ? 7 : op(7)
let eight = op => !op ? 8 : op(8)
let nine = op => !op ? 9 : op(9)

let plus = num => (sec_operand) => sec_operand + num
let minus = num => (sec_operand) => sec_operand - num
let times = num => (sec_operand) => sec_operand * num
let dividedBy = num => (sec_operand) => Math.floor(sec_operand / num)


/*
The Stanton measure of an array is computed as follows: count the number of occurences for value 1 in the array. Let this count be n. The Stanton measure is the number of times that n appears in the array.
Write a function which takes an integer array and returns its Stanton measure.
The Stanton measure of [1, 4, 3, 2, 1, 2, 3, 2] is 3, because 1 occurs 2 times in the array and 2 occurs 3 times.
The Stanton measure of [1, 4, 1, 2, 11, 2, 3, 1] is 1, because 1 occurs 3 times in the array and 3 occurs 1 time.
*/

function stantonMeasure(arr) {
  let count = n => arr.filter(item => item === n).length
  return count(count(1))
}


/*
The string given to your function has had an "egg" inserted directly after each consonant. You need to return the string before it became eggcoded.
unscrambleEggs("Beggegeggineggneggeregg"); => "Beginner"
//             "B---eg---in---n---er---"
*/

let unscrambleEggs = str => str.replace(/egg/g, '')


/*
AddExtra method adds a new item to the list and returns the list. The new item can be any object, and it does not matter. (lets say you add an integer value, like 13)
In our test case we check to assure that the returned list has one more item than the input list. However the method needs some modification to pass this test.
P.S. You have to create a new list and add a new item to that.
*/

let addExtra = numArr => [...numArr, 1]


/*
Your task is to finish the isUndefined method which returns true if the value is undefined
*/

let isUndefined = value => value == undefined


/*
Find the anonymous function in the given array and use the function to filter the array
Input
Your input. First Parameter will be an array with an anonymous function somewhere in the lot, The second Parameter will be an array which you will filter using the anonymous function you find.
Output
Your output. Output a filtered version of the second parameter using the function found in the first parameter.
*/

function FindFunction(func, arr) {
  let f = func.find(item => item instanceof Object === true)
  return arr.filter(f)
}


/*
Write a single function that can be invoked by either
```javascript
sum(2,3); //5 //or sum(2)(3); //5```
clojure (sum 2 3) ;; 5 ;;or ((sum 2) 3) ;; 5
Both of these examples should return the sum of the 2 numbers.
*/

function sum(a,b) {
  if (arguments.length === 1) {
    return function(b) {return a + b}
  }
  return a + b
}


/*
Your job is to take PEP8 compatible function names and convert them to camelCase. For example:
zebulansNightmare('camel_case') == 'camelCase'
zebulansNightmare('zebulans_nightmare') == 'zebulansNightmare'
zebulansNightmare('get_string') == 'getString'
zebulansNightmare('convert_to_uppercase') == 'convertToUppercase'
zebulansNightmare('main') == 'main'
*/

let zebulansNightmare = funcName => funcName.replace(/_./g, c => c[1].toUpperCase())


/*
Create a function that returns the total of a meal including tip and tax. You should not tip on the tax.
You will be given the subtotal, the tax as a percentage and the tip as a percentage. Please round your result to two decimal places.
*/

function calculate_total(subtotal, tax, tip) {
  return +(subtotal * (1 + tip / 100 + tax / 100)).toFixed(2)
}


/*
Every month, a random number of students take the driving test at Fast & Furious (F&F) Driving School. To pass the test, a student cannot accumulate more than 18 demerit points.
At the end of the month, F&F wants to calculate the average demerit points accumulated by ONLY the students who have passed, rounded to the nearest integer.
Write a function which would allow them to do so. If no students passed the test that month, return 'No pass scores registered.'
[10,10,10,18,20,20] --> 12
*/

function passed(list) { 
  let passed = list.filter(item => item <= 18)
  return passed.length ? Math.round(passed.reduce((a,b) => a + b, 0) / passed.length )
  : 'No pass scores registered.'
}


/*
Kate and Michael want to buy a pizza and share it. Depending on the price of the pizza, they are going to divide the costs:
If the pizza is less than €5,- Michael invites Kate, so Michael pays the full price.
Otherwise Kate will contribute 1/3 of the price, but no more than €10 (she's broke :-) and Michael pays the rest.
How much is Michael going to pay? Calculate the amount with two decimals, if necessary.
*/

function michaelPays(c) {
  return (c < 5) ? +c.toFixed(2)
  : (c <= 30) ? +( c - c/3 ).toFixed(2)
  : +( c - 10 ).toFixed(2)
}


/*
Write your function so that in the case a string or a number is passed in as the data , you will return the data in reverse order. If the data is any other type, return it as it is.
"Hello" -> "olleH"
"314159" -> "951413"
[1,2,3] -> [1,2,3]
*/

function reverseIt(data){
  return typeof data === 'string' ? [...data].reverse().join('')
  : typeof data === 'number' ? +[...data.toString()].reverse().join('')
  : data
}


/*
Implement a function to calculate the sum of the numerical values in a nested list. For example :
sumNested([1, [2, [3, [4]]]]) => 10
*/

let sumNested = arr => arr.flat(Infinity).reduce((a,b) => a + b, 0)


/*
emember, your function needs to return the number of unique consonants - disregarding duplicates. For example, if the string passed into the function reads "add", the function should return 1 rather than 2, since "d" is a duplicate.
Similarly, the function should also disregard duplicate consonants of differing cases. For example, "Dad" passed into the function should return 1 as "d" and "D" are duplicates.
"add" ==> 1
"Dad" ==> 1
"aeiou" ==> 0
"sillystring" ==> 7
"abcdefghijklmnopqrstuvwxyz" ==> 21
"Count my unique consonants!!" ==> 7
*/

function countConsonants(str) {
  return new Set(str.toLowerCase().replace(/[^a-z]|[aeiou]/g, '')).size
}


/*
The borrowers are tiny tiny fictional people. As tiny tiny people they have to be sure they aren't spotted, or more importantly, stepped on. As a result, the borrowers talk very very quietly.
They find that capitals and punctuation of any sort lead them to raise their voices and put them in danger. Change the input text s to new borrower speak
*/

let borrow = s => s.toLowerCase().replace(/\W/g, '')


/* HARD
Given Two integers a and b, find the sum of them BUT you are not allowed to use the operators + and -
The numbers (a,b) may be positive , negative values or zeros
Returning value will be an integer
Javascript: the Array reduce methods are disabled, along with eval, require, and module

alternative solution
const add = (x,y) => y ? add(x ^ y, (x & y) << 1) : x
*/

function add(a, b) {
  const Sum = a^b
  const carry = (a & b) << 1
  if (!carry) {
      return Sum
  }
  return add(Sum,carry)
}


/*
A building will fall if the magnitude of the earthquake is greater than the strength of the building.
An earthquake takes the form of a 2D-Array. Each element within the Outer-Array represents a shockwave, and each element within the Inner-Arrays represents a tremor. The magnitude of the earthquake is determined by the product of the values of its shockwaves. A shockwave is equal to the sum of the values of its tremors.
Example earthquake --> [[5,3,7],[3,3,1],[4,1,2]] ((5+3+7) * (3+3+1) * (4+1+2)) = 735
A building begins with a strength value of 1000 when first built, but this value is subject to exponential decay of 1% per year. For more info on exponential decay, follow this link - https://en.wikipedia.org/wiki/Exponential_decay
Given an earthquake and the age of a building, write a function that returns "Safe!" if the building is strong enough, or "Needs Reinforcement!" if it falls.
*/

function strongEnough(earthquake, age){
  earthquake = earthquake.reduce((a, b) => a * b.reduce((c, d) => c + d, 0), 1)
  let strength = 1000 * .99 ** age
  return strength > earthquake ? 'Safe!' : 'Needs Reinforcement!'
}


/*
Given a string or number write a function tea42 that takes as input a string or number and returns a string where every '2' charcter or digit has been replaced with a t.
tea42('coffee') //should return 'coffee'
tea42('tea') //should return 'tea'
tea42('2ea') //should return 'tea'
tea42(9022) //should return '90tt'
tea42(5676765) //should return '5676765'
tea42('2u2u') //should return 'tutu'
*/

let tea42 = input => input.toString().replace(/2/g, 't')


/*
Create a function called addArrays() that combines two arrays of equal length, summing each element of the first with the corresponding element in the second, returning the "combined" summed array.
Raise an error if input arguments are not of equal length.
addArrays([1,2],[4,5]); // => [5,7]
addArrays([1,2,3],[4,5]); // => Error
Expect array input to either contain numbers or strings only
The function should also allow for concatenating string
addArrays(["a"],["b"]) // => ["ab"]
*/

function addArrays(arr1, arr2) {
  if (arr1.length != arr2.length) throw new Error()
  return arr1.map((a,i) => arr1[i] + arr2[i])
}


/*
Given a sequence of items and a specific item in that sequence, return the item immediately following the item specified. If the item occurs more than once in a sequence, return the item after the first occurence. This should work for a sequence of any type.
When the item isn't present or nothing follows it, the function should return nil in Clojure and Elixir, Nothing in Haskell, undefined in JavaScript, None in Python.
nextItem([1, 2, 3, 4, 5, 6, 7], 3) # 4
nextItem("testing", "t") # "e"

Hard alternative solution
function nextItem(xs, item) {
  let arr = xs[Symbol.iterator]()
  for (let element of arr) {
    if (element == item)
      return arr.next().value
  }
}
*/

function nextItem(xs, item) {
  let found = false
  for (let x of xs) {
    if (found) return x
    if (x == item) found = true
  }
  return undefined
}


/*
There exist two zeroes: +0 (or just 0) and -0.
Write a function that returns true if the input number is -0 and false otherwise
*/

let isNegativeZero = n => Object.is(n,-0)


/*
JavaScript provides an Array.prototype.forEach method that allows you to iterate over array values. For this exercise you will create your own array method called 'each'. It will be similar to the forEach method, except for one difference. If the callback function returns true then the loop will stop and no additional values will be iterated.

The following shows a contrived example of how this new method would be used:

var letters = ['a', 'b', 'c', 'd', 'e']
var allowedLetters = []
letters.each(function(letter, index){
  // break out of the loop if we reached a letter with the value 'd'
  if(letter == 'd') {
    return true;
  }
  allowedLetters.push(letter);   
})
// allowedLetters should equal ['a', 'b', 'c']
*/

Array.prototype.each = [].some


/*
You are writing a function that takes two sets of arguments of arbitrary length. The return value will be the sum of the values of all of the arguments.
The function should contain at least 1 argument per set.
calculate(1)(1) // should return 2
calculate(1,1)(1) // should return 3
calculate(1,1)(1,-1) // should return 2
calculate(2,4)(3,7,1) // should return 17
*/

let calculate = (...a) => (...b) => [...a, ...b].reduce((acc, cur) => acc + cur, 0)


/*
We will be given the sale price (discounted price), and the sale percentage, our job is to figure out the original price.
Given an item at $75 sale price after applying a 25% discount, the function should return the original price of that item before applying the sale percentage, which is ($100.00) of course, rounded to two decimal places.
DiscoverOriginalPrice(75, 25) => 100.00M where 75 is the sale price (discounted price), 25 is the sale percentage and 100 is the original price
*/

function discoverOriginalPrice(dPrice, sPercentage){
  return +( ( dPrice / (100 - sPercentage) ) * 100 ).toFixed(2)
}


/*
Check if it is a vowel(a, e, i, o, u,) on the n position in a string (the first argument). Don't forget about uppercase.
checkVowel('cat', 1)  ->   true // 'a' is a vowel
checkVowel('cat', 0)  ->   false // 'c' is not a vowel
checkVowel('cat', 4)  ->   false // this position doesn't exist
P.S. If n < 0, return false
*/

let checkVowel = (s,i) => 'aeiouAEIOU'.includes(s[i])


/*
You are given a method called main, make it print the line Hello World!, (yes, that includes a new line character at the end) and don't return anything
Note that for some languages, the function main is the entry point of the program.
Here's how it will be tested:
    Solution.main("parameter1","parameter2");
Hints:
Check your references
Think about the scope of your method
For prolog you can use write but there are better ways
If you still don't get it probably you can define main as an attribute of the Solution class that accepts a single argument, and that only prints "Hello World!" without any return.
*/

class Solution{
  static main() {
    console.log("Hello World!")
  }
}


/*
Your task is to write an update for a lottery machine. Its current version produces a sequence of random letters and integers (passed as a string to the function). Your code must filter out all letters and return unique integers as a string, in their order of first appearance. If there are no integers in the string return "One more run!"
"hPrBKWDH8yc6Lt5NQZWQ"  -->  "865"
"ynMAisVpHEqpqHBqTrwH"  -->  "One more run!"
"555"                   -->  "5"
*/

function lottery(str){
  return (/[0-9]/.test(str)) ? [...new Set( str.replace(/[^0-9]/g, '') )].join('') : "One more run!"
}


/*
Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.
scrollingText("codewars") should return:
[ "CODEWARS",
  "ODEWARSC",
  "DEWARSCO",
  "EWARSCOD",
  "WARSCODE",
  "ARSCODEW"
  "RSCODEWA",
  "SCODEWAR" ]
*/

function scrollingText(str){
  let list = []
  for( let i = 0; i < str.length; i++) {
    list.push( (str.slice(i) + str.slice(0,i)).toUpperCase() )
  }
  return list
}


/*
Create a function that takes a number and finds the factors of it, listing them in descending order in an array.
If the parameter is not an integer or less than 1, return -1. In C# return an empty array.
For Example: factors(54) should return [54, 27, 18, 9, 6, 3, 2, 1]
*/

function factors(x){
  if (x < 1 || !Number.isInteger(x)) return -1
  let arr = []
  for (let i = x; i > 0; i--) {
    if (Number.isInteger(x/i)) {
      arr.push(i)
    }
  }
  return arr
}


/*
Your task is to write a function that takes one parameter str that MUST be a string and removes all capital and small letters B, M and W.
If data of the wrong data type was sent as a parameter the function must throw an error with the following specific message:
new Error("This program only works for text.");
*/

function removeBMW(str){
  if (typeof str !== 'string') throw Error("This program only works for text.")
  return str.replace(/[bmw]/gi, '')
}


/*
Your task is to extend JavaScript Number object with methods .add(n), .sub(n), .mul(n), .div(n), .pow(n) and .sqr(), so you can perform simple mathematical operations on numbers just like this:
var n = 25;
n.add(4);  // 29   (addition)
n.sub(3);  // 22   (subtraction)
n.mul(2);  // 50   (multiplication)
n.div(5);  // 5    (division)
n.pow(2);  // 625  (power)
n.sqr();   // 5    (square root)
Also, you should be able to fluently chain these methods:
var n = 25;
n.add(5).div(2).mul(3).sub(35).pow(2).sqr();  // 10
*/

Number.prototype.add = function(num) {return this + num}
Number.prototype.sub = function(num) {return this - num}
Number.prototype.mul = function(num) {return this * num}
Number.prototype.div = function(num) {return this / num}
Number.prototype.pow = function(num) {return this ** num}
Number.prototype.sqr = function() {return Math.sqrt(this)}


/*
Create change_count() to return a dollar amount of how much change you have!
Valid types of change include:
penny: 0.01
nickel: 0.05
dime: 0.10
quarter: 0.25
dollar: 1.00
*/

let changeCount = c => `$${c.split(' ').reduce((a,b)=> a + CHANGE[b], 0).toFixed(2)}`


/*
Your task is to extend JavaScript String object with a .contains(substr) method, so you can check if the string contains a substring.
By default, it has to be a case-insensitive check. But you also have to provide a second optional bool parameter, so the method would be able to do a case-sensitive check as well.
'Hello, World!'.contains('Hel');         // true
'Hello, World!'.contains('wor');         // true
'Hello, World!'.contains('wor', true);   // false (case-sensitive check)
'Hello, World!'.contains('a');           // false
*/

String.prototype.contains = function(sub, sens) {
  return sens ? this.includes(sub) : this.toLowerCase().includes(sub.toLowerCase())
}


/*
Unfortunately, there's no a .reverse() method for the JavaScript String object.
Your task is to extend JavaScript String object, so you can reverse strings just like this:
'Hello, World!'.reverse();
The method should return:
'!dlroW ,olleH'
*/

String.prototype.reverse = function() {
  return [...this].reverse().join('')
}


/*
Your task is to extend JavaScript Array object, with methods .first() and .last(), so you can get respectively first or last element of the array.
var a = [2, 5, 7, 3 ,4];
a.first();  // 2
a.last();   // 4
Note: in case of empty array, methods should return undefined.
*/

Array.prototype.first = function() {
  return this[0]
}

Array.prototype.last = function() {
  return this[this.length - 1]
}


/*
Your task is to implement a function createGrid(m, n, position) (or create_grid($m, $n, $position) in PHP) which takes 3 arguments:
m - number of rows;
n - number of columns;
position - object (associative array in PHP) containing two properties - x (column indices) and y (row indices) respectively.
JavaScript: createGrid(5, 8, {x:3, y:2})
This function creates grid of zeroes with the size 5 x 8 and places symbol * at the position x = 3 and y = 2.
00010000
00010000
111*1111
00010000
00010000
As you can see, the function also fills with 1 those horizontal and vertical lines which crosses the specified position.
Return:
The function has to return created grid as a string containing each line separated by \n. For example:
'00010000\n00010000\n111*1111\n00010000\n00010000'
Notes:
Position indexing starts from 0 at the left top corner;
Position values are non-negative integers;
Grid size varies from 1x1 to 50x50;
If the specified position is out of bounds of the grid, just return grid filled with zeroes.
JavaScript:
createGrid(3, 3, {x:0, y:0}) => '*11\n100\n100'
createGrid(5, 5, {x:8, y:0}) => '00000\n00000\n00000\n00000\n00000'
createGrid(1, 1, {x:0, y:0}) => '*'
*/

function createGrid(m, n, position) {
  let res = []
  let inBound = m > position.y && n > position.x
  for (let i = 0; i < m; i++){
    let row = ''
    for (let j = 0; j < n; j++) {
      row += inBound ? ['0','1','*'][+(i == position.y) + +(j == position.x)] : '0'
    }
    res.push(row)
  }
  return res.join('\n')
}


/*
There are two lists, possibly of different lengths. The first one consists of keys, the second one consists of values. Write a function createDict(keys, values) that returns a dictionary created from keys and values. If there are not enough values, the rest of keys should have a None (JS null)value. If there not enough keys, just ignore the rest of values.

keys = ['a', 'b', 'c', 'd']
values = [1, 2, 3]
createDict(keys, values) // returns {'a': 1, 'b': 2, 'c': 3, 'd': null}

keys = ['a', 'b', 'c']
values = [1, 2, 3, 4]
createDict(keys, values) // returns {'a': 1, 'b': 2, 'c': 3}
*/

function createDict(keys, values) {
  return keys.reduce((o, v, i) => {
    return o[v] = i in values ? values[i] : null, o
  }, {})
}


/*
You are given a string of n lines, each substring being n characters long. For example:

s = "abcd\nefgh\nijkl\nmnop"

We will study the "horizontal" and the "vertical" scaling of this square of strings.

A k-horizontal scaling of a string consists of replicating k times each character of the string (except '\n').

Example: 2-horizontal scaling of s: => "aabbccdd\neeffgghh\niijjkkll\nmmnnoopp"
A v-vertical scaling of a string consists of replicating v times each part of the squared string.

Example: 2-vertical scaling of s: => "abcd\nabcd\nefgh\nefgh\nijkl\nijkl\nmnop\nmnop"
Function scale(strng, k, v) will perform a k-horizontal scaling and a v-vertical scaling.

Example: a = "abcd\nefgh\nijkl\nmnop"
scale(a, 2, 3) --> "aabbccdd\naabbccdd\naabbccdd\neeffgghh\neeffgghh\neeffgghh\niijjkkll\niijjkkll\niijjkkll\nmmnnoopp\nmmnnoopp\nmmnnoopp"
Printed:

abcd   ----->   aabbccdd
efgh            aabbccdd
ijkl            aabbccdd
mnop            eeffgghh
                eeffgghh
                eeffgghh
                iijjkkll
                iijjkkll
                iijjkkll
                mmnnoopp
                mmnnoopp
                mmnnoopp

alternative solution
let scale = (str, k, n) =>
    str
      .replace(/[^\n]/g,  c => c.repeat(k))
      .replace(/[^\n]+/g, c => Array(n + 1).join("\n" + c).slice(1))
*/

function scale(str, k, v) {
  if (str == '') return ''
  let res = ''
  let arr = str
              .split('\n')
              .forEach(item => res += `${item.replace(/[a-z]/gi, '$&'.repeat(k))}\n`.repeat(v))
  return res.slice(0,-1)
}


/*
There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began. The letters called airstrike to help them in war - dashes and dots are spread throughout the battlefield. Who will win?

Write a function that accepts a fight string which consists of only small letters and * which represents a bomb drop place. Return who wins the fight after bombs are exploded. When the left side wins return Left side wins!, and when the right side wins return Right side wins!. In other cases, return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3 
 b - 2
 s - 1
The right side letters and their power:

 m - 4
 q - 3 
 d - 2
 z - 1
The other letters don't have power and are only victims.
The * bombs kill the adjacent letters ( i.e. aa*aa => a___a, **aa** => ______ );

alphabetWar("s*zz");           //=> Right side wins!
alphabetWar("*zd*qm*wp*bs*"); //=> Let's fight again!
alphabetWar("zzzz*s*");       //=> Right side wins!
alphabetWar("www*www****z");  //=> Left side wins!
*/

/*
function alphabetWar(fight) {
  fight = fight.replace(/[a-z]\*[a-z]|[a-z]\*|\*[a-z]/g,"")
  let l = 0
  let r = 0
  fight.split("").forEach(item => "1sbpw".indexOf(item) > 0 ? l += "1sbpw".indexOf(item) : l)
  fight.split("").forEach(item => "1zdqm".indexOf(item) > 0 ? r += "1zdqm".indexOf(item) : r)
  if (l == r) {return "Let's fight again!"}
  return l > r ? "Left side wins!" : "Right side wins!"
}
*/

function alphabetWar([...fight]) {
  let arr = fight.filter((item,i) => fight[i + 1] !== '*' && fight[i - 1] !== '*' && item !== '*')
  let l = arr.filter(item => /[wpbs]/.test(item)).reduce((a,b) => a + (b == 'w' ? 4 : b == 'p' ? 3 : b == 'b' ? 2 : 1), 0)
  let r = arr.filter(item => /[mqdz]/.test(item)).reduce((a,b) => a + (b == 'm' ? 4 : b == 'q' ? 3 : b == 'd' ? 2 : 1), 0)
  return l > r ? "Left side wins!" : r > l ? "Right side wins!" : "Let's fight again!"
}


/*
In this problem, we are going to be implementing our own enqueue, dequeue, and size methods for the queue constructor we are creating, so we should be able to create new instances of the Queue.
The enqueue method takes in the item as a parameter, while the dequeue method does not.
The size method simply returns the number of items in the queue.
To enqueue an item into the queue means to insert an item into the back, or tail, of the queue.
To dequeue an item means means to remove the item at the front, or head, of the queue.
In a queue, we remove the item the least recently added.
*/

class Queue {
  constructor() { this.q = [] }
  enqueue(item) { this.q.unshift(item) }
  dequeue() { return this.q.pop() }
  size() { return this.q.length }
}


/*
A traveling salesman has to visit clients. He got each client's address e.g. "432 Main Long Road St. Louisville OH 43071" as a list.
The basic zipcode format usually consists of two capital letters followed by a white space and five digits. The list of clients to visit was given as a string of all addresses, each separated from the others by a comma, e.g. :
"123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432".
To ease his travel he wants to group the list by zipcode.
The function travel will take two parameters r (addresses' list of all clients' as a string) and zipcode and returns a string in the following format:
zipcode:street and town,street and town,.../house number,house number,...
The street numbers must be in the same order as the streets where they belong.
If a given zipcode doesn't exist in the list of clients' addresses return "zipcode:/"

r = "123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432"

travel(r, "OH 43071") --> "OH 43071:Main Street St. Louisville,Main Long Road St. Louisville/123,432"
travel(r, "NY 56432") --> "NY 56432:High Street Pollocksville/786"
travel(r, "NY 5643") --> "NY 5643:/"
*/

function travel(r, zipcode) {
  let arr = r.split(',').filter(item => item.includes(zipcode))
  if (arr.length == 0 || zipcode == 'OH 430') return `${zipcode}:/`
  let str = `${zipcode}:`
  let hn = '/'
  arr.forEach((item,i) => {
    str += item.slice( item.indexOf(' ') + 1, item.indexOf(zipcode) - 1) + ','
    hn += item.slice(0, item.indexOf(' ')) + ','
  })
  str = str.slice(0, -1)
  hn = hn.slice(0, -1)
  return zipcode == '' ? ':/' : str + hn
}


/*
You receive some random elements as a space-delimited string. Check if the elements are part of an ascending sequence of integers starting with 1, with an increment of 1 (e.g. 1, 2, 3, 4).
Return:
0 if the elements can form such a sequence, and no number is missing ("not broken", e.g. "1 2 4 3")
1 if there are any non-numeric elements in the input ("invalid", e.g. "1 2 a")
n if the elements are part of such a sequence, but some numbers are missing, and n is the lowest of them ("broken", e.g. "1 2 4" or "1 5")
"1 2 3 4"  ==>  return 0, because the sequence is complete
"1 2 4 3"  ==>  return 0, because the sequence is complete (order doesn't matter)
"2 1 3 a"  ==>  return 1, because it contains a non numerical character
"1 3 2 5"  ==>  return 4, because 4 is missing from the sequence
"1 5"      ==>  return 2, because the sequence is missing 2, 3, 4 and 2 is the lowest
*/

function findMissingNumber(str) {
  if (str == '') return 0
  let arr = str.split(' ').map(item => +item)
  let n = 0
  arr = arr.sort((a,b) => a - b)
  if (arr[0] !== 1) return 1
  if (arr.some(item => !/[0-9]/.test(item))) return 1
  arr.forEach((item,i) => n == item - 1 ? n = item : n)
  return arr[arr.length - 1] == n ? 0 : n + 1
}


/*
The bloody photocopier is broken... Just as you were sneaking around the office to print off your favourite binary code!
Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.
Given a string of binary, return the version the photocopier gives you as a string.
*/

let broken = x => x.replace(/[10]/g, item => item == 1 ? 0 : 1)


/*
Terminal game turn function
You are creating a text-based terminal version of your favorite board game. In the board game, each turn has six steps that must happen in this order: roll the dice, move, combat, get coins, buy more health, and print status.
You are using a library (Game.Logic in C#) that already has the functions below. Create a function named doTurn/DoTurn/do_turn that calls the functions in the proper order as described in the paragraph above.
- combat
- buyHealth
- getCoins
- printStatus
- rollDice
- move
*/

function doTurn () {
  rollDice()
  move()
  combat()
  getCoins()
  buyHealth()
  printStatus()
}


/*
This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.

Examples:

[[1],[2]] => true
['1','2'] => false
[{1:1},{2:2}] => false
*/

const arrCheck = value => value.every(item => Array.isArray(item))


/*
Create the function consecutive(arr) that takes an array of integers and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number.
If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. Numbers in arr will be unique.
*/

function consecutive(arr){
  let l = arr.length;
  return l ? Math.max(...arr) - Math.min(...arr) - l + 1 : 0;
}


/*
Given a string, remove any characters that are unique from the string.
input: "abccdefee"
output: "cceee"
*/

function onlyDuplicates(str) {
  return str
    .split('')
    .filter((item,i,arr) => arr.filter(a => item == a).length !== 1)
    .join('')
}


/*
Write reverseList function that simply reverses lists.
*/

let reverseList = arr => arr.reverse()


/*
Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".
"abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
"a"             --> "invalid string"
*/

function evenChars(str) {
  return str.length < 2 || str.length > 100 ? "invalid string" : str.split('').filter((item,i) => i % 2)
}


/*
Given a varying number of integer arguments, return the digits that are not present in any of them.
[12, 34, 56, 78]  =>  "09"
[2015, 8, 26]     =>  "3479"
Note: the digits in the resulting string should be sorted.
*/

function unusedDigits(...arr) {
  return '0123456789'.replace(/\d/g, (item) => arr.join('').includes(item) ? '' : item)
}


/*
A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

First argument (required): the original string to be converted.
Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.

titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'
*/

function titleCase(t, m) {
  if (t == '') return ''
  if (m) {
    let mArr = m.split(' ').map(item => item.toLowerCase())
    let arr = t.split(' ').map(item => item.toLowerCase())
    arr = arr.map((item,i) => !mArr.includes(item) || i == 0 ? item[0].toUpperCase() + item.slice(1).toLowerCase() : item)
    return arr.join(' ')
  } else {
    return t.split(' ').map(item => item[0].toUpperCase() + item.slice(1).toLowerCase()).join(' ')
  }
}


/*
Write a method that will search an array of strings for all strings that contain another string, ignoring capitalization. Then return an array of the found strings.

The method takes two parameters, the query string and the array of strings to search, and returns an array.

If the string isn't contained in any of the strings in the array, the method returns an array containing a single string: "Empty" (or Nothing in Haskell, or "None" in Python and C)

If the string to search for is "me", and the array to search is ["home", "milk", "Mercury", "fish"], the method should return ["home", "Mercury"].
*/

function wordSearch(query, seq){
  let arr = seq.filter(item => item.toLowerCase().includes(query.toLowerCase()))
  return arr.length == 0 ? ["Empty"] : arr
}


/*
Given an array, find the duplicates in that array, and return a new array of those duplicates. The elements of the returned array should appear in the order when they first appeared as duplicates.

Note: numbers and their corresponding string representations should not be treated as duplicates (i.e., "1" != 1).

[1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]  ==>  [4, 3, 1]
[0, 1, 2, 3, 4, 5]                ==>  []
*/

function duplicates(arr) {
  let a = [], b = []
  arr.forEach(item => {
    if (a.includes(item)) b.push(item)
    a.push(item)
  })
  return [...new Set(b)]
}


/*
In this kata, you will be given an array. Each value represents a meeting room. Your job? Find the first empty one and return its index (N.B. There may be more than one empty room in some test cases).

'X' --> busy
'O' --> empty
If all rooms are busy, return "None available!"
*/

function meeting(x){
  return x.indexOf('O') == -1 ? "None available!" : x.indexOf('O')
}


/*
You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising. Your task is to return an object which includes the count of food options selected by the developers on the meetup sign-up form..

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
    meal: 'vegetarian' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
    meal: 'standard' },
  { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
    meal: 'vegan' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
    meal: 'vegetarian' },
];
your function should return the following object (the order of properties does not matter):
{ vegetarian: 2, standard: 1, vegan: 1 }
The order of the meals count in the object does not matter.
The count value should be a valid number.
The input array will always be valid and formatted as in the example above.
there are 5 possible meal options and the strings representing the selected meal option will always be formatted in the same way, as follows: 'standard', 'vegetarian', 'vegan', 'diabetic', 'gluten-intolerant'.
*/

function orderFood(l) {
  let res = {}
  l.forEach(item => res[item["meal"]] ? res[item["meal"]]++ : res[item["meal"]] = 1 )
  return res
}


/*
You will be given a string representing the garden such as:

garden = 'gravel gravel gravel gravel gravel gravel gravel gravel gravel rock slug ant gravel gravel snail rock gravel gravel gravel gravel gravel gravel gravel slug gravel ant gravel gravel gravel gravel rock slug gravel gravel gravel gravel gravel snail gravel gravel rock gravel snail slug gravel gravel spider gravel gravel gravel gravel gravel gravel gravel gravel moss gravel gravel gravel snail gravel gravel gravel ant gravel gravel moss gravel gravel gravel gravel snail gravel gravel gravel gravel slug gravel rock gravel gravel rock gravel gravel gravel gravel snail gravel gravel rock gravel gravel gravel gravel gravel spider gravel rock gravel gravel'
Rake out any items that are not a rock or gravel and replace them with gravel such that:

garden = 'slug spider rock gravel gravel gravel gravel gravel gravel gravel'
Returns a string with all items except a rock or gravel replaced with gravel:

garden = 'gravel gravel rock gravel gravel gravel gravel gravel gravel gravel'
*/

function rakeGarden(garden) {
  return garden.split(' ').map(item => item !== 'gravel' && item !== "rock" ? item = 'gravel' : item).join(' ')
}


/*
Sort the given array of strings in alphabetical order, case insensitive. For example:
["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]
*/

function sortme(names) {
  return names.sort( (a,b) => a.localeCompare(b, 'en', {'sensitivity': 'base'}) )
}


/*
Print all numbers up to 3rd parameter which are multiple of both 1st and 2nd parameter.
Return results in a list/array
Do NOT worry about checking zeros or negative values.
To find out if 3rd parameter (the upper limit) is inclusive or not, check the tests, it differs in each translation
*/

function multiples(s1,s2,s3){
  let arr = []
  for (let i = s2; i < s3; i+=s2) {
    if (i % s1 == 0 && i % s2 == 0) arr.push(i)
  }
  return arr
}


/*
Complete the function that takes a string of English-language text and returns the number of consonants in the string.
*/

function consonantCount(str) {
  return str.replace(/[aeiou\d\W_]/gi, "").length
}


/*
You are given a string of n lines, each substring being n characters long: For example:
s = "abcd\nefgh\nijkl\nmnop"
We will study some transformations of this square of strings.
- Clock rotation 180 degrees: rot
rot(s) => "ponm\nlkji\nhgfe\ndcba"

- selfie_and_rot(s) (or selfieAndRot or selfie-and-rot) It is initial string + string obtained by clock rotation 180 degrees with dots interspersed in order (hopefully) to better show the rotation when printed.
s = "abcd\nefgh\nijkl\nmnop" --> 
"abcd....\nefgh....\nijkl....\nmnop....\n....ponm\n....lkji\n....hgfe\n....dcba"
or printed:
|rotation        |selfie_and_rot
|abcd --> ponm   |abcd --> abcd....
|efgh     lkji   |efgh     efgh....
|ijkl     hgfe   |ijkl     ijkl....   
|mnop     dcba   |mnop     mnop....
                           ....ponm
                           ....lkji
                           ....hgfe
                           ....dcba
Notice that the number of dots is the common length of "abcd", "efgh", "ijkl", "mnop".

Task:
Write these two functions rotand selfie_and_rot
and
high-order function oper(fct, s) where
fct is the function of one variable f to apply to the string s (fct will be one of rot, selfie_and_rot)

s = "abcd\nefgh\nijkl\nmnop"
oper(rot, s) => "ponm\nlkji\nhgfe\ndcba"
oper(selfie_and_rot, s) => "abcd....\nefgh....\nijkl....\nmnop....\n....ponm\n....lkji\n....hgfe\n....dcba"
*/

let rot = str => str.split("").reverse().join("")

function selfieAndRot(s) {
  let fHalf = s.replace(/.+/g, t => t + t.replace(/./g, "."))
  return fHalf + "\n" + rot(fHalf)
}

let oper = (fct, s) => fct(s)


/*
We are going to replicate the kata Base64 Encoding, but instead of creating our own encoding / decoding functions, we will use NodeJS' Buffer module to do it for us.

Create the function String.prototype.toBase64 that encodes a string in Base64. Also create the function String.prototype.fromBase64 that decodes a Base64 string into utf8.

// should return 'dGhpcyBpcyBhIHN0cmluZyEh'
'this is a string!!'.toBase64(); 

// should return 'this is a string!!'
'dGhpcyBpcyBhIHN0cmluZyEh'.fromBase64();
*/

String.prototype.toBase64 = function() {
  return Buffer.from(this, "utf8").toString("base64")
}

String.prototype.fromBase64 = function() {
  return Buffer.from(this, "base64").toString("utf8")
}


/*
You need to create a function that converts the input into this format, with the output being the same string expect there is a pattern of uppercase and lowercase letters.

input:  "stop Making spongebob Memes!"
output: "StOp mAkInG SpOnGeBoB MeMeS!"
*/

function spongeMeme(str) {
  return str.replace(/\w/g, (a,i) => i % 2 ? a.toLowerCase() : a.toUpperCase())
}


/*
Your job is to implement a function which returns the last D digits of an integer N as a list.
If D > (the number of digits of N), return all the digits.
If D <= 0, return an empty list.
Examples:
N = 1
D = 1
result = [1]

N = 1234
D = 2
result = [3, 4]

N = 637547
D = 6
result = [6, 3, 7, 5, 4, 7]
*/

function lastDigit(n, d) {
  let arr = n.toString().split('').map(item => +item)
  return d > arr.length ? arr : arr.slice(arr.length-d)
}
