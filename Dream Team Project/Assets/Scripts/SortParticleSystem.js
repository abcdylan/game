#pragma strict

var layerName : String = "Particles";

function Start () {
	particleSystem.renderer.sortingLayerName = layerName;
}
