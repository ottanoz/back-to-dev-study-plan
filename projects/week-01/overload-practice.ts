function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
// const d3 = makeDate(1, 2);

function format(input: string): string;
function format(input: number): string;

function format(input: string | number): string {
    if (typeof input === "string") {
        return input.trim().toUpperCase();
    }
    return input.toFixed(2);
}
format(" hello "); // Returns "HELLO"
format(3.14159);   // Returns "3.14"
//format(true);      // Error: No overload matches this call

function wrap(input: string): string[];
function wrap(input: number): number[];

function wrap(input: string | number) {
    return [input];
}

wrap("test"); // Returns ["test"]
wrap(42);     // Returns [42]
// wrap(true);   // Error: No overload matches this call

function get<T>(arr: T[], index: number): T;
function get<T>(arr: T[], index: number[]): T[];
function get<T>(arr: T[], index: number | number[]) {
    if (Array.isArray(index)) {
        return index.map(i => arr[i]);
    } else {
        return arr[index];
    }
}
get([10, 20, 30], 1);        // Returns 20
get([10, 20, 30], [0, 2]);   // Returns [10, 30]