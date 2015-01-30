#pragma strict
// for the purposes of this prototype the plyer is 
// just there to be a game object that shoots

function Update () {
    if(Input.GetButton("Jump")) {
       // Get players attack component
       // and execute its shoot() method
       var attack : AttackClass;
       attack = GetComponent(AttackClass);
       attack.Shoot();
       
    }
}