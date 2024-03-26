#!  /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { massage: "Enter first number", type: "number", name: "firstNumber" },
    { massage: "Enter second number", type: "number", name: "secondNumber" },
    {
        massage: "select one of the operators to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
//conditional statementanswer 
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    if (answer.firstNumber == 0 || answer.secondNumber == 0)
        console.log("Division cannot be performed with number zero");
    else
        console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Please select valid operator");
}
