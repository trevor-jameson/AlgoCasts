// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


// Tests passed
function maxChar(str) {
    let charMap = {}
    for (let char of str) {
        if (charMap[char]) {
            charMap[char] += 1
        } else {
            charMap[char] = 1
        }
    }
    let maxCount = 0
    let maxChar
    for (let key in charMap) {
        if (charMap[key] > maxCount) {
            maxCount = charMap[key]
            maxChar = key
        }
    }
    return maxChar
}

module.exports = maxChar;
