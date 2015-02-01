﻿#pragma strict

import UnityEngine.UI;


//public var openBox : Animator;

//reference to UI panel object
var storyPanel : GameObject;


var TellStory : boolean = false;

// reference to panels script object
private var story : FloatingText;

//private var isEnter : boolean = false;

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
   //openBox = GetComponent(Animator);
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
      //isEnter = true;
      
   } else {
      //yield WaitForSeconds(5);
      story.Hide();
   }
}