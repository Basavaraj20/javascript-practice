//1. Employee Bonus Filter
//Concept:
//filter(), map()
//Task:
//You have employee salaries.
//Find employees whose salary is greater than 300000 and print:
//"Congrats <name>"
//Input:
let employees = [
  {name:"basavaraj", salary:200000},
  {name:"priya", salary:500000},
  {name:"shivaraj", salary:700000}
]
let emp = employees.filter((e) => {
    return e.salary > 300000
});
let bonesEmp = emp.map((e) => {
    console.log("Congrats", e.name);
});

//2. Shopping Cart Total
//Concept: reduce()
let cart = [1000, 1500, 580, 209]
let total = cart.reduce((acc, c, i, t) => {
    return acc + c
}, 0)
console.log(total);

//3. Login Username Formatter
//Concept:slice(), toUpperCase()
let user = "Basavaraj"
let firstletter = user.slice(0, 1).toUpperCase();
let remaining = user.slice(1).toLowerCase();
let fullName = firstletter + remaining;
console.log(fullName);

//4. OTP Checker
//Concept:includes()
let otp = "1005"
if (otp.includes("0")){
    console.log("valid otp");
}else{
    console.log("Invalid otp");
}

//5. Food Delivery App
//Concept:push(), pop()
let orders = ["burger","pizza"]
orders.push("patato chips")
console.log(orders);
orders.pop()
console.log(orders);

//6. Attendance Checker
//Concept:every()
let marks = [20,70,80,90]
let attendence = marks.every((m) => m >= 35);
console.log(attendence);


// 7. Find VIP Customer
// Concept:find()
let customer = [
    { name: "prasad", purchase: 5000 },
    { name: "nitish", purchase: 15000 },
    { name: "amar", purchase: 25000 }
]
let VIP_cust = customer.find(c => c.purchase > 10000);
console.log(VIP_cust.name);

// 8. Reverse Chat Message
// Concept:split(), reverse(), join()
let msg = "hello";
let reversed = msg.split("").reverse().join("");
console.log(reversed);

// 9. Find position of"mobile"
// concept:indecof() 
let products = ["tv", "laptop", "mobile", "watch"]
console.log("Index :", products.indexOf("mobile"));

// 10. Student Rank Sort
// Concept:sort()
let s_marks = [99, 45, 12, 67, 89, 1, 25, 78];
let sorted = s_marks.sort((a, b) => a - b);
console.log(sorted);

// 11. Movie Search
// Concept: some()
let movies = ["kgf", "dhurander", "googly"]
let result = movies.some(m => m === "kgf");
console.log(result);


// 12. Hide Mobile Number
// Concept:slice()
let num ="987654321"
let last_digit = num.slice(-4);
console.log(last_digit);


// 13. Online Exam Result
// Concept: ternary operator
let s_mark = 60
let grade = s_mark >= 35 ? "Pass" : "Fail";
console.log(grade);


// 14. Cab Booking Price
// Concept: function, return
function cab(baseFare, extraKm) {
    let totalFare = baseFare + extraKm;
    return totalFare;
}
let total1 = cab(100, 50)
console.log(total1);


// 15. Instagram Hashtag Generator
// Concept: replaceAll()
let tag = "web developer"
let new_tag = tag.replaceAll(" ", "_")
console.log(new_tag);


// 16. Netflix Kids Content
// Concept: filter()
let movies_n = [
    { name: "A", age: 13 },
    { name: "B", age: 18 },
    { name: "C", age: 10 }
]
let kids = movies_n.filter(m => m.age < 18);
kids.forEach(m => console.log(m.name));


// 17. E-commerce Product Search
// Concept:startsWith()
let product = "iphone"
console.log(product.startsWith("i"));


// 18. WhatsApp Group Names
// Concept:forEach()
let groups = ["office", "friends", "family"];
groups.forEach((c, i) => {
    console.log(`${i + 1} ${c}`)
});


// 19. Salary Highest Finder
// Concept:reduce()
let salary = [20000,50000,70000,10000];
let highest = salary.reduce((low, high) => {
    return low > high ? low : high
});
console.log("Highest Salary:", highest);


// 20. Password Security Checker
// Concept:length, includes()
let pswd = "Basavaraj@5555"
if(pswd.length >= 8 && pswd.includes("@")){
    console.log("Strong Password");
} else {
    console.log("Weak Password");
}