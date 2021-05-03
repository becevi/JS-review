
// binding secretMessage with array as a value, arrays go within brackets
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// length can return string number of characters and number of elements in array
console.log(secretMessage.length);
// pop is an Array method, removes last element of array
secretMessage.pop();
console.log(secretMessage.length);

// push is an Array method, adds element at the end of an array
secretMessage.push('to', 'Program');

// through bracket notation assigning new value (or changing value) in index n element
secretMessage[7] = 'right';
 
// shift is an Array method, removes first element
secretMessage.shift();

// unshift is an Array method, add element at the beginning of the array
secretMessage.unshift('Programming');

// splice is an Array method, the first parameter is the index, the second
// is remove count parameter which is the number of elements to be remove,
// after that is the new item or items to be inserted from on index
secretMessage.splice(6, 5, 'know');


git config --global user.name "becevi"
git config --global user.email benjaminceavidal@gmail.com

// now we log out secretMessage variablesss
console.log(secretMessage);

// join is an Array method, it returns a new string by concatenating all
// the elements in an array, the parameter is optional and sets which caracter
// is the one joining the elements of the array
console.log(secretMessage.join(' '));