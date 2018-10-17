const canvas = document.getElementById("snake");
const ctx = canvas.getContext("2d");
var KeyPressNumber = 1;
const box = 20;
var game;
var gameStarted = false;

let snake = [];
snake[0] = {
	x : 9 * box,
	y : 10 * box
}

window.onload = function(){
	var Img = new Image();
	Img.src = "js/snakeassets/startScreen.jpg";
	Img.onload = function(){
		ctx.drawImage(Img, 0, 0);
	}
	document.addEventListener("keydown", direction);
}

// create the food

let food = {
	x : Math.floor(Math.random()*28+1)*box,
	y : Math.floor(Math.random()*26+3)*box
}

// create the score var
let score = 0;

let d="RIGHT";

function direction(event){
	if(KeyPressNumber==1 && event.keyCode == 32){
		KeyPressNumber++;
		gameStarted = true;
		game = setInterval(draw,80);
	}
	if(gameStarted == true){
		if(event.keyCode == 37 && d != "RIGHT"){
			d= "LEFT";
		}else if(event.keyCode ==38 && d != "DOWN"){
			d= "UP";
		}else if(event.keyCode == 39 && d != "LEFT"){
			d= "RIGHT";
		}else if(event.keyCode == 40 && d != "UP"){
			d= "DOWN";
		}
	}
}

//check collision
function collision(head, array){
	for(let i = 0; i < array.length; i++){
		if(head.x == array[i].x && head.y == array[i].y){
			return true;
		}
	}
	return false;
}

function deathScreen(){
	var Img = new Image();
	Img.src = "js/snakeassets/startScreen.jpg";
	Img.onload = function(){
		ctx.drawImage(Img, 0, 0);
	}
	snake = [];
	snake[0] = {
	x : 9 * box,
	y : 10 * box
}
	snake[0].x = 9*box;
	snake[0].y = 10*box;
	score = 0;
	d="RIGHT";
	KeyPressNumber = 1;
}

//draw to canvas
function draw(){
	

	ctx.fillStyle = "#b4ff77";
	ctx.fillRect(0, 0, 600, 600);
	
	ctx.fillStyle = "#4da83a";
	ctx.fillRect(0, 0, 600, 3*box);
	ctx.fillRect(600-box, 0, box, 600);
	ctx.fillRect(0, 600-box, 600, box);
	ctx.fillRect(0, 0, box, 600-box);
	
	for(let i = 0; i < snake.length; i++){
		ctx.fillStyle = (i == 0)? "green" : "white";
		ctx.fillRect(snake[i].x,snake[i].y, box, box);
	}
	
	var appleImg = new Image();
	appleImg.src = "js/snakeassets/apple.png";
	ctx.drawImage(appleImg, food.x, food.y);
	
	ctx.fillStyle = "white";
	ctx.font = "30px Changa one";
	ctx.fillText("Score: " + score, box, 2.5*box);
	
	//old head position
	let snakeX = snake[0].x;
	let snakeY = snake[0].y;
	
	//which direction
	if( d == "LEFT") snakeX -= box;
	if( d == "UP") snakeY -= box;
	if( d == "RIGHT") snakeX += box;
	if( d == "DOWN") snakeY += box;
	
	//if snake eats food
	if(snakeX == food.x && snakeY == food.y){
		score++;
		food = {
			x : Math.floor(Math.random()*17+1)*box,
			y : Math.floor(Math.random()*15+3)*box
		}
	}else{
		//remove the tail
		snake.pop();
	}
	
	//add new head
	let newHead = {
		x : snakeX,
		y : snakeY
	}
	
	//game over
	if(snakeX < box ||	snakeX>28*box || snakeY < 3*box  ||	snakeY > 28*box || collision(newHead, snake)){
		clearInterval(game);
		setTimeout(deathScreen, 2000);
	}
	
	snake.unshift(newHead)
}

