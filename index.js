var a=10
a++
console.log(a)

var b=10
b--
console.log(b)// c = 10

 var c=10 
 var d=c++          // d gets 10 first        // then c becomes 11
 console.log(d)
 console.log(c);  // 11
 
  var c=10 
 var d=c--      // d gets 10 first        // then c becomes 11
 console.log(d)
 console.log(c);  // 11
 
 var f=30
 var g=++f
 console.log(g)
 console.log(f)

 var h=30
 var i=--h
 console.log(i)
 console.log(h)

 let age=20 //  this the postive number in the data type 
console.log(age)
console.log(typeof(age)) //this the learn of the data type so this the whole number without decimal point 

let price=100.50
console.log(price)
console.log(typeof(price)) // this is the learn of the data type so this is the number with decimal point is the floating point

let temperature=-30  // this the negative number in the data type 
console.log(temperature)
console.log(typeof(temperature)) // this is the learn of the data type so this is the negative number

console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity
let maxUsers = Infinity; // this is infinity is the maximum number of users that can be handled by the system
console.log(maxUsers);

console.log("JavaScript" / 2); // NaN (Not a Number) - this is the learn of the data type so this is the not a number because the string cannot be divided by a number
console.log("JavaScript" - 2);

console.log(5e3) // this is the learn of the data type so this is the number in exponential notation which is 2 multiplied by 10 to the power of 4 (2 * 10^4) which equals 20000 (postive )
console.log(30e-2) // this negative number in exponential 

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// this the computer to talk with the datab  types core ( understand the data types )  this  binary number
// THIS BASE 2 NUMBER SYSTEM IS USED IN COMPUTER TO REPRESENT DATA IN BINARY FORM (0 AND 1)-only mnumber used not regular contiues number(ex-123456789)
// 0b or 0B prefix is used to represent binary numbers in JavaScript 
//  if rules is the any any number power is the 0 i sthe value is the 1 ( example-  2^0=1, 3^0=1, 4^0=1, 5^0=1, 6^0=1, 7^0=1, 8^0=1, 9^0=1, 10^0=1)

let binaynumber=0b10 // this is the learn of the data type so this is the binary number which is 2 in decimal 
console.log(binaynumber) // 2

let binarynumber=0b11110   // this is the learn of the data type so this is the binary number which is 30 in decimal
console.log(binarynumber) // 30
let binarynumber1=0b0000000
console.log(binarynumber1) // 0
let binarynumber2=0b1100     //------this the  
console.log(binarynumber2) //  12

// this the octal number system is used in computer to represent data in octal form (0 to 7)
// base is the 8 and the prefix is the 0o or 0O is used to represent octal numbers in JavaScript
// ❌ Digits 8 and 9 are not allowed in octal.
// if rules is the any any number power is the 0 i sthe value is the 1 ( example-  2^0=1, 3^0=1, 4^0=1, 5^0=1, 6^0=1, 7^0=1, 8^0=1, 9^0=1, 10^0=1)

let octalnumber=0o10
console.log(octalnumber) // 8
let octalnumber1=0o77
console.log(octalnumber1) // 63
let octalnumber2=0o253565
console.log(octalnumber2)
let octalnumber3=0o032001
console.log(octalnumber3) // 13313

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// this the data types in number verous three type is the hexadecimal number system 
// the  used in computer to represent data in hexadecimal form (0 to 9 and A to F)A = 10
// B = 11
//C = 12
//D = 13
//E = 14
//F = 15
// base is the 16 and the prefix is the 0x or 0X is used to represent hexadecimal numbers in JavaScript
// Real-World Example-- this website clour css used 
// CSS color codes use hexadecimal:
// color: #FF0000; /* Red */
// color: #00FF00; /* Green */
// color: #0000FF; /* Blue */

let hexNumber = 0x2F;
console.log(hexNumber)

console.log(0x10); // 16
console.log(0x11); // 17
console.log(0x1F); // 31
console.log(0x20); // 32

// other bnumber how will come this 1 to 9 and A to F is the 10 to 15 and the 16 is the 1 and 0 is the 16 in the hexadecimal number system this the focus pont 
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// bigint is the new data type in JavaScript that can represent integers with arbitrary precision. 
//It is used to handle very large integers that exceed the safe integer limit for the Number type (which is 2^53 - 1). 
//BigInt values are created by appending 'n' to the end of an integer literal or by using the BigInt constructor.
//Real-World Use Cases
//Financial systems 
//Blockchain applications 
//Cryptography 
//Large database IDs 
//Scientific calculations 

console.log(9007199254740992 + 1);                // 9007199254740992  --------------(Incorrect)
console.log(9007199254740992n + 1n);            // 9007199254740993n (Correct)

// ----------------------------------------------------------------------------------------------------------------------------------
// 3 day curently studyit 


