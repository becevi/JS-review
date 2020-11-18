const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log(`There's no ${userInput} option.`)
  }
};

//console.log(getUserChoice('scissors'));

const getComputerChoice = () => {
  randomNumber = Math.floor(Math.random() * 3);
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

function playGame() {
  let userChoice = getUserChoice('scissors');
  let computerChoice = getComputerChoice();
  console.log(`You are ${userChoice}. Computer is ${computerChoice}.`)
  console.log(`Result: ${determineWinner(userChoice, computerChoice)}`);
}

playGame();

