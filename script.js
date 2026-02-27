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

let colorAnswer = prompt("What color are you? \n 1. red\n 2. blue \n 3. yellow"); 
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
    alert("you have not chosen");

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

    alert(`We have chosen for you: ${pikminColor}`);

}

