#pragma strict

// responsible for three things, following the character,
// support a margin, and never allow the player to see outside of
// the bounds we define

//if we wanted to start the camera
//view at the end of the level and track back to the
//player 

//var character : GameObject;
//var Bozz : GameObject;

var player : Transform;

var Margin : Vector2;

var smoothing : Vector2;

public var Bounding : BoxCollider2D;
public var isFollowing : boolean;

private var min : Vector3;
private var max : Vector3;

function Start () {
   min = Bounding.bounds.min;
   max = Bounding.bounds.max;
   isFollowing = true;
   //player = Bozz.transform;
   //Switch();

}

function Update () {
   //var x : int;
   //var y : int;
   var x = transform.position.x;
   var y = transform.position.y;
   
   if (isFollowing) {
      if(Mathf.Abs(x - player.position.x) > Margin.x) {
         x = Mathf.Lerp(x, player.position.x, smoothing.x * Time.deltaTime);
      }
      
      if (Mathf.Abs(y - player.position.y) > Margin.y) {
         y = Mathf.Lerp(y, player.position.y, smoothing.y * Time.deltaTime);
      }
      
      var cameraHalfWidth = camera.orthographicSize * (Screen.width / Screen.height);
      
      x = Mathf.Clamp(x, min.x + camera.orthographicSize, max.x - camera.orthographicSize);
      y = Mathf.Clamp(y, min.y + camera.orthographicSize, max.y - camera.orthographicSize);
 
      transform.position = new Vector3(x, y, transform.position.z);
           
   }
}

/*
function Switch() {
   yield WaitForSeconds(3);
   Bozz.particleSystem.Emit(200);
   yield WaitForSeconds(1);
   Bozz.SetActive(false);
   player = character.transform;
}*/
