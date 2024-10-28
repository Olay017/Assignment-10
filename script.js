/*Practice 1:
1. Create a variable called number and assign it any integer.
Use an if-else block to print whether the number is positive, negative, or
zero using console.log()*/

//SOLUTION
let number = 10;

if (number > 7) {
  console.log("The number is positive.");
} else if (number < 7) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}

/*Practice 2:
Create a variable called day and assign it the name of any day (e.g.,
'Monday').

Use a switch statement to print whether the day is a weekday or
weekend.*/

//SOLUTION
const day = "Monday";

switch (day) {
  case "Monday":
    console.log("it's a weekday");
    break;
  case "Tuesday":
    console.log("it's a weekday");
    break;
  case "Wednesday":
    console.log("it's a weekday");
    break;
  case "Thursday":
    console.log("it's a weekday");
    break;
  case "Friday":
    console.log("it's a weekday");
    break;
  case "Saturday":
    console.log("it's a weekend");
    break;
  case "Sunday":
    console.log("it's a weekend");
    break;
  default:
    console.log("it is not  valid day");
    break;
}

/*Practice 3:
1. Write a for loop that prints numbers from 1 to 10.
2.Use console.log() to print each number in the loop.*/

//SOLUTION
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

/*Practice 4:
1.Create a variable called count and initialize it to 1.
2.Use a while loop to print the multiplication table of 5 (e.g., 5 × 1 = 5, 5 × 2 =
10) until 5 × 10.
3.Use console.log() to display each step.*/

//SOLUTION
let count = 1;
while (count <= 10) {
  console.log(`5 X ${count} = ${5 * count}`);
  count++;
}

/*Practice 5:
1. Declare and initialize a number with value of 0
2.Write a do-while loop that Checks if that number is greater than 10.
3.Keep Incrementing the number by 1.
4.Use console.log() to print "The number is: [number]".*/

//SOLUTION
let myNumber = 0;
do {
  console.log(myNumber);
  myNumber++;
} while (myNumber <= 10);

/*Practice 6:
1.Write a for loop that prints numbers from 1 to 10.
2.Use a break statement to exit the loop when the number 5 is reached.
3.Use console.log() to print each number.*/

//SOLUTION
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

/*Practice 7:
1.Write a for loop that prints only even numbers between 1 and 20.
2.Use a continue statement to skip odd numbers.
3.Print each even number using console.log().*/

//SOLUTION
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}

/*Practice 8:
1.Write a function that takes two numbers as parameters and divides the
first by the second.
2.Use try-catch-finally to handle division by zero.
Print the result if the division is successful, otherwise print an error
message.*/

//SOLUTION
function divideNumbers(a, b) {
  try {
    if (b === 0) {
      throw new error("Division by zero is not allowed");
    }
    let result = a / b;
    console.log("The result is: ${result}");
  } catch (error) {
    console.log("Error: ${Error message}");
  } finally {
    console.log("Division attempt complete.");
  }
}

/*Practice 9:
rite a function called multiply that takes two numbers as parameters
and returns their product.
1.
Call the function with any two numbers and print the result using
console.log().*/

//SOLUTION
function multiply(a, b) {
  return a * b;
}
let result = multiply(4, 5);
console.log(result);

/*Practice 10:
1.Write a program that prints numbers from 1 to 30.
2.Print 'Fizz' if the number is divisible by 3.
3.Print 'Buzz' if the number is divisible by 5.
4.Print 'FizzBuzz' if the number is divisible by both 3 and 5.
5.Use console.log() to print each result.*/

//SOLUTION
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
