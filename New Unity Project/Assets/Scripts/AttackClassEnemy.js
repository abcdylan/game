#pragma strict

// variable storing projectile
//var fireballPrefab: Transform;
//var fireballPrefabLeft : Transform;
//var bossAttackPrefab : Transform;
//var iceBlockPrefab: Transform;
var shootCooldownTime: float;
var iceShardLeftPrefab : Transform;
var iceShardPrefab : Transform;

// keeping tabs on how much cooldown time is left
private var shootCooldownTimeLeft: float = 0;
private var enemy : Enemy1Control;

private function Awake() {
	enemy = GetComponent(Enemy1Control);
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
		if(enemy.movementDir > 0) {
			var iceShard = Instantiate(iceShardPrefab);
			iceShard.position = transform.position;	
			iceShard.position.x += 1;
		} else {
			var iceShardLeft = Instantiate(iceShardLeftPrefab);
			iceShardLeft.position = transform.position;
			iceShardLeft.position.x -= 1;
		}
		shootCooldownTimeLeft = shootCooldownTime;		
	}
}
/*
function Shoot() {
	//shoot only if no cooldown time left
	if (shootCooldownTimeLeft <= 0) {
		if(boss.facingRight) {
			var fireball = Instantiate(fireballPrefab);
			// sets position of fireball 1 position in front of player
			fireball.position = transform.position;
			fireball.position.x += 1;
		} else {
			var fireballLeft = Instantiate(fireballPrefabLeft);
			// sets position of fireball 1 position in front of player
			fireballLeft.position = transform.position;
			fireballLeft.position.x -= 1;
		}     
		// set time left until next shot to 
		// the cooldown time
     	shootCooldownTimeLeft = shootCooldownTime;
	}
}*/