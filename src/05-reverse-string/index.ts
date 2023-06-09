/**
 * Reverse String
 *
 * For given string return a new string
 * with the reversed order of characters.
 *
 * Examples:
 * reverse('apple') === 'elppa'
 * reverse('hello') === 'olleh'
 * reverse('Greetings!') === '!sgniteerG'
 */

//sasplito pa burtiem. reverse automātiski apgriež masīvu atpakaļ stringā 

function reverse(str: string) {
    return str.split("").reverse().join("");
}

export { reverse };


/* original
function reverse(str: string) {}

export { reverse }; */