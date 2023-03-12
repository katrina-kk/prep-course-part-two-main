//TASK DONE 

/**
 * Capitalize
 *
 * Write a function that accepts a string. The function should
 * capitalize the first letter of each word in the string then
 * return the capitalized string.
 *
 * Examples:
 * capitalize('a short sentence') === 'A Short Sentence'
 * capitalize('a lazy fox') === 'A Lazy Fox'
 * capitalize('look, it is working!') === 'Look, It Is Working!'
 */
//1.sadalīt vārdos
//2. iet cauri masīvam ar vārdiem  =>ja izmantotu  map tad nebūs jāuztaisa jauns tukšs strings un pa taisno atgriezt
//3. iegūt vārda pirmo burtu
//4. toUpperCase pirmais burts
//5. lielo burtu salīmēt salīmēt ar atlikušo vārdu
//6. savienot masīvu stringā atkal

//The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end ( end not included) where start and end represent the index of items in that array. 

function capitalize(str: string) {
    const words: string[] = str.split(" ")

    return words.map(word => word[0].toUpperCase() + word.slice(1)).join(" ")
}

export { capitalize };


/*original 

function capitalize(str: string) {}

export { capitalize };  */
