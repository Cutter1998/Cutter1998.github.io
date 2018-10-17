window.onload = setCanvasBackground;

clickNumber = 0;
dead = false;
firstClick = true;
playerWidth = 50;
playerHeight = 50;

var myStopwatch;
var storeValue;

enemy1Width = 50;
enemy1Height = 50;


enemy2Width = 50;
enemy2Height = 50;


function setCanvasBackground(){
	c = document.getElementById("gc");
	cc = c.getContext("2d");
	var img = new Image();
	img.src = "js/escapaassets/StartScreen.jpg";
	img.onload = function () {
    cc.drawImage(img, 0, 0);
	}
}

function startGameNew(e){
	var rect = c.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
		if(Math.pow((Math.pow((250-mouseX),2)+Math.pow((324-mouseY),2)),0.5)<61.1){
			firstClick = false;
				clickNumber++;
				enemy1XC = 250;
				enemy1YC = 50;
				enemy1XV = 1;
				enemy1YV = 1.2;
				enemy2XC = 55;
				enemy2YC = 150;
				enemy2XV = 0.8;
				enemy2YV = 1.5;
				firstScreenDisplay = true;
				stopwatchValue = 0;
				dead=false;
				c.addEventListener("mousemove", getMouseLocation);
				var rect = c.getBoundingClientRect();
				playerXC = e.clientX - rect.left;
				playerYC = e.clientY - rect.top;
				if(clickNumber == 1){
					setInterval(update, 1000/200);
					setInterval(increaseVelocity, 10000);
					myStopwatch = setInterval(stopwatch, 100);
				}
		}
}

function getMouseLocation(e) {
    var rect = c.getBoundingClientRect();
    playerXC = e.clientX - rect.left;
    playerYC = e.clientY - rect.top;
}

function checkIfRestartClicked(e) {
    var rect = c.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
	if(Math.pow((Math.pow((250-mouseX),2)+Math.pow((324-mouseY),2)),0.5)<61.1){
		c.removeEventListener("click", checkIfRestartClicked);
		enemy1XC = 250;
		enemy1YC = 50;
		enemy2XC = 55;
		enemy2YC = 150;
		dead=false;
	}
}

function update(){
	if(dead == false){
		enemy1XC+=enemy1XV;
		enemy1YC+=enemy1YV;
		enemy2XC+=enemy2XV;
		enemy2YC+=enemy2YV;
		if(enemy1YC<0 && enemy1YV<0){
			enemy1YV=-enemy1YV;
		}
		if(enemy1YC>c.height-enemy1Height && enemy1YV>0){
			enemy1YV=-enemy1YV;
		}
		if(enemy1XC<0 && enemy1XV < 0){
			enemy1XV =-enemy1XV;
		}
		if(enemy1XC>c.width-enemy1Width && enemy1XV > 0){
			enemy1XV =-enemy1XV;
		}
		if(enemy2YC<0 && enemy2YV<0){
			enemy2YV=-enemy2YV;
		}
		if(enemy2YC>c.height-enemy2Height && enemy2YV>0){
			enemy2YV=-enemy2YV;
		}
		if(enemy2XC<0 && enemy2XV < 0){
			enemy2XV =-enemy2XV;
		}
		if(enemy2XC>c.width-enemy2Width && enemy2XV > 0){
			enemy2XV =-enemy2XV;
		}
		if(checkIfDead()){
			dead = true;
		}
		
		cc.fillStyle="black";
		cc.fillRect(0, 0, c.width, c.height);
		cc.fillStyle="blue";
		cc.fillRect(0, 0, 50, 500);
		cc.fillStyle="blue";
		cc.fillRect(0, 0, 500, 50);
		cc.fillStyle="blue";
		cc.fillRect(450, 0, 50, 500);
		cc.fillStyle="blue";
		cc.fillRect(0, 450, 500, 50);
		
		
		cc.fillStyle="green";
		cc.fillRect(playerXC-5, playerYC-5, playerWidth+5, playerHeight+5);
		cc.fillStyle="red";
		cc.fillRect(enemy1XC-5, enemy1YC-5, enemy1Width+10, enemy1Height+10);
		cc.fillStyle="red";
		cc.fillRect(enemy2XC-5, enemy2YC-5, enemy2Width+10, enemy2Height+10);
		
	}
	
	if(dead){
		deadScreen();
		cc.font = "18px Arial";
		cc.fillText(storeValue/10 + " seconds",250,237);
	}
}

function increaseVelocity(){
	enemy1XV = enemy1XV * 1.20;
	enemy1YV = enemy1YV * 1.20;
	enemy2XV = enemy2XV * 1.20;
	enemy2YV = enemy2YV * 1.20;
}

function stopwatch(){
	stopwatchValue++;
}

function deadScreen(){
	if(firstScreenDisplay){
		firstScreenDisplay = false;
		var img = new Image();
		img.src = "js/escapaassets/GameOverScreen.jpg";
		img.onload = function () {
		cc.drawImage(img, 0, 0);
		}
		c.addEventListener("click", checkIfRestartClicked);
	}
}

function checkIfDead(){
	//check collision with enemy 1
	if(((playerXC<enemy1XC+enemy1Width)&&(playerXC>enemy1XC-enemy1Width))&&((playerYC<enemy1YC+enemy1Height)&&((playerYC>enemy1YC-enemy1Height)))){storeValue = stopwatchValue; return true;}
	//check collision with enemy 2
	if(((playerXC<enemy2XC+enemy2Width)&&(playerXC>enemy2XC-enemy2Width))&&((playerYC<enemy2YC+enemy2Height)&&((playerYC>enemy2YC-enemy2Height)))){storeValue = stopwatchValue; return true;}
	//check collision with blue walls
	if((playerXC>400)||(playerXC<55)||(playerYC<55)||(playerYC>400)){storeValue = stopwatchValue; return true;}

}