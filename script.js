// Get user input as a number
let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));
// Loop from 1 to the entered number

for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log ("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}
    //If current number divisable by three, print "Fizz"
    //If current number divisible by 5, print "Buzz"
    //If current number divisible by three and five print "FizzBuzz"
    //Else print the current number