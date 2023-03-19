//function to generate student marks

const prompt = require('prompt-sync')({sigint: true});

const avmarks = prompt('What is your marks');

function grades() {
    console.log(`You have an average of ${avmarks} marks.`)

    if (avmarks <= 100 && avmarks > 79) {
        //grades = "A"
        console.log("You have an A")    
    }
    else if(avmarks <= 79 && avmarks >= 60) {
        //grades = "B"
        console.log("You have a B")    
    }
    else if(avmarks <= 59 && avmarks >= 49) {
        console.log("You have a C")
    }
    else if (avmarks < 49 && avmarks >= 40) {
        console.log("You have a D")    
    }
    else if(avmarks < 40) {
        console.log("You have an E")
    }
    else {
        console.log("Please enter a mark between 0 to 100")
    }
}
grades()
