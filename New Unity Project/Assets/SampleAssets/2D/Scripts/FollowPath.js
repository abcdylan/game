#pragma strict

import System.Collections.Generic;

enum FollowType{
   MoveTowards,
   Lerp
}

public var type : FollowType = FollowType.MoveTowards;
public var speed : float = 1;
public var path : PathDefinition;
public var MaxDist : float;

private var currentPoint : Transform /*IEnumerator as Transform*/;
//private var 

function Start () {
   if (path == null) {
      Debug.LogError("path cannot be null", gameObject);
   }
   //type = FollowType.MoveTowards;
   currentPoint = path.GetPathEnumerator();
   //currentPoint.MoveNext();
   
   /*if (currentPoint.Current == null) {
      return;
   }
   
   transform.position = currentPoint.Current.position;
   */
}

/*function Update() {
   if (currentPoint == null || currentPoint.Current == null) {
   
   }
   
   if (type == FollowType.MoveTowards) {
      transform.position = Vector3.MoveTowards(transform.position, currentPoint.Current.position, Time.deltaTime * speed);
   } else if (type == FollowType.Lerp) { 
      transform.position = Vector3.Lerp(transform.position, currentPoint.Current.position, Time.deltaTime * speed);
   }
   
   var distanceSquared : float;
   distanceSquared = (transform.position - currentPosition.Current.position).sqrMagnitude;
   if(distanceSquared < MaxDist * MaxDist) {
      currentPosition.MoveNext();
   }
}*/

/*
public class ExampleClass : MonoBehaviour {
    void Start() {
        print("Starting " + Time.time);
        StartCoroutine(WaitAndPrint(2.0F));
        print("Before WaitAndPrint Finishes " + Time.time);
    }
    IEnumerator WaitAndPrint(float waitTime) {
        yield return new WaitForSeconds(waitTime);
        print("WaitAndPrint " + Time.time);
    }
}

function Update () {

}*/