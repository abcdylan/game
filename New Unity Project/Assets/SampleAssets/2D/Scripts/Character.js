#pragma strict

var maxSpeed : float = 10;
var jumpForce : float = 400;
var crouchSpeed : float = .5;
var airControl : boolean = true;
var whatIsGround : LayerMask;


private var doubleJumpCount : int = 1;
private var maxAirJumpCount = 1;
var airJumpCount : int = 0; //how many more times can the player jump
private var facingRight : boolean = true;
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
	 else if (grounded == false && jump && doubleJumpCount == 1) {
             rigidbody2D.AddForce (new Vector2 (0f, jumpForce));
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
