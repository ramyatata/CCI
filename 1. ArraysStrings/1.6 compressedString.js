/*string compression - implement method to perform basic string compression using counts of repeated chars. eg:- aabccccaaa would become a2b1c4a3 */

function stringCompression(str){
    //create count and compressedString variables
    //add first char to compressedStr
    //loop through stringCompression
      //compare current char is equal to next char
        //if equal incremment counter
        //if not equal add counter, nextChar to compressedStr, set counter to 1
    //return compresssedStr

    var counter = 1;
    var compressedStr = str[0];
    for(var i = 0; i < str.length; i++){
       if(str[i] === str[i+1]){
          counter++;
       } else {
           compressedStr += counter;
           if(str[i+1]){
             compressedStr += str[i+1];
           }
           counter = 1;
       }
    }
    return compressedStr;
}
stringCompression('aaabbbcc')