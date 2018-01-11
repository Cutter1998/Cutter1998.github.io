		//This calls the fabric library to assist with the image movement
		var canvas = new fabric.Canvas('canvas');
		
		window.onload = setTextInput();
		
		//This function controls retrieving of local storage
		function setTextInput(){
			if(localStorage.getItem("UserTextStorage") != null){
				document.getElementById("TextInput").value = localStorage.UserTextStorage;
			}
		}
		
		var TShirtColour = document.getElementById("TShirtColour");
		
		//This changes the colour of the tshirt. It is actually changing the colour of the background, but the image I've used is transparent, creating the illusion of the tshirt changing colour.
		function changeCanvasBackgroundColour(){
			canvas.backgroundColor = TShirtColour.value;
			canvas.renderAll();
		}
		
		window.addEventListener("keydown", deleteActiveObject, false);
		
		//this deletes if the user presses the delete key
		function deleteActiveObject(e){
			if(e.keyCode == 46){
			canvas.getActiveObject().remove();
			}
		}
		
		document.getElementById("SubmitText").addEventListener("click", GenerateTextImage);
		
		//this generates a text object should the button be pressed
		function GenerateTextImage(){
			var temp = document.getElementById("TextInput").value;
			localStorage.setItem("UserTextStorage", temp);
			var UserTextEntry = new fabric.Text(temp, {
			fontFamily: 'Courier',
			top: canvas.height/2, left: canvas.width/2
			});
			canvas.add(UserTextEntry);
		}
		
		document.getElementById("MuseLogo").addEventListener("click", AddMuseLogo);
		//Adds one of the logos
		function AddMuseLogo(){
			fabric.Image.fromURL('assets/MuseLogo.png', function(img){img.setWidth(canvas.height * 0.2 * 2.37);img.setHeight(canvas.height * 0.2);canvas.add(img);});
		}
		
		document.getElementById("MuseLogo2").addEventListener("click", AddMuseLogo2);
		//Adds one of the logos
		function AddMuseLogo2(){
			fabric.Image.fromURL('assets/MuseLogo2.png', function(img){img.setWidth(canvas.height * 0.2 * 2.37);img.setHeight(canvas.height * 0.2);canvas.add(img);});
		}
		
		document.getElementById("MattBellamy").addEventListener("click", AddMattBellamy);
		//Adds one of the logos
		function AddMattBellamy(){
			fabric.Image.fromURL('assets/MattBellamy.png', function(img){img.setWidth(canvas.height * 0.1);img.setHeight(canvas.height * 0.2);canvas.add(img);});
		}
		
		document.getElementById("MattBellamyGuitar").addEventListener("click", AddMattBellamyGuitar);
		//Adds one of the logos
		function AddMattBellamyGuitar(){
			fabric.Image.fromURL('assets/MattBellamyGuitar.png', function(img){img.setWidth(canvas.height * 0.2);img.setHeight(canvas.height * 0.2 * 2.7);canvas.add(img);});
		}
		
		document.getElementById("MuseCartoon").addEventListener("click", AddMuseCartoon);
		//Adds one of the logos
		function AddMuseCartoon(){
			fabric.Image.fromURL('assets/MuseCartoon.png', function(img){img.setWidth(canvas.height * 0.2 * 2.37);img.setHeight(canvas.height * 0.2);canvas.add(img);});
		}

		document.getElementById("DigDown").addEventListener("click", AddDigDown);
		//Adds one of the logos
		function AddDigDown(){
			fabric.Image.fromURL('assets/DigDown.png', function(img){img.setWidth(canvas.height * 0.2 * 2.37);img.setHeight(canvas.height * 0.2);canvas.add(img);});
		}
		
		document.getElementById("MuseColoured").addEventListener("click", AddMuseColoured);
		//Adds one of the logos
		function AddMuseColoured(){
			fabric.Image.fromURL('assets/MuseColoured.png', function(img){img.setWidth(canvas.height * 0.2 * 2.37);img.setHeight(canvas.height * 0.2);canvas.add(img);});
		}
		
		document.getElementById("MuseRed").addEventListener("click", AddMuseRed);
		//Adds one of the logos
		function AddMuseRed(){
			fabric.Image.fromURL('assets/MuseRed.png', function(img){img.setWidth(canvas.height * 0.2 * 2.37);img.setHeight(canvas.height * 0.2);canvas.add(img);});
		}
		
		document.getElementById("Drones").addEventListener("click", AddDrones);
		//Adds one of the logos
		function AddDrones(){
			fabric.Image.fromURL('assets/Drones.png', function(img){img.setWidth(canvas.height * 0.2 * 2.37);img.setHeight(canvas.height * 0.2);canvas.add(img);});
		}
		
		document.getElementById("MuseTrio").addEventListener("click", AddMuseTrio);
		//Adds one of the logos
		function AddMuseTrio(){
			fabric.Image.fromURL('assets/MuseTrio.png', function(img){img.setWidth(canvas.height * 0.2 * 2.37);img.setHeight(canvas.height * 0.2);canvas.add(img);});
		}
		
		document.getElementById("BandWhite").addEventListener("click", AddBandWhite);
		//Adds one of the logos
		function AddBandWhite(){
			fabric.Image.fromURL('assets/BandWhite.png', function(img){img.setWidth(canvas.height * 0.2 * 2.37);img.setHeight(canvas.height * 0.2);canvas.add(img);});
		}
		
		document.getElementById("DronesCover").addEventListener("click", AddDronesCover);
		//Adds one of the logos
		function AddDronesCover(){
			fabric.Image.fromURL('assets/DronesCover.png', function(img){img.setWidth(canvas.height * 0.2);img.setHeight(canvas.height * 0.2);canvas.add(img);});
		}
		
		fabric.Image.fromURL('assets/TShirt.png', function(img){
			img.setWidth(canvas.width);
			img.setHeight(canvas.height);
			img.selectable = false;
			canvas.add(img);
			canvas.sendToBack(img);
		});
		
		canvas.backgroundColor = TShirtColour.value;
		canvas.renderAll();
		