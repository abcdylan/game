#pragma strict

var pickUp : boolean = false;



function Awake(){

}


function OnTriggerEnter2D (other : Collider2D) {
   if(other.tag == "Player") {
      pickUp = true;
      audio.Play();
      gameObject.SetActive(false);
   //Destroy(gameObject);
   }
}

/*
function Start () {

}

function Update () {

}*/