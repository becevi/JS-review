let hashTag = '#';
for (let counter = 0; counter < 7; counter++) {
    console.log(hashTag);
    hashTag = hashTag + '#';
}

for(let counter = 1; counter <= 100; counter++) {
    if (counter % 3 === 0 && counter % 5 === 0) {
        console.log("FizzBuzz");
    } else if (counter % 5 === 0 && counter % 3 !== 0) {
        console.log('Buzz');
    } else if (counter % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(counter);
    }
}
let size = 8;
for (let counter = 0; counter < size; counter++) {
    const line1 = ' #';
    const line2 = '# ';


}

let size = 14;
let char1 = ' #';
let char2 = '# ';
let line1 = '';
let line2 = '';
while (line1.length <= size) {  
    line1 = line1 + char1;
    line2 = line2 + char2;
    if (line1.length === size) {
        for (let counter = 0; counter <= size; counter += 2 ){
            console.log(line1);
            console.log(line2);
        }  
    }
}

