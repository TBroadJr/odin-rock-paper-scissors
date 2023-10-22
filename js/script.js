// Create a function for the computer to generate a random choice
function getComputerChoice() {
  var randomNumber = Math.random();

    // case for rock
  if (randomNumber <= (1/3)) {
    return "Rock";
    // case for paper
  } else if (randomNumber <= 0.5) {
    return "Paper";
    // case for scissors
  } else {
    return "Scissors";
  }
}