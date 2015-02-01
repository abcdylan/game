#pragma strict

public var Points : Transform[];


function GetPathEnumerator(/*someParameter : Transform*/) {
   if(Points == null || Points.Length < 1) {
      //c# yield break;
      return;
      }
      var dir : float = 1;
      var index : int = 0;
      while(true) {
         //c# yield return
         return Points[index];
         if (Points.Length == 1) {
            continue;
         }
         
         if (index >= 0) {
            dir = 1;
         } else if (index >= Points.Length - 1) {
            dir = -1;
         }
         index = index + dir;
         
      }
}


function OnDrawGizmos() {
   if(Points == null || Points.Length < 2) {
      return;
   }
   var i : int;
   for (i = 1; i < Points.Length; i++) {
      Gizmos.DrawLine(Points[i - 1].position, Points[i].position);
   }
} 


//function Start () {

//}

//function Update () {

//}