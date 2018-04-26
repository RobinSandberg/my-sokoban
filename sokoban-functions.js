	var xMax = 19;		// The map size X and Y.
	var yMax = 16;
	var myArrayNum = 0;
	var player = 0;		// Players current position to be set when printing the map.
	var playerPosY = 0;		// Players Y position set when printing the map.
	var playerPosX = 0;	

	function Map()
	{
		for (var y = 0; y < yMax; y++)	//Make the div for each row.
		{
			var rowDiv = document.createElement('div');
			rowDiv.id = 'row'+'y'+y;
			rowDiv.className = 'myrow';
	
			for (var x = 0; x < xMax; x++)
			{
				// Create the inner div before appending to the body
				var boxDiv = document.createElement('div');
				boxDiv.id = 'y'+y+'x'+x;
				boxDiv.className = 'box';
					if(mapsArray[myArrayNum].mapGrid[y][x] == 'B')
					{   
						boxDiv.classList.add("b");
					}
					else if(mapsArray[myArrayNum].mapGrid[y][x] == 'W')  // Lava (Walls)
					{
						boxDiv.classList.add("w");
					}	
					else if(mapsArray[myArrayNum].mapGrid[y][x] == 'G')  // Horizontal bridges
					{
						boxDiv.classList.add("g");
					}		
					else if(mapsArray[myArrayNum].mapGrid[y][x] == 'P')  // Player
					{
						boxDiv.classList.add("p");
						player = boxDiv;
						playerPosY = y;
						playerPosX = x;
					}	
					
				// The variable rowDiv is still good... Just append to it.
				rowDiv.appendChild(boxDiv);
			}
			// Then append the rowDiv with all it's boxDiv's onto the body
			document.getElementById("mapzone").appendChild(rowDiv);
		}
	}	
	
	function FinishMap()
	{
		var goal = document.getElementsByClassName("box g");
		var goalSet = document.getElementsByClassName("box g b");
		    // console.log(goal);
			if(goal.length == 0)
			{
				return false;
			}
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
			// console.log(goalSet);
			// console.log(goal);
			document.removeEventListener("keydown", Moving)	
			document.getElementById("screen").innerHTML = "<h1>You completed the game</h1>";
		}
		return true;
           
	}
	
	function UpdatePosition()  // Function to update what direction the player moved.
	{
		if(event.key == "ArrowUp")
		{
			playerPosY--; 
		}
		else if(event.key == "ArrowDown")
		{
			playerPosY++; 
		}
		else if(event.key == "ArrowLeft")
		{
			playerPosX--; 
		}
		else if(event.key == "ArrowRight")
		{
			playerPosX++; 
		}
	}	
	
	function Move()
	{  
		if (!nextSpot)
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
				UpdatePosition();
				
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
			UpdatePosition();
				// <!-- console.log("y" + playerPosY); -->
		}	
		FinishMap();
	}
	
	document.addEventListener("keydown", Moving)	
	function Moving(event)
	{
		event.preventDefault();
	    // <!-- console.log(event) -->
	    if(event.key == "ArrowLeft")
	    {
			player = document.getElementById("y" + playerPosY + "x" + playerPosX);
			nextSpot = document.getElementById("y" + playerPosY + "x" + (playerPosX-1));
			nextNextSpot = document.getElementById("y" + playerPosY + "x" + (playerPosX-2))
			Move();
		}
		else if(event.key == "ArrowUp")
	    {
			player = document.getElementById("y" + playerPosY + "x" + playerPosX);  // current location
			nextSpot = document.getElementById("y" + (playerPosY-1) + "x" + playerPosX)  // the spot above you
			nextNextSpot = document.getElementById("y" + (playerPosY-2) + "x" + playerPosX) // 2 spots above you
			Move();
		}
		else if(event.key == "ArrowDown")
		{
			player = document.getElementById("y" + playerPosY + "x" + playerPosX);
			nextSpot = document.getElementById("y" + (playerPosY+1) + "x" + playerPosX);
			nextNextSpot = document.getElementById("y" + (playerPosY+2) + "x" + playerPosX)
			Move();
		}
		else if(event.key == "ArrowRight")
		{
			player = document.getElementById("y" + playerPosY + "x" + playerPosX);
			nextSpot = document.getElementById("y" + playerPosY + "x" + (playerPosX+1));
			nextNextSpot = document.getElementById("y" + playerPosY + "x" + (playerPosX+2))
			Move();
		}
		// <!-- console.log(FinishMap()); -->
	}
	
	function NextMap()				// Button for next map.
	{
		if(myArrayNum == mapsArray.length -1){}
		else
		{
			myArrayNum ++;
			Reset();
		}
	}
	var nextMap = document.getElementById("nextMap");	// Getting the button by Id.
	nextMap.addEventListener("click" , NextMap);		// webpage Listen for when the button get clicked.	
	
	function PrevMap()
	{
		if(myArrayNum < 1){}
		else
		{
			myArrayNum --;
			Reset();
		}
	}
    var prevMap = document.getElementById("prevMap");
	prevMap.addEventListener("click" , PrevMap);
	
	function Reset()
	{	
		document.addEventListener("keydown", Moving)
		document.getElementById("screen").innerHTML = "";   //Clear the pop up and game window.
		document.getElementById("mapzone").innerHTML = "";
		Map();
	}
	document.getElementById("resetMap").onclick = Reset;
	
	Reset();