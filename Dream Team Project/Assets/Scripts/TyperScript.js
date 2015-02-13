#pragma strict

import UnityEngine.UI;

public var msg : String = "replace";
private var textComp : Text;

public var startDelay : float = 2;
public var typeDelay : float = 0.01;

//public putt : AudioClip;

function Awake() {
   textComp = gameObject.GetComponent(Text);
}

function Start () {
   TypeIn();
   //yield WaitForSeconds(20);
   //Application.LoadLevel("fantasylevel");
}

function TypeIn() {
   yield WaitForSeconds(startDelay);
   
   for(var i = 0; i < msg.Length+1; i++) {
      textComp.text = msg.Substring(0, i);
      //GetComponent<AudioSource>().PlayOneShot(putt);
      yield WaitForSeconds(typeDelay);
   }
}

function TypeOff() {
   for (var i = msg.Length+1; i >= 0; i--) {
      textComp.text = msg.Substring(0, i);
      yield WaitForSeconds(typeDelay);
   }
}

