"use strict";
class Player {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    sayHi(name) {
        return `Hello ${name}. My name is ${this.firstName} ${this.lastName}`;
    }
    fullName() {
        return `return ${this.firstName} ${this.lastName}`;
    }
}
