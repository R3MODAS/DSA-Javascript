// Factorial -> n! (n = 5 || 5 * 4 * 3 * 2 * 1) 

function factorial(n) {
    let fact = 1;
    for (let i = 2; i <= n; i++) {
        fact = fact * i
    }
    return fact
}

console.log(factorial(0)) // 1
console.log(factorial(1)) // 1
console.log(factorial(5)) // 120

// Time Complexity -> O(n) as the no of input increases, the iteration increases so it is linear 