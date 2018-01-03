/**
 * 1.5: One Away
 * There are three types of edits that can be performed on strings: insert a
 * character, remove a character, or replace a character. Given two strings,
 * write a function to check if they are one edit (or zero edits) away.
 *
 * EXAMPLE
 * pale, ple    -> true
 * pales, pale  -> true
 * pale, bale   -> true
 * pale, bake   -> false
 */

 function oneAway(str1, str2) {
  //check the length of strings
    //if difference of length is one
      //return isOneCharReplaced
    //if difference of length is 0
      //return isOneCharRemoved
    //else return false

    var diff = lengthDifference(str1, str2);

    if(diff === 0 ) {
      return isOneCharReplaced(str1, str2);
    } else if(diff === 1) {
      return isOneCharRemoved(str1, str2);
    } else {
      return false;
    }
 }

 function lengthDifference(str1, str2) {
  //return abs value of length difference
   return Math.abs(str1.length - str2.length);
 }

 function isOneCharReplaced(str1, str2) {
  //create varaible diffFound = false
    //loop through first string
    //compare chars of string at each index
      //if chars are not equal
        //if diffFound = false
          //set diffFound = true
        //else return false
    //return true

  var diffFound = false;
  for(var i = 0; i < str1.length; i++) {
    if(str1[i] !== str2[i]){
      if(diffFound) {
        return false;
      }
      diffFound = true;
    }
  }
  return true;
 }

 function isOneCharRemoved(str1, str2) {
  //assign longest string to s1 and shorter to s2
  //create a variable oneInsert = false
  //assign i and j to 0
    //while i < s1.length and j < s2.length
      //compare each char at index i and j
      //if chars are not equal
        //set oneInsert = true if oneInsert = false else return false
        //increement only i
      //else increement i and j
        //else return false
    //return true
  var s1 = str1.length > str2.length ? str1 : str2;
  var s2 = str1.length < str2.length ? str1 : str2;
  var i = 0, j = 0;
  var isOneInsert = false;
  while(i < s1.length && j < s2.length) {
    if(s1[i] !== s2[j]) {
      if(isOneInsert) {
        return false;
      }
      isOneInsert = true;
      i++;
    } else {
      i++;
      j++;
    }
  }
  return true;
 }