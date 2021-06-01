// function getSleepHours with day as parameter is defined
function getSleepHours(day) {
  // switch statement with day as value
  // day is the condition to be compara to each case
  // each case most finish with a break
  switch(day) {
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 7;
      break;
    case 'wednesday':
      return 7;
      break;
    case 'thursday':
      return 4;
      break;
    case 'friday':
      return 5;
      break;
    case 'saturday':
      return 6;
      break;
    case 'sunday':
      return 10;
      break;
    default:
      return 'Day input is incorrect.';
  }

}

//console.log(getSleepHours('sunday'));
// function gets all hours from the week, them sums em and returns the total
function getActualSleepHours() {
  a = getSleepHours('monday');
  b = getSleepHours('tuesday');
  c = getSleepHours('wednesday');
  d = getSleepHours('thursday');
  e = getSleepHours('friday');
  f = getSleepHours('saturday');
  g = getSleepHours('sunday');
  totalHours = a + b + c + d + e + f + g;
  return totalHours;
}

function getIdealSleepHours() {
  idealHours = 8;
  return idealHours * 7;
}

function calculateSleepDebt() {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log('You have the perfect amount of sleep.');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You are sleeping more than needed.');
  } else {
    console.log('You should get some rest');
  }
}

console.log(getIdealSleepHours());
console.log(getActualSleepHours());
calculateSleepDebt();
//let getSleepHours = day => {};