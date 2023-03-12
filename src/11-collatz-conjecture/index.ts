/**
 * The Collatz Conjecture or 3x+1 problem can be summarized as follows:
 *
 * Take any positive integer n. If n is even, divide n by 2 to get n / 2. If n is odd, multiply n by 3 and add 1 to get 3n + 1. Repeat the process indefinitely. The conjecture states that no matter which number you start with, you will always reach 1 eventually.
 *
 * Given a number n, return the number of steps required to reach 1.
 *
 * Examples:
 * Starting with n = 12, the steps would be as follows:
 *
 *     0. 12
 *     1. 6
 *     2. 3
 *     3. 10
 *     4. 5
 *     5. 16
 *     6. 8
 *     7. 4
 *     8. 2
 *     9. 1
 *
 * Resulting in 9 steps. So for input n = 12, the return value would be 9.
 */


function steps(n: number) {
    let count: number = 0
    if (n > 0) {
        while (n !== 1) {              //!==  operator checks whether its two operands are not equal, returning a Boolean result
            if (n % 2 === 0) {          //The while loop checks for a specified condition before beginning to execute the block of statements.
                n = n/2                //If n is even, divide n by 2 to get n / 2. If n is odd, multiply n by 3 and add 1 to get 3n + 1.
                count += 1             //The addition assignment (+=) operator adds the value of the right operand to a variable and assigns the result to the variabl
            } else {
                n = (3 * n) + 1
                count += 1
            }
        }
        return count
    } else {
        throw new Error("Only positive numbers are allowed")
    }
}

export { steps };   


/* original 

function steps(n: number) {}

export { steps };   */
