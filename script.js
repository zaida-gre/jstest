// console.log("JS is connected");
// alert("welcoe to zaida");
// variable = prompt("Are you you welcoe");

// if (variable == "false poop");{

//  alert("no...");
// } else if(variable == "yurp"){
// alert("barbeque chicken alert");
//}

let pikminColor = "default";
alert("Before starting, read this! \nPlease answer all questions with the number corrosponding to the option you choose, thank you!");
alert("You are being plucked!");
let colorAnswer = prompt("What color are you? \n 1. Red\n 2. Blue \n 3. Yellow").trim().toLowerCase(); 
if (colorAnswer == "1") {
    pikminColor = "red"
    alert("You are a red pikmin, totally resitant to fire!")
} else if (colorAnswer == "2") {
    pikminColor = "blue"
    alert("You are a blue pikmin, totally resitant to drowning!")
} else if (colorAnswer == "3") {
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
if (firstChoice == "1") {
    let secondChoice = prompt("Objective: Find Home \nWell, you waited and.. nothing. Now what? \n1. Wait more. \n2. Follow the path")
    while (secondChoice == "1") {
       secondChoice = prompt("Objective: Find Home \nWell, you waited and.. nothing. Now what? \n1. Wait more. \n2. Follow the path")
    
    }
} 

alert("Objective: Find Home \nAfter only minutes of stumbling forward, you come across a clearing, spliting off into 3 paths. You could hear faint crackling from the first path, and all the plants along that path seem to be withering. The path next to it seems to be.. buzzing? The third, and last path seems normal atleast, expect for the very faint sound of running water. Though you suppose you could always go back.")

let thirdChoice = prompt("Objective: Find Home \nWell? \n1. First Path \n2. Second path \n3. Third path \n4. Go back");
if (thirdChoice == "4") {
    alert("Objective: Find Home \nDeciding to turn back, you spin on your wobbly legs, following the dirt path, despite the rumble coming from where you were.")
    alert("You don't feel good about this.")
    alert("As you wonder back to where you started, a giant beastly creature, adorned with white spots along its back, appears in front of you. Its eyes set on your much smaller self. It's giant mouth opens, and within only seconds you are scooped up and devoured.")
    alert("Ending 1: Eaten")
    throw "End game. Goodbye"
} else if (thirdChoice=="1") {
    alert("Objective: Find Home \nYou choose the first path, despite its intimidating appearance.")
    if (pikminColor=="red") {
        alert("Objective: Find Home \nAs you follow the path, the life around you seems to wither away, replaced by splotches of red hot.. lava? It bubbles and burns away at the ground.")
        alert("Objective: Find Home \nDespite the burning heat around you, and the lava now pooling around your feet, you keep moving. And finally, you reach another clearing.")
    } else{
        alert("You don't feel good about this.")
        alert("And sure enough, only a few steps into the path, the heat around you becomes too much, and you burst into flames. Soon, all that's left of you is ash.")
        alert("Ending 2: Burnt Up")
        throw "End game. Goodbye"
    }
} else if(thirdChoice=="2") {
    alert("Objective: Find Home \nYou choose the second path, despite the humming that seems to come from within the ground itself.")
    if (pikminColor=="yellow") {
        alert("Objective: Find Home \nAfter only a few steps into the path, electricity shoots up through your body, causing you to shake. But it doesn't stop you from pushing forward.")
        alert("Objective: Find Home \nEventually, the high volts each step fade away into little zaps, and then finally cease as you reach a new clearing.")
    } else{
        alert("You don't feel good about this.")
        alert("And within only a few steps, a strong volt of electricity shoots through you, frying you up from the inside.")
        alert("Ending 3: Zapped")
        throw "End game. Goodbye"
    }
} else{
    alert("Objective: Find Home \nYou choose the third path, deciding it seemed the most normal.")
    if (pikminColor=="blue") {
        alert("Objective: Find Home \nFollow the path, running water splashes at your feet, shallow at first, but the ground dips till you're fully submerged in the water.")
        alert("Objective: Find Home \nDespite that, you continue to move forward, your gills helping you breath. Eventually,m the ground tilts upwards, and you begin to move up out of the water and into a new clearing.")
    } else{
        alert("You don't feel good about this.")
        alert("Water pools at your feet, though shallow, it splashes against you and pulls you down into it. You don't manage to swim back up.")
        alert("Ending 4: Drowned")
        throw "End game. Goodbye"
    }
}
alert("Objective: Find Home\nThe new clearing you reached was.. very swampy, random puddles of water scattered around.")
alert("Objective: Find Home \nThough, in the middle rested an.. egg? It seemed to rock back and forth, cracks all along its shell.")