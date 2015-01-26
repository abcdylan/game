#pragma strict

// variable storing projectile
var fireballPrefab: Transform;
var iceBlockPrefab: Transform;

var shootCooldownTime: float;

// keeping tabs on how much cooldown time is left
private var shootCooldownTimeLeft: float = 0;
private var character : Character;

private function Awake() {
	character = GetComponent(Character);
}

//pre every frame
function Update () {
   //if there is still time left in cool down, reduce that time
   // by the time since the last frame
   if (shootCooldownTimeLeft > 0) {
      shootCooldownTimeLeft -= Time.deltaTime;
   }
   
}


function IceShoot() {
	if(shootCooldownTimeLeft <= 0) {
		var iceBlock = Instantiate(iceBlockPrefab);
		iceBlock.position = transform.position;
		if(character.facingRight) {
			iceBlock.position.x += 1;
		} else {
			iceBlock.position.x -= 1;
		}
		shootCooldownTimeLeft = shootCooldownTime;		
	}
}

function Shoot() {
	//shoot only if no cooldown time left
	if (shootCooldownTimeLeft <= 0) {
	var fireball = Instantiate(fireballPrefab);
	// sets position of fireball 1 position in front of player
	fireball.position = transform.position;
	if(character.facingRight) {
		fireball.position.x += 1;
	} else {
		fireball.position.x -= 1;
	}
       
	// set time left until next shot to 
	// the cooldown time
      shootCooldownTimeLeft = shootCooldownTime;
	}
}