// Enemies our player must avoid
class Enemy{
   constractor() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    }

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
    static update(dt) {

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    }

// Draw the enemy on the screen, required method for game
    static render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
       

    }
    static moves(){
                    console.log('assss');

            //move enemy every 0.1 seconds
            setInterval(function(){

                if(Enemy.x < 650){

                    Enemy.x = Enemy.x + Enemy.speed;
                } else {
                    Enemy.x = -100;
                }
                if(player.x === Enemy.x && player.y === Enemy.y ){
                    //reset to a starting point
                    player.x = 200;
                    player.y = 400;
                    //minus 1 live
                    player.lives--;
                    //if player loose all 3 live happyend is impossible
                    if (player.lives === 0) {
                        alert('You looseeeee');
                    }
                }
            }, 30);
        

           
        

    }
    

}

 class Enemy2{
    constructor() {

    }
    static render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

    }
    static update(dt) {

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    }
    static moves(){

            //move enemy every 0.1 seconds
            setInterval(function(){
                console.log('two');

                if(Enemy2.x < 650){

                    Enemy2.x = Enemy2.x + Enemy2.speed;
                } else {
                    Enemy2.x = -100;
                }
                if(player.x === Enemy2.x && player.y === Enemy2.y ){
                    //reset to a starting point
                    player.x = 200;
                    player.y = 400;
                    //minus 1 live
                    player.lives--;
                    //if player loose all 3 live happyend is impossible
                    if (player.lives === 0) {
                        alert('You looseeeee');
                    }
                }
            }, 30);
        

           
        

    }

}

class Enemy3{
    constructor() {

    }
    static render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

    }
    static update(dt) {

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    }
    static moves(){
                    console.log('assss');

            //move enemy every 0.1 seconds
            setInterval(function(){

                if(Enemy3.x < 650){

                    Enemy3.x = Enemy3.x + Enemy3.speed;
                } else {
                    Enemy3.x = -100;
                }
                if(player.x === Enemy3.x && player.y === Enemy3.y ){

                    //reset to a starting point
                    player.x = 200;
                    player.y = 400;
                    //minus 1 live
                    player.lives--;
                    //if player loose all 3 live happyend is impossible
                    if (player.lives === 0) {
                        alert('You looseeeee');
                    }
                }
            }, 30);
        

           
        

    }
}

Enemy.x = -100;
Enemy.y = 60;
Enemy.sprite = 'images/enemy-bug.png';
Enemy.speed = 12;

Enemy2.x = -100;
Enemy2.y = 145;
Enemy2.sprite = 'images/enemy-bug.png';
Enemy2.speed = 2;

Enemy3.x = -100;
Enemy3.y = 230;
Enemy3.sprite = 'images/enemy-bug.png';
Enemy3.speed = 6;
Enemy.moves();
Enemy2.moves();
Enemy3.moves();
// Now instantiate your objects.


// Place all enemy objects in an array called allEnemies
let allEnemies = [Enemy, Enemy2, Enemy3];

// Place the player object in a variable called player
class player {

    constractor(){
    }
    static update(){

    }

    //draw the player icon-avatar
    static render(){
        ctx.drawImage(Resources.get('images/char-boy1.png'), this.x, this.y);
    }

    static handleInput(e){
        console.log('keyup');
        //moving (if left go left and so on)
        switch(e) {
            case 'left':
                console.log('left');//move left
                if(player.x > 26){
                    player.x=player.x-100;
                }
                break;
            case 'up':
                console.log('up');//move up
                if(player.y >= 25){
                    player.y=player.y-85;
                }
                break;
            case 'right':
                console.log('right');//move right
                if(player.x < 399){
                    player.x=player.x+100;
                }
                break;
            case 'down':
                console.log('down');//move down
                if(player.y < 399){
                    player.y=player.y+85;
                }
                break ;
        }
        //if collision happend
        if(player.y<60){
            player.x = 200;
            player.y = 400;
            //problem with collision
            //Enemy.speed++;
           // Enemy2.speed++;
           // Enemy3.speed++;
        }
        
    }
}

player.x = 200;
player.y = 400;
player.lives = 3;
player.points = 0;


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    let allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
