#pragma strict

private var character : Character;
private var jump : boolean;

//indicating that the player has arrived at a story element
private var atStory : boolean;



private function Awake() {
	character = GetComponent(Character);
}

//on collision with a trigger
//function OnTriggerEnter2D(other : Collider2D) {
   //check the tag of the object the 
   //player has collided with
//   if (other.tag == "Story") {
   // if collided with story object,
   //set story flag to true
//   atStory = true;
//   }
//}

private function Update() {
	if (!jump) {
		jump = Input.GetButtonDown("Jump");
	}
	//if in front of a story element stop moving
	if (atStory) {
	   character.maxSpeed = 0;
	}
	
	if(Input.GetKeyDown(KeyCode.Alpha1)) {
       // Get players attack component
       // and execute its shoot() method
       var iceAttack : AttackClass;
       iceAttack = GetComponent(AttackClass);
       iceAttack.Shoot();
       
    }
    if(Input.GetKeyDown(KeyCode.Alpha2)) {
       // Get players attack component
       // and execute its shoot() method
       var fireAttack : AttackClass;
       fireAttack = GetComponent(AttackClass);
       fireAttack.IceShoot();
       
    }
	
}

private function FixedUpdate() {
	var crouch : boolean = Input.GetKey(KeyCode.LeftControl);
	var h : float = Input.GetAxis("Horizontal");
	character.Move(h, crouch, jump);
	jump = false;
}