#pragma strict


public var DestinationSpot : Transform;
public var OriginSpot : Transform;
public var speed : float;
public var Switch : boolean = false;

public var doNotMove :boolean;
public var invisible :boolean;


function FixedUpdate () {
   if(invisible){
      gameObject.GetComponent(SpriteRenderer).color.a = 0;
   }else if(!invisible && gameObject.tag == "MovingRainCloud"){
      gameObject.GetComponent(SpriteRenderer).color.a = 1;
   }            
   if(!doNotMove){
      // checking the position of the platform
      if (transform.position == DestinationSpot.position) {
         Switch = true;
      }
      if (transform.position == OriginSpot.position) {
         Switch = false;
      }
      //if switch then move the platform to origin
      if (Switch) {
          transform.position = new Vector3.MoveTowards(transform.position, OriginSpot.position, speed);
      } else {
      // otherwise move platform to destination
          transform.position = new Vector3.MoveTowards(transform.position, DestinationSpot.position, speed);
      }
    }
        
}

function OnDrawGizmos() {
   Gizmos.color = Color.green;
   Gizmos.DrawWireCube(OriginSpot.position, transform.localScale);
   
   
   Gizmos.color = Color.red;
   Gizmos.DrawWireCube(DestinationSpot.position, transform.localScale);
   
}