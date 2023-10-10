// Primitivos: número, string, booleano
// Tipos mais complexos: arrays, objetos
// Tipos de função, parâmetros

// Primitives

let age: number;

age = 12;

let userName: string | string[];

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;

// Types mais complexos

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

let person: {
  name: string;
  age: number;
};

person = {
  name: 'Max',
  age: 32
};

// person = {
//   isEmployee: true
// };

let people: {
  name: string;
  age: number;
}[];

// Type conclusão

let course: string | number = 'React - The Complete Guide';

course = 12341;