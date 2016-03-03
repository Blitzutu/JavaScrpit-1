// Geekwise JavaScrpit I - Day 3
// Skyler Goodwin
// 2-24-2016
//Notes


var num1 = prompt("Enter a Number.");
console.log(num1);
num1 = parseInt(num1);
var num2 = prompt("Enter a Second Number.");
console.log(num2);
num2 = parseInt(num2);
var sum = num1 + num2;
alert(sum)


a = 12;
b = 10;
a ++; // here the ++ is adding a +1 to the Var A Making it 12 + 1
b --; // Here the -- is subtracting -1 to the Var B making it 9.
// After doing the ++ or the --, the new number is then stored into the var a and var b.

/*
Definition: Identity / strict equality (===)

The identity operator returns true if the operands are strictly equal with no type conversion.
*/

var test1 = a === b; //false // the new Number 13 is compared   === (strict comparison, value and type) to the new Number 9.
var test2 = a > b; //true // here they number a (13) is to be greater than (b) which is true, 13 is bigger than 9.
console.log(test1 && test2); //false
console.log(test1 || test2); //true


var age = prompt("How old are you");
// This Var is prompting the browser to pop an alert asking a question.
if(age < 18){
  alert("You are too young.")
}
// this if statement is pulling the Var "age" from the previous prompt and comparing it to see if it is less than 18.
// if it is less than 18, the alert is triggered, Otherwise the browser loads correctly.





var age = prompt("How old are you?")
age = parseInt(age);
// at this point the parseInt is making sure that the data entered is actually a number.
if(isNaN(age)){
  alert("Invalid Response.");
}
// if th data entered is not a number, the Above response wil be triggered.
else if (age < 18) {
  alert("You are too young!")
}
// if the data entered is less than 18, the above response will be triggered.
else if (age >= 18 && age <=50) {
  alert("Welcome to the Site!")
}
// if the data eneted is between 18 and 50, the above response will be triggered.
else {
  alert("You are too old for this Site!")
}
// if the data entered is higher than 50, the above response will be triggered.


// Expliantion of Switches
// Switches aren't as Rigid as If Else Statements

var condition = "3";

switch (condition) {
  case 1:
    alert("foo")
    break;
  case 2:
    alert("bar")
     break;
    default:
      alert("wasn't foo or bar");
      break; // Add the last break so that if you come back months later and add new code
            // it wont break the current set of code and add a bug into the scrpit.
  case 3: // example
    alert("new case")
    break;
}

// Easier Explaination

var condition = "mae";

switch (condition) {
  case "male":
    alert("foo")
    break;
  case "female":
    alert("bar")
     break;
}


// TERANY CODE

var loggedIn = true;
var needsLogin = loggedIn ? false : true;

var age = 31;
var logout = age < 13 ? true : false;

//*This code is written out the "Long Way" Below.*

var loggedIn = true;
//var needsLogin = loggedIn ? false : true;
//*this line of code is wrriten out as below.*

if(loggedIn){
  needsLogin = false;
} else {
  needsLogin = true;
}

var age = 31;
//var logout = age < 13 ? true : false;
//*This line of code is written out as below.*
 var logout;
 if (age<13) {
   logout = true;
 } else {
   logout = false;
 }


var something = prompt("what is something you would like to do?")
if(!isNaN(something)){
  alert("invalid response")
} else {
  alert("That sounds fun!")
}
