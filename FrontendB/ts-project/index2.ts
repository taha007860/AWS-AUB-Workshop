type VoidFunc = () => void;
// Define an interface for a person
interface Person {
   name: string;
   age: number;
   greet: VoidFunc;
}
// Implement the interface for a person
const person: Person = {
   name: "John Doe",
   age: 25,
   greet: () => {
       console.log(`Hello, my name is ${person.name} and I'm ${person.age} years old.`);
   },
};
// Invoke the greet method
person.greet();