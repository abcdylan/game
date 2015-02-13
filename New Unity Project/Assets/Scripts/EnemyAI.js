//AI for the Boss
  #pragma strict
 
///Variables Declaration///
private var enemy : GameObject;
private var player : GameObject;
private var boss : Boss;
static var maxSpeed : float = 10;
var facingRight : boolean = true;
private var anim : Animator;
var jumpForce : float = 400;
var attackClass : AttackClassBoss;
var specialAttack : boolean = false;

var iceTp : float = 0;
var fireTp : float = 0;

// Random Attacks
var randAttack : float;

// Shot Timer
var shootCooldownTime: float;
var iceShootCooldownTime : float;
private var shootCooldownTimeLeft: float = 0;
private var iceShootCooldownTimeLeft : float = 0;
// Big Attack Timer
private var bigAttackTimer : float = 5;
private var iceAttackTimer : float = 5;
var teleportEffect : Transform;

//Inizialization
function Start () {
	anim = GetComponent(Animator);
	attackClass = GetComponent("AttackClassBoss");
	enemy = GameObject.FindGameObjectWithTag("Enemy");
	player = GameObject.FindGameObjectWithTag("Player");
}  

//Fire attack when at low health
function BigAttack () {
	anim.SetFloat("Speed", 0);
	Boss.frozen = false;
	if (fireTp < 1) {
		Instantiate(teleportEffect, transform.position, transform.rotation);
		fireTp++;
	}
	gameObject.GetComponent(Transform).position.x = -15.8;
	gameObject.GetComponent(Transform).position.y = 14;
	if(shootCooldownTimeLeft <= 0) {
		var i : int;
		for (i = 0; i < 7; i++) {
			attackClass.BigAttack();
		}
		shootCooldownTimeLeft = shootCooldownTime;		
	}
	if (shootCooldownTimeLeft > 0) { 
		shootCooldownTimeLeft -= Time.deltaTime;
	}
}

//Rains ice blocks
function BigIceAttack () {
	anim.SetFloat("Speed", 0);
	Boss.frozen = false;
	if (iceTp < 1) {
		Instantiate(teleportEffect, transform.position, transform.rotation);
		iceTp++;
	}
	gameObject.GetComponent(Transform).position.x = 15.5;
	gameObject.GetComponent(Transform).position.y = 14;
	if(iceShootCooldownTimeLeft <= 0) {
		var i : int;
		for (i = 0; i < 5; i++) {
			attackClass.BigIceAttack();
		}
		iceShootCooldownTimeLeft = iceShootCooldownTime;		
	}
	if (iceShootCooldownTimeLeft > 0) { 
		iceShootCooldownTimeLeft -= Time.deltaTime;
	}
}

//Fixed Update
function FixedUpdate () {
	// When health gets low enough to special fire attack
	if (Boss.health == 3 && bigAttackTimer > 0) {
		BigAttack();
		specialAttack = true;
		bigAttackTimer -= Time.deltaTime;
	} else {
		specialAttack = false;
	}
	// When health gets low enough to special ice attack
	if (Boss.health == 6 && iceAttackTimer > 0) {
		BigIceAttack();
		specialAttack = true;
		iceAttackTimer -= Time.deltaTime;
	} else {
		specialAttack = false;
	}
	// When health is 0 just restart boss battle for now
	if (Boss.health == 0) {
		Application.LoadLevel("BossBattle");
		Boss.health = 10;
	}
	// if the player is to the left of the enemy, walk left
	if (player.transform.position.x < gameObject.transform.position.x) {
		if (facingRight) {
			if (Mathf.Abs(player.transform.position.x - gameObject.transform.position.x) < 0.1) {
				anim.SetFloat("Speed", 0);
				return;
			} else {
				Flip();
			}
		}
		if(!specialAttack) {
			anim.SetFloat("Speed", 1);
		} else {
			anim.SetFloat("Speed",0);
		}
		rigidbody2D.velocity = new Vector2(-.3*maxSpeed, rigidbody2D.velocity.y);
		randAttack = Random.Range(0,100);
		if (randAttack == 1 && !specialAttack && !Boss.frozen) {
			attackClass.Shoot();
		}
	// if the player is to the right of the enemy, walk right
	} else if (player.transform.position.x > gameObject.transform.position.x) {
		if (!facingRight) {
			if ((Mathf.Abs(player.transform.position.x - gameObject.transform.position.x) < 0.1)) {
				anim.SetFloat("Speed", 0);
				return;
			} else {
				Flip();
			}
		}
		if(!specialAttack) {
			anim.SetFloat("Speed", 1);
		} else {
			anim.SetFloat("Speed",0);
		}
		rigidbody2D.velocity = new Vector2(.3*maxSpeed, rigidbody2D.velocity.y);
		randAttack = Random.Range(0,100);
		if (randAttack == 1 && !specialAttack && !Boss.frozen) {
			attackClass.Shoot();
		}	
	}	
}

// Changes the direction the boss is facing
private function Flip() {
	facingRight = !facingRight;
	var theScale : Vector3 = transform.localScale;
	theScale.x *= -1;
	transform.localScale = theScale;	            
}