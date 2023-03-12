
//TASK DONE 

/**
 * Longest Word
 *
 * Write a function that returns the longest word in the passed sentence.
 * If there are two or more words that are the same length, return
 * the first word from the string with that length. Ignore punctuation
 * and assume sentence will not be empty.
 *
 * Examples:
 * longestWord("Hello there") === "Hello"
 * longestWord("My name is Adam") === "name"
 * longestWord("fun&!! time") === "time"
 */

//The RegEx is specified using two slashes (/) surrounding the desired search pattern (am). The final character in the pattern (“g”) occurs after the closing slash of the RegEx and is a flag indicating that the RegEx pattern should be used to perform a global search of the string, resulting in matching multiple instances of the provided pattern.


function longestWord(sen: string): string {                       //search for any character in the range a to z, whether the character is lowercase or uppercase.
    const cleanString: string = sen.replace(/[^A-Za-z ]/g, "")   //The replace() method operates on a String, returning a new string with the specified changes.
    const words: string[] = cleanString.split(" ")               //The split() method splits a string into an array of substrings. The split() method returns the new array. The split() method does not change the original string
    const result = words.reduce((a: string, b: string) => {      //The reduce() method is an iterative method. It runs a "reducer" callback function over all elements in the array, in ascending-index order, and accumulates them into a single value. 
        //return a.length >= b.length ? a : b                 //ternary operator replaces the traditional if…else statement. 
        if (a.length >= b.length){
            return a
        }else 
        {
            return b
        }
    })
    return result
}
  
export { longestWord };


/* original 
function longestWord(sen: string) {}

export { longestWord }; */