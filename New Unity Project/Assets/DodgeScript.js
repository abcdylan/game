#pragma strict

var boss : Boss;
var dodgeColliderRight : EdgeCollider2D;
var dodgeColliderLeft : EdgeCollider2D;

function Update () {
	if (boss.facingRight) {
		dodgeColliderLeft.enabled = false;
		dodgeColliderRight.enabled = true;
	} else if (!boss.facingRight) {
		dodgeColliderRight.enabled = false;	
		dodgeColliderLeft.enabled = true;
	}
}

function OnTriggerEnter2D(other: Collider2D) {
	if (other.tag == "Fireball") {
		boss.Dodge();
	}
}