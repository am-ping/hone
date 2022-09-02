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
*/

/* HARD alternate solution
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
*/

/* HARD Eculids's algorithm alternate solution
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
*/

/* alternate
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
*/

/* alternate solution
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


/*

*/