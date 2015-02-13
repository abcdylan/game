#pragma strict

//var cam : Camera;

//private var startCam : CameraController;

//static variables for the players abilities
// that the game can access across levels

// double jump boolean
static var abilityPickedUp : boolean = false;

//ice ability boolean
static var iAbility : boolean = false;

//fire ability boolean
static var fAbility : boolean = false;

function Awake() {
   DontDestroyOnLoad(this);
}
/*
function Start() {
   startCam = cam.GetComponent(CameraController);
}

function changeCam(darkChar : GameObject) {
    
}
*/
