#pragma strict

//this class controls all attacks

//projectile speed
var speed: float;

//destroy effect
var DestroyEffect : Transform;

function Update () {
	//for now the default direction of the projectile will be right
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