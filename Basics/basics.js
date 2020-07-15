//Task 1
//	From years in array check for leap years [1974, 1900, 1985, 2000]

// let years = [1974, 1900, 1985, 2000];
// let year;
// for(let i=0; i<years.length; i++){
//     year = years[i];
//     if((year%100!==0 && year%4===0) || year%400===0){
//         console.log(year);
//     }
// }

//Task 2
// Calculate factorial of 7.

// let n = 7;
// let summary = 1
// while( n > 0 ){
//     summary *= n--;
// }
// console.log(summary);

//Task 3
// Calculate the sum of the odd items [1,6,23,8,4,98,3,7,3,98,4,98]

// let allNumbers =[1,6,23,8,4,98,3,7,3,98,4,98];
// let oddNumbers =[];
// let checkNumber;
// let sustainNumber;
// for(let i=0; i < allNumbers.length; i++){
// sustainNumber=allNumbers[i];
// checkNumber=allNumbers[i] %=2
// if(checkNumber != 0){
// oddNumbers.push(sustainNumber);
// }
// }
// console.log(oddNumbers);

//Task 4
// Choose highest and lowest values from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]. One loop run.

// let myArray = [1,6,23,8,4,98,3,7,3,98,4,98];
// console.log(Math.max(...myArray));
// console.log(Math.min(...myArray));

//Task 5
// Choose longest string from the array. [‘Karol’, ‘Adam’,’Lul’,’Politechnika’,’Super’,’Weekend’].

// let names = ["Karol","Adam","Lul","Politechnika","Super", "Weekend"];
// let longestName = names[0];
// for(let i=0; i < names.length; i++){
//  if(names[i].length > longestName.length){
//         longestName=names[i];
//     }
// }
// console.log(longestName)

//Task 6
// Choose all the indexes on the highest value from the given array. [1,6,23,8,4,98,3,7,3,98,4,98].

// let myArray = [1,6,23,8,4,98,3,7,3,98,4,98];
// let highestValue=Math.max(...myArray);
// let allOfHighestValues=[];
// for(i=0; i < myArray.length; i++){
//     if(myArray[i]==highestValue){
//     allOfHighestValues.push(i);
//     }
// }
// console.log(allOfHighestValues);

//Task 7
// Calculate average value from the given array for even numbers [1,6,23,8,4,98,3,7,3,98,4,98]

// let allNumbers =[1,6,23,8,4,98,3,7,3,98,4,98];
// let evenNumbers =[];
// let checkNumber;
// let sustainNumber;
// let sumOfEven=0;
// let averageValue;
// for(let i=0; i < allNumbers.length; i++){
// sustainNumber=allNumbers[i];
// checkNumber=allNumbers[i] %=2
// if(checkNumber == 0){
//     evenNumbers.push(sustainNumber);
// }
// }
// for(let i=0; i < evenNumbers.length ; i++){
// sumOfEven += evenNumbers[i]
// }
// averageValue=sumOfEven/evenNumbers.length;
// console.log(averageValue);

//Task 8
// Calculate average value of items at even indexes. Zero is not considered to be even number. [1,6,23,8,4,98,3,7,3,98,4,98]

// let allNumbers=[1,6,23,8,4,98,3,7,3,98,4,98];
// let evenNumbers =[];
// let checkNumber;
// let sustainNumber;
// let sumOfEven=0;
// let averageValue;
// let actualValueOfI;
// for(let i=0; i < allNumbers.length; i++){
// sustainNumber=allNumbers[i];
// actualValueOfI=+i;
// checkNumber= actualValueOfI %=2;
// if(i != 0 && checkNumber == 0){
//     evenNumbers.push(sustainNumber);
// }
// }
// for(let i=0; i < evenNumbers.length ; i++){
// sumOfEven += evenNumbers[i]
// }
// averageValue=sumOfEven/evenNumbers.length;
// console.log(averageValue);

//Task 9
// With a given start value of 0. Iterate the array and add even items and subtract odd ones. [1,6,23,8,4,98,3,7,3,98,4,98]

// let startValue = 0;
// let allNumbers = [1,6,23,8,4,98,3,7,3,98,4,98];
// let checkNumber;
// let sustainNumber;
// for(let i=0; i < allNumbers.length; i++){
// sustainNumber=allNumbers[i];
// checkNumber=allNumbers[i] %=2;
// checkNumber == 0 ? startValue +=sustainNumber : startValue -=sustainNumber;
// }
// console.log(startValue);
