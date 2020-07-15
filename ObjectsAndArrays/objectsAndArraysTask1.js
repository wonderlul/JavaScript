//Task 1
//Extend String type with the reverse() function. The function is to reverse the value of the string on which it was called.

String.prototype.reverseFunction = function () {
  // Step 1. Use the split() method to return a new array
  let splitString = this.split("");
  // hello => ["h", "e", "l", "l", "o"]

  // Step 2. Use the reverse() method to reverse the new created array
  let reverseArray = splitString.reverse(); // let reverseArray = ["h", "e", "l", "l", "o"].reverse();
  // ["o", "l", "l", "e", "h"]

  // Step 3. Use the join() method to join all elements of the array into a string
  let joinArray = reverseArray.join(""); // let joinArray = ["o", "l", "l", "e", "h"].join("");
  // "olleh"

  //Step 4. Return the reversed string
  console.log(joinArray); // "olleh"
};

"Michal".reverseFunction();
