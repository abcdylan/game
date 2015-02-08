#pragma strict

//this class controls all attacks

//projectile speed
var speed: float;

//how long the fireball object lasts before auto-destroying itself
var timeToLive : float;

//destroy effect
var DestroyEffect : Transform;

function Update () {
	//for now the default direction of the projectile will be right
	transform.Translate(Vector3.right * speed * Time.deltaTime);
	if(gameObject.FindWithTag == "Fireball") {
      //if time to live is 
      if (timeToLive > 0) {
        //for now the default direction of the projectile will be right
        transform.Translate(Vector3.right * speed * Time.deltaTime);
        timeToLive -= Time.deltaTime;
      } else {
         //call destroy shot and destroy game Object
         destroyShot();
      }
   }

   // Check if the game object is visible, if not, destroy self   
   //if(!UtilScript.isVisible(renderer, Camera.main)) {
   //   if(DestroyEffect != null) {
   //      var destroy = Instantiate(DestroyEffect);
   //      destroy.position = transform.position;
   //   }
   //   Destroy(gameObject);
   //}
   
   	if(gameObject.tag == "IceCube") {
		if(gameObject.GetComponent(SpriteRenderer).color.a > 0) {
			gameObject.GetComponent(SpriteRenderer).color.a -= 0.2 * Time.deltaTime * 2 ;
		} else {
			Destroy(gameObject);
		}
	}
}



function destroyShot() {

   if (DestroyEffect != null) {
         var destroy = Instantiate(DestroyEffect);
         destroy.position = transform.position;
      }
   Destroy(gameObject);
}