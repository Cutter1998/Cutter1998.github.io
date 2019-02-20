document.addEventListener("DOMContentLoaded", function(){
	if(localStorage.getItem("bannerColour") === null){
		document.getElementsByClassName('nav')[0].style.backgroundColor = "#60bdb1"
		document.getElementById('colourPicker').value = "#60bdb1";
	}
	else{
		document.getElementById('colourPicker').value = localStorage.getItem("bannerColour");
		document.getElementsByClassName('nav')[0].style.backgroundColor = localStorage.getItem("bannerColour");
	}
})

function changeBannerColour(){
	document.getElementsByClassName('nav')[0].style.backgroundColor = document.getElementById('colourPicker').value;
	localStorage.setItem("bannerColour", document.getElementById('colourPicker').value);
}
