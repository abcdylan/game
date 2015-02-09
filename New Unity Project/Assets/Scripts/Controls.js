#pragma strict

private var character : Character;
private var jump : boolean;
// fire ability boolean, whether or not the character has gotten it
//private var fAbility : boolean = false;
// ice ability boolean, whether or not the player has gotten it
//private var iAbility : boolean = false;

private function Awake() {
	character = GetComponent(Character);
}

function OnTriggerEnter2D(other : Collider2D) {
	//Disable/enable the airControl to make the slide work
	if(other.tag == "disableAirControl") {
		character.airControl = false;
	} else if (other.tag == "enableAirControl") {
		character.airControl = true;
	}
	//if colliding with the fire ability
	if(other.tag == "FireAbility") {
		character.fAbility = true;
		Destroy(other.gameObject);
	}//if colliding with the fire ability
	else if(other.tag == "IceAbility") {
		character.iAbility = true;
		Destroy(other.gameObject);
	}
}

private function Update() {
	if (!jump) {
		jump = Input.GetButtonDown("Jump");
	}		
	if(/*character.fAbility && */Input.GetKeyDown(KeyCode.Q)) {
	   character.FireShoot(); 
    }
    if(/*iAbility &&*/ Input.GetKeyDown(KeyCode.W)) {
       character.IceShoot();
    }
	
}

private function FixedUpdate() {
	var crouch : boolean = Input.GetKey(KeyCode.LeftControl);
	var h : float = Input.GetAxis("Horizontal");
	character.Move(h, crouch, jump);
	jump = false;
}