//TASK DONE

/**
 * Queue
 *
 * Create a queue data structure. The queue
 * should be a class with methods 'add' and 'remove'.
 * Adding to the queue should store an element until
 * it is removed.
 *
 * Examples:
 * const q = new Queue();
 * q.add(1);
 * q.remove(); // returns 1
 */
 
//visās klasēs ir konstruktors. var nerakstīt, bet tas nenozīmē, ka viņa nav. šeit konstruktoru nav, jo klasē, kad inicializējam objektu mums nav objektā kkas jāieliek
class Queue {

  queue: number [] = []
  add(n: number) {
    this.queue.push(n)

  }

  remove() {
return this.queue.shift()

  }
}

export { Queue };

/*original

class Queue {
  add(n: number) {}

  remove() {}
}

export { Queue };  */
