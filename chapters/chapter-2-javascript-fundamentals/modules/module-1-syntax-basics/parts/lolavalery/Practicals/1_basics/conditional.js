//Logical operators help us combine multiple conditions and make decisions based on them
// AND =>&&
//NOT




const isLoggedIn=true;
const hasPermission=false;
const isAdmin=true;
const age=25;

const isLoggedInAndAdmin=isLoggedIn && isAdmin;

console.log("Logged in and is Admin:", isLoggedInAndAdmin);

if(isLoggedInAndAdmin){
    console.log("Welcome, Admin");
    console.log("edit user files....");
}

//check if user is logged in and has permission to access a resource
const isLoggedInAndHasPermission=isLoggedIn && hasPermission

if(isLoggedInAndHasPermission){
    console.log("Allow access");
}

//check if user age is greater than 18 or user is an admin
const ageIsGreaterThan18OrUserAdmin=age>=18 || isAdmin;

if(ageIsGreaterThan18OrUserAdmin){
    console.log("user age is greater than 18 or is admin");
}

const isNotLoggedIn= !isLoggedIn;

if(isNotLoggedIn){
    console.log("user is not logged in");
}