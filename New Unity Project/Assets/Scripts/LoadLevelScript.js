/*Level Select menu*/

var Level1Text : Text = null;
var Level2Text : Text = null;
var Level3Text : Text = null;
var FinalLevelText : Text = null;

//back to the main menu
var ReturnText : Text = null;

//has the key been pressed
var pressed : boolean;
public var wait : int;
private var time : int;


// Array storing text objct with index
// indicating the current selection
private var optionIdx: int = 0;
private var optionArray: Text[];


function Start () {
   // We have two text object in the panel,
   // so create an array with 4 references
   optionArray = new Text[5]; 
   optionArray[0] = Level1Text;
   optionArray[1] = Level2Text;
   optionArray[2] = Level3Text;
   optionArray[3] = FinalLevelText; 
   optionArray[4] = ReturnText;
   time= wait;  
}


// Execute a command base on command string (that string
// corresponds to text of the entered option
function ExecuteCommand(command: String) {

   switch(command) {
   
      case "Level 1":
      // Load the first level
         Application.LoadLevel("fantasylevel"); 
         break;
         
       case "Level 2":
         AbilityManager.abilityPickedUp = true;
      // Load the second level
         Application.LoadLevel("Ice Level Demo");
         break;
                 
      case "Level 3":
         AbilityManager.abilityPickedUp = true;
         AbilityManager.iAbility = true;
         // Load the third level
         Application.LoadLevel("FireLevel"); 
         break;
        
      case "Final Level":
         AbilityManager.abilityPickedUp = true;
         AbilityManager.iAbility = true;
         AbilityManager.fAbility = true;
      // Load the final level
         Application.LoadLevel("BossBattle");       
         break;
         
      case "Return":
      // Load the final level
      Application.LoadLevel("MenuScreen");
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

// take note of whether the button is pressed
private function press() {
   pressed = false;
}
