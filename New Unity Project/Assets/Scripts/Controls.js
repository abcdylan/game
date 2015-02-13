#pragma strict

private var character : Character;
private var jump : boolean;
// double jump boolean

// fire ability boolean, whether or not the character has gotten it
//private var fAbility : boolean = false;
// ice ability boolean, whether or not the player has gotten it
//private var iAbility : boolean = false;

private function Awake() {
	character = GetComponent(Character);	
	}

function OnTriggerEnter2D(other : Collider2D) {
	if(other.tag == "disableAirControl") {
		character.airControl = false;
	} else if (other.tag == "enableAirControl") {
		character.airControl = true;
	}
	//if colliding with the fire ability
	if(other.tag == "FireAbility") {
		AbilityManager.fAbility = true;
		Destroy(other.gameObject);
	}//if colliding with the fire ability
	else if(other.tag == "IceAbility") {
	    AbilityManager.iAbility = true;
		Destroy(other.gameObject);
	}
	if(other.tag == "Ability"){
	   AbilityManager.abilityPickedUp = true;
	   Destroy(other.gameObject);
	   }
}           	

private function Update() {
	if (!jump) {
		jump = Input.GetButtonDown("Jump");
	}		
	if(AbilityManager.fAbility && Input.GetKeyDown("w")) {
	   character.FireShoot(); 
    }
    if(AbilityManager.iAbility && Input.GetKeyDown("q")) {
       character.IceShoot();
    }
	
}

private function FixedUpdate() {
	var crouch : boolean = Input.GetKey(KeyCode.LeftControl);
	var h : float = Input.GetAxis("Horizontal");
	character.Move(h, crouch, jump);
	jump = false;
}