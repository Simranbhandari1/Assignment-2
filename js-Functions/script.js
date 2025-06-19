// 1. Function statement or function declaration : Way of creating a function is known as function statement\


// function abc() {

//     console.log("Hello Everyone");
// }


// abc();
console.log("** Function statement or function declaration **");

a=1;
b=10;

function fun1() {

     return a+b;
}

console.log("Sum is", fun1());


//2. Function Expression : We can even Assign a function to the a variable

// var b = function () {

//     console.log("HEY PEOPLE");
// }
// b();


//difference between the two : function declaration or function statement and function expression
//in the function declaration the function is hoisted to the top but in the function statement the function is not hoisted on the top so it can't be called before the declaration 
//if you'll try to call it before the declaration it'll give an error of function name is not a function


//if you use let and const they are in temporal deadzone

console.log("** Function Expression **");


var func = function () {

    console.log("Welcome To Javascript");
}

func();



//Anonymous Functions : A function without a name is anonymous function

// function () {  
//     console.log("welcome");  
// }
console.log("** Anonymous function ***");
console.log("\nGives an error of Syntax Error as it is a type of function don't have its own identity ....it can be used to pass as a value to function or be used by storing in a variable like the function expression \n");

//  gives an error of Syntax Error as it is a type of function statement that requires a name otherwise you'll get a syntax error
 //basically they are used in a place where functions are used in values i.e for passing or to assign it to a variable


 //named function expression 
 //similar to function expression but instead of using anonymous function we use function with a name 

// var x = function yz()
// {
//     console.log("Named function");

// }

// yz();//give a reference error that yz is not defined
// x();
//if we want to print a function then we can do it by directly 
//argument function is also their
console.log("** Named function expression **");
var x = function yz()
{
    console.log(yz);

}

x();//output will be the function yz()



//difference between parameter and arguments?
console.log("** Difference betweeen Arguments and Parameters **");
function greet(name) {
  console.log("Hello, " + name);
}

greet("simran");

console.log("\nParameter=> These are variables listed in the function definition. Think of them as placeholders for the values a function will receive when it is called.\n");
console.log("\nArguments => These are the actual values passed to the function when calling it.They replace the parameters when the function runs.\n\n");
//parameters are in function definition while arguments are passed during function call
//we cant access the parameter outside the scope


//first class functions or first class citizens

//the function that take other functions as an arguments are first class functions

console.log("**First class Function**");

var  k = function (para1)
{

  console.log(para1);
}


k ( 
    function () {

        console.log("hello world");

    }
)


// o/p:-  ƒ () {

//         console.log("hello world");

//     }



// we can even return a function

var fun = function( para1)
{ 
    return function () {
        console.log("welcome");
    }
}


console.log(fun());


// o/p :-ƒ () {
//         console.log("welcome");
//     }



//Immediately Invoked functiion Expression (IIFE)

//those function which are executed as sooa as they are written 
//file in for data base connection we want as soon as our website starts the data base is connected 
//no pollution from global scope (we don't want that our function get effected due to global scope variables)+ immediately executed



// (function hi() {

//     console.log('DB CONNECTED');
// })();

// ()()//first one for definition second one is for calling



// ( () =>
// {

//     console.log("DB CONNECTED");
// })()

console.log("**First class Function**");
(function fun() {
    console.log("This is an IIFE");
})();


//if we have to use two IIFE together then you have to be careful as use semicolon before the previous as the conpiler doesnt know where it is ending so it give error 
//This gives an error:
//sol
// Uncaught TypeError: (...) is not a function
// Because JavaScript is interpreting the first pair of parentheses as a grouping operator, not as a function definition.

// () around function: wraps the function expression.

// Final () after it: invokes it immediately.


// ( (name) =>
// {
                                      
//     console.log(`DB CONNECTED ${name}`);
// })('simran')
//we can pass arguments also

//Arrow function 
console.log("**Arrow function**");

const sayHello = () => {

    console.log("Welcome");
};

sayHello();


//accepting arguments

const add = (j,k) =>
{

    return j + k;

};

console.log(add(1,1)); 


const sub = (a, b) =>  a - b; //one linear for one statement and you can directly return the value without
                                //no need to write  return statement

console.log("answer",sub(2,1));


const addition = (...nums) => {
  
    console.log(nums);                //array of arguments


};
//arguments in not their in arrow functions ......
addition(2,4,8,10);

function f () {
console.log(arguments);//output is array containing all the arguments
}

addition(2,4,8,10);

// function f (num) {
// console.log(num);
// }                          //output is 1

// f(1,2,3,10,5,7);


console.log("**Difference between arrow function and normal function is hoisting**");
console.log("**Hoisting is not available in arrow function**");
console.log("argument keyword doesnot work in arrow funtion ");

// console.log("**This**")

const obj = {


    value: 20,
    myFunc: () => {

        console.log("Value is " + this.value);    //value is undefined because its scope is global
    },                                            //so it was refering to window
    
      myFunction: function () {

        console.log("Value is " + this.value);    // value is 20
    },                                             //it refers to the scope in which they have have been declared
    
    };

    obj.myFunc();
    obj.myFunction();

//a 
    console.log("** Higher order function **");

 function multiply(a, b, cb){               //high order function
                                           
    let result = a * b;
    cb(result);
 }


 multiply(12, 1, function (val) {

    console.log(val);
 });              //callback

 multiply(14, 18, (val) => console.log(val));
 multiply(1, 1, val =>  console.log(val));

 //used in such cases in Which the work take some specific time to show the output
 //it can even return a function 

  function divide(a, b, cb){               //high order function
                                           
    let result = a / b;
    cb(result);
    return () => console.log(result);

 }

  let resultFunction = divide(100, 25, () =>{} );
  resultFunction();




//closures gives you access to an outer function's scope from inner function


console.log("**Example of Closure Function**");

function main() {
  const place = "Agra";

  function innerFunction() {

    console.log(place);

  }
   innerFunction();
}

main(); 


console.log("** another Example of Closure Function**");

function add(first) {

  function innerFunction(second) {
        
    res = first + second;
    console.log("Answer is ",res);

  }
   return innerFunction;
}

const result = add(1);
result(10);


