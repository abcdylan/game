#pragma strict

//this class controls all attacks

//projectile speed
private var speed: float;

//destroy effect
var DestroyEffect : Transform;

function Update () {
	speed = 6;
	transform.Translate(Vector3.right * speed * Time.deltaTime);
   // Check if the game object is visible, if not, destroy self   
   if(!UtilScript.isVisible(renderer, Camera.main)) {
      if(DestroyEffect != null) {
         var destroy = Instantiate(DestroyEffect);
         destroy.position = transform.position;
      }
      Destroy(gameObject);
   }
}
