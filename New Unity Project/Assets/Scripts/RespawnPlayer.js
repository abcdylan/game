#pragma strict

//var Player : GameObject;

var spawnPoint : Transform;
private var source : AudioSource;
public var deathSound : AudioClip;


private function Awake(){
source.GetComponent(AudioSource);
}

function OnTriggerEnter2D(other : Collider2D) {
   //Destroy(other.gameObject);
   //var P : GameObject;
   //var P = Instantiate(Player);
   //WaitForSeconds(3);
   if(other.tag=="Player"){
     other.transform.position = spawnPoint.position;
     source.PlayOneShot(deathSound, 1f);
   }
   if(other.tag=="Enemy"){
     Destroy(other.gameObject);
   }
   //var cam = camera.main.getComponent(CameraController);
   //camera.player = P.transform;
   
}

/*
function Start () {

}

function Update () {

}*/