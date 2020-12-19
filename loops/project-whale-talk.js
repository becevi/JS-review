// declared input variable
let input = 'Hello stranger';

// declared array of vowels
const vowels = ['a', 'e', 'i', 'o', 'u'];

// declared empty array
let resultArray = [];

// created for loop. first part is the counter, then is the condition
// to be evaluated and then the increment.
// the order is counter, condition, code, increment
for (i = 0; i < input.length; i++) {
  //console.log(input[i]);
  for (j = 0; j < vowels.length; j++) {
    //console.log(j);
    if (input[i] === vowels[j]) {
      if (input[i] === 'e' || input[i] === 'u'){
        resultArray.push(input[i]);
        resultArray.push(input[i]);
      } else {
      resultArray.push(input[i]);
      }
    }
  }
}

console.log(resultArray.join('').toUpperCase());
