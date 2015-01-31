#pragma strict

// the object you want to be able to respawn that
// has its own destruct method
//var cloud : Transform;

var spawnPos : Transform;

//the time until the respawn can occur
public var timer : float;

//the time left on the timer
private var timeLeft : float;

// private bool to check if the transform has been destroyed
private var hasGone : boolean = false;

//per each frame
function Update() {
   //check how much time is left on the timer
   // and decrease that time
   if(timeLeft > 0) {
      timeLeft -= Time.deltaTime;
   }
   if(timeLeft == 0) {
      Destroy(gameObject);
      hasGone = true;
      spawnCloud();
   }
}

// spawning the object we want
function spawnCloud() {
   if (hasGone) {
      var newCloud = Instantiate(transform);
      newCloud.position = spawnPos.position;
      timeLeft = timer;
      hasGone = false;
   }
}