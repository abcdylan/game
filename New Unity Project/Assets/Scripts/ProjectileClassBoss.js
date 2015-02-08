#pragma strict

//this class controls all attacks

//projectile speed
private var speed: float;

//destroy effect
var DestroyEffect : Transform;

function Update () {
	if (gameObject.tag == "IceCubeBoss") {
		if(gameObject.GetComponent(SpriteRenderer).color.a > 0) {
			gameObject.GetComponent(SpriteRenderer).color.a -= 0.1 * Time.deltaTime * 2 ;
		} else {
			Destroy(gameObject);
		}
	} else {
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
}