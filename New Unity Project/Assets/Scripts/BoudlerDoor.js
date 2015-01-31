#pragma strict

var hinge : HingeJoint2D;
var roof1 : Rigidbody2D;
var roof2 : Rigidbody2D;

function Start () {	
}

function Update () {
	if (hinge.enabled) {
		 roof1.isKinematic = false;
		 roof2.isKinematic = false;
		 Destroy(hinge);
	}
}