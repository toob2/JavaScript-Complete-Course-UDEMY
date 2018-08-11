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
// Scope Chain - which contains the current variable objects as the variable objects of all its parents

