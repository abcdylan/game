#pragma strict

import UnityEngine.UI;

// Reference to UI panel that is our pause menu
var pauseMenuPanel: GameObject;
// Reference to panel's script object 
private var pauseMenu: PauseMenuManager;



var character : GameObject;


function Start() {
   
 // Initialise the reference to the script object, which is a
   // component of the pause menu panel game object
   pauseMenu = pauseMenuPanel.GetComponent(PauseMenuManager);
   pauseMenu.Hide(); 
   
}


function Update() {
   
   if(Character.gameOver) {
      // If gameover state detected, show the pause menu in gameover mode   
      pauseMenu.ShowGameOver();
      Character.gameOver=false;
   } else if(Input.GetKey(KeyCode.Escape)) {
      // If user presses ESC, show the pause menu in pause mode
      pauseMenu.ShowPause();
   }
}

