let input = 'Hello stranger';

const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

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
