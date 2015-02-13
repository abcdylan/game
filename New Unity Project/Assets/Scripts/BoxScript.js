#pragma strict
var thatObject : GameObject ;
var isDead : boolean;
var spawnPoint : Transform;
public var ghostDeath : AudioClip;
private var source : AudioSource;


function Start () {
thatObject.GetComponent.< MovingPlatform >().invisible= true;
source.GetComponent(AudioSource); 
}
  

function OnTriggerEnter2D(other: Collider2D) {	
  if(other.tag=="Ghost"){
    isDead=true;
    Destroy(other.gameObject);
    source.PlayOneShot(ghostDeath, 1f);
    
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