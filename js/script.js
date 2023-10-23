
// playGame();

// function playGame() {
//   const inputMessage = "Please choose either Rock, Paper, or Scissors";
//   let score = 0;
//   let roundNumber = 1;

//   while (roundNumber <= 5) {
//     const rawUserSelection = prompt(`
//       roundNumber: ${roundNumber}
//       ${inputMessage}
//     `);
//     const userSelection = rawUserSelection.toLowerCase();

//     const computerSelection = getComputerChoice();
//     const result = playRound(userSelection, computerSelection);

//     alert(result)
//     roundNumber += 1
//   }
// }

let selectionButns = document.querySelectorAll('.selection-button');
let gameResultText = document.querySelector('.game-result');
let scoreText = document.querySelector('.score');
let detailText = document.querySelector('.detail');

let win = 0;
let loss = 0;

for(let i = 0; i < selectionButns.length; i++) {
  let butn = selectionButns[i];
  butn.addEventListener('click', (e) => {
    const computerChoice = getComputerChoice();
    detailText.textContent = playRound(e.target.textContent.toLowerCase(), computerChoice);

    scoreText.textContent = `Win: ${win} - loss ${loss}`;

    if (win + loss === 5) {
      if (win > loss) {
        gameResultText.textContent = `Game Over: You Win`;
      } else {
        gameResultText.textContent = `Game Over: You Lose`;
      }
      win = 0;
      loss = 0;
    } else {
      gameResultText.textContent = ''
    }

  });
}

// // Create a function for the computer to generate a random choice
function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber <= (1/3)) {
    return "rock";
  } else if (randomNumber <= 0.5) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock") {
    //console.log(handleRockSelection(computerSelection));
    return handleRockSelection(computerSelection);
  } else if (playerSelection === "paper") {
    //console.log(handlePaperSelection(computerSelection));
    return handlePaperSelection(computerSelection);
  } else if (playerSelection === "scissors") {
    //console.log(handleScissorsSelection(computerSelection));
    return handleScissorsSelection(computerSelection);
  } else {
    return;
  }
}

// handles when user selects rock
function handleRockSelection(cpu) {
  if (cpu === "rock") {
    return "You Tie, both selected rock!";
  } else if (cpu === "paper") {
    loss++;
    return "You Lose, paper beats rock";
  } else {
    win++;
    return "You Win, rock beast scissors";
  }
}

// handles when user selects paper
function handlePaperSelection(cpu) {
  if (cpu === "rock") {
    win++;
    return "You Win, paper beats rock";
  } else if (cpu === "paper") {
    return "You Tie, both selected paper!";
  } else {
    loss++;
    return "You Lose, scissors beast paper";
  }
}

// handles when user selects scissors
function handleScissorsSelection(cpu) {
  if (cpu === "rock") {
    loss++;
    return "You Lose, rock beats scissors";
  } else if (cpu === "paper") {
    win++;
    return "You Win, scissors beats paper";
  } else {
    return "You Tie, both selected scissors!";
  }
}
