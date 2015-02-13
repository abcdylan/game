#pragma strict


//public var openBox : Animator;

//reference to platform object
var platform : GameObject;
var plat2 : GameObject;
var plat3 : GameObject;

var one : boolean = false;
var two : boolean = false;
var three : boolean = false;

// reference to panels script object
private var oneMove : TriggeredMovePlatform;
private var twoMove : TriggeredMovePlatform;
private var threeMove : TriggeredMovePlatform;

/*
function OnTriggerEnter2D(other : Collider2D) {
   if(other.tag == "Player") {
   
}
*/

function Start () {
   //initialise reference to script object, which is a component of
   // the panel game object
   oneMove = platform.GetComponent(TriggeredMovePlatform);
   twoMove = plat2.GetComponent(TriggeredMovePlatform);
   threeMove = plat3.GetComponent(TriggeredMovePlatform);
   oneMove.Switch = false;
   twoMove.Switch = false;
   threeMove.Switch = false;
         
}

function Update () {
   if(Input.GetKey("up") && !one) {
      oneMove.trig();
      one = true;
   }
   if (Input.GetKeyUp("up") && !oneMove.Switch && !two) {
      twoMove.trig();
      two = true;
   }
}