#pragma strict

var maxSpeed : float = 10;
var jumpForce : float;
var crouchSpeed : float = .5;
var airControl : boolean = true;
var whatIsGround : LayerMask;

static var health : float = 10;
var dodgeColliderRight : EdgeCollider2D;
var dodgeColliderLeft : EdgeCollider2D;
var dodgeRandom : float;
public var body : BoxCollider2D;
public var legs : CircleCollider2D;
var dodgeTimer: float;
private var dodgeTimerLeft: float = 0;
var facingRight : boolean = true;
private var groundCheck : Transform;
private var groundedRadius : float = .2;
var grounded : boolean = false;
private var ceilingCheck : Transform;
private var ceilingRadius : float = .01;
private var anim : Animator;
var HealthBar : Scrollbar;
var Health : float = 100;



function Awake () {
	anim = GetComponent(Animator);
	groundCheck = transform.Find("GroundCheck");
	ceilingCheck = transform.Find("CeilingCheck");		
}

private function FixedUpdate () {/*
	if(dodgeTimerLeft <= 0) {
		dodgeRandom = Random.Range(0, 30);
		if (dodgeRandom > 15) {
			dodgeColliderRight.enabled = true;
			dodgeColliderLeft.enabled = true;
		} else {
			dodgeColliderRight.enabled = false;
			dodgeColliderLeft.enabled = false;
		}
		dodgeTimerLeft = dodgeTimer;		
	}*//*
	if (dodgeTimerLeft > 0) { 
		dodgeTimerLeft -= Time.deltaTime;
	}*/
	grounded = Physics2D.OverlapCircle (groundCheck.position, groundedRadius, whatIsGround);
	anim.SetBool("Ground", grounded);
	anim.SetFloat("vSpeed", rigidbody2D.velocity.y);
	
	/*if (facingRight) {
		dodgeColliderLeft.enabled = false;
		dodgeColliderRight.enabled = true;
	} else if (!facingRight) {
		dodgeColliderRight.enabled = false;	
		dodgeColliderLeft.enabled = true;
	}*/
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

function Dodge () {
	if (grounded && anim.GetBool("Ground")) {
		grounded = false;
		anim.SetBool("Ground", false);
		rigidbody2D.AddForce(new Vector2(0, jumpForce));
	}
}

function OnTriggerEnter2D(other: Collider2D) {
	if (other.tag == "Fireball") {
		/*if (grounded && anim.GetBool("Ground")) {
		//if(number > 4 && grounded == true && anim.GetBool("Ground")){
			grounded = false;
			anim.SetBool("Ground", false);
			rigidbody2D.AddForce(new Vector2(0, jumpForce));
		} else {*/
			Damage(10);
			health--;
		//}
	}
}

function Damage(value : float) {
	Health -= value;
	HealthBar.size = Health / 100;
}

//Changes the direction the boss is facing
private function Flip() {
	facingRight = !facingRight;
	var theScale : Vector3 = transform.localScale;
	theScale.x *= -1;
	transform.localScale = theScale;	            
}            
