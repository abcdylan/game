#pragma strict

// Boss dodging stuff 
var dodgeRandom : float;
var dodgeColliderRight : EdgeCollider2D;
var dodgeColliderLeft : EdgeCollider2D;
var dodgeTimer: float;
private var dodgeTimerLeft: float = 0;
var dodgeEnabled : boolean = true;

// freezing the boss prevents dodging
var freezeTime : float;
private var freezeTimeLeft : float = 0;

// Character stuff
private var groundCheck : Transform;
private var groundedRadius : float = .2;
var grounded : boolean = false;
private var ceilingCheck : Transform;
private var ceilingRadius : float = .01;
private var anim : Animator;
var whatIsGround : LayerMask;
var jumpForce : float;
var crouchSpeed : float = .5;
var airControl : boolean = true;
static var frozen : boolean = false;
var bossColour : Color;

// Health bar
static var health : float = 10;
var HealthBar : Scrollbar;
var Health : float = 100;

//Sets variables
function Awake () {
	bossColour.r = 106;
	bossColour.g = 106;
	bossColour.b = 106;
	bossColour.a = 255;
	anim = GetComponent(Animator);
	groundCheck = transform.Find("GroundCheck");
	ceilingCheck = transform.Find("CeilingCheck");		
}

private function FixedUpdate () {
	if (frozen && freezeTimeLeft <= 0) {
		frozen = false;
		freezeTimeLeft = freezeTime;
	}
	if (frozen && freezeTimeLeft > 0) {
		freezeTimeLeft -= Time.deltaTime;
	}
	if (frozen) {
		gameObject.GetComponent(SpriteRenderer).color = Color.blue;	
		EnemyAI.maxSpeed = 5;
	} else {
		gameObject.GetComponent(SpriteRenderer).color = Color(.5, .5, .5);
		EnemyAI.maxSpeed = 10;
	}
	
	//dodge is randomly generated									
	if(dodgeTimerLeft <= 0) {
		dodgeRandom = Random.Range(0, 100);
		if (dodgeRandom < 15) {
			dodgeEnabled = true;
			dodgeColliderRight.enabled = true;
			dodgeColliderLeft.enabled = true;
		} else {
			dodgeEnabled = false;
			dodgeColliderRight.enabled = false;
			dodgeColliderLeft.enabled = false;
		}
		dodgeTimerLeft = dodgeTimer;		
	}
	if (dodgeTimerLeft > 0) { 
		dodgeTimerLeft -= Time.deltaTime;
	}
	grounded = Physics2D.OverlapCircle (groundCheck.position, groundedRadius, whatIsGround);
	anim.SetBool("Ground", grounded);
	anim.SetFloat("vSpeed", rigidbody2D.velocity.y);
}

function FireShoot() {
	// Gets attack component of Boss
	// and execute its shoot() method
	var fireAttack : AttackClassBoss;
	fireAttack = GetComponent(AttackClassBoss);
	fireAttack.Shoot();
}

function IceShoot() {
	// Gets attack component of Boss
	// and execute its IceShoot() method
	var iceAttack : AttackClassBoss;
	iceAttack = GetComponent(AttackClassBoss);
	iceAttack.IceShoot();      	
}
/*
function Move (move : float, crouch : boolean, jump : boolean) {
	if (!crouch && anim.GetBool("Crouch")) {
		if (Physics2D.OverlapCircle(ceilingCheck.position, ceilingRadius, whatIsGround)) {
			crouch = true;
		}
	}
	anim.SetBool("Crouch", crouch);	
	if (grounded || airControl) {
		move = (crouch ? move*crouchSpeed : move);
		
		anim.SetFloat("Speed", Mathf.Abs(move));
		rigidbody2D.velocity = new Vector2(move*maxSpeed, rigidbody2D.velocity.y);

		if (move > 0 && !facingRight) {
			Flip();
		} else if (move < 0 && facingRight) {
			Flip();
		}
	}
	
	if (grounded && jump && anim.GetBool("Ground")) {
		grounded = false;
		anim.SetBool("Ground", false);
		rigidbody2D.AddForce(new Vector2(0, jumpForce));
	}
}
*/
//Boss jumps over player's fireshot
function Dodge () {
	if (grounded && anim.GetBool("Ground")) {
		grounded = false;
		anim.SetBool("Ground", false);
		rigidbody2D.AddForce(new Vector2(0, jumpForce));
	}
}

function OnTriggerEnter2D(other: Collider2D) {
	if (other.tag == "Fireball") {
		if (dodgeEnabled && !frozen) {
			Dodge();
		} else {
			Damage(10);
			health--;
			Destroy(other.gameObject);
		}
	}
}

function OnCollisionEnter2D(coll: Collision2D) {
	if (coll.gameObject.tag == "IceCube") {
		frozen = true;
		Destroy(coll.gameObject);
	}
}

// changes the healthbar of the boss
function Damage(value : float) {
	Health -= value;
	HealthBar.size = Health / 100;
}
/*
//Changes the direction the boss is facing
private function Flip() {
	facingRight = !facingRight;
	var theScale : Vector3 = transform.localScale;
	theScale.x *= -1;
	transform.localScale = theScale;	            
}            
*/