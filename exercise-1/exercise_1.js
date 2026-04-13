//Exercise 1 ; variables and data types

let name = "John";
let age = 25;
let height = 5.9;
let isEmployed = true;

console.log(`Name: ${name}, Type: ${typeof name}`);
console.log(`Age: ${age}, Type: ${typeof age}`);
console.log(`Height: ${height}, Type: ${typeof height}`);
console.log(`Is Employed: ${isEmployed}, Type: ${typeof isEmployed}`);

//Exercise 2: Arithmetic operations calculator

let a = 12;
let b = 4;

console.log(`${a} + ${b} = ${a + b}`);
console.log(`${a} - ${b} = ${a - b}`);
console.log(`${a} * ${b} = ${a * b}`);
console.log(`${a} / ${b} = ${a / b}`);
console.log(`${a} % ${b} = ${a % b}`);
console.log(`${a} ** ${b} = ${a ** b}`);

//Exercise 3: Age eligibility Checker

let userAge = 16;

if (userAge >= 18) {
  console.log("You are eligible to vote!");
} else {
  let yearsLeft = 18 - userAge;
  console.log(`You are not eligible to vote yet. Wait ${yearsLeft} more years.`);
}

//Exercise 4: Temperature Range Validator

let temperature = 30;

if (temperature < 0) {
  console.log("Freezing ❄");
} else if (temperature <= 15) {
  console.log("Cold 🧊");
} else if (temperature <= 25) {
  console.log("Mild 🌤");
} else if (temperature <= 35) {
  console.log("Warm ☀");
} else {
  console.log("Hot 🔥");
}

//Exercise 5: Student Grade Calculator

let score = 75;

if (score >= 90 && score <= 100) {
  console.log("Grade: A - Excellent work! 🎉");
} else if (score >= 80) {
  console.log("Grade: B - Great job!");
} else if (score >= 70) {
  console.log("Grade: C - Good effort, keep practicing!");
} else if (score >= 60) {
  console.log("Grade: D - You can do better!");
} else {
  console.log("Grade: F - Let's work harder next time.");
}

// Exercise 6: Login Authentication System

let isLoggedIn = true;
let isAdmin = true;
let accountVerified = true;
let experience = 0;
let hasSpecialPrivileges = false;

if (isLoggedIn && isAdmin && accountVerified) {
  if (experience >= 5 || hasSpecialPrivileges) {
    console.log("Welcome to Admin Panel!");
  } else {
    console.log("Access Denied: You need 5+ years experience or special privileges");
  }
} else {
  console.log("Access Denied: Invalid credentials");
}

// Exercise 7: Premium Membership Qualifer

let totalSpent = 600;
let monthsAsUser = 4;
let referrals = 2;
let isVerified = true;
let hasPremiumCode = false;

if ((totalSpent >= 500 && monthsAsUser >= 6) ||
    (referrals >= 3 && isVerified) ||
    hasPremiumCode) {
  console.log("You qualify for Premium Membership ✅");
} else {
  console.log("You do NOT qualify for Premium Membership ❌");
}

// Exercise 8: Discount Calculator with Multiple Conditions

let purchase = 600;
let isMember = false;
let isVIP = true;
let isHoliday = true;

let discount = 0;

if (purchase > 500 || isVIP) {
  discount = 15;
} else if (purchase > 250 && isMember) {
  discount = 10;
} else if (purchase > 100) {
  discount = 5;
}

if (isHoliday) {
  discount += 5;
}

let discountAmount = (discount / 100) * purchase;
let finalPrice = purchase - discountAmount;

console.log(`Discount: ${discount}% = $${discountAmount}`);
console.log(`Final Price: $${finalPrice}`);

// Exercise 9: Loan Approval Engine

let customerAge = 26;
let income = 50000;
let creditScore = 700;

if (customerAge < 21 || income < 30000 || creditScore < 600) {
  console.log("Rejected: Does not meet minimum requirements");
} else if (income >= 80000 || (creditScore >= 750 && customerAge >= 25)) {
  console.log("Approved with 3% interest rate");
} else if (creditScore >= 650 && income >= 40000) {
  console.log("Approved with 5% interest rate");
} else {
  console.log("Approved with 7% interest rate");
}

// Exercise 10: User Profile Validator

let username = "valery123";
let password = "mypassword";
let email = "valery@gmail.com";
let ageUser = 17;
let accountBalance = 6000;
let isEmailVerified = true;
let isPhoneVerified = false;
let loginAttempts = 2;
let daysSinceLastLogin = 10;

// Validation
let isValidUsername = username.length >= 3 && username.length <= 20;
let isValidPassword = password.length >= 8;
let isValidEmail = email.includes("@");
let isValidAge = ageUser >= 13;

// Account Status
let status = "";

if (loginAttempts > 5 || accountBalance < -500) {
  status = "SUSPENDED";
} else if (daysSinceLastLogin >= 90) {
  status = "INACTIVE";
} else if (accountBalance >= 5000 && isEmailVerified && isPhoneVerified) {
  status = "PREMIUM";
} else if (ageUser < 18 && (!isEmailVerified || !isPhoneVerified)) {
  status = "RESTRICTED";
} else if (isEmailVerified && isValidPassword && isValidUsername && isValidEmail && isValidAge) {
  status = "ACTIVE";
}

let securityScore = 0;
if (isEmailVerified) securityScore += 40;
if (isPhoneVerified) securityScore += 40;
if (password.length >= 10) securityScore += 20;

console.log(`Account Status: ${status}`);
console.log(`Security Score: ${securityScore}/100`);