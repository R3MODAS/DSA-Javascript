// function isPowerOfTwo(n) {
//     if (n < 1) {
//         return false
//     }
//     while (n > 1) {
//         if (n % 2 !== 0) {
//             return false
//         }
//         n = n / 2
//     }
//     return true
// }
// console.log(isPowerOfTwo(1)) // true
// console.log(isPowerOfTwo(2)) // true
// console.log(isPowerOfTwo(5)) // false

// Time Complexity => 0(logn) as the value of n is decreased by half

//! Optimised Solution
function isPowerOfTwoBitwise(n){
    if(n < 1){
        return false
    }
    console.log(n & (n-1))
    return (n & (n-1)) === 0
}

console.log(isPowerOfTwoBitwise(1)) // true
console.log(isPowerOfTwoBitwise(2)) // true
console.log(isPowerOfTwoBitwise(5)) // false