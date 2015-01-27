#pragma strict

import UnityEngine.UI;

//reference to UI panel object
var storyPanel : GameObject;

// reference to panels script object
private var story : FloatingText;

var TellStory : boolean = false;

function OnTriggerEnter2D (other : Collider2D) {
    if( other.tag == "Player") {
       TellStory = true;
    }
}

function OnTriggerExit2D (other : Collider2D) {
   if(other.tag == "Player") {
      TellStory = false;
   }
}

function Start () {
   //initialise reference to script object, which is a component of
   // the panel game object
   story = storyPanel.GetComponent(FloatingText);
   //story.SetActive(false);
   story.Hide();
         
}

function Update () {
   if (TellStory) {
      //story.SetActive(true);
      story.showStory();
   } else {
      //yield WaitForSeconds(5);
      story.Hide();
   }
}