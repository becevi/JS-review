// declared string variable
let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

// declared an array
let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// split method returns array of elements from an string,
// in this case those elements separated by a space ' ' will be part of
// storyWords array
const storyWords = story.split(' ');


// array methods require a callback function.
// 
const betterWords = storyWords.filter(word => !unnecessaryWords.includes(word));

let counterA = 0;
let counterB = 0;
let counterC = 0;

//
for (word of storyWords) {
  if (word === 'really') {
    counterA += 1;
  } else if (word === 'very') {
    counterB += 1;
  } else if (word === 'basically') {
    counterC += 1;
  }
}

let sentences = 0;

storyWords.forEach(word => {
  if (word[word.length-1] === '.' || word[word.length-1] === '!') {
    sentences += 1;
  }
});

console.log(storyWords.length);
console.log(sentences);
console.log(counterA);
console.log(counterB);
console.log(counterC);
console.log(betterWords.join(' '));

