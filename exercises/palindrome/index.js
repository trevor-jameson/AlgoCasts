// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Tests passing
// function palindrome(str) {
//     for (let i = 0; i < str.length / 2; i++) {
//         if (str[i] !== str[str.length - 1 - i]) {
//             return false
//         }
//     }
//     return true
// }

// Tests passing
// function palindrome(str) {
//     for (let char of str) {
//         let i = str.indexOf(char)
//         if (char !== str[str.length - 1 - i]) {
//             return false
//         }
//     }
//     return true
// }

// Tests passing
// function palindrome(str) {
//     const firstHalfStr = str.slice(0, Math.floor((str.length - 1) / 2)).split('').reverse().join('')
//     const secondHalfStr =  str.slice(Math.ceil((str.length) / 2))
//     return firstHalfStr === secondHalfStr
// }

// Tests passing
// function palindrome(str) {
//     const revStr = str.split('').reverse().join('')
//     return str === revStr
// }

// Tests passing
// function palindrome(str) {
//     return str.split('').every((char, i) => char === str[str.length - i - 1])
// }

module.exports = palindrome;
