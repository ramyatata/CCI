/* Is Unique - Implement an algo to determine if a string has all unique characters. What if you can not use additional data strucutres */

function isUnique(string){
  //create a set
  //loop through string
    //push each character into set
  //if length of string === set return true
  //else return false

  var charSet = new Set();
  for(let char of string) {
    charSet.add(char);
  }

  return string.length === charSet.size;
}

/*************.  o(n^2) complexity no additional data structures *************/
function isUnique(string){
  //loop through char of string
   //compare char with rest of characters with for loop staring from next characters
     //if equal return false
  //return true

  for(var i = 0; i < string.length; i++) {
    for(var j = i +1; j < string.length; j++){
      if(string[i] === string[j]) {
        return false;
      }
    }
  }

  return true;
}

/*************  o(n) complexity *************/
function isUnique2(string){
  //create an object
  //loop through chara of string
   //check if key already exists
     //if exists return false
   //if key doesn't exist create a key with value 1
  //return true

  var chars = {};
  for(let letter of string) {
    if(chars.hasOwnProperty(letter)){
      return false;
    } else {
      chars[letter] = 1;
    }
  }

  return true;
}
