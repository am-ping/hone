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
