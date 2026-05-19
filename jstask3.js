// 1. Student Login Check
let username = prompt("Enter username");
let password = prompt("Enter passwoed");

if(username === "admin" && password === "1234"){
    console.log("Login Success");
    
}else{
    console.log("Invalid User");
    
}

// 2. ATM Balance System
let Balance = 5000;
let amount = Number(prompt("Enter withdraw amount"));

if(amount<Balance){
    console.log("Withdraw Success");
    
}else{
    console.log("Insufficient Balance");
    
}

//3.Traffic Signal project

let Signal = prompt("Enter the signal color");
switch(Signal){
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Ready");
        break;
    case "green":
        console.log("go");
        break;
    default:
        console.log("Invalid signal");
        
        
        
        
}

//4. Age Eligibility Checker
let age = Number(prompt("Enter the age"));

if ( age>=18){
    console.log("Eligible for vote");
    
}else{
    console.log("Not Eligible");
    
}

//5.Shopping Discount System

productprice = Number(prompt("Enter the Price"));

if (productprice>5000){
    console.log("20% discount");
    
}else if(productprice>3000){
    console.log("10% discount");
    

}else{
    console.log("no dfiscount");
    
}

// 6 password Strength length
let pass = prompt("Enter password");

if(pass.length>=8){
    console.log("Strong password");
    
}else{
    console.log("Weak password");
    
}

//7. mobile Battery warning

perc = Number(prompt("Enter the percentage"));

if(perc<=10){
    console.log("Battery Low");
    
}else if(perc<=50){
    console.log("Battery medium");
    
}else{
    console.log("Battery full");
    
}

//8. Employee salary Bonus

salary = Number(prompt("Enter the salary"));

if(salary>=50000){
    console.log("15% bonus");
    
}else if(salary>=30000){
    console.log("10% bonus");
    

}else{
    console.log("5% bonus");
    
}

//9.online food order

orderamount = Number(prompt("Enter the amount"));

if(orderamount>499){
    console.log("free delivery");
    
}else{
    console.log("Delivery charge addded");
    
}

//10 . Movie Ticket Booking

let movieAge = Number(prompt("Enter Age:"));

if (movieAge < 5) {
    console.log("Free Ticket");
} else if (movieAge < 18) {
    console.log("Child Ticket");
} else {
    console.log("Adult Ticket");
}

//11 Instagram Likes counter
// for(let i=1; i<=5;i++){
//     console.log("Like "+i);
    
// }

// //12 countdown Timer
let count = 5;

while(count>=1){
    console.log(count);
    count--;
    
}
console.log("start");

// 13. OTP Verification
let otp = 1234;
let userOtp = Number(prompt("Enter OTP:"));

if (userOtp === otp) {
    console.log("OTP Verified");
} else {
    console.log("Invalid OTP");
}

//14. E-commerce cart total
let cart = [200,500,1000,300];
let total = 0;

for(let i =0 ;i<cart.length;i++){
    total=total+cart[i];
}
console.log("Total cart value" + total);


// 15. Student Mark Grade System
let mark = Number(prompt("Enter Mark:"));

if (mark >= 90) {
    console.log("A Grade");
} else if (mark >= 70) {
    console.log("B Grade");
} else if (mark >= 50) {
    console.log("C Grade");
} else {
    console.log("Fail");
}


// 16. Netflix Subscription Checker
let subscription = true;

if (subscription === true) {
    console.log("Watch Movie");
} else {
    console.log("Buy Subscription");
}


// 17. Product Stock Checker
let stock = 0;

if (stock > 0) {
    console.log("Product Available");
} else {
    console.log("Out of Stock");
}


// 18. Weather App Condition
let weather = prompt("Enter Weather:");

switch (weather) {
    case "sunny":
        console.log("Go Outside");
        break;
    case "rainy":
        console.log("Take Umbrella");
        break;
    case "cold":
        console.log("Wear Jacket");
        break;
    default:
        console.log("Invalid Weather");
}


// 19. User Profile Object
let user = {
    name: "Navi",
    age: 20,
    city: "Bangalore"
};

for (let key in user) {
    console.log(user[key]);
}


// 20. WhatsApp Chat Array
let chats = ["hi", "hello", "where are you", "ok"];

for (let message of chats) {
    console.log(message);
}