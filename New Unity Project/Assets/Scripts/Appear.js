#pragma strict

//this class controls all attacks

//projectile speed
var speed: float;
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
   	if(thatObject.tag == "IceCube") {
		if(thatObject.GetComponent(SpriteRenderer).color.a > 0) {
			thatObject.GetComponent(SpriteRenderer).color.a -= 0.6 * Time.deltaTime * 2 ;
		} else {		   
		    //disappear=false;
			thatObject.active=false;			
		}
	   }
	  }
  if(disappear==false){      
      if(thatObject.GetComponent(SpriteRenderer).color.a < 255 ){
		  thatObject.GetComponent(SpriteRenderer).color.a += 0.4 * Time.deltaTime * 2 ; 
		   thatObject.active=true;    
      }
     }
    }

     
   


