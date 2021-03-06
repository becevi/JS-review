//  declared variable has a function value; then we defined an arrow 
// function expression with one parameter, as it is just one parameter no
// parenthesis is needed,  then there's an if statement with or operators
// then userInput is returned

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log(`There's no ${userInput} option.`)
  }
};

//console.log(getUserChoice('scissors'));


// variable is declared with a function as a value, or arrow function expression,
// arrow function
// with no parameter is defined, it just needs an empty parenthesis
const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

//console.log(getComputerChoice());

// arrow function expression can be a let or const variable
const determineWinner = (userChoice, computerChoice) => {
  if (computerChoice === userChoice) {
    return 'Game was a tie.';
  } else {
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'Computer won!';
      } else {
      return 'You won!';
      }
    }
    if (userChoice === 'paper') {
      if (computerChoice === 'rock') {
        return 'You won!';
      } else {
      return 'Computer won!';
      }
    }
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'Computer Won!';
      } else {
        return 'You won!';
      }
      }
    }

  }

//console.log(determineWinner('paper', 'rock'));

// Here is a function declaration, it needs the keyword function,
// the name of the function, followed by paranthesis
// within the parenthesis we put parameters in case there are
function playGame() {
  let userChoice = getUserChoice('scissors');
  let computerChoice = getComputerChoice();
  console.log(`You are ${userChoice}. Computer is ${computerChoice}.`)
  console.log(`Result: ${determineWinner(userChoice, computerChoice)}`);
}

// playGame function is called
playGame(); 

