// JS is always hosted in some environment - and that is most typically the browser (Chrome, Firefox, Safari, etc)
// there can be also some other hosts such as Node.js web server or even some applications that accept JS code input


// when we write our JS code and we want to actually run it - there is a lot of stuff happening behind the scenese
// what happens is that the Host, where the JS is hosted has some kind of JS engine - that takes our code and executes it - so in very simple terms - JS host is a program that executes JS code - there are many different engines out there like - Google's V8 engine (written in C++), FF SpiderMonkey, JS Core and many more

//First thing that happens inside the engine is - our code is parsed (divides into small parts that can be analyzed - to parse) inside the Parser - which basically reads our code line by line, and checks if the syntax we gave it is correct, and if we make some mistakes, it throws an error and stops the execution. If everything is correct, then parser produces data structure called Abstract Syntax tree, which is then translated into Machine Code - and this code is no longer a JS code, but a set of instructions that can be executed directly by the computer's CPU. And its only when our code is converted to Machine code it actually runs and does its' work




// Now let's focus on order in which the code is run - and that is called 'Execution Context'
// All JS code needs to run in an enviornment and this environment is called the Execution Context
// You can imagine Execution context like a Box or Container which stores variables and in which a piece of our code is evaluated and executed

//-***** Important***** The default Execution Context is always the Global execution context - and it is for variables and functions that are not inside of any function

// Global execution context is associated with the Global Object - which in case of the browser is the Window object
// So everything that we declare in the Global Context, gets automatically attached to the Window Object in the Browser

// and it works like this - declaring a variable `lastName === window.lastName` is the exact same thing

// lastName === window.lastName;

// its like lastName is a property of the window Object - as he mentions in the intro lecture, properties are just variables attached to Objects, so this should make sense





// But what about code that is inside of a Function? it is very simple actually, because each time we call a function, it gets it own Execution Context

//example
var name = 'John';                 //this first declaration is not in any function, so we are in the Global execution context
                                   // so this variable is stored in the global object
console.log(window.name);          // and you can see it by console logging - you get John in the console



function first(){                  //1. this function declaration is also in the Global execution context.  
   var a = 'Hello';
   second();
   var x = a + name;
}

function second(){                  //1. this function declaration is also in the Global execution context.
   var b = 'Hi';
   third();
   var z = b + name;
}

function third(){                   //1. this function declaration is also in the Global execution context.
   var c = 'Hey!';
   var z = c + name;
}



first();                            //2. this is where the fun begins - we call our first function - and as mentioned before, each time a function is called, it gets its new execution context - and what happens is that this new context is put on the top of the current context, forming the so called 'EXECUTION STACK'. So for the duration of the first() function call, the execution context for that function becomes the active context in which the code is executed


// now let's get inside our first() function - so this `a variable` will now get stored in the execution context for this function and not anymore in the global context

// then we call the `second()` function - and once again a new execution context will be created and put on the top of the Execution stack and this context will now be the Active context

// so now `var b` is stored in this new execution context

// and now we call the `third()` function - and once more a new execution context is created and put on top of the stack

// and inside of the `third()` function we only have 2 variable declarations and nothing more. So this function has now done all of its work, and we say that the functions 'returns' - so what happens to its execution context? - it just gets removed from the top of the stack. and then the context of the `second()` function which called the `third()` function goes back to being the active context. So the `var z` gets stored in the active context and after the function returns, the context is also removed from the top of the stack

// and we are back to the `first()` function now - and here the same thing, the function is done and it returns, so we exit it and the execution context is removed from the top of the stack

// and like this we executed 3 functions, created 3 execution contexts and removed them from the top of the stack when the functions returned



// Execution Context in detail:
// firstly we can associate an Execution context with an Object

// and this is what we have here: Execution context object and this object has 3 properties:

// Variable Object (VO) - which will contain function arguments in a variable declarations as well as function declarations
// Scope Chain - which contains the current variable objects as well as the variable objects of all its parents
// 'This' Variable

// So how is the Execution Context created - let's start with what we already know - when a function is called, a new execution context is put on the top of the execution stack - and this happens in 2 phases:
   // 1. Creation phase - in this phase basically the properties of the execution context are defined
         // a. First we have Creation of the Variable Object (VO)
         // b. Then Creation of the Scope Chain
         // c. Lastly Determine value of the 'this' variable
               
   // 2. Execution phase
         // The Code of the function that generated the current execution context is ran line by line




// 1a) Creation of the Variable object (VO) in the Creation phase
      // The argument object is created, containing all the arguments that were passed into the function
      /****these next 2 points is what we commonly call 'HOISTING */
      // Code is scanned for 'function declarations': for each function, a property is created in the Variable Object, pointing to the function - this means that all the functions will be stored inside the VO even before the code starts executing
      // Code is scanned for 'variable declarations': for each variable, a property is created in VO and set to undefined.
      /*****/
      // Functions and variables are hoisted in JS which means that they are available before the Execution Phase actually starts
      // They are hoisted in a different way though, the difference between functions and variables is that functions are actually already defined before the execution phase starts, while variables are set to Undefined and will only be defined in the Execution phase. The Execution phase comes right after the Creation phase (btw Hoisting is sth that confuses a lot of new JS devs - so its super important that you understand it, next lecture is gonna have some examples on this)

      // so to recap - EACH EXECUTION CONTEXT HAS AN OBJECT, WHICH STORES A LOT OF IMPORTANT DATA THAT THE FUNCTION WILL USE WHILST ITS RUNNING, AND THIS HAPPENS EVEN BEFORE THE CODE IS EXECUTED






///////////////////////////////////
///// Lecture: HOISTING //////////
/////////////////////////////////
// btw u can open up a JS console in your text editor as well



// FUNCTION HOISTING
// so this is how we have been doing it so far, first we declare the function and then we call it

// function calculateAge(year){
//    console.log(2018 - year);
// }
// calculateAge(1985);


// but from what we learnt in the last lecture, we can also do this the other way round and use the function before we even declare it - and it still works - AND THIS IS HOISTING - so in the creation phase of the execution context, which is in this case the Global execution context, the function declaration 'calculateAge(1955)' is stored in the Variable Object (VO) even before the code is executed - and this is why when we enter the Execution phase, the calculateAge() function is already available for us to use - so we dont have to first declare the function and then use it, but we can first use it in our code and then later declare it.

// this only works for Function declarations, but there are also Function expressions

calculateAge(1955);

function calculateAge(year){
   console.log(2018 - year)
};


// so let's see how this works with Function expressions 

// retirement(1955);

// var retirement = function(year){
//    console.log(68 - (2018 - year));                            // retirement age - age
// }

// and this time it does not work - we get an error that retirement is not a function - and the reason for that is because this function is not a function declaration but a function expression  - and hoisting with functions only works for function declarations

var retirement = function(year){
   console.log(68 - (2018 - year));                            
}

retirement(1955);
// and now it is going to work




// VARIABLES HOISTING
// var age = 23;
// console.log(age);          // works as intended


// but what happens if we actually use the variable before we declare it? so once again we are trying to use this variable even before we declare it in our code, and btw i need to change it to age2 because im getting my global execution context polluted by the jsBasics.js file i think

console.log(age2);                  // and we get 'undefined'
var age2 = 23;

// and thats exactly how hoisting works with variables  - because remember that in the Creation phase of the VO is what happens is that the code is scanned for variable declarations and the variables are then set to undefined

// imagine we wouldnt have the variable declaration in the code and we would try to console log it? then we wouldnt get 'undefined' but we would get an error: age3 is not defined
// console.log(age3);


// but in this case, var2, JS knows that we have the variable, we simply do not have the value yet. and as you saw in one of the first lectures, variables that do not have the value yet,  will always have its value set to 'undefined'

function foo(){
   var age2 = 65;
   console.log(age2);             // 65
}
foo();
console.log(age2);               // and what is going to happen, is that we get 23 in the console

// so why does clg on line 182 print 65  nd clg on line 186 prints 23? its actually pretty simple coz this var age2 on line 171 gets stored in the Global Execution Context Object - so in a VO of the Global Execution Context Object
// and the function foo() gets its own Execution Context Object in which we can also store var age2, and it can be the same name and it doesnt rly matter, coz they are 2 completely different variables coz the 'var age2 = 65' is defined in the VO of the Execution Context Object of the function foo(), while 'var age2 = 23' is defined in the VO in the Global Execution Context Object.
// so each one gets its own VO
// and we can see that the hoisting works exactly the same way inside of the Execution Context Object for the fuction foo(), and we can attempt to do this - we get printed in the console that age2 is not defined, if we try to print it before we declare it

function foo(){
   console.log(age2);             // 
   var age2 = 65;
}
foo();


// ** the most effective way to use hoisting is the fact that we can use functions before we even declare them in our code **



//** CREATION OF THE SCOPE CHAIN */
// In previous lecture he talked about how the Execution contexts are created and how that is related to Variable and function hoisting - that was the 1st step of the Creation phase

// lets now talk about the 2nd step - the creation of the scope chain

// so what does scoping mean ? Scoping answers the question " where can we access a certain variable ?"
// EACH NEW FUNCTION CREATES A SCOPE:  the space/environment, in which the variables it defines are accessible
         // in many other programming languages, a scope is also created by if/while/for blocks, but not in JS
         // so here in JS the only way we can create a new scope is to write a new function
// LEXICAL SCOPING: a function that is lexically withing another function (which means that it is inside of another function) gets acces to the scope of the outer function (also called the parent function). and with that it also gets access to variables and functions that the parent function defines.

var d = 'Hello!';                    // Global Scope (VO global) - which is the scope acessible from anywhere from all functions
first();                                        // and in this scope we have access to 'var d' and also to the 'first()' function

function first(){                    // first() scope is everything inside of the 'first()' function, which defines the 'var e'
   var e = 'Hi!';                               // and the 'second()' function  - AND THIS IS A LOCAL SCOPE, NOT A GLOBAL SCOPE
   second();                                    // AND AS WE SAID BEFORE THANKS TO LEXICAL SCOPE, THIS SCOPE HAS ALSO ACCESS TO ITS                                                 PARENT'S SCOPE AND ALL THE VARIABLES AND FUNCTIONS THAT IT DEFINES - AND IN THIS                                                 CASE ITS THE GLOBAL SCOPE

   function second(){                  // second() scope  - in there we have a clg statement which attempts to print the variables                                        'd + e + f'. These variables are not defined in this function, only 'var f' is; but as we                                         already know, the scope has access to the variables and functions in which it sits                                               lexically. So when running the code, the JS engine wont find 'var e' in the function , so                                        it just goes up and sees 'var e' and uses it. and the same goes for 'var d' - it doesnt                                          find it in this function, so it goes a level up, it wont find it there so it goes up                                             another level and finds it in the Global Scope - and this is exactly what is called the                                          SCOPE CHAIN - only if the JS engine can not find a variable anywhere, it throws an error                                         and stops the execution. It's very important to note, that this DOES NOT WORK BACKWARDS, ie the Global scope will never ever have access to the 'var e' or 'var f' - unless we return the value from the functions. So locally scoped variables are not visible to their parent scopes
      var f = 'Hey!';                                      
      console.log(d + e + f);       // and we get printed in the console 'Hello!Hi!Hey!' - and its quite obvious why does this work
   }
}


// Execution stack vs Scope chain - its important to understand how these are related
            // you need to understand that Execution stack is different from Scope Chain
            // Execution stack is order in which functions are CALLED
            // Scope Chain is order in which functions are WRITTEN
            // It's the Execution Context that stores the Scope chain of each function in the VO, but they do not have an effect on the scope chain itself

// so what do u think is gonna happen now: notice that these functions are obv written differently and try to figure it out before watching

var A = 'Hello!';
First();

function First(){
   var B = 'Hi!';
   Second();

   function Second(){
      var C = 'Hey!';
      Third();
   }
}

function Third(){
   var D = 'John';
   console.log(C);
}

// and we get an ERROR on the line 252: that C is not defined - but why cant the 'Second()' function call the 'Third()' function?
// so because we got the error on line 252, it means that the function 'Third()' was called somewhere and as you correctly assumed this is possibly because of Scoping, so the 'Third()' function was called by the 'Second()' function. The 'Second()' function has access to the 'Third()' function because of the scope chain - it has access to the Global Scope in which the 'Third()' function is located lexically
// so why do we get this error that 'var C' is not defined? even though its the 'Second()' function who called the 'Third()' function? but still the 'Third()' function can not access the 'var C' which it is trying to clg
// and it should be obvious to you (its not) that the 'Third()' function can not access the 'var C' in the 'Second()' function because the Execution Stack is different from the Scope Chain
// To answer the question, who can access the 'var C' is that the order in which the functions were called does not matter. All that matters is that the 'Third()' function is in a different scope than the 'Second()' function so it can not access the 'var C'

// so which variable could the 'Third()' function actually access? It's variables 'var A, var D'

function Third(){
      var D = 'John';
      // console.log(C);
      console.log(A + D);           // AND THIS WORKS, COZ OF THE ABOVE - COZ THE BOTH VARIABLES ARE IN THE FUNCTION'S SCOPE
   }



//////////////////////////////////////////
///// Lecture: The 'THIS' keyword////////
////////////////////////////////////////

// as you have seen that  Execution Context has 2 steps : 1. Creation phase and 2. Execution phase
// Creation phase has 3 parts: VO, Scope Chain and the 'This' Keyword

// the last part of the Creation phase of the Execution context is determining and setting of the 'This' keyword
// the 'This' Variable is a variable which each and every execution context gets and as we already know, it is stored in Execution context Object
//FUNCTION CALL
// so where does this keyword point? in a regular function call, the 'this' keyword points at the global object (which is the window object in the browser - and this is the default, simple as that)
//METHOD CALL
// the 'this' variable points to the object that is calling the method

//******** the 'this' keyword is not assigned a value until a function where it is defined is actually called *******
      // so again even tho it appears that the 'this' variable refers to the object where it is defined, the 'this' variable is only technically assigned a value as soon as an object calls a method. That's because we know that the 'this' keyword is attached to an execution context which is only created as soon as a function is INVOKED (=CALLED, THE SAME THING)

console.clear();

//PRACTICE EXAMPLES

// console.log(this);            // and this means in the Global execution context simply the Window object - thats because the Window Object is the default object

calculateAge(1950);

function calculateAge(year){
   console.log(2018-year);
   console.log(this);                  // and once again 'this' is the Window object - and this is because this is a regular                                               function call, and not a method. In a regular function call, the 'this' keyword always                                           points to the Window object. And it actually makes sense, because the object that this                                           function is attached to is the Global Object
}

var John = {
   name: 'John',
   yearOfBirth: 1990,
   calculateAge: function(){
      console.log(this);
      console.log(2018 - this.yearOfBirth);

      //but let's take this a step further and add a function inside of this method
      // so now when we call the John.calculateAge() method, not only the 305,306 clgs will be printed but also the bellow function will be declared and called and therefore the 'this' keyword will be clged as well
      // and now comes something that is quite strange - and that is the fact that the 'this' keyword points to the Window object.
      // it is quite counter intuitive and some ppl in the JS community do not agree with this, and say that the 'this' keyword in this case should still be pointing to the John Object, but to Jonas it makes sense that it does not, because it is simply a rule, and the rule is that when the regular function call happens then the default object is the window object. So once again the 'innerFunction()' is not a method, the method is 'calculateAge()'. Although it is written inside of the method, it is still a regular function, so when we call it the 'this' keyword will no longer point to the John Object but instead point to the Window Object - ***** IT IS VERY IMPORTANT TO KEEP IN MIND FOR FUTURE *****
      function innerFunction(){
         console.log(this);
      }
      innerFunction();  
   }
}



John.calculateAge();                   // the 'this' variable now is the John object, because the 'this' keyword refers to the                                                object that called the method


// so let's now complicate things - remember that the 'this' variable is only assigned a value only once the object's method has been called 

var Mike = {
   name: 'Mike',
   yearOfBirth: 1984,
}

// imagine that you want to calc Mike's age, and so we could go and copy the method from the John object above, but we could be really smart and do sth which is rly a common practice in JS - METHOD BORROWING

// AND ITS VERY SIMPLE TO DO 

Mike.calculateAge = John.calculateAge;

Mike.calculateAge();

// and this proves that the 'this' variable is only assigned a value when the object calls a method. If it wouldnt be like this then 'this' variable would always be the John object. 

