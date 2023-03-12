/**
 * Vowels
 *
 * Write a function which returns number of vowels in given string.
 *
 * Examples:
 * vowels('aeiou') === 5
 * vowels('Adam') === 2
 * vowels('Hello there!') === 4
 */


// izmantot match 
//str.match(/[aeiou]/ig) returns an array with all the characters that match the regex, and .length returns the length of the array.

function vowels(str: string)  {
return str.match(/[aeiou]/gi)?.length;

}

export { vowels };


/* original 

function vowels(s: string) {}

export { vowels }; */