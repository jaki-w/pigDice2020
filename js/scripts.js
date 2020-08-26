//Business Logic
function Game() {
  this.players = [],
  this.currentId = 0;
}

Game.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

Game.prototype.newPlayer = function(player) {
  player.id = this.assignId();
  this.players.push(player);
}

function Player(turnScore, score) {
  this.turnScore = turnScore,
  this.score = score;
}

// A random number between 1 & 6 is generated 
function generateRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  $("#player1TurnTotal").text(randomNumber);
  return randomNumber;
}

// Number rolled is added to player turn total

//if a 1 is rolled, turn score is 0

Player.prototype.rollDice = function() {
  let roll = generateRandomNumber();

  this.score += roll;
  $("#player1Score").text(this.score);

  

  // if (roll === 1) {
  //   this.turnScore = 0;
    // showRoll();
    // turnEnd();
  // } 
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

$(document).ready(function() {
  $("#newGame").click(function(event) {
    event.preventDefault();
    let game = new Game();
    let player1 = new Player();
    let player2 = new Player();
    game.newPlayer(player1);
    game.newPlayer(player2);
    console.log(game);
    console.log(player1);
    console.log(player2);
  })
  $("#roll1").click(function(event) {
    event.preventDefault();
    generateRandomNumber();
    player.rollDice();
  })
})


