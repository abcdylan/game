#pragma strict

//this class controls all attacks

//projectile speed
var speed: float;

//how long the object lasts before auto-destroying itself
var timeToLive : float;

//private variable of time left until it destroys itself
//private var timeToLiveLeft : float = 0;

//destroy effect
var DestroyEffect : Transform;



function Update () {
	
   // Check if the game object is visible, if not, destroy self   
   //if(!UtilScript.isVisible(renderer, Camera.main)) {
   if (timeToLive > 0) {
     //for now the default direction of the projectile will be right
     transform.Translate(Vector3.right * speed * Time.deltaTime);
     timeToLive -= Time.deltaTime;
   } else {
      //create an instance of DestroyEffect if one is given
      //if(DestroyEffect != null) {
      //   var destroy = Instantiate(DestroyEffect);
      //   destroy.position = transform.position;
      //}
      destroyShot();
      //Destroy(gameObject);
      //Destroy(gameObject);
   }

}

function destroyShot() {

   if (DestroyEffect != null) {
         var destroy = Instantiate(DestroyEffect);
         destroy.position = transform.position;
      }
   Destroy(gameObject);
}