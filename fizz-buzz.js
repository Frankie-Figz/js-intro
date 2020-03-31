
var fizzbuzz = function(n) {
    for(var i = 0; i <= n; i++){
        // If 3 AND 5
        if(i % 3 == 0 & i % 5 == 0)
            console.log("FizzBuzz")
        // Else if only 3
        else if(i % 3)
            console.log("Fizz")
        // Else if only 5
        else if(i % 5)
            console.log("Buzz")
         // Else number
        else
            console.log(String(i))
    }
}

// Easy version
var fizz = function(x) {
    if(x % 3 == 0) {
        return "Fizz"
    } else {
        return x
    }
}

fizzbuzz(25);