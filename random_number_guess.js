function guessNumber(){
    // generating a random number  from 1-100
    const random = Math.floor(Math.random() *100) +1;
    prompt = require("prompt-sync")();
    let number = parseInt(prompt("Guess a number from 1-100 : "));
    while(number !== random){
        number = parseInt(prompt("Guess a number from 1-100 : "));
    }

    if(number ==  random){
        console.log("Your guess is correct")
    }
}
guessNumber()


