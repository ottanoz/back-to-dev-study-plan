// exercise 1
function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}
printValue("hello"); // Output: "HELLO"
printValue(3.14159); // Output: "3.14"


// exercise 1
type SuccessResponse = { data: object };
type ErrorResponse = { error: string };

function handleResponse(res: SuccessResponse | ErrorResponse): string | object {
  if ("data" in res) {
    return res.data;
  }
  return `Error: ${res.error}`;
}

const success: SuccessResponse = { data: ["item1", 2] };
const error: ErrorResponse = { error: "Something went wrong" };

console.log(handleResponse(success)); // Output: ["item1", 2]
console.log(handleResponse(error));   // Output: "Error: Something went wrong"

// exercise 3
type LoadingState = { status: "loading" };
type SuccessState = { status: "success"; data: string[] };
type ErrorState = { status: "error"; message: string };

type State = LoadingState | SuccessState | ErrorState;

function render(state: State) {
  switch (state.status) {
    case "loading":
      return "Loading...";
    case "success":
      return `Items: ${state.data}`;
    case "error":
      return `Error: ${state.message}`;
    default:
      const _exhaustive: never = state;
      return _exhaustive;
  }
}

console.log(render({ status: "loading" })); // Output: "Loading..."
console.log(render({ status: "success", data: ["item1", "item2"] })); // Output: "Items: item1,item2"
console.log(render({ status: "error", message: "Failed to load" })); // Output: "Error: Failed to load"

// exercise 4
function isArray(input: unknown) {
  if (Array.isArray(input)) {
    return `Array with ${input.length} items`;
  }

  return "Not an array";
}

console.log(isArray([1, 2, 3])); // Output: "Array with 3 items"
console.log(isArray("hello"));   // Output: "Not an array"

// exercise 5
type User = { id: number; name: string };

function fetchUser(id: number): Promise<User | null> {
  return id > 0
    ? Promise.resolve({ id, name: "Fernando" })
    : Promise.resolve(null);
}

async function main() {
  const user = await fetchUser(1);

  if (user) {
    console.log(user.name.toUpperCase());
  } else {
    console.log("No user found");
  }
}

main(); // Output: "FERNANDO"



