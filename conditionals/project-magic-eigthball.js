//set variable with user name
let userName = 'Ben';

// ternary conditional; interpolate userName with greeting; used ternary expression in case no name is given
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

//set variable with user's question
let userQuestion = 'Is Covid ever gonna end?';

//logged in consoled with interpolation userName and userQuestion
console.log(`${userName} asked: ${userQuestion}`);

//set variable with random number from 0 inclusive to 7 inclusive and rounding it down to get always an integer
let randomNumber = Math.floor(Math.random() * 8);

//declared an empty string
let eightball = '';

// implemented switch flow for 8 different random answers; switch is a control flow; switch keyword, then the variable, then each cases, each one has
// must finish with break keyword otherwise it continues, it must end a default statement, this one must include a break statement too.
switch (randomNumber) {
  case (0):
    eightball = 'It is certain';
    break; 
  case (1):
    eightball = 'It is decidedly so';
    break;
  case (2):
    eightball = 'Reply hazy try again';
    break; 
  case (3):
    eightball = 'Cannot predict now';
    break;
  case (4):
    eightball = 'Do not count on it';
    break; 
  case (5):
    eightball = 'My sources say no';
    break;
  case (6):
    eightball = 'Outlook not so good';
    break; 
  case (7):
    eightball = 'Signs point to yes';
    break;
  default:
    eigthball = "You need to ask a question";
    break
}

// logged in the console the answer with interpolation
console.log(`The eightball answered: ${eightball}`)

