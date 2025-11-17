// Helloo TypeScript
console.log("Hello, TypeScript!");

//This is a more complex example
function greet(person: string, date: Date): void {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet("Fernando Zonatto", new Date());