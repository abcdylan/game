#pragma strict

//reference to the puzzlepiece
var pickUp1 : GameObject;
//reference to the puzzlepiece
//var pickUp2 : GameObject;

// reference to platform object
var platform1 : GameObject;

//has the puzzlepiece been gotten
//var pickedUp : boolean = false;

private var puzzle1 : PickUpScript;

private var moveOne : TriggeredMovePlatform;


function Start () {
   //initialise reference to script object, which is a component of
   // the panel game object
   puzzle1 = pickUp1.GetComponent(PickUpScript);
   
   moveOne = platform1.GetComponent(TriggeredMovePlatform);
}

/*
function Update () {

}*/

function OnTriggerEnter2D (other : Collider2D) {
   if(other.tag == "Player") {
      if(puzzle1.pickUp) {
         moveOne.trig();
      }
   }
   //pickedUp = true;
   //Destroy(gameObject);
}