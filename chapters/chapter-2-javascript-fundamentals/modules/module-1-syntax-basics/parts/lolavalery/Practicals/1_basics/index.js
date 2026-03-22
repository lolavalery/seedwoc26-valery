const name="Valery";
//name="lola";


const movieTitie="The Matrix";
const anotherMovieTitle='Intercetion';
// for number
// we can int or float -> numbers
const favNumber = 5;
const pi = 3.14;


console.log("TYPE OF FAVNUMBER:", typeof favNumber);
console.log("TYPE of PI:", typeof pi);

let username=null;
console.log("username:", username);

if (username){
    console.log("username is defined");
}
else {
        console.log("username is undefined");
    }

    //booleans can eithe be true or false
    // naming conversion for boolean in js: isloggedin,hasAccess, isAdmin
    //const login=true;
    const isloggedin=false;
    const isMarried=true;

    // write a program that checks if user is logged in and print a message accordingly

    
if (isloggedin){
    console.log("user is looged in");
} else{
    console.log("is not logged in");
}


// operators: The Tools that make things happen
console.log("Arithmetic operators");

const a=10;
const b=3;

// start doing operations
console.log(`ADDITION OPERATION: (a+b): ${a+b}`);
console.log(`SUBTRACTION OPERATION: (a-b): ${a-b}`);
console.log(`DIVISION OPERATION: (a/b): ${a/b}`);
console.log(`MULTIPLICATION OPERATION: (a*b): ${a*b}`);


//lets do exponentiation

// a^b =>a**b
//2**3
console.log(`EXPONENTIAL OPERATION: (a**b): ${a**b}`)
// modulus operators
// a%b => gives us the remainder when a is divided by b


// Increment and Decrement Operators
let c=5;
c=c+5;
console.log("The new c for increment is:", c);
c=c-5;
console.log("The new c for decrement is:", c);
c=c++;
console.log("The new c is:", c);
c=c--;
console.log("The new c is:", c);

//Assignment Operators
let score=100;
console.log("Initial score:", score);
score=score+10;
console.log("Score after addition:", score);
score=300;
console.log("Score after assignment:", score);
score=score-40;
console.log("Scsore after subtraction:", score);

// COMPAARISON OPERATORS IN JS
//help make decisions by comparing values
// assignment vs comparison

console.log("Comparison Operators:");
const value1=5;
const value2='5';
const isEqual=value1==value2;
console.log("Is value1 equal to value2 (==)?", isEqual);

//Type coeretion in JS
// COMPARING VALUES WITH TYPES
const isStrictlyEqual=value1===value2;
console.log("is value1 equal to value2 ? (===)", isStrictlyEqual);

//more of comparison operators
const my_age=13;
const required_age=18;
const userInput="25";


const isEligible=my_age>=required_age;
console.log("Is user eligible?", isEligible);

//compare required_age with userInput: no type coeretion
//compare required_age with userInput: with type coercion
// create a simple calculator (that does: +,-,*,/,%,**)

const isStrictlyEquivalent=userInput===required_age;
console.log("is userInput strictly equivalent to required_age? (===)", isStrictlyEquivalent);
const isEquivalent=userInput==required_age;
console.log("is userInput equivalent to required_age? (==)", isEquivalent);

const i=2;
const j=4;

const addition = i+j;
console.log("The sum of i and j is:", addition);
const subtraction = i-j;
console.log("The difference of i and j is:", subtraction);
const division = i/j;
console.log("The divident of i and j is:", division);
const multiplication = i*j;
console.log("The product of i and j is:", multiplication);
const index = i**j;
console.log("The answer when i is raised to the power j is:", index);




