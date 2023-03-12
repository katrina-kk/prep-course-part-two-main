//TASK DONE 

/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 */

function parse(input: string): string {
    // 0. deklarēt mainīgo ar vērtību tukšā stringā
    // 1. sadalit stringu pa atstarpem => masīvs ar vārdiem
    //2. jāiet cauri visam vārdu sarakstam
    //3. ar 0 indexu paņemsim pirmo burtu katram vārdam
    // 4.toUpperCase
    // 5. ielikt burtus vienā stringā, lai veidojas vārds
    //atgriezt atpakaļ gatavo burtu string
let acronym = "";
const words = input.replace('-', ' ').replace(/[^A-Za-z ]/g,"").split(" ");
words.forEach((word) => {
    const letter = word[0];

    const nextLetter = letter? letter.toUpperCase() : "";
    acronym = acronym + nextLetter;


    
});
return acronym;
}


/* original 
function parse(input: string) {}

export { parse };  */



export { parse };
