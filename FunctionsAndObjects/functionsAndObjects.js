myArray = [1, 6, 23, 8, 4, 8, 3, 7];

//Task 1
//Create a function that returns the sum of all elements passed in array as parameter.

// console.log(myArray.reduce(callback));
// function callback(previousValue, currentValue){
// return previousValue+currentValue;
// }

//Task 2
//Create a function that returns sum of first and last elements of given array.

// function sumOfFirstAndLastValue(myArray){
//  return myArray[0] + myArray[myArray.length-1];
// }
// console.log(sumOfFirstAndLastValue(myArray));

//Task 3
//Create a function that takes a number and return factorial of that number.

// function factorial(x) {
//     if (x === 0)
//  {
//     return 1;
//  }
//   return x * factorial(x-1);
// }
// console.log(factorial(5));

//Task 4
//Create a function that returns given array in reverse order.

// function reverseOrder(myArray) {
//   let newOrder = [];
//   for (let i = myArray.length - 1; i >= 0; i--) {
//     newOrder.push(myArray[i]);
//   }
//   return newOrder;
// };
// console.log(reverseOrder(myArray));

//Task 5
//Create a function that based on given array returns new array in pattern
//[a,b,c,d,e,f] -> [a+b, c+d, e+f]    [1,3,4,1,0,3] => [4,5,3] function(array)=>array

// function newArrayFunction(myArray){
//     let newArray = [];
//     let result;

//     for(let i=0; i<=myArray.length - 2; i+=2){

//     result = myArray[i] + myArray[i + 1]
//     newArray.push(result);
// }
// return newArray;
// }
// console.log(newArrayFunction(myArray));

//Task 6
//For time of this example remove last element from the given array.
//Create a function that based on given array return new array in pattern [a,b,c,d,e] -> [a+b, c+d, e+e]

// myArray.pop();

// function newArrayFunction(myArray){
//     let newArray = [];
//     let result;

//     for(let i=0; i<myArray.length; i+=2){
// if(i < myArray.length-1){
//     result = myArray[i] + myArray[i + 1]
//     newArray.push(result);
// }
// else{
//     result = myArray[i]*2;
//     newArray.push(result);
// }
//     }
// return newArray;
// }
// console.log(newArrayFunction(myArray));

//Task 7
//Create a function the return one random element from given array. // use random function
// console.log(myArray[Math.floor(Math.random()*myArray.length)]);
//
//Math.random() function to get the random number between(0-1, 1 exclusive).
//Multiply it by the array length to get the numbers between(0-arrayLength).
//Math.floor() to get the index ranging from(0 to arrayLength-1).

//Task 8
//Create a function that takes two parameters: array and number off attempts.
//Based on number of attempts choose a random number from table that many times and return lowest one.

// function randomNumbers(myArray, x){
//    let i=1;
//    let lowestRandomNumbers=[];
//    while(i<=x){
//    lowestRandomNumbers.push(myArray[Math.floor(Math.random()*myArray.length)]);
//     i++;
//    }
//    return Math.min(...lowestRandomNumbers);
//    }
// console.log(randomNumbers(myArray,3));

//Task 9
//Create a function that takes given array.
//Then takes a random element, removes it from the array and pushes it to result arrays.
//This takes place as long as there are elements in source array.

// let newArray=[];
// let indexToRemove;

// function buildOfNewArray(myArray){

// while(myArray.length>0){
//    indexToRemove = myArray[Math.floor(Math.random()*myArray.length)];
//    newArray.push(indexToRemove);
//    myArray.splice(myArray.indexOf(indexToRemove),1);
// }
// return newArray;
// }
// console.log(buildOfNewArray(myArray));

//Task 10
//Create a function that on given array will perform operation of adding or subtracting elements.
//Operation is to be chosen at random. And return a result.[a,b,c,d] =>(((a+-b)+-c)+-d)

// let operatorsArray = [0,1]

// console.log(myArray.reduce(callback));
// function callback(previousValue, currentValue){
//     let operatorSign = operatorsArray[Math.floor(Math.random()*operatorsArray.length)];
//     if(operatorSign == 0){
//         return previousValue+currentValue;
//     }
//     else{
// return previousValue-currentValue;
// }
// }

//Task 11
//Create a function that will return the current day name in Polish.

// let dateWrapper = new Date();
// let currentDay = dateWrapper.getDay();
// switch(currentDay){
//     case 0:
//     console.log("Dzisiaj jest niedziela");
//     break;
//     case 1:
//     console.log("Dzisiaj jest poniedziałek");
//     break;
//     case 2:
//     console.log("Dzisiaj jest wtorek");
//     break;
//     case 3:
//     console.log("Dzisiaj jest środa");
//     break;
//     case 4:
//     console.log("Dzisiaj jest czwartek");
//     break;
//     case 5:
//     console.log("Dzisiaj jest piątek");
//     break;
//     case 6:
//     console.log("Dzisiaj jest sobota");
//     break;
// }

//Task 12
//Create a function that tells us how many days till Friday

// let dateWrapper = new Date();
// let currentDay = dateWrapper.getDay();
// switch(currentDay){
//     case 0:
//     console.log("Pozostało pięć dni do piątku");
//     break;
//     case 1:
//     console.log("Pozostały cztery dni do piątku");
//     break;
//     case 2:
//     console.log("Pozostały trzy dni do piątku");
//     break;
//     case 3:
//     console.log("Pozostały dwa dni do piątku");
//     break;
//     case 4:
//     console.log("Pozostał jeden dzień do piątku");
//     break;
//     case 5:
//     console.log("Dzisiaj jest piątek");
//     break;
//     case 6:
//     console.log("Pozostało sześć dni do piątku");
//     break;
// }

//Task 13
//Create a function that take two numbers and return the object with 4 fields. Result on 4 basic arithmetic operations.

// function basicOperations(x,y){
//     let newObject={
//         add: x+y,
//         sub: x-y,
//         mult: x*y,
//         div: x/y,
//     }
//     return newObject;
// }
// console.log(basicOperations(3,4));
