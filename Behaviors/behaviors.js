// Task 1
//Write a program that finds the longest palindromic substring of a given string. ‘karakis’, ‘baerren’, ‘kajak’, ‘inni’.

// "use strict";

// class Palindrome {
//   constructor(word) {
//     this.word = word;
//     this.reverseWord = word.split("").reverse().join("");
//     this.longestPalindrome = "There is no longest palindrome at the moment";
//   }

//   isPalindrome() {
//     if (this.word === this.reverseWord && this.word.length > 1) {
//       return `'${this.word}' is palindrome`;
//     } else {
//       return `'${this.word}' isn't palindrome`;
//     }
//   }

//   setLongestPalindrome() {
//     let currentLongestPalindromLength = 0,
//       longestPalindrome = "",
//       word = this.word;

//     function palindromeChecker(wordToBeChecked) {
//       let reverseWordToBeChecked = wordToBeChecked.split("").reverse().join("");
//       return wordToBeChecked === reverseWordToBeChecked;
//     }

//     for (let i = 0; i < word.length; i++) {
//       let currentWord = word.substr(i, word.length);

//       for (let j = currentWord.length; j > 1; j--) {
//         let currentSubstring = currentWord.substr(0, j);

//         if (
//           palindromeChecker(currentSubstring) &&
//           currentSubstring.length > currentLongestPalindromLength
//         ) {
//           currentLongestPalindromLength = currentSubstring.length;
//           longestPalindrome = currentSubstring;
//         }
//       }
//       this.longestPalindrome = longestPalindrome;
//     }
//   }

//   showLongestPalindrome() {
//     if (this.longestPalindrome) {
//       return `Longest palindrome in word '${this.word}' is '${this.longestPalindrome}'`;
//     } else {
//       return `There is no palindrome in word '${this.word}'`;
//     }
//   }
// }

// let myWord = new Palindrome("mikajakchal");
// console.log(myWord.isPalindrome());
// myWord.setLongestPalindrome();
// console.log(myWord.showLongestPalindrome());

//Task 2
//Given two strings, write a program that efficiently finds the longest common subsequence. ‘karol rolki’

// "use strict";

// class Palindrome {
//   constructor(firstWord, secondWord) {
//     this.firstWord = firstWord;
//     this.secondWord = secondWord;
//     this.longestMutualPalindrome;
//   }

//   setLongestMutualPalindrome() {
//     let palindromes = [],
//       bothWords = [this.firstWord, this.secondWord];

//     function palindromeChecker(wordToBeChecked) {
//       let reverseWordToBeChecked = wordToBeChecked
//         .split("")
//         .reverse()
//         .join("");
//       return wordToBeChecked === reverseWordToBeChecked;
//     }

//     bothWords.forEach(word => {
//       for (let i = 0; i < word.length; i++) {
//         let currentWord = word.substr(i, word.length);

//         for (let j = currentWord.length; j > 2; j--) {
//           let currentSubstring = currentWord.substr(0, j);

//           if (palindromeChecker(currentSubstring)) {
//             palindromes.push(currentSubstring);
//           }
//         }
//       }
//     });
//     this.longestMutualPalindrome = palindromes
//       .filter((item, index) => palindromes.indexOf(item) != index)
//       .sort((a, b) => b.length - a.length)[0];
//   }

//   showLongestMutualPalindrome() {
//     if (this.longestMutualPalindrome) {
//       return `Longest mutual palindrome between '${this.firstWord}' and '${this.secondWord}' is '${this.longestMutualPalindrome}'`;
//     } else {
//       return `There is no mutual palindrome between '${this.firstWord}' and '${this.secondWord}'`;
//     }
//   }
// }

// let myWords = new Palindrome("", "");
// myWords.setLongestMutualPalindrome();
// console.log(myWords.showLongestMutualPalindrome());

//Task 3
//Write a code that multiplies two matrices together. Dimension validation required.

// "use strict";

// class Matrix {
//   constructor(matrixA, matrixB) {
//     this.matrixA = matrixA;
//     this.matrixB = matrixB;
//     this.matrixMultiplication = "First run the multiplication operation";
//   }

//   isMatrix(matrix) {
//     let matrixNonPossibilities = [];

//     for (let i = 0; i <= matrix.length - 1; i++) {
//       if (matrixNonPossibilities.indexOf(matrix[i].length) === -1) {
//         matrixNonPossibilities.push(matrix[i].length);
//       }
//     }
//     if (matrixNonPossibilities.length > 1) {
//       matrixNonPossibilities = [];
//       return false;
//     }
//   }

//   showIfMatrix() {
//     let matrixA = this.matrixA,
//       matrixB = this.matrixB;

//     if (this.isMatrix(matrixA) === false || this.isMatrix(matrixB) === false) {
//       return "One of the variables isn't a matrix";
//     } else {
//       return "Both variables are matrixes";
//     }
//   }

//   multiplyMatrixes() {
//     let matrixA = this.matrixA,
//       matrixB = this.matrixB,
//       isMatrix = this.isMatrix;

//     function multiplicationFunction(matrixA, matrixB) {
//       let newEmptyMatrix = new Array(matrixA.length)
//         .fill(0)
//         .map(index => new Array(matrixB[0].length).fill(0));

//       return newEmptyMatrix.map((row, i) => {
//         return row.map((noUsageValue, j) => {
//           return matrixA[i].reduce(
//             (previousValue, currentValue, k) =>
//               previousValue + currentValue * matrixB[k][j],
//             0
//           );
//         });
//       });
//     }

//     if (isMatrix(matrixA) === false || isMatrix(matrixB) === false) {
//       return `You can only multiply matrixes`;
//     } else if (matrixA[0].length !== matrixB.length) {
//       return `You can only multiply matrixes, when matrix A column amount is exact as matrix B verses amount`;
//     } else {
//       this.matrixMultiplication = multiplicationFunction(matrixA, matrixB);
//       return `Multiplication completed`;
//     }
//   }

//   showResult() {
//     return this.matrixMultiplication;
//   }
// }

// let a = [
//   [1, 2, 3],
//   [4, 5, 6]
// ];

// let b = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// let myMatrix = new Matrix(a, b);

// console.log(myMatrix.multiplyMatrixes());
// console.log(myMatrix.showResult());
