#pragma strict

function OnTriggerEnter2D(other: Collider2D) {
	if (other.tag =="GoToIceLevel") {
	Application.LoadLevel("Ice Level Demo");
	} 
	if (other.tag =="FireLevel") {
	Application.LoadLevel("FireLevel");
	} 
}