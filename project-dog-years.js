//set variable of my age
let myAge = 29;

//set variable to two
let earlyYears = 2;

//multiply earlyYears time 10.5 and reassing value
earlyYears = earlyYears * 10.5;

// substracts 2 from myAge
let laterYears = myAge - 2;

//uses multiplication assignment opeartor to multiply laterYears times 4 and reassing value to laterYears
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

//added earlyYears plus laterYears into one variable called myAgeInDogYears
let myAgeInDogYears = earlyYears + laterYears;

// saved my name in myName variable and used a method to lowercase all letters
let myName = 'Benji Cea'.toLowerCase();

// interpolated my name, age and age in dog years into a string
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);