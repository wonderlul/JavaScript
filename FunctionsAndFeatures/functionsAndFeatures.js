//Task 1
//Create an iffe that returns an object with fields:
//function setValue(), function showValue() and function reverseValue().
// Calling functions either logs the value or reverse it in an object.
//If value was not provided yet or is empty showValue function is to return information about that.
//Value can be type string or number. reverseValue():  If number do (*(-1)), if string reverse it.  Closure pattern.

// let iife = (function(value) {

// let innerValue = value;

// let setValue = function(){
//     if(innerValue !== undefined){
//         return innerValue;
//     } else{
//         return "Your value is not defined"
//     }
// }
// let showValue = function(){
//     if(innerValue === undefined){
//     return "Your value is not defined";
// } else {
//     return "Current value is " + innerValue;
// }
// };
// let reverseValue = function(){
//     if(typeof innerValue === "number"){
//         return innerValue*(-1);
//     } else if(typeof innerValue === "string"){
//         return innerValue = innerValue.split("").reverse().join("");
//     } else {
//         return "Your value is not defined";
//     }
//  }

// return {
//     setValue: setValue(),
//     showValue: showValue(),
//     reverseValue: reverseValue()
// }
// })();

// console.log(iife.reverseValue);

//Task 2
//Create four function definitions. One for every basic math operations and taking two input parameters. Create one more function.
//This function is to return calculation object.
//This object is to have parameters object field that holds two operation parameters inside (x and y).
//Function field that points to a function with math operation (defined at the beginning).
//A function setOperation() that sets the field from previous sentence and a Calculate function that makes calculation and returns its value.

// let add = function (x, y) {
//     return x + y;
// }
// let sub = function (x, y) {
//     return x - y;
// }
// let multi = function (x, y) {
//     return x * y;
// }
// let div = function (x, y) {
//     return x / y;
// }

// let calculationObjectFunction = (function (firstValue, secondValue, callback) {
//     return calculationObject = {
//         x: firstValue,
//         y: secondValue,
//         setOperation: callback,
//         calculate: function () {
//             return this.setOperation(this.x, this.y);
//         }
//     }
// })(3, 4, div);

// console.log(calculationObject.calculate());

//Task 3
//Create an array (by hand) of objects and call sum() function in context of each one of them.
//Sum function is to come from this object  BaseObject = { X,y, sum: function (){ return this.X+this.y}}

// let myArray = [
//    {
//        x: 4,
//        y: 5,
//    },
//    {
//        x:6,
//        y:2,
//    },
//    {
//        x: 9,
//        y: 4,
//    }]

//    for(i=0; i<myArray.length; i++){
//        let myObject = {
//            x: myArray[i].x,
//            y: myArray[i].y,
//            sum: function(){
//             return this.x+this.y;
//            }
//        }
//      console.log(myObject.sum());
//    }

//Task 4
//Given an array of objects, for each object call operation() function in context of next object.
//If object is last, got back to start of the array for operation function. In loop;

// let myArray = [
//     {
//         x: 1,
//         y: ' object one value',
//         operation: function() {
//             return "object one prafix " + this.x + this.y;
//     }},
//     {
//         x: 2,
//         y: ' object two value',
//         operation: function() {
//             return "object two prafix " + this.x + this.y;
//     }},
//     {
//         x: 3,
//         y: ' object three value',
//         operation: function() {
//             return "object three prafix " + this.x + this.y;
//     }}
// ]

// for(i=0; i<myArray.length; i++){
//     if(i === myArray.length-1){
//     console.log(myArray[i].operation.call(myArray[0]));
// } else {
//     console.log(myArray[i].operation.call(myArray[i+1]));
// }
// }
