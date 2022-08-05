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
  str.split('').forEach((item) => {
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

*/