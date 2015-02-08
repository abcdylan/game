#pragma strict

var maxSpeed : float = 10;
var jumpForce : float = 400;
var crouchSpeed : float = .5;
var airControl : boolean = true;
var whatIsGround : LayerMask;

//enemy object
//var minion : GameObject;

var spawnPoint : Transform;

var facingRight : boolean = true;
private var doubleJumpCount : int = 1;
//private var maxAirJumpCount = 1;
//var airJumpCount : int = 0; //how many more times can the player jump
private var groundCheck : Transform;
private var groundedRadius : float = .2;
private var grounded : boolean = false;
private var ceilingCheck : Transform;
private var ceilingRadius : float = .01;
private var anim : Animator;


function Awake () {
	anim = GetComponent(Animator);
	groundCheck = transform.Find("GroundCheck");
	ceilingCheck = transform.Find("CeilingCheck");		
}

function FixedUpdate () {
	grounded = Physics2D.OverlapCircle (groundCheck.position, groundedRadius, whatIsGround);
	anim.SetBool("Ground", grounded);
	anim.SetFloat("vSpeed", rigidbody2D.velocity.y);
}

function FireShoot() {
	// Get players attack component
	// and execute its shoot() method
	var fireAttack : AttackClass;
	fireAttack = GetComponent(AttackClass);
	fireAttack.Shoot();
}

function IceShoot() {
	// Get players attack component
	// and execute its shoot() method
	var iceAttack : AttackClass;
	iceAttack = GetComponent(AttackClass);
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

function OnTriggerEnter2D(other: Collider2D) {
	if (other.tag =="DisableAirControl") {
		airControl = false;
	} else if (other.tag == "EnableAirControl") {
	    //making sure the character maintains
	    // velocity upon regaining air control
	    rigidbody2D.velocity.x = (rigidbody2D.velocity.x+3);
	    rigidbody2D.velocity.y = (rigidbody2D.velocity.y+2);
		airControl = true;
	}
	// indicate that the player has
	// reached the midpoint of the slide and increase their
	// velocity accordingly
	if (other.tag == "Slide") {
	    rigidbody2D.velocity.x += (rigidbody2D.velocity.x/7);
	    //(rigidbody2D.velocity-(rigidbody2D.velocity/2));
	    rigidbody2D.velocity.y += (rigidbody2D.velocity.y/8);
	}
	if(other.tag == "Rope") {
		var connectingHinge : HingeJoint2D = this.GetComponent(HingeJoint2D);
		connectingHinge.enabled = true;
	}
	//if freeze in EnemyControl1 returns false, then execute this
	//if (!(minion.GetComponent.< Enemy1Control >(). freeze)) {	
    //if(other.tag == "Enemy") {
	//    Application.LoadLevel(Application.loadedLevelName);
	//	Boss.health = 10;
	//}
	//}   
	if (other.tag == "EnemyAttack") {
		Application.LoadLevel(Application.loadedLevelName);
		Boss.health = 10;
	}
	if (other.tag == "IceCubeBoss") {
		Application.LoadLevel(Application.loadedLevelName);
		Boss.health = 10;
	}
	if (other.tag=="fallingSpikes"){
		transform.position = spawnPoint.position;		            
	}
	
	if(other.tag == "oneTouchPlatform") {
	   rigidbody2D.AddForce (new Vector2 (0f, jumpForce));
	}
	/*
	if (other.tag == "Slide") {
	   Debug.Log(rigidbody2D.velocity.x);
	   rigidbody2D.velocity.x = 10;
	   
	}*/
		
}
/*
function OnCollisionEnter2D (Coll : Collision2D) {
	if (Coll.gameObject.tag == "Enemy") {
		Application.LoadLevel(Application.loadedLevelName);
		Boss.health = 10;
	}
}
*/

function Update() {
	var connectingHinge : HingeJoint2D = this.GetComponent(HingeJoint2D);
	if(connectingHinge.enabled) {
		if(Input.GetKeyDown(KeyCode.Space)) {
			connectingHinge.enabled = false;
		}
	} 
	if (!grounded && doubleJumpCount == 1 && Input.GetKeyDown(KeyCode.Space)) {
		//Debug.Log("Im doublejumping");
		rigidbody2D.AddForce (new Vector2 (0f, jumpForce));
		rigidbody2D.velocity.y = 0;
		doubleJumpCount = 0;
	}
	if (grounded) {
		doubleJumpCount = 1;
	}
}


private function Flip() {
	facingRight = !facingRight;
	var theScale : Vector3 = transform.localScale;
	theScale.x *= -1;
	transform.localScale = theScale;	            
}  
