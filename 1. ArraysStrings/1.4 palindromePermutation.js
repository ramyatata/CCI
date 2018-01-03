/* Palindrome permutation */

function palindromePermutation(string) {
  //remove spaces
  //convert to lowercase
  //count the occurence of each char
  //create and assign charCount = 0
  //loop thorugh countObj
    //check if value is not divisible by 2
    //increement char count
    //if charCount is >1 return false

  var charArr = string.replace(/\s/g, '').toLowerCase().split('');
  var length = charArr.length;

  var countObj = charArr.reduce((acc, char) => {
    acc[char] = acc[char] ? acc[char] + 1 : 1
    return acc;
  }, {});

  var charCount = 0;
  for(var key in countObj) {
      if(countObj[key] % 2 ){
          charCount += 1;
      }
  }

  return charCount <= 1;
}
palindromePermutation('lillil')