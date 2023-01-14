"use strict";
class Player {
    constructor(firstName, lastName, age, health) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.health = health;
    }
    sayHi(name) {
        return `Hello ${name}. My name is ${this.firstName} ${this.lastName}`;
    }
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
function makeUser(user) {
    return {
        firstName: "sunshin",
        lastName: "lee",
        fullName: () => "xx",
        sayHi: (name) => "string",
        age: "18"
    };
}
console.log(makeUser({
    firstName: "sunshin",
    lastName: "lee",
    fullName: () => "xx",
    sayHi: (name) => "string",
    age: "18"
}));
