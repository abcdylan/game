#pragma strict

public var scrollSpeed: float;
private var savedOffset: Vector2;

function Start () {
	savedOffset = renderer.sharedMaterial.GetTextureOffset("_MainTex");
	
}

function Update () {
	    var x: float =  Mathf.Repeat (Time.time * scrollSpeed, 1);
        var offset : Vector2 = new Vector2 (x, savedOffset.y);
        renderer.sharedMaterial.SetTextureOffset ("_MainTex", offset);
    }

function OnDisable () {
        renderer.sharedMaterial.SetTextureOffset ("_MainTex", savedOffset);
}
