/*
  Array getters
  -------------------------
  Complete the functions below to get the first and last values from the array
*/

function first(arr) {
    return arr[0]; // complete this statement
}

function last(arr) {
  var a=arr.length
  return arr[--a]; // complete this statement
}

/*

  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 2, 3];
var names = ["Irina", "Ashleigh", "Mozafar","Ela"];


console.log(first(numbers));
console.log(last(names));

/* 
  EXPECTED RESULT
  ---------------
  1
  Mozafar
*/
