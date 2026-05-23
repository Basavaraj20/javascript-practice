// Task 1 — Smart Attendance Checker

function examEligibility(attendance, feesPaid) {
    if (attendance >= 75 && feesPaid === true) {
        console.log("Allowed for Exam");
    } else {
        console.log("Not Allowed");
    }
}

examEligibility(80, true);


// Task 2 — Mobile Password Strength Checker

function checkPassword(password) {
    let hasNumber = false;
    let hasUpperCase = false;

    for (let char of password) {
        if (char >= '0' && char <= '9') {
            hasNumber = true;
        }

        if (char >= 'A' && char <= 'Z') {
            hasUpperCase = true;
        }
    }

    if (password.length >= 8 && hasNumber && hasUpperCase) {
        console.log("Strong Password");
    } else {
        console.log("Weak Password");
    }
}

checkPassword("Abc12345");


// Task 3 — Find Second Largest Number

let arr = [10, 50, 80, 20, 90, 70];

let largest = 0;
let secondLargest = 0;

for (let num of arr) {
    if (num > largest) {
        secondLargest = largest;
        largest = num;
    } else if (num > secondLargest && num !== largest) {
        secondLargest = num;
    }
}

console.log(secondLargest); // 80


// Task 4 — Bus Seat Booking System

let seats = new Array(10).fill(false);

function bookSeat(seatNumber) {
    if (seats[seatNumber - 1] === true) {
        console.log("Seat Already Booked");
    } else {
        seats[seatNumber - 1] = true;
        console.log("Seat Booked Successfully");
    }
}

bookSeat(3);
bookSeat(3);


// Task 5 — ATM Cash Withdraw Logic

function withdraw(balance, amount) {
    if (amount > balance) {
        return "Insufficient Balance";
    } else if ((balance - amount) < 1000) {
        return "Minimum balance should maintain 1000";
    } else {
        return "Withdraw Successful";
    }
}

console.log(withdraw(10000, 9500));


// Task 6 — Product Search Engine

let products = ["iphone", "samsung", "realme", "oppo"];
let searchProduct = "realme";
let found = false;

for (let product of products) {
    if (product === searchProduct) {
        found = true;
        break;
    }
}

if (found) {
    console.log("Product Found");
} else {
    console.log("Product Not Found");
}


// Task 7 — Voting Eligibility System

function checkVoting(age, voterId, citizenship) {
    if (age >= 18) {
        if (voterId === true && citizenship === "Indian") {
            console.log("Eligible for Voting");
        } else {
            console.log("Not Eligible");
        }
    } else {
        console.log("Not Eligible");
    }
}

checkVoting(20, true, "Indian");


// Task 8 — Online Food Order Bill

function calculateBill(foodPrice, gst, deliveryCharge, discount) {
    let gstAmount = (foodPrice * gst) / 100;
    let totalBill = foodPrice + gstAmount + deliveryCharge - discount;

    return "Total Bill : ₹" + totalBill;
}

console.log(calculateBill(400, 5, 50, 20));


// Task 9 — Reverse Word Without reverse()

let word = "javascript";
let reversed = "";

for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
}

console.log(reversed);


// Task 10 — Mini Instagram Like System

let isLiked = false;
let totalLikes = 0;

function likePost() {
    isLiked = !isLiked;

    isLiked
        ? (totalLikes++, console.log("Liked ❤️"))
        : (totalLikes--, console.log("Like 🤍"));

    console.log("Total Likes:", totalLikes);
}

likePost();
likePost();