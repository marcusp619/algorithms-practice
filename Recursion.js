
//Base Case
    // The condition when the recursion ends

//Factorial with for-loop

function factorial(num) {
    let total = 1;
    for(let i= num; i > 0; i--){
        total *= i
    }
    return total;
}

//Factorial recursive
function factorialR(num) {
    if(num === 1) return 1; // base case
    return num * factorialR(num-1);
}

console.log(factorialR(5));