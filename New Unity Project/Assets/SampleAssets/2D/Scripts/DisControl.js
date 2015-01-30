#pragma strict

// reference to game object that contains script
var child : GameObject;

// reference to script of gameObject;
private var childControl : DisappearPlatform;

function Start () {
   //initialise reference to script object, which is a component of
   // the panel game object
   childControl = child.GetComponent(DisappearPlatform);
   //child.SetActive(true);
   
} 

/*
function Update() {
   if(!child.active) {
      child.ActivateMe();
   } else {
      child.DeactivateMe();
   }  
}
*/

function Update () {
   if(!child.activeSelf) {
      //child.GetComponent(SpriteRenderer).color.a += 0.2 * Time.deltaTime * 2 ;
      wait();
   } /*else {
     if(child.GetComponent(SpriteRenderer).color.a < 255) {
	       child.GetComponent(SpriteRenderer).color.a += 0.2 * Time.deltaTime * 2 ;
     }*/
}



function wait() {
   //WaitForSeconds(5);
   if (!child.activeSelf) {
      child.GetComponent(SpriteRenderer).color.a += 0.2 * Time.deltaTime * 2 ;
      //child.SetActive(true);
    }
    child.SetActive(true);
}
