// sets a race number variable with a random number from 0 to 999
let raceNumber = Math.floor(Math.random() * 1000);

// sets variables with boolean values stating if the registered early or late
let runnerEarlyAdult = true;


// sets variable with the runner's age
let runnerAge = 18;

// sets control flow to add 1000 to the race number if they are adults and registered early
if (runnerAge > 18 && runnerEarlyAdult) {
  raceNumber += 1000;
} 

// sets control flow to inform race hour and race number according taking into account age and whether they registered early or late.
if (runnerAge > 18 && runnerEarlyAdult) {
  console.log('You\'ll race at 9:30 a.m.');
  console.log(`Your race number is: ${raceNumber}`);
} else if (runnerAge > 18 && !runnerEarlyAdult){
  console.log('Late adults run at 11:00 a.m.');
  console.log(`Your race number is: ${raceNumber}`);
} else if (runnerAge < 18) {
  console.log('Youth registrants run at 12:30 p.m.');
  console.log(`Your race number is: ${raceNumber}`);
} else {
  console.log('Please go to the registration desk.');
}
