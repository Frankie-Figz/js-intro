
var factorial = function(n) {
    // variable to be used for accumulating the rolling multiplication
    var accum = 1;
    // Start the loop
    for(var i = 0; i < n; i++ ){
        accum = accum * i;
    }
    // Return the accumulated value
    return accum;
}

// The factorial of 4 is equal to 24; This is expressed in math as 4! = 24
console.log(factorial(4))

// Why is the above statement failing?