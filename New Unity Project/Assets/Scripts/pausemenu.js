#pragma strict

var paused : boolean = false;

function Update () {

	if(Input.GetKeyDown("Escape") && paused == false) {   
		paused = true;  
		Time.timeScale = 0;
        }
        else if(Input.GetKeyDown("Escape") && paused == true) {
                paused = false;
                Time.timeScale = 1;
       }   
}

