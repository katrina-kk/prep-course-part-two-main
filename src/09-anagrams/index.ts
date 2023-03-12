//TASK DONE 

/**
 * Anagrams
 *
 * Return true of false depends on provided strings are anagrams of eachother.
 * One string is an anagram of another if it uses the same characters
 * in the same quantity. Only consider characters, not spaces
 * or punctuation. Consider capital letters to be the same as lower case.
 *
 * Examples:
 * anagrams('rail safety', 'fairy tales') === true
 * anagrams('RAIL! SAFETY!', 'fairy tales') === true
 * anagrams('Hi there', 'Bye there') === false
 */
function anagrams(stringA: string, stringB: string) {

    function cleanInputs(input: string) {
        return input.replace(/[^A-Za-z]/g, "").toLowerCase();
    }
    const cleanA = cleanInputs(stringA);
    const cleanB = cleanInputs(stringB);
    if(cleanInputs(stringA).length !== cleanInputs(stringB).length) {
        return false;
    }
 //console.log(cleanA.split('').sort() === cleanB.split('').sort());
    return cleanA.split("").sort().join("") === cleanB.split("").sort().join("");  //vajag pārvērst uz primitīvajiem datu tipiem, lai salīdzinātu
}

export { anagrams };

/* original 

function anagrams(stringA: string, stringB: string) {}

export { anagrams };   */
