// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Fast-fib (0.363s benchmark), O(n) time & space
// function fib(n, counter = 1, tuple = [0, 1]) {
//     if (counter === n) { return tuple[1] }
//     return fib(n, counter + 1, [tuple[1], tuple[0] + tuple[1]])
// }

// Slow fib (1.524s benchmark), n log n time?
// function fib(n) {
//     if (n < 2) {
//         return n
//     }
//     return fib(n - 1) + fib(n - 2)
// }

// Memoized slow fib
function slowFib(n) {
    if (n < 2) {
        return n
    }
    return fib(n - 1) + fib(n - 2)
}

function memoize(fn) {
    const cache = {}
    return function(...args) {
        if (cache[args]) {
            // console.log(cache)
            return cache[args]
        }
        
        const result = fn.apply(this, args)
        cache[args] = result
        
        return result
    }
}

const fib = memoize(slowFib)

module.exports = fib;
