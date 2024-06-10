"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var cnic = await inquirer_1.default.prompt([
    {
        name: "name",
        type: "string",
        message: "Enter your name:"
    },
    {
        name: "age",
        type: "number",
        message: "Enter your age:"
    }
]);
if (cnic.age >= 18) {
    console.log("You are eligible for NIC");
}
else {
    console.log("You are not eligible for NIC");
}
