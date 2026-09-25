"use strict";
// ==========================================
// Interfaces Example
// ==========================================
Object.defineProperty(exports, "__esModule", { value: true });
// This works - has all required properties
const goodStudent = {
    name: "John",
    age: 20,
    courses: ["TypeScript", "JavaScript"]
    // graduationYear is optional, so we can omit it
};
// Implementing an interface
class BasicCalculator {
    add(x, y) {
        return x + y;
    }
    subtract(x, y) {
        return x - y;
    }
}
// Using the calculator
const calc = new BasicCalculator();
console.log(calc.add(5, 3)); // 8
console.log(calc.subtract(5, 3)); // 2
// This must implement all properties from both interfaces
const myDog = {
    name: "Rex",
    breed: "German Shepherd",
    makeSound() {
        console.log("Woof!");
    }
};
//# sourceMappingURL=interfaces.js.map