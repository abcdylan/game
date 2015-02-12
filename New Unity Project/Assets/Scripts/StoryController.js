#pragma strict

import UnityEngine.UI;


//public var openBox : Animator;

//reference to UI panel object
var storyPanel : GameObject;
var popSound : AudioClip;
var popDisappear : AudioClip;
private var isPlaying : boolean = false;


var TellStory : boolean = false;

// reference to panels script object
private var story : FloatingText;

//private var isEnter : boolean = false;

function OnTriggerEnter2D (other : Collider2D) {
    if( other.tag == "Player") {
       TellStory = true;
       isPlaying = true;
       audio.PlayOneShot(popSound, 1f);
       isPlaying = false;
    }
}

function OnTriggerExit2D (other : Collider2D) {
   if(other.tag == "Player") {
   	if(isPlaying == false){
      audio.PlayOneShot(popDisappear, 1f);
      TellStory = false;
   }
}
}

function Start () {
   //openBox = GetComponent(Animator);
   //initialise reference to script object, which is a component of
   // the panel game object
   story = storyPanel.GetComponent(FloatingText);
   //storyPanel.GetComponent(Animator);
   //story.SetActive(false);
   story.Hide();
         
}

function Update () {
   if (TellStory) {
      //story.SetActive(true);
      story.showStory();
      
      //isEnter = true;
      
   } else {
      //yield WaitForSeconds(5);
      story.Hide();
   }
}