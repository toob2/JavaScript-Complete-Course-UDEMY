// // ////////////////////////////////////////////////////////////////////////////////////////////
// // // LECTURE: VARIABLES AND DATA TYPES //////////////////////////////////////////////////////
// // //////////////////////////////////////////////////////////////////////////////////////////

// // // in JS there are 5 primitive data types - primitive means that they are not objects
// // // 1. Number - in JS all numbers are floating point even if they do look like an integer. ie 5 is always 5.0 , which isnt always like this in all programming languages
// // // 2. Strings - sequence of characters which are used for text
// // // 3. Boolean - is a logical data type, that can take only TRUE or FALSE. ITS ALWAYS EITHER TRUE OR FALSE
// // // 4. Undefined - is automatically assigned to a variable that doesnt have a value yet
// // // 5. Null - non-existent

// // // IMPORTANT THING - JS HAS DYNAMIC TYPING - which means datat types are automatically assigned to variables, and we dont have to manually define them unlike in many other programming languages. Basically JS
// // // automatically figures out whether the variable is a string, number etc and then assigns that data type to the variable without us having to do anything. And if we later assign another data type to the
// // // variable, then JS will automatically re-assign its data type. This can be useful but also can become difficuilt because it can cause us having hard time finding bugs. so we always have to be careful with what we do with our variables

// // var firstName = 'John';
// // var lastName = 'Smith';
// // var age = 34;

// // var fullAge = true;
// // console.log(fullAge);                     // and we get slightly different colour in the console, blue for booleans

// // var job;                                  // this variable is undefined yet, coz it hasnt been assigned anything. we can later then go ahead and assign sth to it

// // job = 'JS ninja';

// // console.log(job);             

// // // rules - variables cannot start with numbers or symbols except for the dollar sign or underscore, and the best practice is to  use the camel case

// // //lets try to break some of these rules

// // // var 3years = true;                     // we get an error - Invalid or Unexpected token

// // var $3years = 3;                          // we could do this

// // var _3years = 3;                            // or this

// // // var &3years = 3;                          // but again this wont work, and Invalid or Unexpected Token error

// // // var john/mark = 'john + mark';            // and we cant use the symbols neither inside the variable name

// // // AND THE LAST RULE IS THAT WE CANNOT USE RESERVED JS WORDS AS VARIABLE NAMES

// // // var function = 3;                            // again we get an error of Invalid or unexpected token
// // // var delete = 4;            // this is a reserved keyword as well, obv you can googgle them up 



// // ////////////////////////////////////////////////////////////////////////////////////////////
// // // LECTURE: VARIABLE MUTATION AND TYPE COERCION ///////////////////////////////////////////
// // //////////////////////////////////////////////////////////////////////////////////////////

// // var firstName = 'John';
// // var age = 22;


// // // TYPE COERCION
// // console.log(firstName + ' ' + age);    // now in the console we get 'John 22' and the '22' is printed in the console
// //                                        // as a string AND THIS WORKS BECAUSE OF STH CALLED TYPE COERCE

// // // WHAT THIS MEANS IS THAT JS AUTOMATICALLY CONVERTS TYPES FROM ONE TO ANOTHER AS ITS NEEDED.
// // // so in the case above JS automatically converted the variable 'age' to a string so that the 3 strings in the clg can be joined together. Other programming languages are not like this, we would have to convert our variable. Joining strings like this is just one of many examples of Type Coercion


// // var job, isMarried;                 // we can declare more than one variable on the same line and assign them value later. Its a common practice and a bit cleaner, to declare them all in one line and then assign them

// // job = 'teacher';
// // isMarried = false;

// // console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried );
// // // as you can see in this example, even Boolean is converted here to a string ('isMarried') : 'John is a 22 year old teacher. Is he married? false'


// // //If we comment the variable isMarried out, then we should get in the console Undefined. So even Undefined is then COERCED to a string and we get: 'John is a 22 year old teacher. Is he married? undefined'




// // //VARIABLE MUTATION - basically means to change a value of the variable. This time we dont have to use the variable keyword, because the variable was already defined before. So when we wanna change it, we no longer need the var keyword
// // // now the variable age is a string and before it was  number, so JS automatically converts the data type on the fly, that is a magic of JS dynamic typing
// // age = 'twenty eight';
// // job = 'driver';

// // alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried );
// // // this time we are using 'alert', notice that the page is still loading until we click on OK. So it cannot finish loading until we click on OK

// // var lastName = prompt('What is his last name?');
// // // we can use prompt TO GET INPUT FROM THE USER AND THEN WE CAN STORE IT IN A VARIABLE. lets clg it just to make sure it works
// // console.log(firstName + ' ' + lastName);


//********************************************************
// // Basic Operators ******/
//*************************/


// in simple terms operators are like functions, that are written in a special way in JS
// var year = 2018;
// var yearJohn = 2018 - 28;                    // minus 
// var yearMark = 2018 - 33;                    // now we start using 2018 multiple times, so we can declare it a separate variable

// console.log(yearJohn);

var year, yearJohn, yearMark;                    // and this looks better by declaring all variables on one line
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - ageJohn;              
yearMark = now - ageMark;

console.log(yearMark);
console.log(now + 2);
console.log(now * 2);
console.log(now / 20);

//Logical operators
var johnOlder = ageJohn > ageMark;                 // false obv. We have a way now creating a boolean variable by using this                                                         logical operator
console.log(johnOlder);


//typeof operator - this one is a bit different as it doesnt require 2 operands to compare as the previous ones but just 1 operand
console.log(typeof ageJohn);                   // number 
console.log(typeof johnOlder);                // boolean
console.log(typeof 'I am a string');         //string 
var x;
console.log(typeof x);                      // undefined


//********************************************************
// // Operator Precedence ******/
//*************************/

//  in this example lets say we want to calculate if John is a full age only based on his year of birth. so what we can do is calculate the age and then compare it fullAge

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

/* Multiple Operators-****/
var isFullAge = now - yearJohn >= fullAge;          // you can do all of it on one line
// so how does JS know here which operator to execute first, because we have 2 operators here?
// in order to figure out why does this work, we have to think about operator precedence, WHICH MEANS WHICH OPERATOR IS EXECUTED FIRST
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// what we see is that the operators that are on the top of the list would be executed before the others
// so what we can see is that the 'minus' operator has precedence of 16 and the greater than or equal has precedence of 11. so the minus operator is going to be executed first

// the ASSIGNMENT OPERATOR '=' IS AN OPERATOR ITSELF AND IT HAS PRECEDENCE OF 3 (BTW RIGHT TO LEFT). AND THAT MAKES SENSE BECAUSE WE WANT THE ASSIGNEMNT HAPPEN AS THE LAST STEP !
console.log(isFullAge);




//****Grouping */
//lets now calcualte the avg age
var ageMark = 35;
var ageJohn = now - yearJohn;

var avgAge = ageMark + ageJohn / 2;          // so this obv wont work coz '/' has precedence of 14 and '+' has predence of 13. and the higher precedence is going to be executed first
// so what we need to do is 

var avgAge = (ageMark + ageJohn) / 2;        // '()' have precedence of 20, the highest possible one

console.log(avgAge);


//*****Multiple assignments ******// 
// lets say we have a value which we want to assign to multiple variables at the same time
var x, y;

x = (3+5) * 4 - 6;            // 8 * 4 - 6 // 32 - 6 // 26
console.log(x);

// if we want to assign this to x as well as y, we can simply do this:

x = y = (3+5) * 4 - 6;              // we get 26 26  in the console
console.log(x, y);

// and all of this happens of the precedence, and we also have the ASSOCIATIVITY, AND WHAT THIS MEANS IS THE DIRECTION IN WHICH THE OPERATION IS EXECUTED

// IE IF WE DO MULTIPLICATION OR ADDITION, WE HAVE LEFT TO RIGHT

// IE WE HAVE 2 + 4 + 6 , IT WOULD SIMPLY GET EXECUTED FROM LEFT TO RIGHT. SO FIRST  2+4 AND THEN 6+6

// BUT THERE ARE SOME OPERATORS WHICH WORK FROM RIGHT TO LEFT IE THE ASSIGNMENT OPERATOR

// SO IT DOESNT START WITH X = 26 BUT WITH Y = 26 AND THEN X = 26. COZ IF IT WORKED FROM LEFT TO RIGHT, YOU WOULD GET 
// X = Y = 26 , AND FIRST YOU WOULD GET X = UNDEFINED, COZ Y WOULDNT BE ASSIGNED YET


//*****More Operators ******// and u have them in the assigment section at the bottom of the precedence table, and they are also assignemnt operators
x = x * 2;        // and here we are actually repeating the 'x' and in js there is an easier way to do this   //52
x *= 2;           // this is the exact same as above  //104
x += 5;           // 109
x -= 100;         // 9
x /= 3;           // 3

x++;              // 4 - increment operator, if we want to add just one unit
x--;              // 3 - same way but subtracts one unit


console.log(x);






// //////////////////////////////////////////////////
// //////*****CODING CHALLENGE 1*******************//
// /////////////////////////////////////////////////

var markMass, markHeight, JohnMass, JohnHeight;

markMass = 105;
markHeight = 1.90;

johnMass = 80;
johnHeight = 1.75;

var markBMI = (markMass / markHeight) / markHeight;
var johnBMI = (johnMass / johnHeight) / johnHeight;

var markHigherBMI = markBMI > johnBMI;

console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);          // btw you have to escape the special characters by using backslash, its called ESCAPING - ITS RLY COMMON IN PROGRAMMING AS WELL

// we can check both in the console, remember you can console log 2 or more variables at the same time

console.log(markBMI, johnBMI);


//********************************************************
// // If/Else statements ******/
//*************************/

//js as well as most programming languages has a couple of control structures which are features that allow us to execute only certain parts of our code or to execute parts multiple times

// First one is If / else statement - which is is a conditional which allows us to take decisions using code

var firstName = 'John';
var civilStatus = '';

// now we want to log into console whether he is married or not and for that we can use if / else statement

if (civilStatus === 'married'){
   console.log(firstName + ' is married!');
}
else {
   console.log(firstName + ' is not married!!!')};

// or we can already have a boolean variable ready

var isMarried = true;

if (isMarried){                                                         // we can basically pass in just the boolean value,                                                               we dont have to pass in isMarried = true, coz its already a Boolean
   console.log(firstName + ' is married!');
}
else {
   console.log(firstName + ' is not married!!!')};


// now  knowing the IF statement we can simply redo our coding BMI challenge

var markMass, markHeight, JohnMass, JohnHeight;

markMass = 105;
markHeight = 1.90;

johnMass = 120;
johnHeight = 1.75;

var markBMI = (markMass / markHeight) / markHeight;
var johnBMI = (johnMass / johnHeight) / johnHeight;

var markHigherBMI = markBMI > johnBMI;

// console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);   

if (markBMI > johnBMI){
   console.log('Mark\'s ass is fattier than JohnnyBoya');               // dont forget about the ESCAPING !!!
}
else {
   console.log('JohnyBoi\'s is fattier than Mark');
};



//***************************/
// // Boolean Logic ********/
//*************************/

// now we want to log into the console, depending on his age, whether he is a kid, teenager, youn men or etc. for that we can use ELSE IF BLOCK

// IN ORDER TO KNOW HOW BOOLEAN LOGIC WORKS, WE NEED TO TALK ABOUT BOOLEAN OPERATORS.BOOLEAN LOGIC IS A BRANCH OF CS WHICH DEALS WITH TRUE AND FALSE
// AND      &&        => true if ALL ARE TRUE
// OR       ||        => true if ONE IS TRUE. IT WORKS WITH MULTIPLE VARIABLES AS WELL, JUST ONE OUT OF 4 IE NEEDS TO BE TRUE 
// NOT      !         => inverts true/false value, if var a is true, then var NOT a is false and the other way round

var firstName = 'John';
var age = 20;

if (age < 13){
   console.log(firstName + ' is a boy.');
}
else if (age >= 13 && age < 20){                   // how do we express logically age between 13 and 20? age >= 13 AND < 20
   console.log(firstName + ' is a teenager.');  
}
// lets also talk quickly about the precedence of the operators above, '&&' has to be lower than >= <. The AND / OR OPERATORS MUST HAVE LOWER PRECEDENCE THAN THE COMPARISON OPERATORS BECAUSE THOSE NEED TO BE EXECUTED FIRST.
//LOGICAL AND/OR HAVE PRECEDENCE OF 5 AND COMPARISON GREATER THAN OR EQUAL TO AND LESS THAN HAVE PRECEDENCE OF 11 SO THEY ARE GONNA GET EXECUTED FIRST BY JS
else if (age >= 20 && age <= 38){
   console.log(firstName + ' is a young man.');  
}
else {
   console.log(firstName + ' is a grown up man.');  
};



//********************************************************
// // Ternary Operator and Switch  Statements ******/
//*************************/
  
// Ternary Operator allows us to write IF statement all in one line  ( ? : ) . ITS CALLED TERNARY BECAUSE IT HAS 3 OPERANDS, 3 PARTS THAT INTERACT - THE CONDITION, THE IF BLOCK AND THE ELSE BLOCK

//lets use the ternary operator to decide if John drinks juice or beer depending on his age
age = 18;

age >= 18 ? console.log(firstName + ' drinks beer!') : console.log(firstName + ' drinks juice!')

// But we can do even better and assign a value to a variable using the ternary operator in a very simple way

var whatJohnCanDrink = age >= 18 ? 'beer' : 'juice';        // so again this is about the precedence, the assignment operator gets executed as last - precedence 3. so the result of the part on the right will be assigned to the variable on the left in the end

console.log(whatJohnCanDrink);

// lets compare it to what we would have to write down using the If statement

if (age < 18){
   var drink = 'juice';
}
else {
   var drink = 'beer';
};

console.log(drink);

// its much neater to use the ternary operator, if we want sth as simple as assigning value to a variable depending on a condition

// Switch statement - this is like a huge 'ELSE IF' statement. we cant forget to add 'break;' coz if we won't then even tho if the first case is true and the job is a teacher, JS will still keep evaluating the next cases, also if none of them applies, we can add then default. the last one we dont have to break, because its the last one anyway.

// we can also have multiple clauses if we want to execute the same piece of code, IE IF HE IS A TEACHER OR AN INSTRUCTOR. then we can add simply another case


var job = 'instructor';

switch (job) {
   case 'teacher':
   case 'instructor':                                                    //basically if.... and adding multiple cases here
      console.log(firstName + ' teaches kids in school');
      break;
   case 'driver':                                                       // else if
      console.log(firstName + ' drives a truck');
      break;
   case 'porn actress':                                                 // else if
      console.log(firstName + ' is a porn star');
      break;
   case 'printer':
      console.log(firstName + ' is a js ninja :D');                     // else if
      break;
   default:                                                             // else
      console.log(firstName + ' a bum');
}


// lets now try to rewrite THIS ELSE IF STATEMENT INTO A SWITCH STATEMENT
// var firstName = 'John';
// var age = 20;

// if (age < 13){
//    console.log(firstName + ' is a boy.');
// }
// else if (age >= 13 && age < 20){                   /
//    console.log(firstName + ' is a teenager.');  
// }
// else if (age >= 20 && age <= 38){
//    console.log(firstName + ' is a young man.');  
// }
// else {
//    console.log(firstName + ' is a grown up man.');  
// };

// but in this case its gonna be a bit different, what we want to switch is TRUE
age = 5;


switch (true){
   case age < 13:
      console.log(firstName + ' is a boy.');
      break;
   case age >= 13 && age < 20:
      console.log(firstName + ' is a Teenager.');
   break;
   case age >= 20 && age <= 38:
      console.log(firstName + ' is a young man.');
   break;
   default:
      console.log(firstName + ' is too old.');
}

//**********************************************************/
// // Truthy and Falsy values and equality operators //******/
//********************************************************/

//// Falsy Values 
//is a value that is considered false when evaluated in IF statement
// Values that are considered falsy in JS are: UNDEFINED, NULL, 0, EMPTY STRING, NaN (not a number). So all of these 5 values will be converted to false when evaluated in TRUE/FALSE CONDITIONS -THATS WHY WE CALL THEM FALSY. they are not exactly false but they will turn out to be false when evaluated in if/else conditions


//// Truthy Values
//and ofc truthy values are all the values that are considered true when evaluated in if/else conditions. So BASICALLY ITS ALL THE VALUES THAT ARE NOT FALSY

//example

var height;
height = 0;

if (height){
   console.log('Variable IS defined');
}
else {
   console.log('Variable HAS NOT BEEN defined');
};

// SO HERE WE ARE GONNA GET IN THE CONSOLE - VARIABLE HAS NOT BEEN DEFINED, WHY IS THAT?
// its because we know the variable height has not been defined, and we also know that not defined is a falsy value. so if we say  if (height), then (height) is converted to (false). It is a very good way of testing whether the variable has actually been defined or not. as soon as we define the variable, ie height = 'tall' we get a true coz everything that isnt false is true

// but there is one situation that we want to avoid - because the height var can be zero, but if we assign zero to the variable, it will still be falsy, therefore we need to add the zero into the if statement using the OR operator

height = 0;

if (height || height === 0){
   console.log('Variable IS defined');
}
else {
   console.log('Variable HAS NOT BEEN defined');
};

// so this will fix the problem, and this is a quite common pattern in JS, TO CHECK IF THE VARIABLE IS DEFINED
// SO BASICALLY WE CHECK IF THE VARIABLE EXISTS (TRUE) OR IF IT IS EQUAL TO ZERO


////Equality operators

// === vs ==
// === is the STRICT EQUALITY OPERATOR and == does the type coersion, so the data types do not have to match (NON-STRICT EQUALITY OPERATOR). IT IS THE BEST PRACTICE TO USE === TO AVOID UNEXPECTED SITUATIONS AND BUGS

height = 23;

if (height=='23'){
   console.log('The == operator does the TYPE COERSION');
};

// you can also type this into the console to see for yourself in the dev tools


//**********************************************************/
// // CODING CHALLENGE 2 ///////////////////////////////////
//********************************************************/

var johnAvg = (2 + 1 + 1) / 3;
var mikeAvg = (3 + 1 + 1) / 3;
var maryAvg = (3 + 1 + 1) / 3;

console.log(johnAvg, mikeAvg, maryAvg);

if (maryAvg > johnAvg && maryAvg > mikeAvg) {
   console.log('Mary is the winner with an avg of ' + maryAvg);
}
else if (johnAvg > maryAvg && johnAvg > mikeAvg) {
   console.log('John is the winner with an avg of ' + johnAvg);
}
else if (mikeAvg > maryAvg && mikeAvg > johnAvg) {
   console.log('Mike is the winner with an avg of ' + mikeAvg);
}
else {
   console.log('draw');
};





// //////////////////////////////////////////////////
// //////  FUNCTIONS    ////////////////////////////
// ////////////////////////////////////////////////

// If we have a piece of code that we want to run multiple times, we can put it into function, instead of writing it over and over again
// so functions are like containers that hold code, and we can then pass arguments into them and they can return a result to us


//lets see the example bellow, the argument birthYear is like a variable inside of the function. We can pass more than one argument into the function like (birthYear, x, y) seperated by comma

// **so you can think of a function as a kind of a machine, that recieves some input, it does some stuff to it and finally returns sth else**


function calcAge (birthYear) {
   return 2018 - birthYear;
}

var ageTom = calcAge (1979);                // we can take the result and store it in a variable
var ageMike = calcAge (1950);               // you should never repeat yourself, instead put it into function 'DRY PRINCIPLE'
var ageDave = calcAge (1940);


console.log(ageTom, ageMike, ageDave);

// so that was a very simple example, lets now create sth a bit more complicated, based on our age, lets calculate how many year do we have until retirement

function yearsUntilRetirement (year, firstName) {            // so as you can see, we can use functions inside of functions
   var age = calcAge(year);
   var retirement = 65 - age;
   if (retirement > 0) { 
      console.log(firstName + ' has ' + retirement + ' years until retirement');
   }
   else {
      console.log(firstName + ' is already retired');
   }
};

yearsUntilRetirement (1955, 'John');
yearsUntilRetirement (1925, 'Peter');
yearsUntilRetirement (1979, 'Tom');


// one thing we can see here with Peter, that we have -28years in the console, coz he has already retired, we can fix this by simply adding an if/else statement to the yearsUntilRetirement function

console.clear();


//**********************************************************/
// // Function Statements and Expressions //////////////////
//********************************************************/

// in the last lesson we always declared functions using FUNCTION STATEMENTS
// but there is another way of writing functions in JS and that is by using FUNCTION EXPRESSIONS

//**Function decleration
// function whatDoYouDo (job, firstName){}

//**Function expression
var whatDoYouDo = function(job, firstName){
   switch (job){
      case 'teacher':
         return firstName + ' teaches kids how to shoot guns';    //if we use 'return' we dont have to use 'break' coz when we hit the return, the function immediately finishes and returns to a place where we actually called the function. So the 'return' keyword not only returns a value but also immediately finishes the function. So in case the job is a teacher, we return that string and finish the function
      case 'driver':
         return firstName + ' teaches how to drive'; 
      case 'boss':
         return firstName + ' teaches boys how to make money';   
      default:
         return firstName + ' teaches nothing';
   }
};

//lets not forget that this function returns sth so we need to save it somewhere, ie we can console log it
console.log(whatDoYouDo ('teacher', 'Kokot'));

// and obv we can do this multiple times
console.log(whatDoYouDo ('Driver', 'Pepe'));
console.log(whatDoYouDo ('retired', 'Jose'));

// Statements and expressions do not apply just to function, but they are a global concept in JS

// JS expressions are a piece of code that always produces a value. It doesnt matter how long they are, as long as the code produces a single value, then they are an expression. If we write in the console 2+3 , it produces a 5, and what we did was we simple wrote an expression

// and we can also call our function directly in the console, which is something we havent done before up until this point. And really anything that we do that produces a result in an expression, like 'typeof whatDoYouDo';

// so what this means is whenever JS expects a value, we always have to write an EXPRESSION. another example was the expression in the If statement above 
// ie if (a > b) ... - and here again JS expects a value (true or false), so (a > b) is an expression

// STATEMENTS, they do just perform actions, they do things, but they do not produce immediate results (if/else statements, while loops or a function decleration)



// WE LEARNT THAT FUNCTION EXPRESSIONS PRODUCE AN IMMEDIATE RESULT, WHILE FUNCTION DECLERATIONS DO NOT. AND THIS WILL ACTUALLY BE VERY IMPORTANT FOR CERTAIN SITUATIONS THAT ARE GONNA BE THERE LATER IN THE COURSE





// //////////////////////////////////////////////////
// //////  ARRAYS       ////////////////////////////
// ////////////////////////////////////////////////

//  in previous lessons we had different variables for different persons, and imagine how handy it would be to bundle them all up into one variable - IN JS WE HAVE ARRAYS FOR THAT - THEY ARE LIKE COLLECTIONS OF VARIABLES THAT CAN EVEN HAVE DIFFERENT DATA TYPES


//there are different ways to create arrays but the easiest one is to use brackets
var names = ['Peter', 'Joe', 'Natasha'];
//another way of creating an array is calling the Array function with the 'new' keyword. but the above is used far more often
var years = new Array (1990, 1980, 1975);

// arrays are zero based, which means that the first element is 0, second is 1 ...etc

//lets see how we can access elements in the array - by using the index
console.log(years[0]);

//we could also clg the entire array
console.log(years);

//we can also access the lenghth 
console.log(years.length);

// we can also mutate the data in the array
names[0] = 'Dittrich';
console.log(names[0]);           //dittrich

//we can also add data to the array using the index number that is not in the array

// names[6] = 'alex';            // and after Natasha we get 'empty x 3' in the array, and the length will be 7
// if we wante dto add alex as the last element in the array, we can do it the following way, we could use the length property (coz its zero based so if we add alex to the last position, it will be the lengths number innit ... ;). coz it will be 3, and its zero based, and the last one is 2, and the first empty one is zero, rocket science uhhhuuuu
names[names.length] = 'Alex';
console.log(names);

// Different data types - lets say we want to have all the info about John in one variable 
var John = ['John', 'Green', 1980, 'printer', false];
// above is the very very basics of the arrays, but there are a few functions that we can apply to the Arrays, and these functions are METHODS, which means they are functions specific to arrays

John.push('blue');                  // we can use 'push', which will add an element to the end of the array

John.unshift('Mr.');                // very similar to 'push' but will ad an element to the beginning of the array

console.log(John);

John.pop();                         // what this does is that it removes the last element in the array. if we do it again, it will remove another                                        element from the end

John.shift();                       // this method removes the first element from the array


console.log(John);                  


console.log(John.indexOf(1980));                      // this method will return the position of the argument that we pass in. but we have to clg                                                         it to be able to take a look at it - and we get '2'. 
console.log(John.indexOf('potato'));                  // and if the element isnt present in the array it will return '-1'

// so one of the things that this method is the most useful for is testing whether the element is in the array or not
// so lets find out whether John is a printer - by using the ternary operator. SO WE SEARCHED FOR 'designer' in the array and because the element  'designer' is not in the array, we get returned '-1', if it was in the array, we would get returned its actual array index number 
John.indexOf('designer') === -1 ? console.log('John is NOT a Designer') : console.log('John IS a Designer');







//**********************************************************/
// // CODING CHALLENGE 3 ///////////////////////////////////
//********************************************************/
var tip;
var total;                    // not sure why if i declare my  variables inside of the function, i get undefined errors, but if i dont                                            declare them at all or declare them outside of the function, it works fine

function tipCalculator (bill) {
   if (bill < 50){
      tip = bill * 0.2;
      total = bill + tip;
   }
   else if (bill >= 50 && bill < 200){
      tip = bill * 0.15;
      total = bill + tip;
   }
   else {
      tip = bill * 0.1;
      total = bill + tip;
   }
};


var tips = new Array();
var totalBill = new Array();

tipCalculator(48);
tips.push(tip);
totalBill.push(total);

tipCalculator(124);
tips.push(tip);
totalBill.push(total);

tipCalculator(268);
tips.push(tip);
totalBill.push(total);

console.log(tips, totalBill);

// easy peeezy lemon sqeuezy, you should loop through tho

// but his solution seems a lot better imo, HIS SOLUTION IS MUCH MORE ELEGANT - but he says you could have done it totally differently, using empty arrays and then push - which you have done, so do not worry about this, as long as your result is the same as his. but i should prob use the return a lot more !


function tipCalculator(bill){
   var percentage;
   if (bill < 50) {
      percentage = 0.2;
   }
   else if (bill >= 50 && bill < 200) {
      percentage = 0.15;
   }
   else {
      percentage = 0.1;
   }
   return percentage * bill;
};

var bills = [48, 124, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];

var totalBills = [bills[0] + tips[0],
                  bills[1] + tips[1],
                  bills[2] + tips[2]];

console.log(tips, totalBills);









// //////////////////////////////////////////////////
// //////  OBJECTS  and PROPERTIES     /////////////
// ////////////////////////////////////////////////

// they are the most important feature of the javascript language
// arrays are very useful and very much used in js, but imagine you would like to access an element in an array not by its index but by its specific name. but with arrays you cannot do that, but you can with objects

// in objects we define KEY/VALUE pairs, which means each value has its name which is called THE KEY.
// so in objects we can group together different variables that belong together and have no particular order
// one fundamental difference between arrays and objects is that in arrays the order matters a lot, but in objects not at all


// Object literal
//creating a new object - THE EASIEST WAY IS WITH THE SO CALLED OBJECT LITERAL - which is basically a container which we can fill with variables
var John = {
   firstName: 'John',                  //firstName is a key, 'John' is a value and we call the whole thing a KEY/VALUE PAIR.we also say that the                                       firstName is a PROPERTY of the Object John
   lastName: 'Smith',
   age: 33,
   family: ['joe', 'kate', 'paula'],      // we can even put an array inside of an object. again firstName, age, job, isMarried etc are all                                                   properties of the object
   job: 'teacher',
   isMarried: false

};

// accessing the properties - ITS VERY SIMPLE, ALL WE HAVE TO DO IS TO USE THE DOT NOTATION
console.log(John.isMarried, John.age);

// another way is by using the brackets - but we have to use the string in the brackets
console.log(John['firstName']);

// or we can even do it by declaring a variable and assigning it the string and the use the variable in the brackets
var x = ['job'];

console.log(John[x]);


//Mutating objects
John.job = 'driver';
John['lastName'] = 'Novotny';

console.log(John.job, John.lastName);

// Initializing objects - same as with arrays, there are 2 ways - Object Literal as above, and New Object Syntax

// New Object Syntax
var Jane = new Object ();
//and now we can just fill it up with some data
Jane.firstName = 'Jana';
Jane.lastName = 'Doe';
Jane.job = 'lapdancer';
Jane.isMarried = true;
Jane['dateOfBirth'] = 1912;               //u can use the brackets as well, u can mix it up innit. btw hack, if you highlight a word and then ''

console.log(Jane);


// //////////////////////////////////////////////////
// //////  OBJECTS  and Methods        /////////////
// ////////////////////////////////////////////////

// in the last lesson we learnt that we can include even arrays or objects in an object, but we can also attach functions to an object!!
// AND THESE FUNCTIONS ARE THEN CALLED METHODS
// lets see how and why we can create methods

var John = {
   firstName: 'John',                  
   lastName: 'Smith',
   birthYear: 1980,
   family: ['joe', 'kate', 'paula'],      
   job: 'teacher',
   isMarried: false,
   calcAge: function(birthYear){
      return 2018 - birthYear;
   }
};

// so what we want to do here is to add a function to this object to create a method in order to calculate the age of John. we dont want to have the age hard coded in the object, coz that changes every year

// all we have to do is write another key: calcAge, and now its making more sense why we learnt about function statements and function expressions - so this one is clearly a function expression - its like having a function without a name which we then assign to a variable - so this function is NOW A METHOD Of the object John

// but how are we gonna call() this method? the same way as we access the properties
console.log(John.calcAge(1980));

//remember Arrays have Methods too - like push, unshift (like push but to the first index number), pop (removes the last), shift (removes the first) - SO ARRAYS ARE OBJECTS TOO, OTHERWISE THEY COULDNT HAVE METHODS
 
// notice that the argument we have passed in `console.log(John.calcAge(1980))`; is already defined in the object John - so what if we could access this property from inside of the object - and YES WE CAN

// AND THATS BECAUSE IN EVERY OBJECT JAVASCRIPT USES A SPECIAL KEYWORD CALLED `THIS`

var John = {
   firstName: 'John',                  
   lastName: 'Smith',
   birthYear: 1999,
   family: ['joe', 'kate', 'paula'],      
   job: 'teacher',
   isMarried: false,
   calcAge: function(){
      return 2018 - this.birthYear;  // so in this context `this` means in this object, John, the current object - so it will mean John.birthYear
   }
};

console.log(John.calcAge());



// but lets take this a step further - what if we wanted to store this result right in the John object?
var age = John.calcAge();              
John.age = age;                     // and the property `age` is gonna get added into the object


// or we could do it all in one line
John.age = John.calcAge();

//but we can do even better, and if we can access properties in the object, we can even set them right in the object, but still you will have to call this function

var John = {
   firstName: 'John',                  
   lastName: 'Smith',
   birthYear: 1999,
   family: ['joe', 'kate', 'paula'],      
   job: 'teacher',
   isMarried: false,
   calcAge: function(){
      this.age = 2018 - this.birthYear;
   }
};

John.calcAge();

console.log(John);

//*** SO `THIS` KEYWORD IS STH REALLY POWERFUL AND YOU WILL HAVE TO MASTER IT THROUGH OUT YOUR JAVASCRIPT LIFE!!!*********************

// you have to understand that an `object` has a special `this` keyword which basically points to itself and you can use it in methods like the one above, where you basically went from having to writing down the methods argument to using the objects own property and from returning the result to storing the result in the object itself



//**********************************************************/
// // CODING CHALLENGE 4 ///////////////////////////////////
//********************************************************/


var Mark = {
   firstName: 'Mark',
   lastName: 'Green',
   weight: 105,
   height: 1.89,
   calcBMI: function (){
      this.BMI = ( this.weight / this.height ) / this.height;
      return this.BMI;                                                    //not sure what is the point of having the returned result here. ok so now i know - because they get returned from the method, we can use them in the `if statements`
   }
}

var John = {
   firstName: 'John',
   lastName: 'Howard',
   weight: 108,
   height: 1.7,
   calcBMI: function (){
      this.BMI = ( this.weight / this.height ) / this.height;
      return this.BMI;
   }
}

Mark.calcBMI();
John.calcBMI();


if (Mark.BMI > John.BMI){
   console.log(Mark.firstName +' '+ Mark.lastName + ' has the highest BMI of ' + Mark.BMI);
}
else if (Mark.BMI < John.BMI){
   console.log(John.firstName +' '+ John.lastName + ' has the highest BMI of ' + John.BMI);
}
else {
   console.log('they both have the same BMI');
}

// look at the note next to the 'return' in the objects method - so you can use the returned values in your `if statements`. so basically in the calcBMI() method we calculate the BMI and then immediately return it



if (Mark.calcBMI() > John.calcBMI()){
   console.log(Mark.firstName +' '+ Mark.lastName + ' has the highest BMI of ' + Mark.BMI);
}
else if (Mark.calcBMI() < John.calcBMI()){
   console.log(John.firstName +' '+ John.lastName + ' has the highest BMI of ' + John.BMI);
}
else {
   console.log('they both have the same BMI');
}

console.log(Mark.BMI, John.BMI);


/////////////////////////////////////////////////////
// //////  LOOPS AND ITERATIONS        /////////////
// ////////////////////////////////////////////////

// we can automate repetitive tasks using loops

//** For Loop *//
// print numbers from 0 to 9 to the console

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);

// instead we use a loop ofc

// loop has 3 parts - 
//1. first part is the initial value of the counter (btw `i` is a kind of a standard for a counter variable in JS)
//2. the second part is the condition that is evaluated before each iteration in order to see if the next loops should still be executed - so only if this turns out to be true, the next loop will run only then
//3. the counter update after each iteration (iteration = opakovani po cesku). btw you dont have to use only i++, you can do i+=2, i*=2

for (var i = 3; i <= 50; i+=5){
   console.log(i + ' hens');
}

// so lets see what is happening - the first iteration: i = 3, i <= 50 which is true, so we are clg 3 hens. etc etc etc (i was just a bit stuck on the first iteration but its clear now to me). next iteration is i+5 = 8, clg 8 hens, next is 8+5, 13 hens etc etc until i > 50 FALSE so thats where the loops exits



// now lets have a look at a more practical example with an array 

var John = ['John', 'Green', 1980, 'printer', false];

// lets pretend we need to log all these 5 values into the console
// again we could either do it like this: but how would you do it having 50 elements in your array?

console.log(John[0]);
console.log(John[1]);
console.log(John[2]);
console.log(John[3]);
console.log(John[4]);


// the solution IS OF COURSE TO USE A LOOP - we start at zero because the first element has index of 0 and we want to use the index of the array as a counter.
// btw you have to use `i < John.length, and not i <= John.length : because `John.length = 5` and index number 5 is ofc undefined in the array, because its zero based and the last element has the index of 4. btw you cannot use i < 5, because what if you add sth into the array? it would not dynamically update and the last added element wudnt get console logged innit. and LOOPING THROUGH ARRAYS IS ONE OF THE MOST IMPORTANT USES OF LOOPS SO ITS MEGA IMPORTANT TO UNDERSTAND
for (var i = 0; i < John.length; i++){
   console.log(John[i] + ' for loop test');
}


//**While loop **//
// the difference is that in while loop we only have 1 condition
// as you can see its much easier to use the `for loop`

var i = 0;
while (i < John.length){
   console.log(John[i]  + ' while loop test');
   i++;
}

//** Continue and Break statements**/
// we use break to break out of the loop
// and we use `continue` to quit the current iteration and continue with the next one


var John = ['John', 'Green', 1980, 'printer', false];

// lets say we want to clg only the elements that are strings and if the element isnt a string it will quit the iteration and continue with the next one
//CONTINUE
for (var i = 0; i < John.length; i++){
   if (typeof John[i] !== 'string') continue;                 // !== this is the strict different operator, and we also have the normal                                                                     different operator != . and just like with the strict equality operator, for                                                               now you should be using only the strict different operator !==
                                                               // btw we can do this on just one line `if (.....) continue;
// SO NOW WE ARE CONSOLE LOGGIN STRINGS ONLY, KAPISHTO?                                                               
   console.log(John[i]);
}


//BREAK - THE DIFFERENCE IS THAT IT EXITS THE CURRENT ITERATION AND THE LOOP - SO IMO IN THIS CASE IT SHOULD CLG ONLY 'John' and 'Green'

for (var i = 0; i < John.length; i++){
   if (typeof John[i] !== 'string') break;
   console.log(John[i]);
}

// LOOPING BACKWARDS
// small challenge, try looping the other way round from the back to the start using the for loop and break on the first non string element
for (var i = John.length - 1; i >=  0; i--){
   console.log(John[i]);
}


//**********************************************************/
// // CODING CHALLENGE 5 ///////////////////////////////////
//********************************************************/


var Jim = {
   bills: [124, 48, 268, 180, 42],
   tips: [],
   finalAmount: [],
   calcTip: function (bills) {
      var percentage;
      if (this.bills < 50){
         percentage = 0.2;
      }
      else if (this.bills >= 50 && this.bills < 200){
         percentage = 0.15;
      }
      else {
         percentage = 0.1;
      }
      for (var i = 0; i < this.bills.length; i++){ 
         this.tips[i] = this.bills[i] * percentage;
         this.finalAmount[i] = this.bills[i] + this.tips[i];
      }
   }

}

Jim.calcTip();
console.log(Jim);

// first time here you are using 2 x dot - BTW DOT IS AN OPERATOR AS WELL, ITS CALLED A MEMBER ACCESS with precedence of 19, the 2nd highest, and its' associativity is from left to right, thats why it works - so first this.bills is executed and replaced with the array and then bills.length is executed and we end up with the arrays' length. if we started with bills.length it wudnt work, because bills.length simply do not exist, we dont have any object called bills

//also we can store the current bill value in a variabe to not repeat ourselves

var Mark = {
   bills: [77, 375, 110, 45],
   tips: [],
   finalAmount: [],
   calcTip: function (bills) {
      var percentage;
      if (this.bills < 100){
         percentage = 0.2;
      }
      else if (this.bills >= 100 && this.bills < 300){
         percentage = 0.1;
      }
      else {
         percentage = 0.25;
      }
      for (var i = 0; i < this.bills.length; i++){ 
         this.tips[i] = this.bills[i] * percentage;
         this.finalAmount[i] = this.bills[i] + this.tips[i];
      }
   }
}

Mark.calcTip();
console.log(Mark);

function avgTip (person) {
   var sum = 0;
   for (var i = 0; i < person.tips.length; i++){
      sum += person.tips[i];
   }
   return sum/person.tips.length;
   this.average = tips;
};

console.log(avgTip(Jim), avgTip(Mark));


if (avgTip(Jim) > avgTip(Mark)) {
   console.log('Jim\'s family paid the highest average tip');
}
else if (avgTip(Jim) < avgTip(Mark)) {
   console.log('Mark\'s family paid the highest average tip');
}
else {
   console.log('they have paid the same exact average tip');
};


console.clear();




























// // // // Lecture: let and const

// // // //ES5 - ecma script 5 syntax
// // // var name5 = 'jane smith';
// // // var age5 = 33;
// // // name5 = 'jane miller';              // we change the name to jane miller here - we can simply mutate this name variable

// // // console.log(name5);

// // // //ES6 - we can now choose between const and let. const is for values that we do not want to change and let is like the old var (values that we wanna change or mutate later on). so we no longer use var in es6 but just let - for a variable thats gonna change or const - for a variable that isnt gonna change 

// // // const name6 = 'jane smith';
// // // let age = 33;                          // cos age is gonna change, next year she is gonna be 34 etc

// // // name6 = 'jane miller';                 // we get an error - 'assignment to constant variable' - its a variable thta is immutable which we cannot change


// // //ES5 var was function scope and in ES6 variables are block scope, which is a huge difference, its gonna be shown on this example of a simple drivingLicence function
// // // ES5
// // function driversLicence5(passedTest){
// //    if (passedTest){
// //       var firstName = 'John';
// //       var yearOfBirth = 1990;

// //       console.log(firstName + ', born in ' + yearOfBirth + ' is now officially a driver');
// //    };
// // };

// // driversLicence5(true);


// // //. i think i need to go back to functions and parameters here


// // // ES6 the same function. we can use const for the birth year - coz thats never gonna change and let for first name, coz that in theory could change ...

// // function driversLicence6(passedTest){
// //    if (passedTest){
// //       let firstName = 'John';
// //       const yearOfBirth = 1990;

// //       console.log(firstName + ', born in ' + yearOfBirth + ' is now officially a driver');
// //    };
// // };

// // driversLicence6(true);


// // // now its time to see why let and const are different to var - we are gonna take the console.log(firstName + ', born in ' + yearOfBirth + ' is now officially a driver'); out of the if statement and put it after it

// // // console.clear();

// // function driversLicence5(passedTest){
// //    if (passedTest){
// //       var firstName = 'John';
// //       var yearOfBirth = 1990;
// //    };
   
// //    console.log(firstName + ', born in ' + yearOfBirth + ' is now officially a driver');
// // };

// // driversLicence5(true);



// // function driversLicence6(passedTest){
// //    if (passedTest){
// //       let firstName = 'John';
// //       const yearOfBirth = 1990;
// //    };
// //    console.log(firstName + ', born in ' + yearOfBirth + ' is now officially a driver');
// // };

// // driversLicence6(true);

// // // so the first one using var worked just fine
// // // but the second one es6 we get an error 'firstName is not defined'. THATS BECAUSE WITH LET AND CONST THEY ARE NOT FUNCTION SCOPED BUT BLOCK SCOPED

// // // SO WHAT IS A BLOCK? ITS SIMPLY ALL THE CODE THAT IS WRAPPED IN THE CURLY BRACES. SO EACH TIME WE HAVE AN IF STATMENT AND OR AN IF OR WHILE BLOCK, WE ARE ACTUALLY CREATING A NEW BLOCK. AND THE VARIABLES WE DECLERED USING THE LET AND CONST ARE ONLY VALID/ACCESSIBLE BY THE CODE THAT ARE INSIDE OF THE SAME BLOCK. SO IF WE MOVE OUTSIDE THE BLOCK, WHICH WE DID, THEN WE NO  LONGER HAVE ACCESS TO THESE VARIABLES. WITH VAR IT WORKS DIFFERENTLY, WE HAVE ACCESS IF IT IS IN THE SAME FUNCTION. IF WE MOVE THE CONSOLE.LOG OUTSIDE OF THE FUNCTION IT WOULD ALSO NOT WORK ANYMORE.AGAIN WE WOULD GET the 'firstName is not defined error'


// // // SUPPOSE WE WANNA USE THE VARIABLES OUTSIDE THE BLOCK
// // // we can declare them inside of the function. you can declare the let outside the block and then change it inside of the block, but the const you cant, you have to declere and assign it a value outside of the block

// // function driversLicence6(passedTest){
// //    let firstName;
// //    const yearOfBirth = 1990;
// //    if (passedTest){
// //       firstName = 'John';
// //       const yearOfBirth = 1990;
// //    };
// //    console.log(firstName + ', born in ' + yearOfBirth + ' is now officially a driver');
// // };

// // driversLicence6(true);


// // // but thats not even all, suppose we use a variable before we even use it ES5

// // // console.clear();

// // function driversLicence5(passedTest){
// //    if (passedTest){
// //       console.log(firstName);
// //       var firstName = 'John';
// //       var yearOfBirth = 1990;
// //    };
   
// //    console.log(firstName + ', born in ' + yearOfBirth + ' is now officially a driver');
// // };

// // driversLicence5(true);

// // // so we get the line 104 console logged as undefined. AND THATS WHAT WE GET IF WE USE THEM BEFORE WE DECLARE AND DEFINE THEM

// // // BUT IN ES6 IT DOESNT WORK QUITE LIKE THAT - but again if we clg the line 120 we get an error that firstName is not defined
// // // console.clear();

// // // function driversLicence6(passedTest){
// // //    console.log(firstName);
// // //    let firstName;
// // //    const yearOfBirth = 1990;
// // //    if (passedTest){
// // //       firstName = 'John';
// // //       const yearOfBirth = 1990;
// // //    };
// // //    console.log(firstName + ', born in ' + yearOfBirth + ' is now officially a driver');
// // // };

// // // driversLicence6(true);

// // // and all this happens because of sth called THE TEMPORAL DEAD ZONE - WHICH BASICALLY MEANS THAT THE VARIABLES ARE HOISTED  (Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function - says google)

// // // so they are hoisted (moved to the top of the current scope) but we still can NOT ACCESS THEM BEFORE THEY ARE DECLARED

// // // SO THIS IS JUST A TECHNICAL TERM, BUT WHAT YOU NEED TO KNOW IS THAT WE CAN ONLY USE THE VARIABLE AFTER IT HAS BEEN DECLARED

// // // https://www.w3schools.com/js/js_hoisting.asp


// // // console.clear();

// // // LETS TAKE A LOOK AT A MORE PRACTICAL EXAMPLE - so basically we initialize let i = 23 and then we again use a variable called 'i' inside of the 'for loop'

// // let i = 23;

// // for  (let i = 0; i < 5; i++){
// //    console.log(i);
// // }

// // console.log(i);

// // //  im getting 0 1 2 3 4 for line  148 and 5 for the line 151 which is incorrect coz i should be getting 23 for the line 151. as is Jonas getting in his tutorial, coz once you are outside of the block, you can change the variable you have inside of the block with the let. AND AGAIN THATS BECAUSE THESE VARIABLES ARE BLOCK SCOPED. SO THE 'I' VARIABLE IN THE 'FOR' LOOP IS A COMPLETELY DIFFERENT VARIABLE THAN THE ONE WE INITIALIZED ON THE LINE 145. SO THEY HAPPEN TO HAVE THE SAME NAME BUT IT DOESNT REALLY MATTER COZ THEY ARE SEPERATE VARIABLES. ITS LIKE HAVING 'var i' inside of the function and 'var i' OUTSIDE OF THE FUNCTION - SO THESE WOULD ALSO BE TWO COMPLETELY DIFFERENT VARIABLES, COZ THESE ARE FUNCTION SCOPED. BTW GO BACK TO HIS LECTURE ON FUNCTIONS!!! - my mistake there was that i initialized the i inside of the loop just by using i=0 and that automatically became var i = 0, once i had changed it to let i = 0, im getting the correct console log of the line 151 = 23

// // // SO THATS A HUGE DIFFERENCE IN BETWEEN OF ES5 AND ES6

// // // so lets test the same thing using var - and in this case the line 165 clg SHOULD BE 5. coz it would be overwritten  and we would get the final i from the loop? not sure why but ...

// // // var i = 23;

// // // for  ( var i = 0; i < 5; i++){
// // //    console.log(i);
// // // }

// // // console.log(i);




// // // console.clear();

// // // SO THE BEST PRACTICE TO START USING ES6 IS TO START USING 'let' FOR VARIABLES THAT WILL CHANGE OVER TIME AND 'const' FOR VARIABLES THAT CANNOT BE REASSIGNED






















// // ////////////////////////////////////////////////////////////////////////////////////////////
// // // LECTURE: BLOCKS AND IIFEs //////////////////////////////////////////////////////////////
// // //////////////////////////////////////////////////////////////////////////////////////////

// // // this is about data privacy coz in es6 the date from outside the block are not accessible, coz const and let and block scope
// // // all we have to do is to creat a block
// // {
// //    const a = 1;
// //    let b = 2;
// //    // var c = 33;
// // }

// // // if we now try to console log (a+b) them, we get an error that they are not defined coz they are block scoped, but if we try to 
// // // console log c, we can, coz this is a function scoped variable
// // // console.log(a+b);

// // // so what we have here is like an IIFE, an immediately invoked function expression

// // // what we would do in ES5 - just to create a simple variable that is not accessible from the outside, and then we also have to call this function at the end
// // (function(){
// //    var c = 3;
// // })();

// // // console.log(c);   // and we get an error that c is not defined



// // {
// //    let a = 55;
// //    let b = 128;
// //    console.log(a);
// // }


// // ////////////////////////////////////////////////////////////////////////////////////////////
// // // LECTURE: STRINGS //////////////////////////////////////////////////////////////
// // //////////////////////////////////////////////////////////////////////////////////////////

// // // let firstName = 'john';
// // // let lastName = 'smith';
// // // const yearOfBirth = 1979;
// // // let currentYear = new Date();
// // // currentYear = currentYear.getFullYear();

// // // console.log(currentYear);

// // // function calcAge(){
// // //    return currentYear - yearOfBirth;
// // // };

// // // //ES5
// // // console.log('this is '+firstName+' '+lastName+' and is '+ calcAge()+' years old');

// // // //ES6 - TEMPLATE LITERALS - WE USE THE BACKTICKS 
// // // console.log(`this is ${firstName} ${lastName} and is ${calcAge()} years old`);


// // // //new string methods in ES6
// // // const n = `${firstName} ${lastName}  `;

// // // //startsWith
// // // console.log(n.startsWith('J'));                 // and we get false coz the string doesnt start with 'J', but with 'j' !!!

// // // //endsWith
// // // console.log(n.endsWith('smith'));                   // we get true obv - we can  use as many characters as we want

// // // // middle of the string - for that we have includes - and obv you could use this to validate your forms etc

// // // console.log(n.includes('n s'));           // ;)))) or u can just try using a space, and you should get returned true

// // // // repeat

// // // console.log(n.repeat(5)); 

// // // console.log(`${firstName} is a boy!! `.repeat(9));      // u can again use template literal if you want concatonate some text or spaces

// // // console.clear();


// // // ////////////////////////////////////////////////////////////////////////////////////////////
// // // // LECTURE: ARROW FUNCTIONS  //////////////////////////////////////////////////////////////
// // // //////////////////////////////////////////////////////////////////////////////////////////

// // // //suppose we have an array of years of birth and we want to calculate age for each one of them

// // // const years = [1955,1988,1855,1977];

// // // //ES5 - we can use the map method and loop through these. we use a callback funtcion and it then gets store into the array el
// // // var ages5 = years.map(function(el){
// // //    return 2018 - el;
// // // })
// // // console.log(ages5);

// // // //ES6 - we have a much nicer way of writing the code of the callback function - but first i need to go back and do the lectures i hadnt done

