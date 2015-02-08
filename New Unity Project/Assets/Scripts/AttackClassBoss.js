#pragma strict

// variable storing projectile
var fireballPrefab: Transform;
var fireballPrefabLeft : Transform;
var bossAttackPrefab : Transform;
var iceBlockPrefab: Transform;
var shootCooldownTime: float;

// keeping tabs on how much cooldown time is left
private var shootCooldownTimeLeft: float = 0;
private var boss : Boss;
private var bossAI : EnemyAI;

private function Awake() {
	boss = GetComponent(Boss);
	bossAI = GetComponent(EnemyAI);
}

//pre every frame
function Update () {
   //if there is still time left in cool down, reduce that time
   // by the time since the last frame
   if (shootCooldownTimeLeft > 0) {
      shootCooldownTimeLeft -= Time.deltaTime;
   }   
}

function BigAttack() {
	var randNum : float = Random.Range(0, 105);
	var fireAttackBoss = Instantiate(bossAttackPrefab);	
	fireAttackBoss.position = transform.position;
	fireAttackBoss.position.x += 1;
	fireAttackBoss.Rotate (Vector3.forward * -randNum);
}

function BigIceAttack () {
	var randX : float = Random.Range(-12.4,12.6);
	var iceAttackBoss = Instantiate(iceBlockPrefab);
	iceAttackBoss.position = Vector3(randX, 13, 0);	
}

function IceShoot() {
	if(shootCooldownTimeLeft <= 0) {
		var iceBlock = Instantiate(iceBlockPrefab);
		iceBlock.position = transform.position;
		if(bossAI.facingRight) {
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
		if(bossAI.facingRight) {
			var fireball = Instantiate(fireballPrefab);
			fireball.tag = "EnemyAttack";
			// sets position of fireball 1 position in front of player
			fireball.position = transform.position;
			fireball.position.x += 1;
		} else {
			var fireballLeft = Instantiate(fireballPrefabLeft);
			fireballLeft.tag = "EnemyAttack";
			// sets position of fireball 1 position in front of player
			fireballLeft.position = transform.position;
			fireballLeft.position.x -= 1;
		}     
		// set time left until next shot to 
		// the cooldown time
     	shootCooldownTimeLeft = shootCooldownTime;
	}
}