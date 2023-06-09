//TASK DONE 

/**
 * Palindrome
 *
 * For given string return true if the string is a palindrome
 * or false if it is not.
 *
 * Palindromes are strings that form the same word if it is reversed.
 * Include spaces and punctuation in determining if the string
 * is a palindrome.
 *
 * Examples:
 * palindrome("abba") === true
 * palindrome("abcdefg") === false
 */


function palindrome(str: string):boolean{  
    let strReverse: string = ''
    for (let i = str.length - 1; i >= 0; i--) {   //The greater than or equal ( >= )
        strReverse += str[i];

     
    }
   return str  === strReverse ? true : false   //condition ? exprIfTrue : exprIfFalse

 
}


export { palindrome };

/* original 

function palindrome(str: string) {}

export { palindrome };   */