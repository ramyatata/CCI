/* URLify - write a method to replace all spaces in a string with %20 */

function urlify(string){
  //split the string on spaces
  //join the array back with '%20'
  //return the string

  return string.trim().split(' ').join('%20');
  //return string.trim().replace(/\s/g,'%20');
}

urlify('Happy Chris mas');
