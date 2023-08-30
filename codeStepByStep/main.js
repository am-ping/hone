/*
Write a function named validPasswords that examines a list of passwords and password policies and returns how many of the passwords are acceptable by those policies. Your function accepts a string parameter representing a file name as a parameter. Each line of the file contains a policy followed by a password. A policy is of the form MIN-MAX LETTER indicating that the given letter must occur MIN to MAX number of times in the password, inclusive. For example, if the file named passwords.txt contains the following values:

1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc
For example, 1-3 a means that the password must contain a at least 1 time and at most 3 times. In the above example, 2 passwords are valid. The middle password, cdefg, is not; it contains no instances of b, but needs at least 1. The first and third passwords are valid: they contain one a or nine c, both within the limits of their respective policies. So the call of validPasswords("passwords.txt") should return 2.

You may assume that the file exists and is readable and that it follows the format described above.
*/

function validPasswords(filename) {
  const data = fs.readFileSync(filename, 'utf8')
  const lines = data.trim().split('\n')

  let count = 0
  lines.forEach(item => {
      let m = item.split(' ')[0].split('-').map(item => +item)
      let l = item.split(' ')[1][0]
      let pw = item.split(' ')[2].split('').filter(item => item == l).length
      
      if (pw >= m[0] && pw <= m[1]) count++
  })
  return count
}


/*
Write a function named validPasswords2 (similar to the previous exercise validPasswords) that examines a list of passwords and password policies and returns how many of the passwords are acceptable by those policies. Your function accepts a string parameter representing a file name as a parameter. Each line of the file contains a policy followed by a password. A policy is of the form INDEX1-INDEX2 LETTER indicating that the given letter must occur at exactly one of the two given 1-based indexes in the password. For example, if the file named passwords.txt contains the following values:

1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc
The first line, abcde is valid: position 1 contains a and position 3 does not. The second line, cdefg is invalid: neither position 1 nor position 3 contains b. The third line, ccccccccc is invalid: both position 2 and position 9 contain c. So the call of validPasswords2("passwords.txt") should return 1. Note again that the indexes given are 1-based, not 0-based.
*/

function validPasswords2(filename) {
  const data = fs.readFileSync(filename, 'utf8')
  const lines = data.trim().split('\n')
  let count = 0
  
  lines.forEach(item => {
      let i = item.split(' ')[0].split('-').map(item => +item)
      let a = item.split(' ')[1][0]
      let pw = item.split(' ')[2].split('')
      
      if (pw[ i[0]-1 ] == a || pw[ i[1]-1 ] == a) count++
      if (pw[ i[0]-1 ] == a && pw[ i[1]-1 ] == a) count--
  })
  return count
}


/*
Write a function named largestNumber that accepts an array of positive integers as a parameter and returns a string representing the largest integer value that could be formed by concatenating together those integers. (We use a string since the result might be larger than the domain of type int or long.) For example, if the array passed is [11, 3], you should return "311". If the array passed is [2, 20, 7, 8, 25], you should return "8725220". You may assume that the array contains at least one element and that all values in the array are greater than 0.
*/

function largestNumber(arr) {
  arr.sort((a,b) => {
      if ("" + a + b > "" + b + a) {
          return 1
      } else {
          return -1
      }
  })
  return arr.reverse().join('')
}


/*
Write a function named passports that examines an input file full of passport data and returns the number of passports that are valid. Your function accepts a string parameter representing a file name as a parameter. A valid passport is one that contains all of the following required fields:

byr (Birth Year)
iyr (Issue Year)
eyr (Expiration Year)
hgt (Height)
hcl (Hair Color)
ecl (Eye Color)
pid (Passport ID)
A passport can also contain the following optional field:

cid (Country ID)
Each passport in the input file is represented as a sequence of key:value pairs separated by spaces or newlines. Passports are separated by blank lines. For example, if the file named passports.txt contains the following text:

ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
byr:1937 iyr:2017 cid:147 hgt:183cm

iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884
hcl:#cfa07d byr:1929

hcl:#ae17e1 iyr:2013
eyr:2024
ecl:brn pid:760753108 byr:1931
hgt:179cm

hcl:#cfa07d eyr:2025 pid:166559648
iyr:2011 ecl:brn hgt:59in
The first passport is valid; all eight fields are present. The second passport is invalid; it is missing hgt (the Height field). The third passport is valid; it is missing only the optional cid (country ID) field. The fourth passport is invalid; it is missing two fields, cid and byr. Missing cid is fine, but missing any other field such as byr is not. So the call of passports("passwords.txt") should return 2.
*/

function passports(filename) {
  const data = fs.readFileSync(filename, 'utf8')
  const list = data.trim().split('\n\n')
  
  let arr = list.map(p => {
      return p
          .trim()
          .replace(/\n/g, ' ')
          .split(' ')
          .map(item => item = item.split(':')[0])
          .filter(item => item !== 'cid')
  })
  
  return arr.filter(item => item.length >= 7).length
}


/*
Write a function named addStars that accepts as a parameter an array of strings, and modifies the array by placing a "*" element between elements, as well as at the start and end of the array.

For example, if the array arr contains ["the", "quick", "brown", "fox"], the call of addStars(arr) should modify it to store ["*", "the", "*", "quick", "*", "brown", "*", "fox", "*"].

If the array passed is empty, you should add a single "*" to the array, resulting in ["*"].
*/

function addStars(arr) {
	for(let i = arr.length - 1; i >= 0; i--) {
        arr.splice(i,0,'*')
    }
    arr.push('*')
    return arr
}


/*
Write a function named average that accepts an array of numbers as a parameter and returns the average of all of the numbers in the array. Recall that the average value of a collection of numbers is determined by the overall sum of the values divided by the number of values in the collection. For example, if an array variable named called nums stored the following values:

let nums = [-1, 3.0, 12, 15, -4, 1, -12.5, 1, 8];
Then the call of average(nums) should return 2.5 since that is the average of all of the values in the array.

You may assume that the array passed to your function is non-empty and contains only number types.
*/

function average(nums) {
	return nums.reduce((a,b) => a + b, 0) / nums.length
}


/*
Write a function named banish that accepts two arrays of integers a1 and a2 as parameters and removes all occurrences of a2's values from a1. An element is "removed" by shifting all subsequent elements one index to the left to cover it up, placing a 0 into the last index. The original relative ordering of a1's elements should be retained.

For example, suppose the following two arrays are declared and the following call is made:

let a1 = [42, 3, 9, 42, 42, 0, 42, 9, 42, 42, 17, 8, 2222, 4, 9, 0, 1];
let a2 = [42, 2222, 9];
banish(a1, a2);
After the call has finished, the contents of a1 should become:

[3, 0, 17, 8, 4, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
Notice that all occurrences of the values 42, 2222, and 9 have been removed and replaced by 0s at the end of the array, and the remaining values have shifted left to compensate.

Do not make any assumptions about the length of the arrays or the ranges of values each might contain. For example, each array might contain no elements or just one element, or very many elements (if a2 is an empty array that contains no elements, a1 should not be modified by the call to your function.) You may assume that the arrays passed are not null. You may assume that the values stored in a2 are unique and that a2 does not contain the value 0.

You may not use any temporary arrays or Strings to help you solve this problem (but you may declare as many simple variables as you like, such as numbers.).
*/

function banish(a1,a2) {
  for (let i = a1.length - 1; i >= 0; i--) {
      if ( a2.includes(a1[i]) ) {
          a1.splice( i, 1 )
          a1.push(0)
      }
  }
  return a1
}


/*
Write a function named collapse that accepts an array of integers as a parameter and returns a new array where each pair of integers from the original array has been replaced by the sum of that pair. For example, if an array called arr stores [7, 2, 8, 9, 4, 13, 7, 1, 9, 10], then the call of collapse(arr) should return a new array containing [9, 17, 17, 8, 19]. The first pair from the original array is collapsed into 9 (7 + 2), the second pair is collapsed into 17 (8 + 9), and so on.

If the array stores an odd number of elements, the last element is not collapsed. For example, if the array had been [1, 2, 3, 4, 5], then the call would return [3, 7, 5]. Your function should not change the array that is passed as a parameter.
*/

function collapse(arr) {
	let newA = []
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0 && i === arr.length - 1) newA.push(arr[i])
        if (i % 2) newA.push( arr[i - 1] + arr[i] )
    }
    return newA
}


/*
Write a function named contains that accepts two arrays a1 and a2 as parameters and that returns a boolean value indicating whether or not a2's sequence of elements appears in a1 (true for yes, false for no). The sequence of elements in a2 may appear anywhere in a1 but must appear consecutively and in the same order. For example, if variables called a1 and a2 store the following values:

let a1 = [1, 6, 2, 1, 4, 1, 2, 1, 8];
let a2 = [1, 2, 1];
Then the call of contains(a1, a2) should return true because a2's sequence of values [1, 2, 1] is contained in a1 starting at index 5. If a2 had stored the values [2, 1, 2], the call of contains(a1, a2) would return false because a1 does not contain that sequence of values. Arrays may also include non-integer values, such as doubles or strings. Anything that would be considered equal using JavaScript's "==" comparison should be considered equivalent in this function. For example, if variables called a3 and a4> store the following values:

let a3 = [false, true, "1", 2.0, 3];
let a4 = ["true", 1, "2"];
then the call contains(a3, a4) should return true (note that you don't need to use the stricter "===" equivalence here, so "1" == 1 is true even though "1" === 1 is false.

Any two arrays with identical elements are considered to contain each other, so a call such as contains(a1, a1) should return true.

You may assume that both arrays passed to your function will have lengths of at least 1.
*/

function contains(a1, a2) {
  return a1.join('').includes(a2.join(''))
}


/*
Write a function named calculateLine which calculates and returns the y value of the line represented with a given x value, m slope, and an intercept b (as seen in the line equation of the form y = m x + b).

For example, a call of calculateLine(5, 2, 4) would return 14 because 14 = 2 * 5 + 4, a call to calculateLine(1, 2, 0) would return 2 because 2 = 2 * 1 + 0, and a call to calculateLine(1, 0.5, 2) would return 2.5 because 2.5 = 0.5 * 1 + 2.
*/

let calculateLine = (x, m, b) => m * x + b

/*
Write JavaScript statements that print the following console output:
\\\\\\\\\\\\\\\\\\\\
|| FEAR THE TREE! ||
////////////////////
*/

console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")
console.log("|| FEAR THE TREE! ||")
console.log("////////////////////")


/*
What is the output produced by the following statement?
console.log("flashy\n\" slashes\" and \nplushy \"slushies\"");
*/

flashy
" slashes" and 
plushy "slushies"


/*
Assume the following functions are defined:
function main() {
    function1();
    function2();
    console.log("Done with main.");
}​
function function1() {
    console.log("Inside function 1!");
}
function function2() {
    console.log("Inside function 2!");
    function1();
    console.log("Done with function 2!");
}
What console output would result from calling main?
*/

Inside function 1!
Inside function 2!
Inside function 1!
Done with function 2!
Done with main.


/*
Assume the following functions are defined:

function main() {
    first();
    second();
    third();
    second();
    console.log("Done with main.");
}
​
function first() {
    console.log("Inside first function.");
}
​
function second() {
    console.log("Inside second function.");
    third();
    console.log("Done with second function.");
}
    
function third() {
    console.log("Inside third function.");
    first();
    console.log("Called first function.");
    console.log("Done with third function.");
}
What console output would result from calling main?
*/

Inside first function.
Inside second function.
Inside third function.
Inside first function.
Called first function.
Done with third function.
Done with second function.
Inside third function.
Inside first function.
Called first function.
Done with third function.
Inside second function.
Inside third function.
Inside first function.
Called first function.
Done with third function.
Done with second function.
Done with main.


/*
Write a function containsSumSequence that accepts as parameters an array of Numbers nums and a targetSum and returns true if there is a non-empty sequence of adjacent values in nums that adds to the targetSum. A sequence of adjacent values is one that does not skip any values in the running total.

For example, if a variable called nums stores the following values:

[1, 4, 2, -3, 1, -8]
the call containsSumSequence(nums, 3) would return true since the sequence (4, 2, -3) has a sum of 3 and these are adjacent in the array. The call containsSumSequence(1) would also return true since the first element in the array adds to 1 (it is a sequence of length 1).

The call containsSumSequence(nums, 8) would return false since there is no sequence of adjacent values that sums to 8.

You may assume the given array contains only Number types and is not null.
*/

function containsSumSequence(arr, targetSum) {
    let b = false
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j <= arr.length; j++) {
            if ( arr.slice(i,j).reduce((a,b) => a + b, 0) === targetSum ) b = true
        }
    }
    return b
}
  
  
/*
Write a function named countDuplicates that accepts an array as a parameter and that returns the number of duplicate values in the array. A duplicate value is a value that also occurs earlier in the array.

For example, if an array named a contains [1, 4, 2.5, 4, "7", 1, 1, 9, 2, "7", 7, false, 3, 4, 1], then the call of countDuplicates(a) should return 6 because there are three duplicates of the value 1, one duplicate of the string value "7", and two duplicates of the value 4.

You may assume that the array passed is non-null and that non of the elements in the array are null or undefined.

Constraints: The array could be empty or could contain only a single element; in such cases, your function should return 0. Do not modify the contents of the array.
*/
  
function countDuplicates(arr) {
    return arr.length - [...new Set(arr)].length
}

/*
Write a function named countInRange that accepts three parameters: an array of integers, a minimum and maximum integer, and returns the number of elements in the array within that range inclusive. For example, if the array v contains [28, 1, 17, 4, 41, 9, 59, 8, 31, 30, 25], the call of countInRange(v, 10, 30) should return 4.

You may assume that the array passed is non-null and contains only integers. If the array is empty, return 0. Do not modify the array that is passed in.
*/
  
function countInRange(v, min, max) {
    return v.filter(item => item >= min && item <= max).length
}

  
/*
Write a function named countUnique that accepts an array of values as a parameter and returns a count of the number of unique values that occur in the array. If the array contains multiple occurrences of the same element value, only one of those occurrences should count toward your total.

For example, if an array named numbers stores [7, 7, 2, 2, 1, 2, 2, "foo", true, true, 7], the call of countUnique(numbers) should return 4 because there are 4 unique values: 7, 2, 1, and "foo".

Constraints:
In solving this problem, do not create any other arrays, strings, etc., though you may create as many simple variables (e.g. number, boolean) as you like.
Do not modify the array passed to your function as the argument, such as by sorting or rearranging its element values.
*/

function countUnique(a) {
    return [...new Set(a)].length
}


/*
Write a "class" (a constructor function and methods, etc.) of objects named Date that remembers information about a month and day. Ignore leap years and don't store the year in your object. You must include the following public methods:

new Date(m, d)	constructs a new date representing the given month and day
daysInMonth()	returns the number of days in the month stored by your date object
getDay()	returns the day
getMonth()	returns the month
nextDay()	advances the Date to the next day, wrapping to the next month and/or year if necessary
toString()	returns a string representation such as "07/04"

You should define the entire class including the class heading, the private fields, and the declarations and definitions of all the public methods and constructor.
*/

class Date {
    constructor(m, d) {
        this.m = m;
        this.d = d;
    }
    daysInMonth() {
        let arr = [1,3,5,7,8,10,12]
        if (this.m == 2) return 28
        if (arr.includes(this.m)) return 31
        if (!arr.includes(this.m)) return 30
    }
    getDay() {
        return this.d
    }
    getMonth() {
        return this.m
    }
    nextDay() {
        const totalDays = this.daysInMonth()
        if (this.d < totalDays) {
          this.d++
        } else {
          this.d = 1
          if (this.m < 12) {
            this.m++
          } else {
            this.m = 1
          }
        }
    }
    toString() {
        if (this.m < 10) this.m = "0" + this.m
        if (this.d < 10) this.d = "0" + this.d
        return `${this.m}/${this.d}`
    }
}


/*
Define a "class" (a constructor function and methods, etc.) of objects named Student. A Student object represents a university student that, for simplicity, just has a name, ID number, and number of units earned towards graduation. Each Student object should have the following public behavior:

new Student(name, id)
Constructor that initializes a new Student object storing the given name and ID number, with 0 units.
s.getName()
s.getID()
s.getUnits()
Returns the name, ID, or unit count of the student, respectively.
s.incrementUnits(units)
Adds the given number of units to this student's unit count.
s.hasEnoughUnits()
Returns whether the student has enough units (180) to graduate.
s.toString()
Returns the student's string representation, e.g. "Nick (#42342)".
*/

class Student {
    constructor(studentName, studentID) {
        this.name = studentName
        this.id = studentID
        this.units = 0
    }
	getName() {
        return this.name
    }
    getID() {
        return this.id
    }
    getUnits() {
        return this.units
    }
    incrementUnits(units) {
        return this.units += units
    }
    hasEnoughUnits() {
        return this.units >= 180
    }
    toString() {
        return `${this.name} (#${this.id})`
    }
}


/*
Write a function named addCommas that accepts a string representing a number and returns a new string with a comma at every third position, starting from the right. For example, the call of addCommas("12345678") returns "12,345,678".
*/

function addCommas(digits) {
	return digits
            .split('')
            .reverse()
            .map((item,i) => i !== 0 && i % 3 == 0 ? item + ',' : item)
            .reverse()
            .join('')
}


/*
Write a function named anagrams that accepts two string paramters and returns true if the second string is an anagram of the first. A string is an anagram of another string if both strings contain the same characters (ignoring case and non-alphabetic characters).

For example, the call of anagrams("A decimal point", "I'm a dot in place!") should return true since both strings contain the same letters. However, the call anagrams("Decimal point", "I'm a dot in place!") should return false because even though both strings contain the same letters, the second string has one more "a" than the first string.
*/

function anagrams(phrase1, phrase2) {
    let str1 = phrase1.replace(/[\W]/g,'').toLowerCase().split('').sort()
    let str2 = phrase2.replace(/[\W]/g,'').toLowerCase().split('').sort()
    return str1.every((item,i) => item == str2[i])
}


/*
Write a function named compressString that accepts a string as a parameter and returns a new string that replaces repeated characters with a single occurrence of that character followed by the number of its occurrences. For example, the call of compressString("AABAAABBBCCCCDEEEEEE") should return "A2B1A3B3C4D1E6".
*/

function compressString(s) {
    if (s == '') return ''
	let arr = s
            .split('')
            .map((item,i,a) => i !== 0 && a[i - 1] !== item ? ' ' + item : item)
            .join('')
    return arr.split(' ').map(item => item[0] + item.length).join('')
}


/*
Write a function named containsTwice that accepts a string and a character as parameters and returns true if that character occurs two or more times in the string. For example, the call of containsTwice("hello", 'l') should return true because there are two 'l' characters in that string.
*/

function containsTwice(str, ch) {
	return str.split('').filter(item => item === ch).length > 1
}


/*
Write a function named convertToAltCaps that accepts a string as a parameter and returns a version of the string where alternating letters are uppercase and lowercase, starting with the first letter in lowercase. For example, the call of convertToAltCaps("Pikachu") should return "pIkAcHu".
*/

function convertToAltCaps(str) {
    let s = str.replace(/ /g, '  ')
	return s
            .split('')
            .map((item,i) => i % 2 ? item.toUpperCase() : item.toLowerCase())
            .join('')
            .replace(/  /g, ' ')
}


/*
Write a function named countWords that accepts a string as its parameter and returns the number of words in it. A word is a sequence of one or more non-space characters. For example, the call of countWords("What is your name?") should return 4.
*/

function countWords(s) {
    let str = s.trim().replace(/ +/g, ' ')
    if (str == '') return 0
	return str.split(' ').length
}


/*
Write a function named crazyCaps that accepts a string as a parameter and returns a new string with its capitalization altered such that the characters at even indexes are all in lowercase and odd indexes are all in uppercase. For example, if a variable s stores "Hey!! THERE!", the call of crazyCaps(s) should return "hEy!! tHeRe!".
*/

function crazyCaps(s) {
	return s
        .split('')
        .map((item,i) => i % 2 ? item.toUpperCase() : item.toLowerCase())
        .join('')
}


/*
Write a function named removeDuplicates that accepts a string parameter and returns a new string with all consecutive occurrences of the same character in the string replaced by a single occurrence of that character. For example, the call of removeDuplicates("bookkeeeeeper") should return "bokeper" .
*/

function removeDuplicates(s) {
	if (s == '') return ''
	return s
        .split('')
        .map((item,i,a) => i !== 0 && a[i - 1] == item ? '' : item)
        .join('')
}


/*
Write a function named repeat that accepts a string and a number of repetitions as parameters and returns the String concatenated that many times. For example, the call of repeat("echo...", 3) returns "echo...echo...echo...". If the number of repetitions is 0 or less, return an empty string.
*/

function repeat(phrase, n) {
	if (n <= 0) return ''
    return phrase.repeat(n)
}


/*
Write a function named reverse that accepts a string parameter returns a new string with the characters in the opposite order. For example, A call of reverse("Pikachu") would return "uchakiP".
*/

function reverse(s) {
	return s.split('').reverse().join('')
}


/*
Write a function named enoughTimeForLunch that accepts four integers hour1, minute1, hour2, and minute2 as parameters. Each pair of parameters represents a time on the 24-hour clock (for example, 1:36 PM would be represented as 13 and 36). The function should return true if the gap between the two times is long enough to eat lunch: that is, if the second time is at least 45 minutes after the first time. Otherwise the function should return false.

You may assume that all parameter values are valid: the hours are both between 0 and 23, and the minute parameters are between 0 and 59. You may also assume that both times represent times in the same day, e.g. the first time won't represent a time today while the second time represents a time tomorrow. Note that the second time might be earlier than the first time; in such a case, your function should return false.

Here are some example calls to your function and their expected return results:

call	value returned
enoughTimeForLunch (11, 00, 11, 59)	true
enoughTimeForLunch (12, 30, 13, 00)	false
enoughTimeForLunch (12, 30, 13, 15)	true
enoughTimeForLunch (14, 20, 17, 02)	true
enoughTimeForLunch (12, 30, 9, 30)	false
enoughTimeForLunch (12, 00, 11, 55)	false
*/

function enoughTimeForLunch(h1, m1, h2, m2) {
	let mins1 = (h1 > 0) ? (h1 * 60) + m1 : 0
    let mins2 = (h2 > 0) ? (h2 * 60) + m2 : 0
    return mins2 - mins1 >= 45
}


/*
Write a function named rockPaperScissors that takes two parameters: a string representing a first player's move in a game of Rock-Paper-Scissors and a string representing a second player's move. Depending on each player's move, the function should output to the console the winner of the round if there was a winner, a tie if both players had the same move, or whether a player gave an invalid move. When comparing moves, letter-casing does not matter ("rock" should be considered the same move as "rOcK").

The two-player game of Rock-Paper-Scissors works as following:

Each player chooses one of three moves: "rock", "paper", or "scissors"
A move of "rock" wins over another player's move of "scissors"
A move of "scissors" wins over another player's move of "paper"
A move of "paper" wins over another player's move of "rock"
If two players use the same move, the result is a tie
For example, a call of rockPaperScissors("rock", "scissors") would result in console output of "Player 1 wins!". A call of rockPaperScissors("ROCK", "Paper") would result in console output of "Player 2 wins!". A call of rockPaperScissors("SCISSORS", "Scissors") would result in console output of "TIE!". If one player gives a move other than "rock", "paper", or "scissors", the console output should be "Invalid move of [player's invalid move]!", where you should replace [player's invalid move] with the exact value passed by that player. If both players pass invalid moves, the console output should be "Invalid moves of [player 1's invalid move] and [player 2's invalid move]!".
*/

function rockPaperScissors(p1, p2) {
    p1 = p1.toLowerCase()
    p2 = p2.toLowerCase()
    let moves = ['rock','paper','scissors']
    if (moves.includes(p1) && moves.includes(p2) && p1 === p2) {
        console.log( "TIE!" )
    } else if ( !moves.includes(p1) && moves.includes(p2) ) {
        console.log( `Invalid move of ${p1}!` )
    } else if ( !moves.includes(p2) && moves.includes(p1) ) {
        console.log( `Invalid move of ${p2}!` )
    } else if ( !moves.includes(p1) && !moves.includes(p2) ) {
        console.log( `Invalid moves of ${p1} and ${p2}!` )
    } else if ((p1 === 'rock' && p2 === 'scissors') || (p1 === 'scissors' && p2 === 'paper') || (p1 === 'paper' && p2 === 'rock')) {
        console.log( 'Player 1 wins!' )
    } else {
        console.log( 'Player 2 wins!' )
    }
}


/*
Write a function named sumOfRange function that accepts two integer parameters min and max and returns the sum of the integers from min through max inclusive. For example, the call of sumOfRange(3, 7) returns 3 + 4 + 5 + 6 + 7 or 25. If min is greater than max, return 0.
*/

function sumOfRange(min, max) {
    if (min > max) return 0
	let s = 0
    for (let i = min; i <= max; i++) {
        s += i
    }
    return s
}


/*
Write a function named sumUpTo that accepts an integer parameter n and returns the sum of the integers from 1 through n inclusive. For example, sumUpTo(5) returns 15, since 1 + 2 + 3 + 4 + 5 = 15. You may assume that the value of n is at least 1.
*/

function sumUpTo(n) {
	let r = 0
    for (let i = 1; i <= n; i++) {
        r += i
    }
    return r
}


/*
Write a function named threeConsecutive that accepts three integers as parameters and returns true if they are three consecutive numbers; that is, if the numbers can be arranged into an order such that their values differ by exactly 1.
For example, the call of threeConsecutive(3, 2, 4) would return true.
*/

function threeConsecutive(num1, num2, num3) {
    const sorted = [num1, num2, num3].sort((a, b) => a - b)
    return sorted[1] - sorted[0] === 1 && sorted[2] - sorted[1] === 1
}


/*
Write a function named triangle that accepts an integer parameter representing a size in characters, and prints to the console a right-aligned right triangle figure whose non-hypotenuse sides are that length. For example, the call of triangle(5) should print the following output:

    *
   **
  ***
 ****
*****
You may assume that the value passed for the size is at least 1.
*/

function triangle(size) {
	for (let i = 1; i <= size; i++) {
        console.log( ' '.repeat(size - i) + '*'.repeat(i) )
    }
}


/*
Write a function named sumOfDigits that accepts an integer parameter and computes and returns the sum of all the digits of that number. For example, sumOfDigits(38015) returns 3+8+1+0+5 or 17. For negative numbers, return the same value as if the number were positive. For example, sumOfDigits(-72) returns 7+2 or 9.
*/

function sumOfDigits(n) {
	return Math.abs(n).toString().split('').reduce((a,b) => a + +b, 0)
}


/*
Write a function named averageOf3 that accepts three integers as parameters and returns the average of the three integers as a real number. For example, the call of averageOf3(4, 7, 13) should return 8.
*/

function averageOf3(n1, n2, n3) {
	return (n1 + n2 + n3)/3
}


/*
Write a function named binaryToDecimal that accepts an integer parameter whose digits are meant to represent binary (base-2) digits, and returns an integer of that number's representation in decimal (base-10). For example, the call of binaryToDecimal(101011) should return 43.

If you find your solution returning unexpected double values, remember that JavaScript will convert integer (whole number) values to double values when divided by a number that is not a factor. You can avoid this conversion by using JavaScript's parseInt function which converts any number to an integer value. For example, the call of parseInt(2.13333) would return 2.
*/

function binaryToDecimal(n) {
	return Number.parseInt(n, 2)
}


/*
Write a function named bmi that takes two Number values representing the weight and height of an individual. The function should calculate the body mass index (BMI), using the following formula:

BMI = weight / height2 * 703
The BMI rating groups each person into one of the following four categories:

BMI	Category
below 18.5	class 1
18.5 - 24.9	class 2
25.0 - 29.9	class 3
30.0 and up	class 4
After calculating the bmi and class for the given weight and height, your function should output the results, matching the following example output for the call to bmi(70.0, 194.25):

BMI = 27.9
class 3
Use the console.log() function to print each line of output and n.toFixed(1) to get a string of a number n to the precision of one decimal point. For example, if n is 1.2345, n.toFixed(1) would return "1.2".
*/

function bmi(h, w) {
	let r = ( w / h ** 2 * 703 ).toFixed(1)
    let c = r <= 18.5 ? 1 : r <= 24.9 ? 2 : r <= 29.9 ? 3 : 4
    
    console.log(`BMI = ${r}`)
    console.log(`class ${c}`)
}


/*
Write a function named boxOfStars that accepts two integer parameters representing a width and height in characters, and prints to the console a 'box' figure whose border is * stars and whose center is made of spaces.
For example, the call of boxOfStars(8, 5) should print the following output:
********
*      *
*      *
*      *
********
You may assume that the values passed for the width and height are integer values of at least 2.
*/

function boxOfStars(w, h) {
	for (let i = 1; i <= h; i++) {
        if (i == 1 || i == h) {
            console.log('*'.repeat(w))
        } else {
            console.log('*' + ' '.repeat(w - 2) + '*')
        }
    }
}


/*
Write a function named circleArea that accepts the radius of a circle as a parameter (as a real number) and returns the area of a circle with that radius. For example, the call of area(2.0) should return 12.566370614359172. You may assume that the radius passed is a non-negative number.
*/

function circleArea(r) {
	return Math.PI * r ** 2
}


/*
Write a function named countDigits that accepts an integer parameter and returns the number of digits in that integer. For example, countDigits(38015) returns 5. For negative numbers, return the same value as if the number were positive. For example, countDigits(-72) returns 2.
Note: Because JavaScript integers are number types, dividing two integers which do not divide evenly returns the decimal value of the result instead of an integer (for example, 1 / 2 results in 0.5, not 0). Use parseInt(a / b) to parse the result into an integer if needed to solve this problem.
*/

function countDigits(n) {
	return Math.abs(n).toString().length
}


/*
Write a function named countUnique that takes three integers as parameters and that returns the number of unique integers among the three. For example, the call countUnique(18, 3, 4) should return 3 because the parameters have 3 different values. By contrast, the call countUnique(6, 7, 6) should return 2 because there are only 2 unique numbers among the three parameters: 6 and 7.
*/

function countUnique(a, b, c) {
	return [...new Set([a,b,c])].length
}


/*
Write a function named daysInMonth that accepts a month (an integer between 1 and 12) as a parameter and returns the number of days in that month. For example, the call of daysInMonth(9) returns 30 because September has 30 days. You may assume that the month value passed is between 1 and 12 inclusive. Ignore leap years; assume that February always has 28 days.
*/

function daysInMonth(m) {
	let arr = [1,3,5,7,8,10,12]
    return (m == 2) ? 28 : (arr.includes(m)) ? 31 : 30
}


/*
Write a function named factorCount that accepts an integer (assumed to be positive) as its parameter and returns a count of its positive factors. For example, the eight factors of 24 are 1, 2, 3, 4, 6, 8, 12, and 24, so the call of factorCount(24) should return 8.
*/

function factorCount(n) {
    let arr = []
	for (let i = 1; i <= n; i++) {
        if ( Number.isSafeInteger(n / i) ) arr.push(i)
    }
    return arr.length
}


/*
Write a function named factorial that accepts an integer n as a parameter and returns the factorial of n, or n!.

A factorial of an integer is defined as the product of all integers from 1 through that integer inclusive. For example, the call of factorial(4) should return 1 * 2 * 3 * 4, or 24. The factorial of 0 and 1 are defined to be 1. You may assume that the value passed is non-negative and that its factorial can fit in the range of type number.
*/

function factorial(n) {
    let arr = []
	for (let i = 1; i <= n; i++) {
        arr.push(i)
    }
    return arr.reduce((a,b) => a * b, 1)
}


/*
In physics, a common useful equation for finding the position s of a body in linear motion at a given time t (in seconds), based on its initial position s0, initial velocity v0, and rate of acceleration a, is the following:

s = s0 + v0 t + 1/2 * at2

Write a function getDisplacement that takes in parameters s0, t, and v0 and returns the resulting position, s, using 9.8 as the acceleration constant for gravity.
*/

function getDisplacement(s0, v0, t) {
	return s0 + v0 * t + 1/2 * 9.8 * t ** 2
}
