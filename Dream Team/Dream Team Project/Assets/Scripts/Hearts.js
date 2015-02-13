#pragma strict
var heart1 : Image;
var heart2 : Image;
var heart3 : Image;

/*
function Start() {
   
}*/

function Update () {
 if(Character.charHealth==3){
       heart1.color.a =1;
       heart2.color.a =1;
       heart3.color.a =1;
    }else if(Character.charHealth==2){
       heart3.color.a =0;    
    }else if(Character.charHealth==1){  
       heart2.color.a =0;       
    } else if(Character.charHealth==0){  
       heart1.color.a =0;       
    }  

}