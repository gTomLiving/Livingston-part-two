let petName = prompt("What is your pet's name?");

let petEnergy = 0
let petHappiness = 0




var i =0; 
while(i < 6) {
    i = i + 1;
    let userAnswer = prompt("Would you like to feed, pet, or walk " + petName + "?");

    if (userAnswer === "walk" && petEnergy === 0){
        alert(petName + " does not have enough energy to enjoy a walk");
        /* Could do ---> i = i - 1 to not count toward an answer */

    }
    else if (userAnswer === "feed" || userAnswer === "Feed")  {
        petEnergy += 2;
        
       
    }
    
    else if (userAnswer === "pet" || userAnswer === "Pet") {
        petHappiness += 1;
        

    }
      
    else if (userAnswer === "walk" || userAnswer === "Walk") {
        petHappiness += 2;
        petEnergy -= 1;
       



    }
    else {
        alert("Not a valid response, please choose to feed, pet, or walk your pet");

        i = i - 1
    }
        
    
}


console.log(petName + " has " + petHappiness  + " happiness and " + petEnergy + " energy.");
