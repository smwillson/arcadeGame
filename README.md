frontend-nanodegree-arcade-game
===============================

Students should use this [rubric](https://review.udacity.com/#!/projects/2696458597/rubric) for self-checking their submission. Make sure the functions you write are **object-oriented** - either class functions (like Player and Enemy) or class prototype functions such as Enemy.prototype.checkCollisions, and that the keyword 'this' is used appropriately within your class and class prototype functions to refer to the object the function is called upon. Also be sure that the **readme.md** file is updated with your instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

/* How to play the game */
To run the game, simply open the index.html file.

 To play the game, simply move the player sprite up, down, left and right using the arrow keys on the keyboard.
 Avoid the enemy sprites, reach the water to win the game.
 
 If collision occurs, the sprites involved in the collision all reset.
 
 /* Enemy Core functionality */
 
 
 * update -- updates the enemies' x-axis movement on the canvas, also checks for collisions.
 
 
 *render -- renders all the enemies on the canvas, also calculates the length and width of the sprites, which is during collision calculations.
 
 
 *createEnemySprites -- creates an array of enemy sprites.
 
 
 
 *checkIfOutOfBoundsEnemy -- checks if the enemy is out of the canvas boundary.
 
 
 
 *rateOfMovement -- assigns a random speed to the sprite.
 
 
 *reset -- resets the position of the enemy sprite on the canvas.
 
 
 /* Player Core functionality */
 
 *update -- updates the movement of the player sprite on the canvas, also check if the player reached water i.e won and displays alert message.
 
 *render-- renders the player on the canvas, also calculates the length and width of the sprite, which is used to check for collisions.
 
 *handleInput -- checks which key arrow key is pushed and makes appropriate changes to the sprite position.
 
 *reset -- resets the position of the player sprite on the canvas.
 