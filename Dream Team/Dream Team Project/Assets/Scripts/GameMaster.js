#pragma strict

function OnTriggerEnter2D(other: Collider2D) {
	if (other.tag =="GoToIceLevel") {
	Application.LoadLevel("Ice Level Demo");
	}
	 
	if (other.tag =="GoToFireLevel") {
	Application.LoadLevel("FireLevel");
	} 
    
    if (other.tag =="BossLevelTransition") {
	Application.LoadLevel("BossBattle");
	} 
	
    if (other.tag =="BackToMainMenu") {
	Application.LoadLevel("MenuScreen");
	} 

}