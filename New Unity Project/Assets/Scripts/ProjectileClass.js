#pragma strict
//this class controls all attacks

//projectile speed
var speed: float;

//how long the object lasts before auto-destroying itself
var timeToLive : float;

//destroy effect
var DestroyEffect : Transform;

function Update () {
	transform.Translate(Vector3.right * speed * Time.deltaTime);
	if (gameObject.tag == "Fireball") {
		if (timeToLive > 0) {
			timeToLive -= Time.deltaTime;
		} else {
		destroyShot();
		}
	}
	if(gameObject.tag == "IceCube") {
		if(gameObject.GetComponent(SpriteRenderer).color.a > 0) {
			gameObject.GetComponent(SpriteRenderer).color.a -= 0.01 * Time.deltaTime * 2 ;
		} else {
			Destroy(gameObject);
		}
	}
	if (gameObject.tag == "EnemyAttack" || gameObject.tag == "BossAttack") {
		if (timeToLive > 0) {
			timeToLive -= Time.deltaTime;
		} else {
			Destroy(gameObject);
		}
	}
}

function OnTriggerEnter2D(other: Collider2D) {
	if (other.tag == "Enemy") {
		//Destroy(gameObject);
	}
	if (gameObject.tag == "Fireball" && other.tag == "IceCube") {
		Destroy(gameObject);
		Destroy(other.gameObject);
	}
	if (gameObject.tag == "Fireball" && other.tag == "IceCubeBoss") {
		Destroy(gameObject);
		Destroy(other.gameObject);
	}
	if (gameObject.tag == "IceCube" && other.tag == "EnemyAttack") {
		Destroy(gameObject);
		Destroy(other.gameObject);
	}
}

function destroyShot() {

   if (DestroyEffect != null) {
         var destroy = Instantiate(DestroyEffect);
         destroy.position = transform.position;
      }
   Destroy(gameObject);
}