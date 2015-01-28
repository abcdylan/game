#pragma strict

function OnTriggerEnter2D(other : Collider2D) {
  other.transform.parent = gameObject.transform;
  
}

function OnTriggerExit2D(other : Collider2D) {
  other.transform.parent = null;
  
}


/*function Start () {

}

function Update () {

}*/