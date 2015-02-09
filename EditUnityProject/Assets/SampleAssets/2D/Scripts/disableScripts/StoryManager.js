#pragma strict

//import UnityEngine.UI;

//display panel

//var theStory : GUIText;
var storyText : String = "change me";

var displayMessage : boolean = false;
var displayTime: float = 3.0;

//on collision with a trigger
function OnTriggerEnter2D(other : Collider2D) {
   //check the tag of the object the 
   //object has collided with
   if (other.tag == "Player") {
   // if collided with story object,
   //set story flag to true
      displayMessage = true;
      yield WaitForSeconds(displayTime);
      displayMessage = false;
      }
}

/*function ShowStory() {
   displayMessage = true;
   gameObject.setActive(true);
}

function Hide() {
*/


function OnGui() {
    if ( displayMessage ) {
      GUI.Label(new Rect(Screen.width * 0.5f - 50f, Screen.height * 0.5f - 10f, 100f, 20f), storyText);
   }
}

/*
function Update () {
   if(displayMessage && !Input.GetKeyDown(KeyCode.DownArrow)) {
   
   }
}
*/