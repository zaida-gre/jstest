// console.log("JS is connected");
// alert("welcoe to zaida");
// variable = prompt("Are you you welcoe");

// if (variable == "false poop");{

//  alert("no...");
// } else if(variable == "yurp"){
// alert("barbeque chicken alert");
//}

let pikminColor = "default";

alert("You are being plucked!");
let colorAnswer = prompt("What color are you? \n 1. Red\n 2. Blue \n 3. Yellow").trim().toLowerCase(); 
if (colorAnswer == "red") {
    pikminColor = "red"
    alert("You are a red pikmin, totally resitant to fire!")
} else if (colorAnswer == "blue") {
    pikminColor = "blue"
    alert("You are a blue pikmin, totally resitant to drowning!")
} else if (colorAnswer == "yellow") {
    pikminColor = "yellow"
    alert("You are a yellow pikmin, totally resistant to electricity!")
} else {
    let colorRoll = Math.floor(Math.random() * 100) + 1;
    alert("You have not chosen one of the options.");

    switch (true) {
    case colorRoll <= 30:
        pikminColor = "red";
        break;
    case colorRoll <= 60:
        pikminColor = "blue";
        break;
    case colorRoll <= 90:
        pikminColor = "yellow";
        break;
    default: 
        pikminColor = "pikmar?";
    }

    alert(`You look down at yourself, coming to realize you are a ${pikminColor} pikmin!`);

}

if (pikminColor === "pikmar?") {
    alert("Ending 0: what.")
    throw "End game. Goodbye"
}
alert("You gaze around at the world around you, only to find you are totally alone!");
alert("You need to find the Onion, your home.");
alert("Objective: Find Home.");
alert("Objective: Find Home. \nLush foliage surrounds you, only interrupted by a beaten dirt path just ahead.");
let firstChoice = prompt("Objective: Find Home. \nWell, what should you do? \n1. Wait around. \n2. Follow the path.").trim().toLowerCase();
if (firstChoice == "wait around") {
    
}
