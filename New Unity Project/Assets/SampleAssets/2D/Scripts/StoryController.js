#pragma strict

import UnityEngine.UI;

var storyPanel : GameObject;

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
   story = storyPanel.GetComponent(FloatingText);
   //story.SetActive(false);
   story.Hide();
         
}

function Update () {
   if (TellStory) {
      //story.SetActive(true);
      story.showStory();
   } else {
      story.Hide();
   }
}