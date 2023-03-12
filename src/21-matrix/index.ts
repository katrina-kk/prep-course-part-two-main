/**
 * Matrix
 * Given a string representing a matrix of numbers, return the rows and columns of that matrix.
 *
 * So given a string with embedded newlines like:
 *
 *     9 8 7
 *     5 3 2
 *     6 6 7
 *
 * representing this matrix:
 *
 *         1  2  3
 *       |---------
 *     1 | 9  8  7
 *     2 | 5  3  2
 *     3 | 6  6  7
 *
 * your code should be able to spit out:
 *
 * A list of the rows, reading each row left-to-right while moving top-to-bottom across the rows,
 * A list of the columns, reading each column top-to-bottom while moving from left-to-right.
 *
 * The rows for our example matrix:
 *
 *     9, 8, 7
 *     5, 3, 2
 *     6, 6, 7
 *
 * And its columns:
 *
 *     9, 5, 6
 *     8, 3, 6
 *     7, 2, 7
 */



type Array2D = number[][] | undefined[][];                   //A 2D array is also known as a matrix (a table of rows and columns). To create a 2D array of integers, take a look at the following example: int matrix[2][3] = { {1, 4, 2}, {3, 6, 8} };
 class Matrix {                                               //The constructor method is a special method of a class for creating and initializing an object instance of that class.
                                                             //Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are unique to classes.
  private rows: Array2D;
  private columns: Array2D;
  public readonly height: number;
  public readonly width: number;
  constructor(str: string) {
    this.rows = this.getRows(str);
    this.height = this.rows.length;
    this.width = this.rows[0].length;
    this.columns = Matrix.emptyMatrix(this.width, this.height);
    
    for(let i = 0; i < this.height; i++){
      for(let j = 0; j < this.width; j++){
        this.columns[j][i] = this.rows[i][j];
      }
    }
    
  }
  private getRows(str: string): Array2D{                                     //The split() method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.
    return str.split('\n').map((row) => row.split(' ').map(Number));        //The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
  }
  
  static emptyMatrix(width: number, height: number): Array2D {
    const matrix = [];
    for(let i = 0; i < height; i++) { 
        matrix.push(new Array(width));                                 //The push() method adds one or more elements to the end of an array and returns the new length of the array.
    }
    return matrix;
  }
  
}

export { Matrix };
/* original 
class Matrix {
  constructor(private matrix: string) {}

  get rows() {
    return [];
  }

  get columns() {
    return [];
  }
}

export { Matrix }; */ 
