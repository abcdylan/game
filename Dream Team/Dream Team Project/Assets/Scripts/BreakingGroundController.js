#pragma strict

//children of the controller object
var g1 : GameObject;
var g2 : GameObject;
var g3 : GameObject;

//reference to scripts attached to the transforms
private var fallG1 : BreakingGround;
private var fallG2 : BreakingGround;
private var fallG3 : BreakingGround;


function Start () {
   fallG1 = g1.GetComponent(BreakingGround);
   fallG2 = g2.GetComponent(BreakingGround);
   fallG3 = g3.GetComponent(BreakingGround);
}

function OnTriggerEnter2D(other : Collider2D) {
   if (other.tag == "Player") {
      fallG1.fall();
      fallG2.fall();
      fallG3.fall();
   }
}

/*
function Update () {
   if(!GetComponentInChildren(
}*/