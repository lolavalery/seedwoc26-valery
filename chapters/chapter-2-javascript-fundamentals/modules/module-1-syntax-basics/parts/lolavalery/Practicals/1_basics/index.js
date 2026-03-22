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