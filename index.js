#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 5 + 1);
console.log("Welcome to number gussing game created by shaheryar");
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Enter your guess number (Number limit from 1 to 5)"
    },
]);
if (answer.userGuessNumber === randomNumber) {
    console.log("Congrattsulation! your answer is correct");
}
else {
    console.log("sorry! your answer is incorrect please try again");
}
