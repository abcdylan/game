#pragma strict

// Line start width
var startWidth: float = 0.05;
// Line end width
var endWidth: float = 0.05;
	
private var line: LineRenderer;
	
//game objects
private var player: GameObject;
private var hook: GameObject;
//private var arm: GameObject;
//private var hand: GameObject;
private var springJoint: GameObject;
private var groundCheck : Transform;
var whatIsGround : LayerMask;
private var groundedRadius : float = .2;


	
//Booleans
var isGrappled: boolean;
private var isCollide: boolean;
private var grounded : boolean = false;
	
//Floats
private var distance: float;
	
// Use this for initialization
private function Start() {
	//Sets up the line drawing settings
	line = gameObject.AddComponent.<LineRenderer>();
	line.SetWidth(startWidth, endWidth);
	line.SetVertexCount(2);
	line.material.color = Color.red;
	line.enabled = false;
	
	//sets the game objects
	player = GameObject.FindWithTag("Player");
	//arm = GameObject.FindWithTag("arm");
	//hand = GameObject.FindWithTag("hand");
	hook = GameObject.FindWithTag("hook");
	groundCheck = transform.Find("GroundCheck");
}
	
// Update is called once per frame
private function Update(){ 
	grounded = Physics2D.OverlapCircle (groundCheck.position, groundedRadius, whatIsGround);
}
	
private function FixedUpdate(){
	grapple();
	distanceFromHook();
}
	
private function grapple(){
	//if the trigger is pressed set the joint and draw a line
	if(Input.GetKeyDown(KeyCode.Alpha3) && grounded == false && distance <= 20){
		setJoint();
		isGrappled = true;	
	}
		
	if(isGrappled == true) {
		drawLine();
	}
		
	//If the A button is pressed during the swing cancel the joint
	if(Input.GetKeyDown(KeyCode.Alpha4) == 1 && isGrappled == true) {
		isGrappled = false;
		cancelJoint();
	}
}
	
private function drawLine(){
	//sets the line positions start and end points
	//and enables the line to be drawn
	line.enabled = true;
	line.SetPosition(0, player.transform.position);
	line.SetPosition(1, hook.transform.position);
}
	
private function setJoint() {
	var gravityChange: Vector3 = new Vector3 (0, -15, 0);
	//sets the target objects hinge joint to be connected to the players
	hook.hingeJoint.connectedBody = transform.rigidbody;
	line.enabled = true;
	rigidbody.constraints = RigidbodyConstraints.None;
	rigidbody.constraints = RigidbodyConstraints.FreezePositionX | RigidbodyConstraints.FreezeRotationZ;		
}
	
function cancelJoint(){
	//sets the targets hinge joint connected body to be null
	hook.hingeJoint.connectedBody = null;
	line.enabled = false;
	var lastVel: Vector3 = rigidbody.velocity;
	lastVel.z = 30;
	rigidbody.AddForce(lastVel, ForceMode.VelocityChange);
}

private function handPhysics(){
	var speed: float = 30;
	//creates a vector between the arm and the grapple point
	var hingeVector: Vector3 = (hook.transform.position - transform.position).normalized;
	var handsRigidBody: Rigidbody = player.AddComponent.<Rigidbody>();
	player.rigidbody.velocity = hingeVector * speed;
}
	
private function distanceFromHook(){
	distance = Vector3.Distance(transform.position, hook.transform.position);
}
	
private function OnCollisionEnter(collision: Collision) {
	if(collision.gameObject.name == "hook") {
		player.rigidbody.isKinematic = true;
		isCollide = true;
	}
}
	
private function OnCollisionExit(collision: Collision) {
	isCollide = false;
}
