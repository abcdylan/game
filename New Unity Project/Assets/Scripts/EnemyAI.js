 #pragma strict
 
///Variables Declaration///
private var enemy : GameObject;
private var player : GameObject;
private var boss : Boss;
var maxSpeed : float = 10;
var facingRight : boolean = true;
private var anim : Animator;
var jumpForce : float = 400;
var attackClass : AttackClassBoss;

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

//Inizialization
function Start () {
	attackClass = GetComponent("AttackClassBoss");
	enemy = GameObject.FindGameObjectWithTag("Enemy");
	player = GameObject.FindGameObjectWithTag("Player");
}  

function BigAttack () {
	gameObject.GetComponent(Transform).position.x = -8.73;
	gameObject.GetComponent(Transform).position.y = 5.83;
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

function BigIceAttack () {
	gameObject.GetComponent(Transform).position.x = 8.36;
	gameObject.GetComponent(Transform).position.y = 5.9;
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
		bigAttackTimer -= Time.deltaTime;
	}
	// When health gets low enough to special ice attack
	if (Boss.health == 6 && iceAttackTimer > 0) {
		BigIceAttack();
		iceAttackTimer -= Time.deltaTime;
	}
	// When health is 0 just restart boss battle for now
	if (Boss.health == 0) {
		Application.LoadLevel("BossBattle");
		Boss.health = 10;
	}
	// if the player is to the left of the enemy, walk left
	if (player.transform.position.x < gameObject.transform.position.x) {
		if (facingRight) {
			Flip();
		}
		rigidbody2D.velocity = new Vector2(-.3*maxSpeed, rigidbody2D.velocity.y);
		randAttack = Random.Range(0,100);
		if (randAttack == 1) {
			attackClass.Shoot();
		}
	// if the player is to the right of the enemy, walk right
	} else if (player.transform.position.x > gameObject.transform.position.x) {
		if (!facingRight) {
			Flip();
		}
		rigidbody2D.velocity = new Vector2(.3*maxSpeed, rigidbody2D.velocity.y);
		randAttack = Random.Range(0,100);
		if (randAttack == 1) {
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