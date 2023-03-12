//TASK DONE 

/**
 * Is Even
 *
 * Determine if given number is even
 * without using a mathematic operator ( +, -, %, /, Math, ParseInt etc.)
 * nor a conditional operator.
 *
 * Examples:
 * isEven(4) === true
 * isEven(3) === false
 */

const evenNums = [ "0","2","4","6","8"];
function isEven(n: number) {
const integerAsString = n.toString().split('.')[0];           //The split() method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.
const lastDigit = integerAsString[integerAsString.length - 1]
return evenNums.includes(lastDigit);


}
export { isEven };





// "+" to turn string into a number (unary operator)

/* original 
function isEven(n: number) {}
izmantot ciklu, kas katru reizi boolean mainīgajam maina vērtību

export { isEven }; */