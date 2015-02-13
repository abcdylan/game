/*main menu Script, attached to start_menu image*/

var startText : Text = null;
var instructText : Text = null;
var loadText : Text = null;
var quitText : Text = null;
var pressed : boolean;
public var wait : int;
private var time : int;


var cam : AudioSource;

// Array storing text objct with index
// indicating the current selection
private var optionIdx: int = 0;
private var optionArray: Text[];


function Start () {
   // We have two text object in the panel,
   // so create an array with 2 references
   // and set the first referect to resumeText
   // and second reference to quitText
   optionArray = new Text[4]; 
   optionArray[0] = startText;
   //optionArray[1] = instructText;
   optionArray[1] = instructText;
   optionArray[2] = loadText;
   optionArray[3] = quitText; 
   time= wait;
   cam = Camera.main.audio;
}


// Execute a command base on command string (that string
// corresponds to text of the entered option
function ExecuteCommand(command: String) {

   switch(command) {
   
      // For resume option, just hide the panel
      // (the pausegame flag will be set to false)
      case "New Game":
      // Load the first level
      cam.volume = 0.100;
      yield WaitForSeconds(1);
      Application.LoadLevel("fantasylevel"); //intro
         break;
       /*  
       case "AbilityManager":
      // Load the first level
      //Application.LoadLevel("Level1");  instructions
         break;
      */        
      case "Level Select":
         cam.volume = 0.100;
         yield WaitForSeconds(1);
      // Select which level 
      // you would like to play
        Application.LoadLevel("LevelSelect");
         break;

      /*case "How To":
      // Load the first level
      Application.LoadLevel("Instruct");  
         break;*/
         
      // For the quit option load the main menu scene         
      case "Quit":
         Application.Quit();
         break;
               
   }
}


function Update () {
   // Get a reference to the currently selected text box   
   var currentSelection: Text = optionArray[optionIdx];
  
   if(!pressed){
      if(Input.GetKey("down")) {
      pressed= Input.GetKey("down");
      // When user presses down arrow, go to next option
      optionIdx++;
   } else if(Input.GetKey("up")) {
      pressed= Input.GetKey("up");
      // When user presses up arrow, go to previous option
      optionIdx--;
   } else if(Input.GetKey(KeyCode.Return) /*|| Input.GetAxis("Jump")*/ ) {
      // If uses presses Enter or "Jump" key (Space), execute
      // the command corresponding to the current option
      pressed= Input.GetKey(KeyCode.Return);
      ExecuteCommand(currentSelection.text);
   }
  }
   
   // Make sure that the option index indicator is within the range
   // of the number of options
   if(optionIdx < 0) {
      optionIdx = 0;
   } else if(optionIdx >= optionArray.Length) {
      optionIdx = optionArray.Length-1;
   }

   // Set the font colour of the all option text boxes to white   
   for(var i : int = 0; i < optionArray.Length; i++)
    {
      optionArray[i].color = Color.white;
    }  
    
    // Set the font colour of the currently selected text box
    // to yellow
   currentSelection.color = Color.red;
   
   if(pressed){            
       if(time>0){
          time-= 0.2 * Time.deltaTime * 2 ;
       }else{
          press();
          time=wait;
       }
     } 
         

}

private function press() {
pressed = false;
}
