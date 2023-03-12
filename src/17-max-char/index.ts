//TASK DONE 

/**
 * Max Char
 *
 * For given string return the character that is most
 * commonly used in the string.
 *
 * Examples:
 * maxChar("abcccccccd") === "c"
 * maxChar("apple 1231111") === "1"
 */


function maxChar(str:string):string {
    // To save the string in object format
    const chars:any = {};
    // To count the final result
    let max = 0;
    let maxChar = '';
  
    // Go through every character in the string
    // This for is for create the object format
    for (let char of str) {
      // If the value of the object doesn't exist
      if (!chars[char]) {
        // Then create the node in the object
        // and assign 1
        chars[char] = 1;
      } else {
        // If that value exist in the object
        // Just increment the value of that node object
        chars[char]++;
      }
    }
  
    // After the first foor finish
    // then iterate over the object
    for (let char in chars) {
      // check every value of the object
      if (chars[char] > max) {
        // assign the value that meet with the condition
        max = chars[char];
  
        // assign the key to the variable to know wich key
        maxChar = char;
      }
    }
  
    return maxChar;
  }
export { maxChar };


/*original
function maxChar(str: string) {}

// export { maxChar };   */
