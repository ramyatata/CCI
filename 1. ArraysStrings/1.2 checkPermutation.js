
/* check permutation - write a method to replace all spaces in a string with %20 */
function checkPermutation(str1, str2) {
  //check length of strings
    //if not equal return false
  //split string into arrs
  //sort them
  //join
  //return comparision of strings

  if(str1.length !== str2.length) {
    return false;
  }

  var arr1 = str1.split('').sort().join('');
  var arr2 = str2.split('').sort().join('');

  console.log(arr1);
  console.log(arr2);

  return arr1 == arr2;
}

checkPermutation('dog', 'god');