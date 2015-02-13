#pragma strict

//wait for a period of seconds before
// loading next scene

public var Level : String;
public var wait : int;

function Start () {
   yield WaitForSeconds(wait);
   Application.LoadLevel(Level);
}
