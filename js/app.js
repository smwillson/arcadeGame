// Enemies our player must avoid
var hasExecuted = false;
var hasPlayerExecuted = false;
const totalEnemySprites = 5;
const startingXPosition = -100;
const playerStartXPosition = 200 , playerStartYPosition = 200;
var allowedKeys;
var now = Date.now();
var totalTimeElasped, totalEmenySprites;
var isEnemyOutOfBounds,isPlayerOutOfBounds;
const spriteMovement = 10;

var Enemy = function(yCoordinate) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started

  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images

  this.sprite = 'images/enemy-bug.png';
  this.x = startingXPosition;
  this.y = yCoordinate;


};

//give the enemy sprite a speed at which it moves; speed will be between x and 100x.
//random number generator : https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
Enemy.prototype.rateOfMovement = function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.

  if(!this.checkIfOutOfBoundsEnemy(this)){
  this.x += (dt * this.rateOfMovement(10, 1000));
}
else{
  this.x = startingXPosition;
  isEnemyOutOfBounds = false;
}
};


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {

  var sprite = Resources.get(this.sprite);

  var height = sprite.height,
    width = sprite.width;

  if (!hasExecuted) {
    (function() {

      Enemy.prototype.height = height;

      Enemy.prototype.width = width;
      console.log('in function!');

    })();
    hasExecuted = true;
  }

  ctx.drawImage(sprite, this.x, this.y + height);

};

// Now instantiate your objects.

var allEnemies = [];

(function createEnemySprites() {

  let yCoordinates = [-130, -35, 60, 155, 250, 345];

  for (let enemyCount = 0; enemyCount < totalEnemySprites; enemyCount++) {

    allEnemies.push(new Enemy(yCoordinates[enemyCount]));
  }

})();

//check if enemy is outside the boundary of the canvas
Enemy.prototype.checkIfOutOfBoundsEnemy= function(enemy){
//  console.log('I am at'+enemy.x);
    if(enemy.x > 505){

    isEnemyOutOfBounds = true;

  }
return isEnemyOutOfBounds;
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

 var Player = function(){
  this.sprite = 'images/char-pink-girl.png';
  this.x=playerStartXPosition;
  this.y=playerStartYPosition;
};
//y =-180 when sprite touches water
Player.prototype.update = function(){

  if(this.x > 420){
  this.x = this.x - spriteMovement;
}
if(this.x < -10){
this.x = this.x + spriteMovement;
}
if(this.y > 280){
  this.y = this.y - spriteMovement;
}
if(this.y <= -180){
  window.alert('Game won!');
  this.x = playerStartXPosition;
  this.y = playerStartXPosition;
}

}
// Draw the enemy on the screen, required method for game
Player.prototype.render = function() {

  let sprite = Resources.get(this.sprite);

  var height = sprite.height,
    width = sprite.width;

  if (!hasPlayerExecuted) {
    (function() {

      Player.prototype.height = height;

      Player.prototype.width = width;
      console.log('in function!');

    })();
    hasPlayerExecuted = true;
  }

  ctx.drawImage(sprite, this.x, this.y + height);

};

Player.prototype.handleInput = function(allowedKeyCode){

switch (allowedKeyCode) {
  case 'left':this.x -=spriteMovement;

    break;
    case 'right':this.x +=spriteMovement;

      break;
      case 'up':this.y -=spriteMovement;

        break;
        case 'down':this.y +=spriteMovement;

          break;
  default:

}

};
var player = new Player();

// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player




// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
   allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

   player.handleInput(allowedKeys[e.keyCode]);
});
