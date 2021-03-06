﻿#pragma strict

import UnityEngine.UI;

// images that will let you know what puzzle pieces
// the character has gained
var getPuz1 : Image;
var getPuz2 : Image;
var getPuz3 : Image;

// images that will let the player know what abilities they
// have access to
var ability1 : Image;
var ability2 : Image;
var ability3 : Image;

// Reference to UI panel that is our pause menu
var pauseMenuPanel: GameObject;
// Reference to panel's script object 
private var pauseMenu: PauseMenuManager;



var character : GameObject;
// the "puzzle" objects we want access to
var pickkUp : GameObject;
var pickkUp2 : GameObject;
var pickkUp3 : GameObject;

//private var charControl : Character;
// reference to the script attached to the puzzle objects
private var pickedUp1: PickUpScript;
private var pickedUp2 : PickUpScript;
private var pickedUp3 : PickUpScript;

function Start() {
   //var objArray = GameObject.FindGameObjectsWithTag("puzzle");
   //pickedUp1 = objArray[0].GetComponent(Remover);
   pickedUp1 = pickkUp.GetComponent(PickUpScript);
   pickedUp2 = pickkUp2.GetComponent(PickUpScript);
   pickedUp3 = pickkUp3.GetComponent(PickUpScript);
   //getPuz1.color.a = 0;
   //charControl = character.GetComponent(Character);
   
 // Initialise the reference to the script object, which is a
   // component of the pause menu panel game object
   pauseMenu = pauseMenuPanel.GetComponent(PauseMenuManager);
   pauseMenu.Hide(); 
   
}


function Update() {
   if(pickedUp1.pickUp) {
      getPuz1.color.a = 255;
      //getAbil1.text = "Gotten";
   }
   if(pickedUp2.pickUp) {
      getPuz2.color.a = 255;
   }
   if(pickedUp3.pickUp) {
      getPuz3.color.a = 255;
   }
   if(AbilityManager.abilityPickedUp) {
      ability1.color.a = 255;
   }
   if(AbilityManager.iAbility) {
      ability2.color.a = 255;
   }
   if(AbilityManager.fAbility) {
      ability3.color.a = 255;
   }   
   
   if(Character.gameOver) {
      // If gameover state detected, show the pause menu in gameover mode   
      pauseMenu.ShowGameOver();
      Character.gameOver=false;
   } else if(Input.GetKey(KeyCode.Escape)) {
      // If user presses ESC, show the pause menu in pause mode
      pauseMenu.ShowPause();
   }
}

/*
function gotAbil() {
   getAbil1.text = "Got ability";
}


function Start () {

}

function Update () {

}*/