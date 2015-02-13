#pragma strict
var heart1 : GameObject;
var heart2 : GameObject;
var heart3 : GameObject;

function Update () {
 if(Character.charHealth==3){
    heart1.GetComponent(SpriteRenderer).color.a =1;
    heart2.GetComponent(SpriteRenderer).color.a =1;
    heart3.GetComponent(SpriteRenderer).color.a =1;
    }else if(Character.charHealth==2){
    heart3.GetComponent(SpriteRenderer).color.a =0;    
    }else if(Character.charHealth==1){  
    heart2.GetComponent(SpriteRenderer).color.a =0;       
    } else if(Character.charHealth==0){  
    heart1.GetComponent(SpriteRenderer).color.a =0;       
    }  

}