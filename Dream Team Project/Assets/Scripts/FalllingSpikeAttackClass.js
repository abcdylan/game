#pragma strict

// Variable storing projectile object
// prefab
var shotPrefab : Transform;

// Probability of auto-shoot (0 if
// no autoshoot)
var autoShootProbability: float;

// Cooldown time for firing
var fireCooldownTime: float;

// Private variables (not visible in the Inspector panel)

// How much time is left until able to fire again 
private var fireCooldownTimeLeft: float = 0;

// Per every frame...
function Update () {
   // If still some time left until can fire again
   // reduce the time by the time since last
   // frame 
   if(fireCooldownTimeLeft > 0) {
      fireCooldownTimeLeft -= Time.deltaTime;
   }

   // If auto-shoot probability is more than zero...
   if(autoShootProbability > 0) {
      // Generate number a random number between 0 and 1
      var randomSample : float = Random.Range(0f, 1f);
      // If that random number is less than the 
      // probability of shooting, then try to shoot
      if(randomSample < autoShootProbability) {
         Shoot();   
      }
   }
}

// Method for firing a projectile
function Shoot() {
   // Shoot only if the fire cooldown period
   // has expired
   if(fireCooldownTimeLeft <= 0) {
      // Create a projectile object from 
      // the shot prefab
      var shot = Instantiate(shotPrefab);
      // Set the position of the projectile object
      // to the position of the firing game object
       shot.position = transform.position;
      // Set time left until next shot
      // to the cooldown time
      fireCooldownTimeLeft = fireCooldownTime;   
   }
}