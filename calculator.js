<!--Daniela Velasco, October 29,2026-->
"use strict";

let choice;
let num1;
let num2;

choice = prompt(
    "Choose an option:\n" +
    "1. Add two numbers\n" +
    "2. Subtract two numbers\n" +
    "3. Multiply two numbers\n" +
    "4. Divide two numbers\n" +
    "5. Exit"
);

choice = Number(choice);

switch (choice) {

    case 1:
        num1 = Number(prompt("Enter first number:"));
        num2 = Number(prompt("Enter second number:"));

        alert("Sum: " + (num1 + num2));
        break;

    case 2:
        num1 = Number(prompt("Enter first number:"));
        num2 = Number(prompt("Enter second number:"));

        alert("Difference: " + (num1 - num2));
        break;

    case 3:
        num1 = Number(prompt("Enter first number:"));
        num2 = Number(prompt("Enter second number:"));

        alert("Product: " + (num1 * num2));
        break;

    case 4:
        num1 = Number(prompt("Enter first number:"));
        num2 = Number(prompt("Enter second number (don't enter zero):"));

        alert("Quotient: " + (num1 / num2));
        break;

    case 5:
        alert("Exiting the program.");
        break;

    default:
        alert("Invalid choice.");
}