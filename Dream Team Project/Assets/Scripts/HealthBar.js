#pragma strict

var HealthBar : Scrollbar;
var Health : float = 100;

function Damage(value : float) {
	Health -= value;
	HealthBar.size = Health / 100;
}