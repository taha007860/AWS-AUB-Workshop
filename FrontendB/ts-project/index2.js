// Implement the interface for a person
var person = {
    name: "John Doe",
    age: 25,
    greet: function () {
        console.log("Hello, my name is ".concat(person.name, " and I'm ").concat(person.age, " years old."));
    },
};
// Invoke the greet method
person.greet();
