#pragma strict

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


