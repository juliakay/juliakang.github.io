document.captureEvents(Event.MOUSEMOVE)

// Set-up to use getMouseXY function onMouseMove
document.onmousemove = getMouseXY;

// Temporary variables to hold mouse x-y pos.s
var tempX = 0;
var tempY = 0;
var windowWidth = window.innerWidth;

var objectArray = new Array();

fillObjectArray();
positionDivs();

function showAllOfTheContent()
{
	document.getElementById("content").setAttribute("class", "");
}

function fillObjectArray()
{
	var titleDiv = document.getElementById("name");
	var titleX = windowWidth/2 - 180; //position div from half width of the page
	var titleY = 15;
	var titleFactor = 0.01; //parallax shift factor, the bigger the value, the more it shift for parallax movement
	var titleArray = new Array();
	titleArray.push(titleDiv, titleX, titleY, titleFactor);
	objectArray.push(titleArray);
}

// Main function to retrieve mouse x-y pos.s

function getMouseXY(e)
{
	 //  if (IE) { // grab the x-y pos.s if browser is IE
		// tempX = event.clientX + document.body.scrollLeft
		// tempY = event.clientY + document.body.scrollTop
	 //  } else {  // grab the x-y pos.s if browser is NS
		tempX = e.pageX
		tempY = e.pageY
	  // }  
	  // catch possible negative values in NS4
	  if (tempX < 0){tempX = 0}
	  if (tempY < 0){tempY = 0}  
	  
	  moveDiv(tempX);
	  // console.log("x pos: " + tempX);
	  return true
}

function moveDiv(tempX)
{
			for (var i=0;i<objectArray.length;i++)
			{
				var yourDivPositionX = objectArray[i][3] * (0.5 * windowWidth - tempX) + objectArray[i][1];
				objectArray[i][0].style.left = yourDivPositionX + 'px';

				// console.log("left" + objectArray[i][0].style.left);
			}


}

function positionDivs()
{
	for (var i=0;i<objectArray.length;i++)
	{
		objectArray[i][0].style.left = objectArray[i][1] + "px";
		objectArray[i][0].style.top = objectArray[i][2] + "px";
	}

	// console.log("left" + objectArray[0][0].style.left);
}


