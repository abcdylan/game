#pragma strict
var visible : boolean;
//var thatObject : GameObject; 
var render : float = 1;
var thatObject: GameObject;

function OnTriggerEnter2D(other: Collider2D) {
  if (other.tag =="MovingRainCloud") {
		visible=true;		
	}
}

function Update () {
  if(visible){
    if(gameObject.GetComponent(SpriteRenderer).color.a < render) {
		gameObject.GetComponent(SpriteRenderer).color.a += 0.4 * Time.deltaTime * 2 ;         
    }
   
    if(gameObject.GetComponent(SpriteRenderer).color.a > 0.9){
       Destroy(thatObject);       
       gameObject.GetComponent.< MovingPlatform >().doNotMove= false; 
    }
  }
    

  if(!visible){
     gameObject.GetComponent(SpriteRenderer).color.a = 0;
     gameObject.GetComponent.< MovingPlatform >().doNotMove= true;     
  }
}
