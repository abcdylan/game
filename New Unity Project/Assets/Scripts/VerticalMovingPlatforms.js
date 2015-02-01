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
   // Check if colliding with the left or right wall
   // (by checking the tags of the collider that the enemy
   //  collided with)
   //if(other.tag=="Player"){
   //thatObject.GetComponent.< PlayerMovingGround >().movementDir= movementDir;
   //}
   if(other.tag=="Player"){
     contact=true;
     }
   
   if(other.tag == "LeftWall") {
      // If collided with the left wall, get a reference
      // to the EnemyWave object, which should be a component
      // of enemies parent
      //enemyWave = transform.parent.GetComponent(EnemyWaveClass);
      // Set direction of the wave
      //enemyWave.SetDirectionRight();
      movementDir=1;
      if(contact){
         thatObject.GetComponent.< PlayerMovingVertical >().movementDir= movementDir;  
      }  
   } else if(other.tag == "RightWall") {
      // If collided with the right wall, get a reference
      // to the EnemyWave object, which should be a component
      // of enemies parent
      //enemyWave = transform.parent.GetComponent(EnemyWaveClass);
      // Set direction of the wave
      //enemyWave.SetDirectionLeft();
      movementDir= -1;
      if(contact){
         thatObject.GetComponent.< PlayerMovingVertical >().movementDir= movementDir;  
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
      
      
      // The frog in the sprites faces left; when its Scale.X value is positive it will
      // keep facing left, when its Scale.X value is negative it will face right.  So,
      // the signs for Scale.X correspond to opposite directions of the movementDir.
      // So, when movementDir is -ve, make sure Scale.X is +ve, and when movementDir is
      // +ve, makse sure Scale.X is -ve.  
      //transform.localScale.x = Mathf.Abs(transform.localScale.x)* movementDir;      
      var shift: Vector3;
      shift = Vector3.up * movementDir * speed * Time.deltaTime;
      transform.Translate(shift);        
}