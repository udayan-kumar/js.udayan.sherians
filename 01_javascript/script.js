// *******var, let, const deffines********


//var a; // declare karna
//var a = 12; // declare karna and intialize (first value dena)

// window mein add hota hai
// function scoped hota hai
// aap firse declared kar sakte hai same name se and error nhii aayega


//let a = 12 ; // window mein add nhii hota hai

// function name (){ // function declaration
//     let a = 20;
// }





//*********/ SCOPE ( GLOBAL, BLOCK , FUNCTION)**********


// var a = 12; // global scope

// {
//     var b = 20; // this will behave like as like a global scope and this will also work outside the block

// }

// function name(){
//     var c = 33; // this wil work upto nearest function and outside the nearest function the will not work

// }

// function name (){
//     if(true){
//         let a = 20; // this will work to the nearest/parent braces or curlie bracket

//     }
// }








//******REASSIGNED AND REDECLERATION***********


// var a = 12;
// a = 20; // reassigned
// var a = 23; // redeclareration (only use in var)

// let a = 20; 
// a= 34; // reassigned and redecleraton are not allow 


// ********* TEMPORAL DEAD ZONE **********

// utna area jeetne mein javascript ko pata to hai variable exist karta hai par wo appko value nhii de sakta hai

// only used for let not for var







//********** HOISTING IMPACT PER TYPE************


// hoisting --> ek veriable ko jab javascript mein banate hai to wo variable 2 hisso mein toot jata hai and uska intialization part neeche reh jata hai and uska deleration part upper chala jata hai

// var a = 12;
// //this will devided into two part

// var a; // first part after dividing
// a = 12; // second part after dividing

// first part wil goes on the top part of the code
// second part will goes down side of the intialisation
// thats why in var if we console log() before intializattion this will give us undeffined not will give not access ,,, but in other this will give not access because other doesnot have this property...

// var --> hoist --> gives undeffined
// let --> hoist --> gives  references error
// const --> hoist --> gives references error




//  ***********DATA TYPES***********

// data ka type
// 1. primitive data type --> aise sari values jinko copy karne par real cpy mil jaaye 
// string, number, boolean, null, undeffined, symbol, bigint


// 2. references data type --> inko copy karne par real copy nhii milegi but references milega parent ka 
// aarays[], objects{}, functions()



// ********* PERIMITIVE DAT TYPE**********

 // ******** STRING *************

 // ' ' --> single quotes
 // " " --> double quotes
 // ` ` --> backticks

 // in javascript ,, if we have to make string then we have to wrap them in --> single quotes, double quotes, backticks

 // let a = "udayan"; // string




 // ********* NUMBER **********

 // let a = 20;
 // let a = 20.3; 
 // both are number




 // ************ BOOLEAN ***********

 // boolean type --> true, false

 // let a = true;
 //let a = false;
// both are boolean 




// *********** NULL ***********

// null ka matlab hai aapne jaan bhuj kar koi value nhii dii hai

// let a = none; 




// ************* UNDEFINED **********

// undeffined ka matlab ki aapne ek veriable banaya aur usey value nhii di to jo value by default mili wo hai undefined

// let a; // its value will be undeffined not null




// *********** SYMBOL **********

// future mein hum koi libraries use karenge ab es case mein un libraries kai baar kuchh fields hoti hai jinse similar hum bhi bana dete hai aur galti se humari library ki original field ko change kar dete hai





// ************* BIGINT **********

// max value of anythings 

// let a =1233;  // let assumed that max value of a will be 1233 then if we have to exceed the value then we use "n" in last of the max value 

// let a = 1233n;
// a = a + 2n;
// then its value will be 1235n means value will be added in the maximum value






// ************ REFERENCES DATA TYPE **********

// if we give the value of any veriable in any bricket than its data type will be refences data type 

// let a = [1,2,3,4];
// let b = a;

// b.pop(); // pop --> this will used for delete any aaray

// then in both a and b one array will be deleted where as if we delete any thin perimitive data type then we will got changes in that in which i would changes




// ****************************


// DYNAMIC TYPING --> javascript mein static typing nhii hai and yanha par dynamic typing hai ,, jiska matlab hai aap data ko change kar sakte ho kyuki yanha par dynamic data type hai



//************************

// + --> in javascript this will used as adding as well as concatination (dono ko ake sath print kar dega)
// if we add them (string + number ) then plus sign work as a concatination not as a adding 

// - --> in javascript this will used as subtraction only
// if we subtract them (string -number) then string will convert into number and subtraction will occur ,,, because in javascript (-) only work as a subtraction thats why string will change into number

// TYPE COERCISION --> concept in javascript in which one type will autometically converted into second type (upper will work because for this reason)







// *************** TRUTHY VS FALSY VALUES **************

// false values by nature --> 0, false, "", null, NaN, document.all, undefined

// rest all value's nature will be true



// *********************************

// why NaN is a numer in javascript?

// let a = 2 * udayan;

// result will be NaN because ,,, NaN will work a as failed number ,, in question udayan is not a number then the result is failed and javascript will give us NaN as result




//**********************************

// what is the differences in null and undefined?

// in javascipt if we can't provide value in the vareable then we got undefined as a result by default , this will given by javascript not i will provided in vareable..

// in any veraible we don't provide any value but i want to intialize the number then we provide null in veriable and result will be null ,,, this is not provided by javascript by default ,,,, this will provided by me

// ************************************

// "5" +1 = 51
// "5" -1 = 4
// differences between them? 

// due to type coercision





// *********************** OPERATOR **********************


// ****************** ARITHMETIC OPERATOER ******************

// arithmeti operator --> +, -, *, /, %

// 1 + 2 = 3
// "har" + "shit" = harshit (concatination)

// 12 - 3 = 9

// 12 / 6 = 2

// 12 * 2 = 24

// 12%5 = 2  (modulus give us remainder as a result)

// 2 ** 3 = 8 ( ** work as exponential)



// **************** COMPARISION OPERATOR **************

// comparision operator --> = , == , === , != , !== , >= , <= , < , >

// = --> value dalna // assigned operator

// 12 == 13 // false
// 12 == "12" // true
// just checked the value are equal or not ,, they don't checked nature are equal or not

// 12 === "12" // false
// checked the nature of the value given as well as value 

// 12 != 13 // true
// 12 != "12" // false
//just checked the value are equal or not ,, they don't checked nature are equal or not

//12 !== 13 // true
// 12 !== "12" // true
// checked the nature of the value given as well as 



// **************** ASSIGNMENT OPERATOR ************

// assignment operator --> = , += , -= , *= , /= , %= 

// let a = 12;
// a+=3  // 15

// a-=4  // 8 

// a*=3  // 36

// a/= 2  // 6

// a%=5  // 2

// calculate the value and update them



// *********** LOGICAL OPERATOR **********

// logical operator --> && , || , !




// ************** UNARY OPERATOR ****************

// logical operator --> + , - , ! , typeof , ++ , --

// +"5" = 5 // if the string can change into number than we put + before the string and string will changed into number and the number will be came in poisitive

// -"5" = -5 //  if the string can change into number than we put - before the string and string will changed into number and the number will be came in negative

// !12 // false 
// we can check inverted typeof value

// typeof 12 // number
// we can check the nature of the veriable

// ++2 //3 preincrement the value
// 2++ //2 post increment the value
// 2++ + 3 // 6
// we will add 1 in the given number

// --2 //3 predecrement the value
// 2-- //2 postdecrement the value
// 2-- + 3 // 4
// we will add 1 in the given number



// ************** TERNARY OPERATOR ****************

// ?: --> ternary operator

// ? --> if true than print
// : --> if false than print




// **********************************

// InstaceOf --> 


// a InstaceOf aaray  --> it checked a is a part of aaray or not ,,, and it gives value in true and false,,, its only work for references data type






// *************** CONTROL FLOW *****************

// if else --> 

// if (// condition = if this condition will true then this will work ){
//     //what we have to print
//     }
// if the upper condition will not work then this will work
//     else if(){
//        // what we have to print
//     }


// switch case -->

// switch(// value){

//     case 1: 
//     console.log();
//     break; // this is used for tthe next code will not run in that function,, if we not use this then next code will also run in that function

//     case 2: 
//     console.log();
//     break;

//     case 3:
//     console.log();
//     break;
//     default;

            // that case will run in which their value will be matched with value given in switch condition

// }






// ****************** ROCK PAPER SCISSOR GAME **************

// function rps (user , computer){

//     if(user === computer) return "draw";

//     if(user === "rock" && computer === "scisssor") return "user";

//      if(user === "scissor" && computer === "paper") return "user";

//       if(user === "paper" && computer === "rock") return "user";

//       return "computer";

// }

// console.log(rps("scissor", "scissor"));






// *********** LOOPS ********** 

// anything that will repeate called loop


// kanha se jana hai --> kanha tak jana hai --> kaise jana hai --> for loop

// kanha se jana hai --> kab rukn hai --> kaise jana hai --> while loop




// ****** FOR LOOP ********* 

// for(start ; end ; change){
//     // what i have to run
// }

// for (let i = 1; i<101 ; i++){
//     console.log(i);  // print 1 to 100
// }



// ********** WHILE LOOP ******** 

// let i = 1;  // start
// while (end ){
//     // code
//     change
// }



// ********  DO WHILE LOOP **********

// let i =1;  // start   

// do{
//     console.log(i); // what i have to run
//     i++; // change
    
// } while(i<20) // end or condition

// if the condition is wrong no matter one time code will run in do while loop ,,, where as in while loop if the end or condition is wrong then while loop is not run




// ******* BREAK AND CONTINUE *********


// for(let i = 1; i<201; i++){
//     console.log(i);
//     if(i == 34){
//         break;  // it is used ,, when i want to stop after what i want to print ,, means i want to stop when i == 34 then i use  break and after that code will stop running after 34 print
//     }
    
// }

// for(let i =1; i<201 ; i++){
//     if (i == 45){
//         continue;  // it is used to skip that number ,,,, means i want to skip 45 number than i use continue after using, 45 will not print and code will run continue with not printing 45
//     }
//     console.log(i);
    
// }







// *********** FUNCTION **********

// uses --> if i want to write a code and run it,, but i want that after just writing the code , code will not run ,,,,, when i call them then code will run ,, then i have to use function in our code

// ***** DECLARATION OF FUNCTION

// function udayan(){   // udayan is the name of function,, when i have to call the function i can call them with udayan();
//     console.log("happy birthday ");
    
// }

// udayan(); // i can call the function

// let fcn = function(){  // second method to declare any function
//     console.log("I love You");
    
// }

// fcn();




// ***** ARROW FUNCTION DECLARATION

// let fcn = () => {
//     console.log("udayan singh");
    
// }

// fcn();




// ******** PARAMETER AND ARGUMENT

// function udayan(// parameter){    // parameter take value from argument and code will run according to argument value
//     console.log("udayan singh")    
// }

// udayan(// argument);

// function udayan(val1 , val2){
//     console.log(val1 + val2);
    
// }

// udayan(3 , 4);



// ********  DEFAULT PARAMETETR

// function udayan (val = 1, val2 = 1){  // i can give default value by which if argument doesn't provide any value than default value will be run
//     console.log(val + val2)
// }

// udayan();




// ********  REST AND SPACE PARAMETER

// jab argument kai sare ho to humein utne hi parameter banane parte hai ;;; esse bachne ke liye , hum rest ka use karte hai 

// ... --> rest --> function ke parameter space mein laga ho to wo rest operator hai and agar wo arrays and object mein laga wo sprade operator.


// function udayan(... val){
//     console.log(val);
// }

// udayan(1,2,3,4,5,6,7,8,9,10);



// function udayan (){   // return
//     return 22;
// }

// let kumar = udayan();

// console.log(kumar)


//**********  FIRST CLASS FUNCTION

// function ko kisi value ki tarah treat kar sakte hai

// let kumar = function udayan (){
//     console.log("udayan singh")
// }

// kumar();




// **********  HIGH ORDER FUNCTION


// high order function wo function hota hai jo ki return kare function ya fir accept kare ake function apne parameter mein


// function udayan (){
//     return function () {
//         console.log("udayan singh");
//     };
// }

// udayan()();



// ********* PURE FUNCTION AND IMPURE FUNCTION

//****** PURE FUNCTION 

    // function jo bahar ka value na badle 

// function udayan (){
//     console.log("udayan singh");
// }

//**********  IMPURE FUNCTION  


// jis function se bahar ka value badal jaaye

// let a = 13;
// function udayan(){
//     a++;
//     console.log(a);
// }


// ********** CLOUSERS

// ake function jo return ake aur funvction aur return hone wale function humesha use karega parent function ka koi variable

// function udayan (){
//     let a  = 13; 
//     return function (){
//         console.log(a);
//     }
// }


// *******  LAXICAL SCOPING

// kisis function ka janha tak scoipe rahega wanha tak uska value le sakte hai

// function abcd(){
//     let a = 12;
//     function efgh(){
//         let b =23; 
//         function ijk(){
//             let c = 34;
//         }
//     }
// }


// ******** IIFE --> IMMEDIATELY INVOKED FUNCTION EXPRESSSION

// (function(){

// })();




// ****** HOISTING

// banne se pahle hum usko call kar sakte hai

// udayan();

// function udayan(){
//     console.log("udayan singh");
// }






// ************ ARRAYS ************ 

// let arr = [1,2,2,3,4,5];    // creating array

// index number will be started from 0

// arr[2] = 29; // updating the array at second index number;;

// let arr = [1,2,3,4,5];

// arr.push(3987); // pushing any number in array in last

// arr.pop(3); //delete any number from array from the last 

// arr.shift(0); // delete number from starting in the array

// arr.unshift(3); // add any number in starting in the array

// arr.splice(2,3); // it removes the value from any index to any index


// let newarr = arr.slice(0,4); // it removes the value and store in new variable and original doesn't change

// let sr = arr.sort(function(a,b){  // sort means arrange any array in ascinding order or descinding order
//     return a - b; // arrange array in ascinding order
//     return b-a;  // arrange array in the descinding order
// })

// Array.forEach(function(val){  // forEach loop will be run for each array element and print them particularly
//     console.log(val);  // print all forEach value
// })

// let newarr = Array.map(function(val){ // it will run for every element of the array and make a new array and change all the element of original with val and put in newarray and size will be same of both
//     return 12; // this will return for each element of array in newarray
// })

// jab bhi aaapko aisa koi case dikha jaaye janha par ake array se naya array banega aur wo naya array kuchh value ko rakhega tab map use karenge;;



// let newarr = Array.filter(function(val){  // it will form newarray in which we pass the array which are satisfied from original array
//     return true; // array will passs to new array
//     return false; // array will not pass in newarray
// })



// let ans = Array.reduces(function(accumulator, val){ // it is used to make a single ;ement array ,, 
//     return accumulator + val; // add all the array and make a single array 
// },0)


// let va = Array.find(function(val){ // it is used to find any element of array 
//     return val === 1; // when i got first time 1 in the array then return came as a 1;
// }) 


// let any = Array.some(function(val){ // it used to satisfied any element satisfied or not ;; if satisfied then print true and if not satisfied then print false
//     return val> 2; // it check in the array that any element satisfied this condition or not
// })

// let ere = Array.every(function(val){ // it check all the element are satisfing or not ,, if all the element are satisfing then print true and if any one element not satisfing the condition then print false,,
//     return val >13; // it check in array that this condition are satisfied with all element or not;;
// })


// ******* DESTRUCTYING

// let arr = [ 1,2,3,4,5,6];
// let[a,b,c,d,e] = arr; // it take value from array given to new variable respectively


// let arr = [1,2,3,4,5,6,7,8];
// let arr2 = [... arr] // it wiull copy original array in newarray variable,, if i can change in newarry then original array will not change but newarray will change;;








// **************** OBJECT *********

// ******** CREATING OBJECT

// let obj = {
//     name : "udayan kumar",
//     age : 17,
//     food : "chila",
// }

// ***********  HOW TO ACCESS OBJECT

// obj.name --> i can access name of an object
// let aa = "name";

// obj[aa] // i can access name of object


// for(let key in obj ){
//     console.log(key, obj[key]);  // ican access both object and their answer particularly
// }

// Object.keys(obj); // it makes all the object element in one array

// Object.entries(obj); // it make array of array of object element 

// let obj2 = {... obj};  // it give access of all the object in newobject

// let obj2 = Object.assign({}, obj); // it gives access of all the object element in newobect and also add anything in newobject


// let obj2 = JSON.parse(JSON.stringify(obj));  // it is used to copy in deep in which if i can chnage in newobj than original object can't chnage but newobj will be chnaged