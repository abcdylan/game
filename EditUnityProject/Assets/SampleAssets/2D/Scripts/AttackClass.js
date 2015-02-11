#pragma strict

// variable storing projectile
var fireballPrefab: Transform;
var iceBlockPrefab: Transform;

var shootCooldownTime: float;

// keeping tabs on how much cooldown time is left
private var shootCooldownTimeLeft: float = 0;

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
		shootCooldownTimeLeft = shootCooldownTime;		
	}
}

// method for shooting projectile - could be edited to instantiate
// different prefabs(? maybe?)
function Shoot() {
   //shoot only if no cooldown time left
   if (shootCooldownTimeLeft <= 0) {
      //in this case create fireball prefab
      var fireball = Instantiate(fireballPrefab);
       
      // place the prefab where the object "shooting" is (currently spawning
      // from the middle of the game object
      fireball.position = transform.position;
       
      // set time left until next shot to 
      // the cooldown time
      shootCooldownTimeLeft = shootCooldownTime;
   }

}