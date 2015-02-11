#pragma strict

// Enable the gravity and mass of the first HingeJoint component
// found on any child object.
//var hinge : HingeJoint;
//hinge = GetComponentInChildren(HingeJoint);
//hinge.useSpring = false;

var rigid : Rigidbody2D;
rigid = GetComponent(Rigidbody2D);

public var GravityScale : float;

function fall() {
  // change gravity of object to 10 
  rigid.gravityScale = GravityScale;
}



/*
function Start () {
   
}

function Update () {

}*/