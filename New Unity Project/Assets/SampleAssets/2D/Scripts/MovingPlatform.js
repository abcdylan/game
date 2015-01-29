#pragma strict

// speed of platform
var platform : Transform;

var moveSpeed : float;

var Switch : boolean;


var startPosition : Transform;
var endPosition : Transform;

function Start () {

}

function Update () {

}

function FixedUpdate(){
if(transform.position == endPosition.position){
Switch = true;
}
if(transform.position == startPosition.position){
Switch = false;
}
if(Switch){
platform.position = Vector3.MoveTowards(endPosition.position, startPosition.position, moveSpeed);
} else {
transform.position = Vector3.MoveTowards(startPosition.position, endPosition.position, moveSpeed);
}
}