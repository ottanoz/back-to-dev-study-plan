// Helloo TypeScript
console.log("Hello, TypeScript!");
//This is a more complex example
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
    return false;
}
greet("Fernando Zonatto", new Date());
