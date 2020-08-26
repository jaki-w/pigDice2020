//Business Logic
function Game() {
  this.players = [],
  this.currentId = 0;
}

function Player() {
  this.turnScore = turnScore,
  this.score = score;
}

// A random number between 1 & 6 is generated 
function generateRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
}

// Number rolled is added to player turn total

//if a 1 is rolled, turn score is 0

Player.prototype.rollDice = function() {
  let roll = generateRandomNumber();

  if (roll === 1) {
    this.turnScore = 0;
    // showRoll();
    // turnEnd();
  } 
}

// function showRoll() {
//   $("#currentRoll").text(roll);
// }

// function turnEnd(name) {
//   $("#")
// }
//player is switched when 1 is rolled

// current score is compiled in turn score for multiple rolls

//turn score is added to total score at turn end

//player is switched when current player holds

//game ends when a player's score reaches 100


//Object: Game: Properties: players, currentId, 

//Object: Player: Properties: turnScore, totalScore

//Prototype: Game/ assignId





