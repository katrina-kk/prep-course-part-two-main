/**
 * Reverse Integer
 *
 * For given integer return an integer that is the reverse
 * ordering of numbers.
 *
 * Examples:
 * reverseInt(15) === 51
 * reverseInt(981) === 189
 * reverseInt(500) === 5
 * reverseInt(-15) === -51
 * reverseInt(-90) === -9
 */

//the reverse() method transposes the elements of the calling array object in place, mutating the array, and returning a reference to the array.

function reverse(int: number) {
    const reversed = int.toString().split('').reverse().join(''); // turn a number into a string, then turn it into an array to reverse. 
    return Math.sign(int) * parseInt(reversed); // Math.sign will return -1 as for negative number, 1 as for position number, 0 as for zero.

    //parseInt - converts int to string
}

export { reverse };

/*original 

function reverse(int: number) {}

export { reverse }; */
