"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var answer = await inquirer_1.default.prompt([{
        name: "age",
        type: "number",
        message: "Enter your age:"
    }
]);
console.log("Insha Allah in " + (60 - answer.age) + "years you will be 60 years old.");
