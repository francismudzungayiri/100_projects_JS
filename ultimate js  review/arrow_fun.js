let myFunction = (a, b) => a * b;

myFunction(10, 59);
console.log(myFunction(10, 10));

const printing = () => console.log("I AM LEARNING REACT");
printing();

// SHORT CIRCUUITING AND LOGICAL OPERATORS: &&, ||, ??
const value = 0;
const result = value && "Truthy Value";
console.log(result);

const x = 0;
const y = x || "Truthy Value";
console.log(y);
