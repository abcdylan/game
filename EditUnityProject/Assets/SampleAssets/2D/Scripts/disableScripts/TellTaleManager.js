#pragma strict

import UnityEngine.UI;

//reference to the UI panel that is the story teller
var storyPanel : GameObject;
//reference to the panel's script object
private var storyScript : TellTaleScript;

var displayMessage : boolean = false;
//var displayTime: float = 3.0;


function Start () {

   // initialise the reference to the script object
   // which is a component of the story panel game object
   storyScript = storyPanel.GetComponent(TellTaleScript);
   storyScript.Hide();

}


/*on collision with a trigger
function OnTriggerEnter2D(other : Collider2D) {
   //check the tag of the object the 
   //object has collided with
   if (other.tag == "Player") {
   // if collided with story object,
   //set story flag to true
      displayMessage = true;
   }
   //storyScript.ShowStory();
   //yield WaitForSeconds(displayTime);
   
}

//once the player leaves the trigger
function OnTriggerExit2D(other : Collider2D) {
   //check the tag of the object the 
   //object has collided with
   if (other.tag == "Player") {
      displayMessage = false;
   }      
   // if collided with story object,
   //set story flag to true
   //storyScript.Hide();
   
}
*/
function Update () {

   if (Input.GetKey(KeyCode.Escape)) {
      storyScript.ShowStory();
   }
   /*if (displayMessage) {
      storyScript.ShowStory();
   } else {
      storyScript.Hide();
   }*/
}