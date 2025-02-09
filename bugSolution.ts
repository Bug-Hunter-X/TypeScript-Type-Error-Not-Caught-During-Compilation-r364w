function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: any, b: any): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: Both arguments must be numbers.');
  }
  return a + b;
}

let result = addSafe("hello", 10); // Throws an error
console.log(result);

let result2 = addSafe(5, 10); // Correct usage
console.log(result2); 