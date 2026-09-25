"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ==========================================
// Advanced Types Example
// ==========================================
// 1. Enum Example
// Enums create a set of named constants
var CourseStatus;
(function (CourseStatus) {
    CourseStatus["Active"] = "ACTIVE";
    CourseStatus["Completed"] = "COMPLETED";
    CourseStatus["Withdrawn"] = "WITHDRAWN";
})(CourseStatus || (CourseStatus = {}));
// Using the enum
let myStatus = CourseStatus.Active;
console.log(myStatus); // "ACTIVE"
function processGrade(grade) {
    if (typeof grade === "string") {
        // Convert letter grade to number
        switch (grade.toUpperCase()) {
            case "A": return 4.0;
            case "B": return 3.0;
            case "C": return 2.0;
            default: return 0.0;
        }
    }
    return grade;
}
console.log(processGrade("A")); // 4.0
console.log(processGrade(3.5)); // 3.5
const teacher = {
    name: "Mr. Smith",
    subject: "TypeScript",
    id: 123,
    department: "Computer Science"
};
// This will cause an error - uncomment to see:
// const invalidTeacher: TeachingEmployee = {
//     name: "Mr. Jones",
//     subject: "JavaScript"
//     // Error: Missing properties from Employee type
// };
// Try compiling with: tsc advanced.ts
// Then uncomment the error examples to see type checking in action
//how Union Types Work:
//Declaration:
let id;
id = "abc123"; // Valid
id = 456789; // Also valid
//id = true;      // Error: Type 'boolean' not assignable
//Type Narrowing: TypeScript can narrow down the type based on conditional blocks
function printId(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
        ///TypeScript knows id is a string here
    }
    else {
        //TypeScript knows id is a number here, 
        console.log(id.toFixed(2));
    }
}
//Type Guards: 
//using typeof, instanceof, or custom function to determine types
function isString(x) {
    return typeof x === "string";
}
let heading = "north"; // Valid
//heading = "northeast";  // Error: Type '"northeast"' not assignable
//# sourceMappingURL=advanced.js.map