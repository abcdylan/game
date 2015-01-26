#pragma strict

private var character : Character;
private var jump : boolean;

private function Awake() {
	character = GetComponent(Character);
}

private function Update() {
	if (!jump) {
		jump = Input.GetButtonDown("Jump");
	}
	if(Input.GetKeyDown(KeyCode.Alpha1)) {
	character.FireShoot(); 
    }
    if(Input.GetKeyDown(KeyCode.Alpha2)) {
    character.IceShoot();
    }
	
}

private function FixedUpdate() {
	var crouch : boolean = Input.GetKey(KeyCode.LeftControl);
	var h : float = Input.GetAxis("Horizontal");
	character.Move(h, crouch, jump);
	jump = false;
}