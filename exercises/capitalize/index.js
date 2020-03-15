// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// This solution is O(n)
function capitalize(str) {
    let capitalizedStr = ''
    let prevCharStr = true
    for (let i = 0; i < str.length; i++) {
        if (prevCharStr) {
            capitalizedStr += str[i].toUpperCase()
            prevCharStr = false
        } else {
            capitalizedStr += str[i]
        }
        if (str[i] === " ") {
            prevCharStr = true
        }
    }
    return capitalizedStr
}

module.exports = capitalize;
