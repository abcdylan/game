#pragma strict

public var storyPanel : Animator;
private var isHidden : boolean;

function showStory() {
   storyPanel.enabled = true;
   //gameObject.SetActive(true);
   //isHidden = storyPanel.GetBool("isHidden");
   storyPanel.SetBool("isHidden", !isHidden);  
}

function Hide() {
//   storyPanel.enabled = true;
//   gameObject.SetActive(false);
//   isHidden = storyPanel.GetBool("isHidden");
   storyPanel.SetBool("isHidden", isHidden);  
}

function Start () {
   var transform : RectTransform = storyPanel.gameObject.transform as RectTransform;
   var position : Vector2 = transform.anchoredPosition;
   position.y -= transform.rect.height;
   transform.anchoredPosition = position; 
   storyPanel = GetComponent(Animator);
}


//function Update () {

//}