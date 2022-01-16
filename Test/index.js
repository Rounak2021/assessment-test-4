function startGame(){
    for (var i = 1; i<= 9; i = i + 1){
        clearBox(i);
    }
    document.turn = "X";
    if (Math.random()< 0.5){
        document.turn = "O";
    }
    document.winner = null;
    setMessage("This time, the game will be started by " +document.turn);
    document.getElementById("s1").style.color = "green";
    document.getElementById("s2").style.color = "red";
    document.getElementById("s3").style.color = "green";
    document.getElementById("s4").style.color = "red";
    document.getElementById("s5").style.color = "green";
    document.getElementById("s6").style.color = "red";
    document.getElementById("s7").style.color = "green";
    document.getElementById("s8").style.color = "red";
    document.getElementById("s9").style.color = "green";
}

function setMessage(msg){
    document.getElementById("call").textContent = msg;
}
function nextMove(rows){
    if (document.winner != null){
        setMessage("Game finished by " + document.turn + ". Please Start Again"  );
    }
    else if (rows.textContent == ""){
        rows.textContent = document.turn;
        turn();
    }
    else{
        setMessage("This space is pre occupied")
    }
}
function turn(){
    if(Winner(document.turn)){
        setMessage("Congratulations player for winning the game. Winner: " +document.turn);
        document.winner = document.turn;
    }
    else if(tie()){
        setMessage("Tie occured. Please play again.");
    }
    else if (document.turn == "X"){
        document.turn ="O";
        setMessage("Turn for: Player 1 " , document.turn);
    }
    else{
        document.turn ="X";
        setMessage("Turn for: player 2 " , document.turn);
    }
}

function Winner(move){
    var result = false;
    if(checkRow(1,2,3, move) || checkRow(4,5,6, move) || checkRow(7,8,9, move) ||checkRow(1,4,7, move) ||checkRow(2,5,8, move) ||checkRow(3,6,9, move) ||checkRow(1,5,9, move) ||checkRow(3,5,7, move))
       {
        result = true;
       }
        return result;
}

function checkRow(a,b,c, move){
    var result = false;
    if (getBox(a)== move && getBox(b)== move && getBox(c)== move)
    {
    	result = true;
    }
    	return result;
}

function getBox(number){
  return document.getElementById("s" + number).textContent;
}

function clearBox(number){
    document.getElementById("s" + number).textContent = "";
}

function tie(){
    for(var i=1;i<10;i++)
	{

  		if(getBox(i)=="")
   		return false;
	}
return true;
}