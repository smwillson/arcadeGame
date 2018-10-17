# Classic Arcade Game
===============================

# How to download the project?
In order to clone the project onto your computer via HTTPS URLs (recommended) do the following:

1. Open a new command prompt window

2. Type git clone https://github.com/smwillson/arcadeGame.git at the prompt.

More information : https://help.github.com/articles/which-remote-url-should-i-use/

# How to play the game?
To run the game, simply open the index.html file.

 To play the game, simply move the player sprite up, down, left and right using the arrow keys on the keyboard.
 Avoid the enemy sprites to reach the water and win the game.

 If collision occurs, the sprites involved in the collision all reset.

 # Core functionality

 # Enemy Core functionality


#### update -- updates the enemies' x-axis movement on the canvas, also checks for collisions.


 #### render -- renders all the enemies on the canvas, also calculates the length and width of the sprites, which is during collision calculations.


 #### createEnemySprites -- creates an array of enemy sprites.



 #### checkIfOutOfBoundsEnemy -- checks if the enemy is out of the canvas boundary.



 #### rateOfMovement -- assigns a random speed to the sprite.


 #### reset -- resets the position of the enemy sprite on the canvas.


 #Player Core functionality

 #### update -- updates the movement of the player sprite on the canvas, also check if the player reached water i.e won and displays alert message.

 #### render-- renders the player on the canvas, also calculates the length and width of the sprite, which is used to check for collisions.

 #### handleInput -- checks which key arrow key is pushed and makes appropriate changes to the sprite position.

 #### reset -- resets the position of the player sprite on the canvas.
