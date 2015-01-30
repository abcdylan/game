#pragma strict

//this class controls all attacks

//projectile speed
var speed: float;

//destroy effect
var DestroyEffect : Transform;

function Update () {
	transform.Translate(Vector3.right * speed * Time.deltaTime);
	// Check if the game object is visible, if not, destroy self   
	if(!UtilScript.isVisible(renderer, Camera.main)) {
		if(DestroyEffect != null) {
			var destroy = Instantiate(DestroyEffect);
			destroy.position = transform.position;
		}
		Destroy(gameObject);
	}
   
	if(gameObject.tag == "IceCube") {
		if(gameObject.GetComponent(SpriteRenderer).color.a > 0) {
			gameObject.GetComponent(SpriteRenderer).color.a -= 0.2 * Time.deltaTime * 2 ;
		} else {
			Destroy(gameObject);
		}
	}
}

function OnTriggerEnter2D(other: Collider2D) {
	//if(other.tag == "Enemy") {
	//	Destroy(gameObject);
	//}
	if(gameObject.tag == "Fireball" && other.tag == "IceCube") {
		Destroy(gameObject);
	}
	if(gameObject.tag == "IceCube" && other.tag == "Fireball") {
		Destroy(gameObject);
	}
}