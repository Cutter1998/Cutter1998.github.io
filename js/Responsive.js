window.onload = function(){document.getElementById("mobileButton").addEventListener("click", toggleVisibility);}

function toggleVisibility(){	
	
	var NavDiv = document.getElementById("NavigationContainer");
	
	if(NavDiv.style.display == 'block'){NavDiv.style.display = 'none';}
	else{NavDiv.style.display = 'block';}	
}