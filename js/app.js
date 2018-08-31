// Enemies our player must avoid
var hasExecuted = false;
var totalEmenySprites= 0;
const totalEnemySprites = 5;

  var now = Date.now();
  var totalTimeElasped,totalEmenySprites ;

var Enemy = function(yCoordinate) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images

    this.sprite = 'images/enemy-bug.png';
    this.x = -100;
    this.y = yCoordinate;


};

  Enemy.prototype.rateOfMovement = function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    this.x += (dt*this.rateOfMovement(10,100));
    Enemy.prototype.updatedXPosition = this.x;
};


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {

    var sprite = Resources.get(this.sprite);

    var height = sprite.height,
          width  = sprite.width;

	if(!hasExecuted){
    (function(){

     Enemy.prototype.height = height;

	   Enemy.prototype.width = width;
	 console.log('in function!');

    })();
	hasExecuted = true;
	}

	ctx.drawImage(sprite, this.x, this.y+height);

};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

 function Player(){

  this.sprite = 'images/char-pink-girl.png';
  this.x=10;
  this.y=10;
  this.update = function(dt){

  };
  this.render = function(){
      var sprite = Resources.get(this.sprite);

    ctx.drawImage(sprite, this.x, this.y+this.height);

	if(!hasExecuted){
    (function(){

      var height = sprite.height,
          width  = sprite.width;

      var heightWidthArray = [height, width];
		Enemy.height = height;
		Enemy.width = width;

    })();
	hasExecuted = true;
	}
  };
  this.handleInput = function(){

  };
};

// Now instantiate your objects.

var  allEnemies =[];
(function createEnemySprites(){

let yCoordinates =[-130, -35 ,60, 155, 250, 345];

for(let enemyCount = 0; enemyCount < totalEnemySprites ; enemyCount++){

  allEnemies.push(new Enemy(yCoordinates[enemyCount]));
}

})();

//allEnemies.push(new Enemy());


// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

   // player.handleInput(allowedKeys[e.keyCode]);
});
