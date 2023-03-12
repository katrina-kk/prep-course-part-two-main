
//TASK DONE 
/**
 * Stack
 *
 * Create a stack data structure. The stack
 * should be a class with methods 'push', 'pop', and
 * 'peek'.  Adding an element to the stack should
 * store it until it is removed.
 *
 * Examples:
 * const s = new Stack();
 * s.push(1);
 * s.push(2);
 * s.pop(); // returns 2
 * s.pop(); // returns 1
 */

class Stack {

  stack: number[] = []   //pushēs iekšā
  

  push(n: number) {
    this.stack.push(n)
  }

  pop() {
    return this.stack.pop()  //arī maina masīvu un atgriež elementu 
  }

  peek() {
    return this.stack[this.stack.length - 1]   //-1 lai paskatītos pēdējo elementu. ja nav tas, tas parādas undefined. lai uzzinatu pēd elementu, ja nezinam cik array ir elementu iekšā 
  }
}

export { Stack };

/* original

class Stack {
  push(n: number) {}

  pop() {}

  peek() {}
}

export { Stack };  */
