//TASK DONE

/**
 * Second Largest
 *
 * Array of numbers are passed in the function, your task is to find the second largest number.
 */

function secondLargest(array: number[]): number {
    const maxNum: number = Math.max(...array)                    //The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.
    let result: number = 0                                         //The Math.max() static method returns the largest of the numbers given as input parameters, or -Infinity if there are no parameters.
    let func = array.reduce((previousValue, currentValue) => {      //The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
        if (currentValue > previousValue && currentValue !== maxNum) {     //The strict inequality (!==) operator checks whether its two operands are not equal, returning a Boolean result.
            result = currentValue
        }
        return result
    })
    return result
}

export { secondLargest };


/* original
**
 * Second Largest
 *
 * Array of numbers are passed in the function, your task is to find the second largest number.
 */

//function secondLargest(array: number[]) {}

//export { secondLargest };

