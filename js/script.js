
playGame();

function playGame() {
  const inputMessage = "Please choose either Rock, Paper, or Scissors";
  let score = 0;
  let roundNumber = 1;

  while (roundNumber <= 5) {
    const rawUserSelection = prompt(`
      roundNumber: ${roundNumber}
      ${inputMessage}
    `);
    const userSelection = rawUserSelection.toLowerCase();

    const computerSelection = getComputerChoice();
    const result = playRound(userSelection, computerSelection);

    alert(result)
    roundNumber += 1
  }
}

// Create a function for the computer to generate a random choice
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
    return handleRockSelection(computerSelection);
  } else if (playerSelection === " paper") {
    return handlePaperSelection(computerSelection);
  } else {
    return handleScissorsSelection(computerSelection);
  }
}

// handles when user selects rock
function handleRockSelection(cpu) {
  if (cpu === "rock") {
    return "You Tie, both selected rock!";
  } else if (cpu === "paper") {
    return "You Lose, paper beats rock";
  } else {
    return "You Win, rock beast scissors";
  }
}

// handles when user selects paper
function handlePaperSelection(cpu) {
  if (cpu === "rock") {
    return "You Win, paper beats rock";
  } else if (cpu === "paper") {
    return "You Tie, both selected paper!";
  } else {
    return "You Lose, scissors beast paper";
  }
}

// handles when user selects scissors
function handleScissorsSelection(cpu) {
  if (cpu === "rock") {
    return "You Lose, rock beats scissors";
  } else if (cpu === "paper") {
    return "You Win, scissors beats paper";
  } else {
    return "You Tie, both selected scissors!";
  }
}