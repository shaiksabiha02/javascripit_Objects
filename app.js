import { pi } from "./math.js";

console.log(pi);

import {name,age,city} from "./math.js";
console.log(name);
console.log(age);
console.log(city);

import {square} from "./math.js";
console.log(square(5));

import { add, subtract, multiply } from "./math.js";

console.log(add(10, 5));

console.log(subtract(10, 5));

console.log(multiply(10, 5));

import employeeDetails from "./math.js";

employeeDetails();

console.log("Start");

// Error Handling 
try {
    console.log(nam);
} catch (error) {
    console.log("Something went wrong");
}

console.log("End");