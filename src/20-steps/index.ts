//TASK DONE
/**
 * Steps
 *
 * Write a function that accepts a positive number N.
 * The function should prints a step shape
 * with N levels using the '#' character.
 *
 * Examples:
 * steps(2) = '# '
 *            '##'
 *
 * steps(3) = '#  '
 *            '## '
 *            '###'
 *
 * steps(4) = '#   '
 *            '##  '
 *            '### '
 *            '####'
 */

/*function steps(n: number) {                  //i is just a variable. Generally, it is referred to as "iteration for the loop".
    for (let i = 0; i < n; i++) {
        let line: string = ''
        for (let j = 0; j <= i; j++) {       //Less than or equal to
            line = line + '#'
        }
        for (let k = 0; k < n - i - 1; k++) {          
            line = line + ' '
        }
        console.log(line)
    }
} */

function steps(n:number, i = 1) {
    if (i > n) return;
    console.log('#'.repeat(i) + ' '.repeat(n - i));      //The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
    steps(n, i + 1);
  }

export { steps };
/*original 

function steps(n: number) {}

export { steps };  */
