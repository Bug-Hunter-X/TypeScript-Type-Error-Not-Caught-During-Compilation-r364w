function add(a: number, b: number): number {
  return a + b;
}

let result = add("hello", 10); // Type error, but it compiles without error in some cases
console.log(result);