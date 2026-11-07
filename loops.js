/*Daniela Velasco 11/05/26*/
"use strict";


for (let crate = 1; crate <= 20; crate++) {

    if (crate % 5 === 0) {
        console.log("Crate " + crate + ": Handle with care");
    }
    // if the number is divisible by 5 show handle with care

    else if (crate % 2 === 0) {
        console.log("Crate " + crate + ": Load crate");
    }
    // if the number is divisible by 2 show load crate

    else {
        console.log("Crate " + crate + ": Inspect crate");
    }
    // if it's odd show inspect crate

}

console.log("Total crates scanned: 20");