/*#pragma strict

//var Player : GameObject;

public var spawnPoint : Transform;
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
}

/*
function Start () {

}

function Update () {

}*/