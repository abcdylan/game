#pragma strict

//array to hold background nd foregrounds
// to be parallaxed
var backgrounds : Transform[];

// proportion of camera's movement to move
// the background by
private var parallaxScales : float[];

// how smooth the parallax is
// make sure to set this above 0
var parallaxing : float = 1;

//reference to the main camera's transform
private var cam : Transform;

// stores the position of the camera
// in the previous frame
private var previousCamPos : Vector3;


//is called before start
function Awake() {
   //set up camera reference
   cam = Camera.main.transform;
}

function Start () {
   // previous frame had the current frame's pos
   previousCamPos = cam.position;
   
   // assigning corresponding parallax
   // scales
   parallaxScales = new float[backgrounds.Length];
   var i : int;
   
   for (i = 0; i < backgrounds.Length; i++) {
      parallaxScales[i] = backgrounds[i].position.z*-1;
   }
   
}

function Update () {
   //for each background
   var i : int;
   for(i = 0; i < backgrounds.Length; i++) {
      //the parallax is the opposite of the camera movement
      // because the previos frame multiplied by the scale
      var parallax : float;
      parallax = (previousCamPos.x - cam.position.x) * parallaxScales[i];
      
      // set a targe x position which os the current
      // position plus the parallax
      var backgroundTargetPosX : float = backgrounds[i].position.x + parallax;
      
      // create a target position which is the backgrounds current position with itis target x
      var backgroundTargetPos : Vector3;
      backgroundTargetPos = Vector3(backgroundTargetPosX, backgrounds[i].position.y, backgrounds[i].position.z);
      
      // fade between current pos and target pos
      // using lurp
      backgrounds[i].position = Vector3.Lerp(backgrounds[i].position, backgroundTargetPos, parallaxing * Time.deltaTime);
   }
   
   // set previous cam pos to the camera's position at the end of the frame
   previousCamPos = cam.position;
   
}

/*function Move(cameraShift : Vector3) {

  //move object with shifting camera
  Camera.main.transform.Translate(cameraShift);
  
  //for every child of the parallax object
  // determine degree of lag and adjust
  for (var child : Transform in transform) {
     var backgroundShift: Vector3;
     var keepUp: float;
     
     // take z value
     // to find th camera's shift
     // and roughly translate to distance
     keepUp = child.position.z;   
      if(keepUp < 0) {
         // Z value of 0 corresponds to 0 distance from the camera
         keepUp = 0;
      } else if(keepUp > 1) {
         // Z value of 1 means infinite distance from the camera
         keepUp = 1;
      }
      // Object shift in world coordinates is a degree of 
      // camera's shift
      backgroundShift = cameraShift * keepUp;      
      child.Translate(backgroundShift);
   }
}*/