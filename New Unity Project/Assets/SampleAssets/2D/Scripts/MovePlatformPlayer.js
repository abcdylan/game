#pragma strict
private var playerOnPlatform : boolean = false;
//private var enemy : boolean = false;
//function Start () {

//}

function Update() {
   if(playerOnPlatform) {
      MovePlayerWPlatform();
   }
   
}

function OnTriggerEnter2D(other : Collider2D) {
//   if(other.tag == "Enemy") {
//      enemy = true;
//   }
//   if (other.tag == "Player") {
  playerOnPlatform = true;
//   }
}

function OnTriggerExit2D(other : Collider2D) {
//   if(other.tag == "Enemy") {
//      enemy = false;
//   }
//   if (other.tag == "Player") {
  playerOnPlatform = false;
//   }
}

function MovePlayerWPlatform(){
   
}