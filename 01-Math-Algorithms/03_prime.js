// Prime Number -> 2,3,5,7

function isPrime(n){
    if(n < 2){
        return false
    }
    for(i = 2; i < n; i++){
        if(n % i === 0){
            return false
        }
    }
    return true
}

console.log(isPrime(1)) // false
console.log(isPrime(5)) // true
console.log(isPrime(4)) // false

// Time Complexity -> O(n) as the no of input increases, the iteration increases so it is linear 