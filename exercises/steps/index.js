// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    let stepCounter = 1
    while (stepCounter <= n) {
        let curStep = ''
        for (let i = 0; i < n; i++) {
            if (i < stepCounter) {
                curStep += '#'
            } else {
                curStep += ' '
            }
        }
        console.log(curStep)
        stepCounter++
    }
}


module.exports = steps;
