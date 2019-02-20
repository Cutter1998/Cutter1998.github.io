function launchCarousel(){
	showDivs(slideIndex);
}
	
var slideIndex = 1;

//Must wait for image to load not window
var img = new Image();
img.src = "assets/drawing1.jpg";



function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
	 x[i].style.display = "none";  
  }
  console.log(slideIndex);
  x[slideIndex-1].style.display = "block";
}

				
				

		