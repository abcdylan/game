 #pragma strict
 
///Variables Declaration///
private var enemy : GameObject;
private var player : GameObject;
private var boss : Boss;
var maxSpeed : float = 10;
private var facingRight : boolean = true;
private var anim : Animator;
var jumpForce : float = 400;
var attackClass : AttackClassBoss;

//Shot Timer
var shootCooldownTime: float;
var iceShootCooldownTime : float;
private var shootCooldownTimeLeft: float = 0;
private var iceShootCooldownTimeLeft : float = 0;
//Big Attack Timer
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
			//var bigAttack : AttackClassBoss;
			//attackClass = GetComponent(AttackClassBoss);
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
		for (i = 0; i < 7; i++) {
			//attackClass = GetComponent(AttackClassBoss);
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
	//If ready to attack
	if (Boss.health == 3 && bigAttackTimer > 0) {
		BigAttack();
		bigAttackTimer -= Time.deltaTime;
	}
	if (Boss.health == 6 && iceAttackTimer > 0) {
		BigIceAttack();
		iceAttackTimer -= Time.deltaTime;
	}
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
	// if the player is to the right of the enemy, walk right
	} else if (player.transform.position.x > gameObject.transform.position.x) {
		if (!facingRight) {
			Flip();
		}
		rigidbody2D.velocity = new Vector2(.3*maxSpeed, rigidbody2D.velocity.y);	
	}	
}

//Changes the direction the boss is facing
private function Flip() {
	facingRight = !facingRight;
	var theScale : Vector3 = transform.localScale;
	theScale.x *= -1;
	transform.localScale = theScale;	            
}