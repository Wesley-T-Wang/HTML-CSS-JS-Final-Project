var you = 0;
var computer = 0;

function playRPS(userThrow) {
	var computerIndex = Math.floor(Math.random() * 3);
	var possibleThrows = [1, 2, 3];
	computerThrow = possibleThrows[computerIndex];
	if(userThrow == computerThrow){
		draw();
	} else if (userThrow == 3){
		if(computerThrow == 1){
			lose();
		} else if (computerThrow == 2){
			win();
		}
	} else if (userThrow == 2){
		if(computerThrow == 3){
			lose();
		} else if (computerThrow == 1){
			win();
		}
	}  else if (userThrow == 1){
		if(computerThrow == 2){
			lose();
		} else if (computerThrow == 3){
			win();
		}
	}

}

function win(){
	you ++;
	document.getElementById("user").innerHTML = you;
	document.getElementById("user").style.backgroundColor = "lightgreen";
	document.getElementById("computer").style.backgroundColor = "pink";
}

function lose(){
	computer ++
	document.getElementById("computer").innerHTML = computer;
	document.getElementById("computer").style.backgroundColor = "lightgreen";
	document.getElementById("user").style.backgroundColor = "pink";
}

function draw(){
	document.getElementById("computer").style.backgroundColor = "lightblue";
	document.getElementById("user").style.backgroundColor = "lightblue";

}



var animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');
  
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};

var classname = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < classname.length; i++) {
  classname[i].addEventListener('click', animateButton, false);
  
}