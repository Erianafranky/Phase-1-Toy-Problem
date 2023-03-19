//function to check speed

const prompt = require('prompt-sync')({sigint: true});

const speed = prompt('Enter the car speed: ');
function checkSpeed () {
    //check if speed is less than or within the limit
    if (speed <= 70) {
        console.log("0k")
    }
    
    //if speeds exceeds the limit
    const points = Math.floor((speed - 70) / 5);

    if (points > 12) {
        console.log("License Suspended")
    }
    else { 
        console.log(`Points: ${points}`);
    } 
}
checkSpeed(); 


