#pragma strict

function OnTriggerEnter2D(other : Collider2D) {      
   
   if (other.tag=="fallingSpikes"){
   Destroy(other.gameObject);
   }               

}