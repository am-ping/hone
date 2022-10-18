/*
Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.
"thequickbrownfoxjumpsoverthelazydog" => true
"leetcode" => false
*/

/**
 * @param {string} sentence
 * @return {boolean}
*/
function checkIfPangram(str) {
    return 'abcdefghijklmnopqrstuvwxyz'
        .split('')
        .every(l => str.toLowerCase().includes(l))
};