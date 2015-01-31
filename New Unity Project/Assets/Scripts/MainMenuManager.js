/* main menu manager attached to canvas*/
#pragma strict

import UnityEngine.UI;

// Reference to UI panel that is our pause menu
var StartMenuPanel: GameObject;

// Reference to panel's script object 
private var mainMenu: MainMenuScript;


function Start() {

   // Initialise the reference to the script object, which is a
   // component of the pause menu panel game object
   mainMenu = StartMenuPanel.GetComponent(MainMenuScript);
   
}
