#pragma strict
var thatObject : GameObject ;
var isDead : boolean;
var spawnPoint : Transform;

function Start () {
thatObject.GetComponent.< MovingPlatform >().invisible= true;  
}
  

function OnTriggerEnter2D(other: Collider2D) {	
  if(other.tag=="Ghost"){
    isDead=true;
    Destroy(other.gameObject);
  }
  if(other.tag=="MovingRainCloud"){
    if(isDead){
       thatObject.GetComponent.< MovingPlatform >().invisible= false;  
       Destroy(gameObject);
    }else{
       gameObject.transform.position = spawnPoint.position;
    }
  }

}