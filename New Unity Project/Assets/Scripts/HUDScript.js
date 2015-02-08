#pragma strict

import UnityEngine.UI;

//var character : Character;

//var getAbil1 : Text;
//var getAbil2 : Text;
//var getAbil3 : Text;

var getPuz1 : Image;
var getPuz2 : Image;
var getPuz3 : Image;

var pickkUp : GameObject;
var pickkUp2 : GameObject;
var pickkUp3 : GameObject;

private var pickedUp1: PickUpScript;
private var pickedUp2 : PickUpScript;
private var pickedUp3 : PickUpScript;

function Start() {
   //var objArray = GameObject.FindGameObjectsWithTag("puzzle");
   //pickedUp1 = objArray[0].GetComponent(Remover);
   pickedUp1 = pickkUp.GetComponent(PickUpScript);
   pickedUp2 = pickkUp2.GetComponent(PickUpScript);
   pickedUp3 = pickkUp3.GetComponent(PickUpScript);
   getPuz1.color.a = 50;
   
   
}

function Update() {
   if(pickedUp1.pickUp) {
      getPuz1.color.a = 255;
      //getAbil1.text = "Gotten";
   }
   if(pickedUp2.pickUp) {
   
   }
   if(pickedUp3.pickUp) {
   
   }
}

//private var pickedUp2: PickUpScript;

//private var pickedUp3: PickUpScript;

/*
function gotAbil() {
   getAbil1.text = "Got ability";
}


function Start () {

}

function Update () {

}*/