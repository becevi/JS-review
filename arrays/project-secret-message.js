
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


secretMessage.splice(6, 5, 'know');
console.log(secretMessage);

console.log(secretMessage.join(' '));