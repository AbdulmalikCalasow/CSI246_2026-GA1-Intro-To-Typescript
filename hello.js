"use strict";
// ==========================================
// Basic Types and Type Checking Example
// ==========================================
Object.defineProperty(exports, "__esModule", { value: true });
// TypeScript enforces type checking at compile time
// Let's see some examples of type checking in action
// 1. Basic type annotations
let studentName = "John";
let studentAge = 20;
let isEnrolled = true;
// This will work fine
studentName = "Jane";
// This will cause a compile error - uncomment to see:
// studentName = 42;  // Error: Type 'number' is not assignable to type 'string'
// studentAge = "twenty";  // Error: Type 'string' is not assignable to type 'number'
// 2. The 'any' type - turns off type checking
// WARNING: Use sparingly! It defeats the purpose of TypeScript
let flexibleVar = 4;
flexibleVar = "Now I'm a string"; // This works
flexibleVar = true; // This also works
// 3. Type inference
// TypeScript can guess types based on the initial value
let inferredString = "This is a string"; // TypeScript knows this is a string
// Uncomment to see the error:
// inferredString = 42;  // Error: Type 'number' is not assignable to type 'string'
// 4. Functions with type annotations
function calculateGrade(score, bonus) {
    const totalScore = score + bonus;
    if (totalScore >= 90)
        return "A";
    if (totalScore >= 80)
        return "B";
    if (totalScore >= 70)
        return "C";
    return "F";
}
// This works:
console.log(calculateGrade(85, 5)); // "B"
// Uncomment these to see the errors:
//console.log(calculateGrade("85", 5));  // Error: Argument of type 'string' not assignable to type 'number'
//console.log(calculateGrade(85));       // Error: Expected 2 arguments, but got 1
// 5. Union Types - allowing multiple types
let studentId = "A123"; // Can be string
studentId = 123; // Or number
// studentId = true;                      // Error: Type 'boolean' not assignable to type 'string | number'
//# sourceMappingURL=hello.js.map