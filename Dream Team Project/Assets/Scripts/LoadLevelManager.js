/* level Select manager attached to canvas*/
#pragma strict

import UnityEngine.UI;

// Reference to UI panel that is our level select
var LevelMenuPanel: GameObject;

// Reference to panel's script object 
private var levelMenu: LoadLevelScript;


function Start() {

   // Initialise the reference to the script object, which is a
   // component of the pause menu panel game object
   levelMenu = LevelMenuPanel.GetComponent(LoadLevelScript);
   
}
