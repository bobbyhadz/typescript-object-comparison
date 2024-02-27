export {};

// EXAMPLE 1 - Comparing Objects in TypeScript

type Person = {
  name: string;
  age: number;
};

const obj1: Person = {
  name: 'Bobby Hadz',
  age: 30,
};

const obj2: Person = {
  name: 'Bobby Hadz',
  age: 30,
};

if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
  // 👇️ this runs
  console.log('✅ objects are equal');
} else {
  console.log('⛔️ objects are NOT equal');
}

// ---------------------------------------------------

// // EXAMPLE 2 - Using the logical AND (&&) operator to compare objects

// type Person = {
//   name: string;
//   age: number;
//   country: string;
// };

// const obj1: Person = {
//   country: 'Chile',
//   name: 'Bobby Hadz',
//   age: 30,
// };

// const obj2: Person = {
//   age: 30,
//   name: 'Bobby Hadz',
//   country: 'Chile',
// };

// let areEqual = false;

// if (
//   obj1.name === obj2.name &&
//   obj1.age === obj2.age &&
//   obj1.country === obj2.country
// ) {
//   areEqual = true;
// }

// console.log(areEqual); // 👉️ true

// ---------------------------------------------------

// // EXAMPLE 3 - Shallow Comparison of Objects in TypeScript

// type Person = {
//   name: string;
//   age: number;
// };

// const obj1: Person = {
//   name: 'Bobby Hadz',
//   age: 30,
// };

// const obj2: Person = {
//   age: 30,
//   name: 'Bobby Hadz',
// };

// // ✅ Shallow comparison
// const shallowComparison =
//   Object.keys(obj1).length === Object.keys(obj2).length &&
//   (Object.keys(obj1) as (keyof typeof obj1)[]).every((key) => {
//     return (
//       Object.prototype.hasOwnProperty.call(obj2, key) && obj1[key] === obj2[key]
//     );
//   });

// console.log(shallowComparison); // 👉️ true

// ---------------------------------------------------

// // EXAMPLE 4 - Deep Comparison of Objects in TypeScript

// import isEqual from 'lodash.isequal';

// type Person = {
//   name: string;
//   age: number;
//   address: {
//     country: string;
//     city: string;
//   };
// };

// const obj1: Person = {
//   name: 'Bobby Hadz',
//   age: 30,
//   address: {
//     country: 'Chile',
//     city: 'Santiago',
//   },
// };

// const obj2: Person = {
//   address: {
//     country: 'Chile',
//     city: 'Santiago',
//   },
//   age: 30,
//   name: 'Bobby Hadz',
// };

// console.log(isEqual(obj1, obj2)); // 👉️ true
