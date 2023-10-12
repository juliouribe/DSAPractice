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


// intersection types
type Draggable = {
  drag: () => void,
};

type Resizable = {
  resize: () => void
};

// Type that combines the two types above.
type UIWidget = Draggable & Resizable;

// Initialize an instance of this type by defining both required methods
let textBox: UIWidget = {
  drag: () => {},
  resize: () => {}
}

// Literal Types
/*
If you want to have a variable only be able to be selected from certain values
In this example we use a type alias to set a literal of 50 or 100. Then we use
the type alias to create a variable set to 50.
*/
type Quantity = 50 | 100;
let quantity: Quantity = 50;

type Metric = 'cm' | 'inch';

// Nullable Types
function greet(name: string | null | undefined): void {
  if (name)
    console.log(name.toUpperCase());
  else
    console.log('Hola!')
}
greet(null);  // this will make it crash since we aren't handling null.

// Optional Chaining
type Customer = {
  birthday: Date
}

function getCustomer(id: number): Customer | null {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1)
// if (customer !== null && customer !== undefined)
// Optional property access operator
console.log(customer?.birthday?.getFullYear())

// Optional element access operator
// customers[0]
// customers?.[0]
// Optional call does the same thing but for functions.
let log: any = (message: string) => console.log(message);
log?.('a');
