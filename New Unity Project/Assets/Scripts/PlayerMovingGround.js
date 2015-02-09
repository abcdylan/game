#pragma strict

// Speed of the movement
var speed: float;


// var thatObject : GameObject;

// Direction of the movement
public var movementDir: int;
private var inContact: boolean=false;

function OnTriggerEnter2D(other : Collider2D) {
   // Check if colliding with the left or right wall
   // (by checking the tags of the collider that the enemy
   //  collided with)
   if (other.tag=="MovingGround"){
      inContact=true;
	}  
              
}

function OnTriggerExit2D(other : Collider2D) {
   // Check if colliding with the left or right wall
   // (by checking the tags of the collider that the enemy
   //  collided with)
   if (other.tag=="MovingGround"){
      inContact=false;
	}  
              
}



// Before rendering next frame...
function Update() {
       
      if(inContact){     
      // The frog in the sprites faces left; when its Scale.X value is positive it will
      // keep facing left, when its Scale.X value is negative it will face right.  So,
      // the signs for Scale.X correspond to opposite directions of the movementDir.
      // So, when movementDir is -ve, make sure Scale.X is +ve, and when movementDir is
      // +ve, makse sure Scale.X is -ve.  
      //transform.localScale.x = Mathf.Abs(transform.localScale.x)* movementDir;
      var shift: Vector3;
      shift = Vector3.right * movementDir * speed * Time.deltaTime;
      transform.Translate(shift);  
      }    
}