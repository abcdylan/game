#pragma strict

// Speed of the movement
var speed: float;


var thatObject : GameObject;

// Direction of the movement
public var movementDir: int;
private var contact: boolean;


// At fixed time intervals...
function FixedUpdate () {
        if(movementDir!=-1){
        	movementDir = 1; 
        }
}

function OnTriggerEnter2D(other : Collider2D) {
   contact=true;
   
   if(other.tag == "LeftWall") {
      movementDir=1;
      if(contact){
         thatObject.GetComponent.< PlayerMovingGround >().movementDir= movementDir;  
      }  
   } else if(other.tag == "RightWall") {
      movementDir= -1;
      if(contact){
         thatObject.GetComponent.< PlayerMovingGround >().movementDir= movementDir;  
      }  
   }             
}

function OnTriggerExit2D(other : Collider2D) {
   // Check if colliding with the left or right wall
   // (by checking the tags of the collider that the enemy
   //  collided with)
   //if(other.tag=="Player"){
   //thatObject.GetComponent.< PlayerMovingGround >().movementDir= movementDir;
   //}
   if(other.tag=="Player"){
     contact=false;
     }
}

// Before rendering next frame...
function Update() {  
      
      var shift: Vector3;
      shift = Vector3.right * movementDir * speed * Time.deltaTime;
      transform.Translate(shift);        
}