// ==========================================
// Advanced Types Example
// ==========================================
// 1. Enum Example
// Enums create a set of named constants
enum CourseStatus {
    Active = "ACTIVE",
    Completed = "COMPLETED",
    Withdrawn = "WITHDRAWN"
}
// Using the enum
let myStatus: CourseStatus = CourseStatus.Active;
console.log(myStatus);  // "ACTIVE"
// This will cause an error - uncomment to see:
// myStatus = "ACTIVE";  // Error: Type '"ACTIVE"' is not assignable to type 'CourseStatus'
// 2. Type Aliases and Union Types
// Creating a custom type that can be reused
type GradeInput = number | string;
function processGrade(grade: GradeInput): number {
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
console.log(processGrade("A"));    // 4.0
console.log(processGrade(3.5));    // 3.5
// This will cause an error - uncomment to see:
//= console.log(processGrade(true));  // Error: Argument of type 'boolean' not assignable
// 3. Intersection Types
// Combining multiple types into one
type Teacher = {
    name: string;
    subject: string;
};
type Employee = {
    id: number;
    department: string;
};
// Combining both types
type TeachingEmployee = Teacher & Employee;
const teacher: TeachingEmployee = {
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
let id: string | number;
id = "abc123";  // Valid
id = 456789;    // Also valid
//id = true;      // Error: Type 'boolean' not assignable

//Type Narrowing: TypeScript can narrow down the type based on conditional blocks
function printId(id: string | number) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
        ///TypeScript knows id is a string here
    } else {
        //TypeScript knows id is a number here, 
        console.log(id.toFixed(2)); 
    }
}

//Type Guards: 
//using typeof, instanceof, or custom function to determine types
function isString(x: any): x is string {
    return typeof x === "string";
}

//Literal Type Unions: You can create unions of specific values
type Direction = "north" | "south" | "east" | "west";
let heading: Direction = "north";  // Valid
//heading = "northeast";  // Error: Type '"northeast"' not assignable
