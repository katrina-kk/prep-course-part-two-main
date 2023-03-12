//TASK DONE

/**
 * An Armstrong number is a number that is the sum of its own digits each raised to the power of the number of digits.
 *
 * For example:
 *
 *  9 is an Armstrong number, because 9 = 9^1 = 9
 *  10 is not an Armstrong number, because 10 != 1^2 + 0^2 = 1
 *  153 is an Armstrong number, because: 153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
 *  154 is not an Armstrong number, because: 154 != 1^3 + 5^3 + 4^3 = 1 + 125 + 64 = 190
 *
 * Write some code to determine whether a number is an Armstrong number.
 */

function validate(n: number): boolean {
    const str: string = n.toString()            //new object declaration number to string 
    const raisedPower: number = str.length      //new object declaration - lenght of the string
    const arr: number[] = str.split('').map(Number)  //new object declaration array of numbers are ; The split() method splits a string into an array of substrings. 
    let result: number = 0                           //map() creates a new array from calling a function for every array element.() static method returns the
    for (let i = 0; i < arr.length; i++) {              //The Math.pow value of a base raised to a power.  
        result += Math.pow(arr[i], raisedPower);       //Math.pow(base x, exponenty) = x* y pakāpē
                                                        //every loop cycle checks if arr at position i is truthy.
    }
    //return result === n ? true : false    ////condition ? exprIfTrue : exprIfFalse
    if ( result == n ) {
        return true;
      }      else {
        return false;
      }       
}


export { validate };


/*original

function validate(n: number) {}

export { validate };   */


