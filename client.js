var playerTurn = 1;
var totalTurns = 0;

function boxClick(e){
	if(playerTurn % 2 == 1) {
		e.innerHTML = "X";
	} else {
		e.innerHTML = "O";
	}
	if(checkWin() == false){
		playerTurn = (playerTurn == "1" ? "2" : "1");
		totalTurns++;
		console.log(totalTurns);
	} if(totalTurns == 9) {
		document.getElementById("endMessage").innerHTML = "It's a Tie!";
		document.getElementById("lightBox").style.display = "block";
		document.getElementById("winScreen").style.display = "block";
	} else if(checkWin() == true){
		console.log("Player " + playerTurn + " Wins!")
		document.getElementById("endMessage").innerHTML = "Player " + playerTurn + " Wins!";
		document.getElementById("lightBox").style.display = "block";
		document.getElementById("winScreen").style.display = "block";
	}
}

function checkWin(){
	let cb = [];
	cb[0] = "";
	cb[1] = document.getElementById("one").innerHTML;
	cb[2] = document.getElementById("two").innerHTML;
	cb[3] = document.getElementById("three").innerHTML;
	cb[4] = document.getElementById("four").innerHTML;
	cb[5] = document.getElementById("five").innerHTML;
	cb[6] = document.getElementById("six").innerHTML;
	cb[7] = document.getElementById("seven").innerHTML;
	cb[8] = document.getElementById("eight").innerHTML;
	cb[9] = document.getElementById("nine").innerHTML;
	
	if(cb[1] != "" && cb[1] == cb[2] && cb[2] == cb[3]){
		return true;
	}
	else if(cb[4] != "" && cb[4] == cb[5] && cb[5] == cb[6]){
		return true;
	}
	else if(cb[7] != "" && cb[7] == cb[8] && cb[8] == cb[9]){
		return true;
	}
	
	else if(cb[1] != "" && cb[1] == cb[4] && cb[4] == cb[7]){
		return true;
	}
	else if(cb[2] != "" && cb[2] == cb[5] && cb[5] == cb[8]){
		return true;
	}
	else if(cb[3] != "" && cb[3] == cb[6] && cb[6] == cb[9]){
		return true;
	}
	
	else if(cb[1] != "" && cb[1] == cb[5] && cb[5] == cb[9]){
		return true;
	}
	else if(cb[7] != "" && cb[7] == cb[5] && cb[5] == cb[3]){
		return true;
	}
	else {
		return false;
	}
}

function restartGame() {
	document.getElementById("one").innerHTML = "";
	document.getElementById("two").innerHTML = "";
	document.getElementById("three").innerHTML = "";
	document.getElementById("four").innerHTML = "";
	document.getElementById("five").innerHTML = "";
	document.getElementById("six").innerHTML = "";
	document.getElementById("seven").innerHTML = "";
	document.getElementById("eight").innerHTML = "";
	document.getElementById("nine").innerHTML = "";
	document.getElementById("lightBox").style.display = "none";
	document.getElementById("winScreen").style.display = "none";
	playerTurn = 1;
	totalTurns = 0;
}
