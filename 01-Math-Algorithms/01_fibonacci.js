// 0 1 1 2 3 

function fibonacci(n){
    const fib = [0,1]
    for(let i = 2; i < n; i++){
        fib[i] = fib[i-2] + fib[i-1]
    }
    return fib
}

console.log(fibonacci(2)) // [0,1]
console.log(fibonacci(3)) // [0,1,1]
console.log(fibonacci(7)) // [0,1,1,2,3,5,8]

// Time Complexity -> O(n) as the no of input increases, the iteration increases so it is linear 