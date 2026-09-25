// ==========================================
// Interfaces Example
// ==========================================

// Interfaces define the shape that our objects must have
// Think of them as contracts that objects must follow

// 1. Basic Interface
interface Student {
    name: string;
    age: number;
    courses: string[];
    graduationYear?: number;  // Optional property (notice the ?)
}

// This works - has all required properties
const goodStudent: Student = {
    name: "John",
    age: 20,
    courses: ["TypeScript", "JavaScript"]
    // graduationYear is optional, so we can omit it
};

// Uncomment to see errors:
// Missing required properties
//const badStudent: Student = {
//    name: "Jane"
    // Error: Missing properties 'age' and 'courses'
//};

// Wrong type for a property
//const wrongStudent: Student = {
//    name: "Bob",
//    age: "twenty",  // Error: Type 'string' not assignable to type 'number'
//    courses: ["TypeScript"]
//};

// 2. Interface with Methods
interface Calculator {
    add(x: number, y: number): number;
    subtract(x: number, y: number): number;
}

// Implementing an interface
class BasicCalculator implements Calculator {
    add(x: number, y: number): number {
        return x + y;
    }
    
    subtract(x: number, y: number): number {
        return x - y;
    }
}

// Using the calculator
const calc = new BasicCalculator();
console.log(calc.add(5, 3));      // 8
console.log(calc.subtract(5, 3));  // 2

// 3. Extending Interfaces
interface Animal {
    name: string;
    makeSound(): void;
}

interface Dog extends Animal {
    breed: string;
}

// This must implement all properties from both interfaces
const myDog: Dog = {
    name: "Rex",
    breed: "German Shepherd",
    makeSound(): void {
        console.log("Woof!");
    }
};
