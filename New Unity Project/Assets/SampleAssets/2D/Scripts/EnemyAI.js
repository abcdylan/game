 #pragma strict
 
///Variables Declaration///
private var enemy : GameObject;
private var player : GameObject;
private var boss : Boss;
var maxSpeed : float = 10;
private var facingRight : boolean = true;
private var anim : Animator;
var jumpForce : float = 400;

//if ready to attack
var attack : boolean = false;
var attackClass : AttackClassBoss;

//Shot Timer
var shootCooldownTime: float;
private var shootCooldownTimeLeft: float = 0;

//Inizialization
function Start () {
	attackClass = GetComponent("AttackClassBoss");
	enemy = GameObject.FindGameObjectWithTag("Enemy");
	player = GameObject.FindGameObjectWithTag("Player");
}  

//Fixed Update
function FixedUpdate () {
	//If ready to attack
	
	if (Boss.health < 3){
		attack = true;
	}
	if (Boss.health == 0) {
		Application.LoadLevel("BossBattle");
		Boss.health = 5;
	}
	if(attack) {
		gameObject.GetComponent(Transform).position.x = -8.73;
		gameObject.GetComponent(Transform).position.y = 5.83;
		if(shootCooldownTimeLeft <= 0) {
			var i : int;
				for (i = 0; i < 7; i++) {
				var bigAttack : AttackClassBoss;
				bigAttack = GetComponent(AttackClassBoss);
				bigAttack.BigAttack();
			}
			shootCooldownTimeLeft = shootCooldownTime;		
		}
		if (shootCooldownTimeLeft > 0) { 
			shootCooldownTimeLeft -= Time.deltaTime;
		}
	//If not attacking and walking around
	} else {
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
}
//Changes the direction the boss is facing
private function Flip() {
	facingRight = !facingRight;
	var theScale : Vector3 = transform.localScale;
	theScale.x *= -1;
	transform.localScale = theScale;	            
}