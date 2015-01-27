#pragma strict

import UnityEngine.UI;

public var storyPanel : Animator;

var storyText: Text = null;
private var isHidden : boolean;

function showStory() { 
   storyPanel.enabled = true;
   gameObject.SetActive(true);
   //isHidden = storyPanel.GetBool("isHidden");
   storyPanel.SetBool("isHidden", !isHidden);  
}

function Hide() {
//   isHidden = storyPanel.GetBool("isHidden");
   storyPanel.SetBool("isHidden", isHidden); 
   storyPanel.enabled = false;
   gameObject.SetActive(false); 
}

//function Start () {
   //var transform : RectTransform = storyPanel.gameObject.transform as RectTransform;
   //var position : Vector2 = transform.anchoredPosition;
   //position.y -= transform.rect.height;
   //transform.anchoredPosition = position; 
   //storyPanel = GetComponent(Animator);
//}


//function Update () {

//}