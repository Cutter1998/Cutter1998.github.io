		var canvas = new fabric.Canvas('canvas');
		
		window.onload = setTextInput();
		
		function setTextInput(){
			if(localStorage.getItem("UserTextStorage") != null){
				document.getElementById("TextInput").value = localStorage.UserTextStorage;
			}
		}
		
		var TShirtColour = document.getElementById("TShirtColour");
		
		function changeCanvasBackgroundColour(){
			canvas.backgroundColor = TShirtColour.value;
			canvas.renderAll();
		}
		
		window.addEventListener("keydown", deleteActiveObject, false);
		
		function deleteActiveObject(e){
			if(e.keyCode == 46){
			canvas.getActiveObject().remove();
			}
		}
		
		document.getElementById("SubmitText").addEventListener("click", GenerateTextImage);
		
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
		
		function AddMuseLogo(){
			fabric.Image.fromURL('assets/MuseLogo.png', function(img){img.setWidth(canvas.height * 0.2 * 2.37);img.setHeight(canvas.height * 0.2);canvas.add(img);});
		}
		
		document.getElementById("MuseLogo2").addEventListener("click", AddMuseLogo2);
		
		function AddMuseLogo2(){
			fabric.Image.fromURL('assets/MuseLogo2.png', function(img){img.setWidth(canvas.height * 0.2 * 2.37);img.setHeight(canvas.height * 0.2);canvas.add(img);});
		}
		
		document.getElementById("MattBellamy").addEventListener("click", AddMattBellamy);
		
		function AddMattBellamy(){
			fabric.Image.fromURL('assets/MattBellamy.png', function(img){img.setWidth(canvas.height * 0.1);img.setHeight(canvas.height * 0.2);canvas.add(img);});
		}
		
		document.getElementById("MattBellamyGuitar").addEventListener("click", AddMattBellamyGuitar);
		
		function AddMattBellamyGuitar(){
			fabric.Image.fromURL('assets/MattBellamyGuitar.png', function(img){img.setWidth(canvas.height * 0.2);img.setHeight(canvas.height * 0.2 * 2.7);canvas.add(img);});
		}
		
		document.getElementById("MuseCartoon").addEventListener("click", AddMuseCartoon);
		
		function AddMuseCartoon(){
			fabric.Image.fromURL('assets/MuseCartoon.png', function(img){img.setWidth(canvas.height * 0.2 * 2.37);img.setHeight(canvas.height * 0.2);canvas.add(img);});
		}

		document.getElementById("DigDown").addEventListener("click", AddDigDown);
		
		function AddDigDown(){
			fabric.Image.fromURL('assets/DigDown.png', function(img){img.setWidth(canvas.height * 0.2 * 2.37);img.setHeight(canvas.height * 0.2);canvas.add(img);});
		}
		
		document.getElementById("MuseColoured").addEventListener("click", AddMuseColoured);
		
		function AddMuseColoured(){
			fabric.Image.fromURL('assets/MuseColoured.png', function(img){img.setWidth(canvas.height * 0.2 * 2.37);img.setHeight(canvas.height * 0.2);canvas.add(img);});
		}
		
		document.getElementById("MuseRed").addEventListener("click", AddMuseRed);
		
		function AddMuseRed(){
			fabric.Image.fromURL('assets/MuseRed.png', function(img){img.setWidth(canvas.height * 0.2 * 2.37);img.setHeight(canvas.height * 0.2);canvas.add(img);});
		}
		
		document.getElementById("Drones").addEventListener("click", AddDrones);
		
		function AddDrones(){
			fabric.Image.fromURL('assets/Drones.png', function(img){img.setWidth(canvas.height * 0.2 * 2.37);img.setHeight(canvas.height * 0.2);canvas.add(img);});
		}
		
		document.getElementById("MuseTrio").addEventListener("click", AddMuseTrio);
		
		function AddMuseTrio(){
			fabric.Image.fromURL('assets/MuseTrio.png', function(img){img.setWidth(canvas.height * 0.2 * 2.37);img.setHeight(canvas.height * 0.2);canvas.add(img);});
		}
		
		document.getElementById("BandWhite").addEventListener("click", AddBandWhite);
		
		function AddBandWhite(){
			fabric.Image.fromURL('assets/BandWhite.png', function(img){img.setWidth(canvas.height * 0.2 * 2.37);img.setHeight(canvas.height * 0.2);canvas.add(img);});
		}
		
		document.getElementById("DronesCover").addEventListener("click", AddDronesCover);
		
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
		