﻿#pragma strict

var pickUp : boolean = false;

var popSound : AudioClip;
/*
*/
function OnTriggerEnter2D (other : Collider2D) {
   if(other.tag == "Player") {
      pickUp = true;
      audio.PlayOneShot(popSound, 1f);
      gameObject.renderer.material.color.a = 0;
      yield WaitForSeconds(.8);
      gameObject.SetActive(false);
      audio.Play();     
   //Destroy(gameObject);
   }
}

/*
function Start () {

}

function Update () {

}*/