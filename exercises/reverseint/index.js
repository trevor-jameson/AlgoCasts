// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    if (n > 0) {
        return flip(n)
    }
    if (n === 0) {
        return n
    }
    if (n < 0) {
        return (flip(n) - flip(n) * 2)
    }
    function flip(int) {
        return parseInt(int.toString().match(/\d/gm).reverse().join(''))
    }
}

module.exports = reverseInt;
