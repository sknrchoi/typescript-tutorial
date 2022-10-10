interface User {
    firstName:string,
    lastName:string,
    sayHi(name:string):string,
    fullName():string
}

interface User {
    age:string
}

class Player implements User {
    constructor(
        public firstName: string,
        public lastName: string,
        public age: string
    ){}
    
    sayHi(name: string): string {
        return `Hello ${name}. My name is ${this.firstName} ${this.lastName}`
    }
    fullName(): string {
        return `return ${this.firstName} ${this.lastName}`
    }
}