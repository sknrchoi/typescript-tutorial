// 클래스 모양을 특정지을 수 있게 함
interface User {
    firstName:string,
    lastName:string,
    sayHi(name:string):string,
    fullName():string
}

interface User {
    age:string
}

interface Human {
    health:number
}

class Player implements User, Human{
    constructor(
        public firstName: string,
        public lastName: string,
        public age: string,
        public health:number
    ){}
    
    sayHi(name: string): string {
        return `Hello ${name}. My name is ${this.firstName} ${this.lastName}`
    }
    fullName(): string {
        return `${this.firstName} ${this.lastName}`
    }
}

function makeUser(user: User): User{
    return {
        firstName:"sunshin",
        lastName:"lee",
        fullName: () => "xx",
        sayHi: (name) => "string",
        age: "18"
    }
}

console.log(makeUser({
    firstName:"sunshin",
    lastName:"lee",
    fullName: () => "xx",
    sayHi: (name) => "string",
    age: "18"
}));