#pragma strict

var minFlickerSpeed : float = 0.1;
var maxFlickerSpeed : float = 1.0;

private function Update() {
	LightFlicker();
}  

function LightFlicker() {
	GetComponent(Light).intensity = 5;
	yield WaitForSeconds (Random.Range(minFlickerSpeed, maxFlickerSpeed));
	GetComponent(Light).intensity = 10;
	yield WaitForSeconds (Random.Range(minFlickerSpeed, maxFlickerSpeed));
}