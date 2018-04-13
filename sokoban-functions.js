function Map()
{
	var boxes = document.getElementsByClassName("box");
		
	for(var i = 0; i < boxes.length; i++)
	{
		if(boxes[i].classList.contains("b"))
		{   
			boxes[i].classList.add("red");
		}
		else if(boxes[i].classList.contains("w"))
		{
			boxes[i].classList.add("green");
		}	
		else if(boxes[i].classList.contains("g"))
		{
			boxes[i].classList.add("blue");
		}	
		else if(boxes[i].classList.contains("p"))
		{
			boxes[i].classList.add("yellow");
		}	
	}	
}	
		
	var player = document.getElementById("y12x12");
		// <!-- console.log(player) -->
		
	var playerPosY = 12;
	var playerPosX = 12;
	var nextSpot = document.getElementById("y" + playerPosY + "x" + playerPosX)
		
		// <!-- console.log("y" + playerPosY); -->
		// <!-- console.log("x" + playerPosX); -->
		
	function FinishMap()
	{
		var goal = document.getElementsByClassName("box g");
		var goalSet = document.getElementsByClassName("box g b");
		    // console.log(goal);
			
		for(var i = 0; i < goal.length; i++)
		{    
			if (goal[i].classList.contains("b"))
			{
				continue;
			}
			else
			{
				return false;
			}
		}
			
		if(goalSet.length == goal.length)
		{
			document.getElementById("mapzone").innerHTML = "<h1>You ate all the sheeps</h1>";
		}
		return true;
           
	}
		
	function MoveUp()
	{  
		player = document.getElementById("y" + playerPosY + "x" + playerPosX);
		nextSpot = document.getElementById("y" + (playerPosY-1) + "x" + playerPosX)
		nextNextSpot = document.getElementById("y" + (playerPosY-2) + "x" + playerPosX)
		// <!-- console.log(player); -->
		if (playerPosY == 1)
		{
		// <!-- console.log("end of map"); -->
		}
		else if(nextSpot.classList.contains("w"))
		{
		// <!-- console.log("hitting the wall"); -->
		}
		else if(nextSpot.classList.contains("b"))
		{
			   // <!-- console.log("hitting the box"); -->
			   
			   
			if(nextNextSpot.classList.contains("b") || nextNextSpot.classList.contains("w"))
			{
				// <!-- console.log("can't move box into another box or wall"); -->
			}
			else
			{
			    player.classList.remove("p");
				nextSpot.classList.add("p");
				playerPosY--;
				
				nextNextSpot.classList.add("b");
				nextSpot.classList.remove("b");
				// <!-- console.log(nextNextSpot); -->   
			}
			   
		}
		else
		{
				// <!-- console.log(nextSpot); -->
		    player.classList.remove("p");
			nextSpot.classList.add("p");
			playerPosY--;
				// <!-- console.log("y" + playerPosY); -->
		}	
		FinishMap();
	}
	document.getElementById("moveUp").onclick = MoveUp;
		
	function MoveDown()
	{  
		player = document.getElementById("y" + playerPosY + "x" + playerPosX);
		nextSpot = document.getElementById("y" + (playerPosY+1) + "x" + playerPosX);
		nextNextSpot = document.getElementById("y" + (playerPosY+2) + "x" + playerPosX)
		// <!-- console.log(player); -->
		if (playerPosY == 16)
		{
			// <!-- console.log("end of map"); -->
		}
		else if(nextSpot.classList.contains("w"))
		{
			// <!-- console.log("hitting the wall"); -->
		}
		else if(nextSpot.classList.contains("b"))
		{
			   // <!-- console.log("hitting the box"); -->
			  
			if(nextNextSpot.classList.contains("b") || nextNextSpot.classList.contains("w"))
			{
			    // <!-- console.log("can't move box into another box or wall"); -->
			}
			else
			{
				player.classList.remove("p");
			    nextSpot.classList.add("p");
				playerPosY++;
				
				nextNextSpot.classList.add("b");
				nextSpot.classList.remove("b");
				// <!-- console.log(nextNextSpot); -->
			}  
			   
		}
		else
		{
				// <!-- console.log(nextSpot) -->
			player.classList.remove("p");
			nextSpot.classList.add("p");
			playerPosY++;
				// <!-- console.log("y" + playerPosY) -->
		}
		FinishMap();
	}
	document.getElementById("moveDown").onclick = MoveDown;
		
	function MoveLeft()
	{  
		player = document.getElementById("y" + playerPosY + "x" + playerPosX);
		nextSpot = document.getElementById("y" + playerPosY + "x" + (playerPosX-1));
		nextNextSpot = document.getElementById("y" + playerPosY + "x" + (playerPosX-2))
		// <!-- console.log(player); -->
		if (playerPosX == 1)
			{
			// <!-- console.log("end of map"); -->
			}
		else if(nextSpot.classList.contains("w"))
		{
			// <!-- console.log("hitting the wall"); -->
		}
		else if(nextSpot.classList.contains("b"))
		{
			// <!-- console.log("hitting the box"); -->
			  
			if(nextNextSpot.classList.contains("b") || nextNextSpot.classList.contains("w"))
			{
				// <!-- console.log("can't move box into another box or wall"); -->
			}
			else
			{
				player.classList.remove("p");
				nextSpot.classList.add("p");
				playerPosX--;
				
				nextNextSpot.classList.add("b");
				nextSpot.classList.remove("b");
				// <!-- console.log(nextNextSpot); -->
			} 
		}
		else{
			
			// <!-- console.log(nextSpot) -->
			player.classList.remove("p");
			nextSpot.classList.add("p");
			playerPosX--;
			// <!-- console.log("x" + playerPosX) -->
		}
		FinishMap();
	}
	document.getElementById("moveLeft").onclick = MoveLeft;
		
	function MoveRight()
    {  
		player = document.getElementById("y" + playerPosY + "x" + playerPosX);
		nextSpot = document.getElementById("y" + playerPosY + "x" + (playerPosX+1));
		nextNextSpot = document.getElementById("y" + playerPosY + "x" + (playerPosX+2))
		// <!-- console.log(player); -->
		if (playerPosX == 19)
		{
			// <!-- console.log("end of map"); -->
		}
		else if(nextSpot.classList.contains("w"))
		{
			// <!-- console.log("hitting the wall"); -->
		}
		else if(nextSpot.classList.contains("b"))
		{
			// <!-- console.log("hitting the box"); -->
			   
			if(nextNextSpot.classList.contains("b") || nextNextSpot.classList.contains("w"))
			{
				// <!-- console.log("can't move box into another box or wall"); -->
			}
			else
			{
				player.classList.remove("p");
				nextSpot.classList.add("p");
				playerPosX++;
				
				nextNextSpot.classList.add("b");
				nextSpot.classList.remove("b");
				// <!-- console.log(nextNextSpot); -->
			}
   
		}
		else{
			// <!-- console.log(nextSpot) -->
			player.classList.remove("p");
			nextSpot.classList.add("p");
			playerPosX++;
			// <!-- console.log("x" + playerPosX) -->
		}
		FinishMap();
    }
	document.getElementById("moveRight").onclick = MoveRight;
		
	document.onkeydown = function(event)
	{
		event.preventDefault();
	    // <!-- console.log(event) -->
	    if(event.key == "ArrowLeft")
	    {
			MoveLeft();
		}
		else if(event.key == "ArrowUp")
	    {
			MoveUp();
			
		}
		else if(event.key == "ArrowDown")
		{
			MoveDown();
		}
		else if(event.key == "ArrowRight")
		{
			MoveRight();
		}
		// <!-- console.log(FinishMap()); -->
		}
	function Reset()
	{
		location.reload();
	}
	document.getElementById("resetMap").onclick = Reset;
