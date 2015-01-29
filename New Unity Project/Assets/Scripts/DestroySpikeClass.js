#pragma strict

function OnTriggerEnter2D(other : Collider2D) {      
   
   if (other.tag=="IceSpikes"){
   Destroy(other.gameObject);
   }               

}