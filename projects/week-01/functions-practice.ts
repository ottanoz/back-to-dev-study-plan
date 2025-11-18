function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}


console.log(firstElement([1, 2, 3])); // Output: 1
console.log(firstElement(["a", "b", "c"])); // Output: "a"

function firstElement2(arr) {
  return arr[0];
}


function identity<T>(value: T): T {
  return value;
}

identity('hello'); // Returns a string
identity(42);      // Returns a number
identity(true);    // Returns a boolean
identity({ name: 'Alice', age: 30 }); // Returns an object
identity([1, 2, 3]); // Returns an array of numbers

function firstElement3<T>(arr: T[]): T | undefined {
  return arr[0];
}

firstElement3([1, 2, 3]); // Returns a number | undefined
firstElement3(['a', 'b', 'c']); // Returns a string | undefined
firstElement3([{ id: 1 }, { id: 2 }]); // Returns an object | undefined

function printId<T extends { id: number }>(obj: T) {
  console.log(obj.id);
}

printId({ id: 101, name: 'Test' }); // Valid
// printId({ name: 'Test' }); // Error: Property 'id' is missing

function pluck<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = { name: 'Alice', age: 30, city: 'New York' };
pluck(person, 'name');
pluck(person, 'age');
// pluck(person, 'country'); // Error: Argument of type '"country"' is not assignable to parameter of type '"name" | "age" | "city"'.
