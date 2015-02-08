#pragma strict


var shootCooldownTime: float;
var iceShardLeftPrefab : Transform;
var iceShardPrefab : Transform;

// keeping tabs on how much cooldown time is left
private var shootCooldownTimeLeft: float = 0;
private var enemy : Enemy1Control;
private var source : AudioSource;
public var enemyShoot : AudioClip;

private function Awake() {
	enemy = GetComponent(Enemy1Control);
	source = GetComponent(AudioSource);
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
    // while freeze is false inside the enemy class the enemy
    // can shoot
    if(!enemy.freeze) {
    	if(shootCooldownTimeLeft <= 0) {
    	source.PlayOneShot(enemyShoot, 1f);
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
}