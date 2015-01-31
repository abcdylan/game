#pragma strict

//this class controls all attacks

//projectile speed
var reappearTime: float;
var disappearTime: float;
var thatObject : GameObject;
public var disappear: boolean =false;

//destroy effect

function OnTriggerEnter2D(other : Collider2D) {
   //var enemyWave : EnemyWaveClass;
   if(other.tag=="Player"){
      disappear= true;     
      }
      
}

function OnTriggerExit2D(other : Collider2D) {
   //var enemyWave : EnemyWaveClass;
   if(other.tag=="Player"){
      disappear= false;     
      }
      
}


function Update () {

  if(disappear){
   	if(thatObject.tag == "oneTouchPlatform") {
		if(thatObject.GetComponent(SpriteRenderer).color.a > 0) {
			thatObject.GetComponent(SpriteRenderer).color.a -= disappearTime * Time.deltaTime * 2 ;
		} else {		   
		    //disappear=false;
			thatObject.active=false;			
		}
	   }
	  }
  if(disappear==false){      
      if(thatObject.GetComponent(SpriteRenderer).color.a < 255 ){
		  thatObject.GetComponent(SpriteRenderer).color.a += reappearTime * Time.deltaTime * 2 ; 
		   thatObject.active=true;    
      }
     }
    }

     
   


