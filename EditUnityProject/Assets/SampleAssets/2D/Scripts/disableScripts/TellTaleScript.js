#pragma strict

import UnityEngine.UI;

//refer to text object on the panel
var storyText : Text = null;

/*array storing text objects
private var optionIdx : int = 0;
private var optionArray: Text[];
*/
// indicates if the game is in pause mode
private var pauseGame: boolean;
/*
function Start () {
   only ever gonna have one thing in the array
   optionArray = new Text[1];
   optionArray[0] = storyText;
}*/

//show the story in story mode
function ShowStory() {
   pauseGame = true;
   gameObject.SetActive(true);
}

function Hide() {
   //deactivate panel
   gameObject.SetActive(false);
   //resume game
   pauseGame = false;
   //Time.timeScale = 1.0;
   
}

/*
function executeCommand() {

}
*/

/*
function Update () {
   if game is in pause mode
   if(pauseGame) {
     Time.timeScale = 0;
  }
}*/