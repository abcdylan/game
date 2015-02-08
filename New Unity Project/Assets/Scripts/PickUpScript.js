#pragma strict

//the sparkle effect that will show up behind the puzzle object
//var sparkleEffect : Transform;

var pickUp : boolean = false;


/*
function Start () {
   if (sparkleEffect != null) {
         var sparkle = Instantiate(sparkleEffect);
         //sparkle.position = transform.position;
      }
}
*/
function OnTriggerEnter2D (other : Collider2D) {
   if(other.tag == "Player") {
      pickUp = true;
      gameObject.SetActive(false);
   }
}


/*
function Update () {

}*/