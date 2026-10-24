"use strict";

/*
Daniela Velasco
10/22/2026
PLANNING / PSEUDOCODE

1. Initialize score = 0

2. Question 1
   - Ask 5 + 3
   - Correct answer: 8
   - Check with if statement

3. Question 2
   - Ask 10 - 4
   - Correct answer: 6
   - Check with if statement

4. Question 3
   - Ask 4 * 3
   - Correct answer: 12
   - Check with if statement

5. Question 4
   - Ask 20 / 5
   - Correct answer: 4
   - Check with if statement

6. Personal question
   - Validate input
   - Check answer

7. Calculate percentage

8. Final feedback using if / else if / else

9. Final summary alert
*/

let score = 0;

// Question 1
const additionAnswer = Number(prompt("What is 5 + 3?"));

if (additionAnswer === 8) {
    alert("Correct!");
    score++;
} else {
    alert("Incorrect!");
}

// Question 2
const subtractionAnswer = Number(prompt("What is 10 - 4?"));

if (subtractionAnswer === 6) {
    alert("Correct!");
    score++;
} else {
    alert("Incorrect!");
}

// Question 3
const multiplicationAnswer = Number(prompt("What is 4 * 3?"));

if (multiplicationAnswer === 12) {
    alert("Correct!");
    score++;
} else {
    alert("Incorrect!");
}

// Question 4
const divisionAnswer = Number(prompt("What is 20 / 5?"));

if (divisionAnswer === 4) {
    alert("Correct!");
    score++;
} else {
    alert("Incorrect!");
}

// Question 5
let favoriteColor = prompt("What is Daniela's favorite color?");

if (favoriteColor === null) {

    alert("You clicked Cancel.");

} else if (favoriteColor.trim() === "") {

    alert("Please enter an answer.");

} else {

    favoriteColor = favoriteColor.trim().toLowerCase();

    if (favoriteColor === "blue") {

        alert("Correct!");
        score++;

    } else {

        alert("Incorrect!");
    }
}

// Calculate percentage
const percentage = (score / 5) * 100;

// Special message
if (score === 3) {

    console.log("Exactly three correct! Nice job!");

}

// Final feedback
if (score === 5) {

    alert("Outstanding! Perfect score!");

} else if (score >= 3) {

    alert("Good work!");

} else {

    alert("Keep practicing!");

}

// Final summary
alert(
`Final Score: ${score} / 5

Percentage: ${percentage}%

Thanks for playing!`
);