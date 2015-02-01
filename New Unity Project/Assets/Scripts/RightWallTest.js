#pragma strict

//references wall collider
var rightWall: EdgeCollider2D;

function Start () {

   //get the width and height of the main camera since it provides us with an easy wall to use
   var screenW : float = Camera.main.pixelWidth;
   var screenH : float = Camera.main.pixelHeight;
	
   //create an array which will hold 2 Vector2 objects measurements
   var edgePoints: Vector2[] = new Vector2[2];

   // Convert screen coordinates point (W,0) to world coordinates
   var rightBottom : Vector3 = Camera.main.ScreenToWorldPoint(new Vector3(screenW, 0f, 0f));      
   // Convert screen coordinates point (W,H) to world coordinates
   var rightTop : Vector3 = Camera.main.ScreenToWorldPoint(new Vector3(screenW, screenH, 0f));      

   // Set the two points in the array to screen right bottom
   // and screen right top points            
   edgePoints[0] = rightBottom;
   edgePoints[1] = rightTop;

   // Position the left wall edge collider
   // at the left edge of the camera
   rightWall.points = edgePoints;
}

