#pragma strict

var pickUp : boolean = false;

function OnTriggerEnter2D (other : Collider2D) {
   if(other.tag == "Player") {
      pickUp = true;
      gameObject.SetActive(false);
      audio.Play();     
   //Destroy(gameObject);
   }
}

/*
function Start () {

}

function Update () {

}*/