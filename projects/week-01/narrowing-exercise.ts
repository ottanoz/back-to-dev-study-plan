function processInput(input: string | number | string[] | null) {
    if (input && typeof input === "string") {
        return input.toUpperCase();
    } else if (typeof input === "number") {
        return input * 2;
    } else if (Array.isArray(input)) {
        return `Array with ${input.length} items`;
    } else {
        return "No value";
    }
}

// versão otimizada
function processInputOptimized(input: string | number | string[] | null) {
  if (input === null) {
    return "No value";
  }

  if (typeof input === "string") {
    return input.toUpperCase();
  }

  if (typeof input === "number") {
    return input * 2;
  }

  if (Array.isArray(input)) {
    return `Array with ${input.length} items`;
  }
}

//usando discriminated unions
type StringInput = { type: "string"; value: string };
type NumberInput = { type: "number"; value: number };
type ArrayInput = { type: "array"; value: string[] };
type NullInput = { type: "null" };

type Input = StringInput | NumberInput | ArrayInput | NullInput;

function processDiscriminatedInput(input: Input) {
    switch (input.type) {
        case "string":
            return input.value.toUpperCase();
        case "number":
            return input.value * 2;
        case "array":
            return `Array with ${input.value.length} items`;
        case "null":
            return "No value";
        default:
            const _exhaustive: never = input;
            return _exhaustive;
    }
}
