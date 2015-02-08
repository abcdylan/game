#pragma strict

//this class controls all attacks

//projectile speed
private var speed: float;

//destroy effect
var DestroyEffect : Transform;
var fadeOut : boolean = false;

function Update () {
	if (gameObject.tag == "IceCubeBoss") {
		if (gameObject.GetComponent(SpriteRenderer).color.a > 0) {
			if (fadeOut) {
				gameObject.GetComponent(SpriteRenderer).color.a -= 7 * Time.deltaTime * 2;
			}
		} else {
			Destroy(gameObject);
		}
	} else {
		speed = 6;
		transform.Translate(Vector3.right * speed * Time.deltaTime);
   		// Check if the game object is visible, if not, destroy self   
   		if (!UtilScript.isVisible(renderer, Camera.main)) {
    		if(DestroyEffect != null) {
         		var destroy = Instantiate(DestroyEffect);
         		destroy.position = transform.position;
      		}
      		Destroy(gameObject);
		}
	}
}

function OnCollisionEnter2D (Coll : Collision2D) {
	if (Coll.gameObject.tag == "Ground") {
		fadeOut = true;
	}	
}