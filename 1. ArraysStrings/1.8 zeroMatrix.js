/**
 * 1.8: Zero Matrix
 * Write an algorithm such that if an element in an MxN matrix is 0, its entire
 * row and column are set to 0.
 */

 function zeroMatrix(matrix) {
  //find the rows and columns of matrix
  //create a new boolean matrix of M*N with falsy values
  //loop though rows
    //loop through colmns
      //check if value is zero
        //if zero
        //check if bool matrix value is false
        //if false cal rowColumnZero method
        //else set the boolMatrix value at same index to true
  //return the matrix

  function rowColumnZero(rowIndex, colIndex) {
    //iterate through the columns of the rows and mark them as 0
    //mark bool matrix also true
    //iterate through rows of col and mark them as 0
    //mark bool matrix equivalent also true

    for(var i = 0; i < cols; i++) {
      matrix[rowIndex][i] = 0;
      boolMatrix[rowIndex][i] = true;
    }

    for(var j = 0; j < rows; j++) {
      matrix[j][colIndex] = 0;
      boolMatrix[j][colIndex] = true;
    }
  }

  var rows = matrix.length;
  var cols = matrix[0].length;
  var boolMatrix = [];
  for(let i = 0; i < rows; i++) {
    var arr = [];
    for(let j = 0; j < cols; j++) {
      arr[j] = false;
    }
    boolMatrix.push(arr);
  }

  for(let i = 0; i < rows; i++) {
    for(let j = 0; j < cols; j++) {
      if(matrix[i][j] === 0) {
        if(!boolMatrix[i][j]) {
          rowColumnZero(i, j)
        }
      }
    }
  }

  return matrix;
 }
  zeroMatrix([[0,1,1],[1,1,1]]);

