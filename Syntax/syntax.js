//Task 1
//Write a program that prints all prime numbers in given range. Take sub from 1-100.

// class PrimalNumbers {
//   constructor(range) {
//     this.range = range;
//     this.primalNumbers = [];
//   }
//   setRange() {
//     let allNumbers = [];
//     for (let i = 2; i < this.range; i++) {
//       if (allNumbers[i] == undefined) {
//         this.primalNumbers.push(i);
//         for (let j = i + i; j < this.range; j += i) {
//           allNumbers[j] = 0;
//           //Wykreślamy (zmiana z undefined na "0") wszystkie wielokrotności najmniejszej liczby ze zbioru [allNumbers],
//           //większe od niej samej, to jest: dla 2 = 4 , 6 , 8... ; dla 3 = 6,9,12...
//           //Jeżeli liczba została wykreślona, nie spełnia warunku "if".
//           //Dla danej liczby this.range, wszystkie niewykreślone liczby mniejsze, bądź równe this.range są liczbami pierwszymi.
//         }
//       }
//     }
//   }
//   checkNumber(x) {
//     if (this.primalNumbers.indexOf(x) !== -1) {
//       console.log(`${x} is primal number.`);
//     } else {
//       console.log(`${x} isn't primal number`);
//     }
//   }
// }

//Task 2
//Write a guessing game where the user has to guess a secret number.
//After every guess the program tells the user whether their number was too large or too small.
//At the end the number of tries needed should be printed. It counts only as one try if they input the same number multiple times consecutively.

// class Player {
//   constructor(n) {
//     this.counter = 0;
//     this.range = [];
//     for (let i = 1; i <= n; i++) {
//       this.range.push(i);
//     }
//     this.guessedNumber = Math.floor(Math.random() * this.range.length) + 1;
//   }
//   guess(pickedNumber) {
//     while (this.guessedNumber !== pickedNumber) {
//       if (this.guessedNumber > pickedNumber) {
//         this.range.splice(this.range.indexOf(this.guessedNumber));
//         this.guessedNumber =
//           Math.floor(
//             Math.random() *
//               (this.range[this.range.length - 1] - this.range[0] + 1)
//           ) + this.range[0];

//         this.counter += 1;
//       } else if (this.guessedNumber < pickedNumber) {
//         this.range.splice(0, this.range.indexOf(this.guessedNumber) + 1);
//         this.guessedNumber =
//           Math.floor(
//             Math.random() *
//               (this.range[this.range.length - 1] - this.range[0] + 1)
//           ) + this.range[0];

//         this.counter += 1;
//       } else {
//       }
//     }
//   }
// }

// class Computer {
//   constructor() {
//     this.pickedNumber;
//   }
//   pickNumber(n) {
//     this.pickedNumber = Math.floor(Math.random() * n) + 1;
//   }
//   giveAnswer(playerOne) {
//     console.log(
//       `Player one has guessed intiger ${this.pickedNumber}, that computer picked in ${playerOne.counter} times.`
//     );
//   }
// }

// let playerOne = new Player(100);
// let computer = new Computer();
// computer.pickNumber(100);
// playerOne.guess(computer.pickedNumber);
// computer.giveAnswer(playerOne);

//Task 3
//Write a function that rotates a list by k elements.
//For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]. Try solving this without creating a copy of the list.

// function rotate(arr, k) {
//   let a = arr.splice(0, k);
//   console.log(arr.concat(a));
// }
// let arr = [1, 2, 3, 4, 5, 6, 7];
// rotate(arr, 3);

//Task 4
//Write a class that prints the list of the first n Fibonacci numbers.
//The first two Fibonacci numbers are 1 and 1. The n+1-st Fibonacci number can be computed by adding the n-th and the n-1-th Fibonacci number.
//The first few are therefore 1, 1, 1+1=2, 1+2=3, 2+3=5, 3+5=8.

// class Fibo {
//   first = 1;
//   second = 1;
//   temp;
//   code = [1, 1];
//   constructor(n) {
//     this.n = n;
//   }
//   getResult() {
//     for (let i = 2; i <= this.n; i++) {
//       this.temp = this.first + this.second;
//       this.code.push(this.temp);
//       this.first = this.second;
//       this.second = this.temp;
//     }
//     return this.code;
//   }
// }

// const myFibo = new Fibo(10);

// console.log(myFibo.getResult());

//Task 5
//Write a code that takes a number and returns a list of its digits. So for 2342 it should return [2,3,4,2].A243b -> [2,4,3].

// function myFunc(arg) {
//   let a = arg.split("").map(index => parseInt(index));
//   let b = a.filter(index => isNaN(index) !== true);
//   console.log(b);
// }
// myFunc("a2b3asrbg123");

//Task 6
//Write function that translates a text to Pig Latin and back.
//English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word and adding ‘ay’.
//“The quick brown fox” becomes “Hetay uickqay rownbay oxfay”.

// let regex = /[,.]/g;
// class SentenceConverter {
//   constructor(sentence) {
//     this.sentence = sentence
//       .split(" ")
//       .map(word => (word + word.charAt(0)).substring(1).toLowerCase() + "ay")
//       .toString()
//       .replace(regex, " ");
//   }
//   showConverted() {
//     console.log(this.sentence);
//   }
// }

// let sentence = new SentenceConverter("Ala ma kota");

// sentence.showConverted();
