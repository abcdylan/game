#pragma strict

//this class controls all attacks

//projectile speed
var speed: float;

//destroy effect
var DestroyEffect : Transform;

private var playerObject : GameObject;
private var character : Character;
var direction : boolean = true;

private function Awake() {
	playerObject = GameObject.FindGameObjectWithTag("Player");
	character = playerObject.GetComponent(Character);

}

function Update () {
	transform.Translate(Vector3.right * speed * Time.deltaTime);
	/*if (character.facingRight && direction) {
		ShootRight();
		direction = false;
	} else if (!character.facingRight && direction){
		ShootLeft();
		direction = false;
	}*/
	

	/*if(character.facingRight) {
		transform.Translate(Vector3.right * speed * Time.deltaTime);
	} else {
		transform.Translate(Vector3.left * speed * Time.deltaTime);
	}*/
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