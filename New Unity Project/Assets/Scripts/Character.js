#pragma strict

var maxSpeed : float = 10;
var jumpForce : float = 400;
var crouchSpeed : float = .5;
var airControl : boolean = true;
var whatIsGround : LayerMask;
var charHealth : float = 3;
//public var abilityPickedUp: boolean;

//enemy object
//var minion : GameObject;

// Where you will respawn
var checkpoint : Transform;


// Health bar
static var health : float = 3;
var HealthBar : Scrollbar;
var Health : float = 3;

// fire ability boolean, whether or not the character has gotten it
//var fAbility : boolean;
// ice ability boolean, whether or not the player has gotten it
//var iAbility : boolean;

//What direction you are facing
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
public var jumpSound : AudioClip;
public var doubleJumpSound : AudioClip;
private var source : AudioSource;


function Awake () {
	anim = GetComponent(Animator);
	/*if(Application.loadedLevelName=="fantasylevel"){
	   abilityPickedUp=false;
	  }else{
	  abilityPickedUp=true;
	  }*/  
	   
	groundCheck = transform.Find("GroundCheck");
	ceilingCheck = transform.Find("CeilingCheck");
	source = GetComponent(AudioSource);		
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
		source.PlayOneShot(jumpSound, 1f);
		rigidbody2D.AddForce(new Vector2(0, jumpForce));

	}
}

function OnTriggerEnter2D(other: Collider2D) {
	// to disable/enable airControl to make the slide work
	if (other.tag == "DisableAirControl") {
		airControl = false;
	} else if (other.tag == "EnableAirControl") {
	  rigidbody2D.velocity.x = (rigidbody2D.velocity.x +3);	
	  rigidbody2D.velocity.y = (rigidbody2D.velocity.y +2);	 
		airControl = true;
	}
	if(other.tag == "Ability"){
	   AbilityManager.abilityPickedUp = true;
	   Destroy(other.gameObject);
	   }
	//if freeze in EnemyControl1 returns false, then execute this
	//if (!(minion.GetComponent.< Enemy1Control >(). freeze)) {	
	
    if(other.tag == "Enemy") {
       PlayerHit();
       if (charHealth != 0) {  		
   		transform.position = checkpoint.position;
   		}
   			 
	}
	//}   
	if (other.tag == "EnemyAttack") {
	    PlayerHit();
	 if (charHealth != 0) {  		
   		transform.position = checkpoint.position;
   		} 
		//Application.LoadLevel(Application.loadedLevelName);
		
	}
	if (other.tag == "BossAttack") {
		PlayerHit();
		Destroy(other.gameObject);
	}
	if (other.tag == "IceCubeBoss") {
		PlayerHit();
		Destroy(other.gameObject);
	}
	
	if(other.tag == "Slide"){
	   rigidbody2D.velocity.x += (rigidbody2D.velocity.x / 7);	
	   rigidbody2D.velocity.y += (rigidbody2D.velocity.y / 8);	 
    }   

	
	if (other.tag == "fallingSpikes"){
	    PlayerHit();
	 if (charHealth != 0) {  		
   		transform.position = checkpoint.position;
   		}
	            
	}
	if (other.tag == "IceSpikes"){
	    PlayerHit();
	 if (charHealth != 0) {  		
   		transform.position = checkpoint.position;
   		}
		            
	}
	if(other.tag == "oneTouchPlatform") {
	   rigidbody2D.AddForce (new Vector2 (0f, jumpForce));
	}	
	if (other.tag == "Checkpoint") {
		checkpoint = other.transform;
	}	
}

function Update() {
	// if you have no health left reload the level
	if (charHealth == 0) {	    
		Application.LoadLevel(Application.loadedLevelName);		
		charHealth=3;				
		Boss.health = 10;
	}		
	if (!grounded && doubleJumpCount == 1 && Input.GetKeyDown(KeyCode.Space)&& AbilityManager.abilityPickedUp) {
		rigidbody2D.AddForce (new Vector2 (0f, jumpForce));
		rigidbody2D.velocity.y = 0;
		doubleJumpCount = 0;
	}
	if (grounded) {
		doubleJumpCount = 1;
	}
}

//change the healthbar and cause player to take damage
function PlayerHit () {
	Damage(1);
	charHealth--;
}

// changes the healthbar
function Damage(value : float) {
	Health -= value;
	HealthBar.size = Health / 3;
}

// Flip the character around
private function Flip() {
	facingRight = !facingRight;
	var theScale : Vector3 = transform.localScale;
	theScale.x *= -1;
	transform.localScale = theScale;	            
}  
