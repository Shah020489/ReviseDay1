import inquirer from "inquirer";

let cnic=await inquirer.prompt([
    {
        name:"name",
        type:"string",
        message:"Enter your name:"
    },
    {
        name:"age",
        type:"number",
        message:"Enter your age:"
    }
]);

if(cnic.age>=18){
    console.log("You are eligible for NIC");
}
else{
    console.log("You are not eligible for NIC");
}