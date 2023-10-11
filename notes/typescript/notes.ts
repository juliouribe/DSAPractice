// primitives
let sales: number = 20;
let course: string = 'Julio';
let is_published: boolean = true;

// any type will not be specific to a type
function render(document: any) {
  console.log(document);
}

// arrays
let numbers: number[] = [];
let words: string[] = [];

// tuples
let user: [number, string] = [1, 'Jack'];

// enums
// using const the compiler generates more optimized code
const enum Size { Small = 1, Medium = 2, Large = 3 };
let mySize: Size = Size.Medium;

// functions
// A function that takes in an arg of number type and returns a number.
// by default we assume we return undefined.
// In the compiler you can set a noImplicit returns rule to break this default.
function calculateTax(income: number): number {
  if (income < 50_000) {
    return income * 1.2;
  }

  return income * 1.3
}

// objects
// you initialize an object with all of the keys. the ? can be used to say
// its an optional key. Initial all of the required keys when creating.
// readonly makes it immutable
let employee: {
  readonly id: number,
  name?: string,
  retire: (date: Date) => void
} = {
  id: 1,
  name: 'Mosh',
  retire: (date: Date) => {
    console.log(date);
  }
}

// Replacement for above using type aliases. Now we can reuse this in multiple places.
type Employee = {
  readonly id: number,
  name?: string,
  retire: (date: Date) => void
}

// Union types
function kgToLbs(weight: number | string): number {
  // narrowing
  if (typeof weight === 'number') {
    return weight * 2.2;
  } else {
    // parseInt drops the kg bit. Parse int will grab the integer portion of
    // any string as long as it begins with a number. End as soon as it encounters
    // letters or non integers including decimal points
    return parseInt(weight) * 2.2
  }
}

kgToLbs(10);
kgToLbs('10kg');
