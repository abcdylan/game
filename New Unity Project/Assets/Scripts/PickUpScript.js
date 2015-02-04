#pragma strict

var pickUp : boolean = false;

function OnTriggerEnter2D (other : Collider2D) {
   pickUp = true;
   gameObject.SetActive(false);
   //Destroy(gameObject);
}

/*
function Start () {

}

function Update () {

}*/