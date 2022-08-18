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
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

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
If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).
*/

/* alternate solution
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
*/

/* HARD alternate solution
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
*/

/* alternate
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
*/

/* alternate solution
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
    .map((item,i) => item.split('')
         .map((item,i) => i % 2 === 0 ? item.toUpperCase() : item)
         .join(''))
    .join(' ')
}


/*

*/