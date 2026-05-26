// Task 1 — Spread Operator


let frontEnd = ["HTML","CSS"];
let backEnd = ["Node","MongoDB"];

let merged = [...frontEnd,...backEnd];
console.log(merged);

// Task 2 — Copy Array


let original = [1,2,3];

let copied = [...original];
copied.push(4);

console.log("Original:", original);
console.log("Copied:", copied);


// Task 3 — Object Merge

let student1 = {
    name : "Altaf"
};

let student2 = {
    role : "Developer"
};

let result = {...student1,...student2};

console.log(result);


// Task 4 — Rest Operator

function total(a,b,...rest){
    console.log("a =", a);
    console.log("b =", b);
    console.log("Remaining values =", rest);
    console.log("Total remaining =", rest.length);
}

total(1,2,3,4,5,6,7,8);

// Task 5 — Array Destructuring

let colors = ["red","green","blue","yellow"];

let [c1,c2,c3,c4] = colors;

console.log(c3);


// Task 6 — Nested Array Destructuring

let data = [1,[2,[3,[4]]]];

let [a,[b,[c,[d]]]] = data;

console.log(a,b,c,d);

// Task 7 — Object Destructuring

let mobile = {
    brand : "Iphone",
    price : 50000,
    color : "orange"
};
let {brand,price,color} = mobile;

console.log(brand,color);

// Task 8 — push() & pop()

let numbers = [1,2,3];

numbers.push(4,5,6);
numbers.pop();

console.log(numbers);


// Task 9 — shift() & unshift()

let fruits = ["banana","orange"];

fruits.unshift("apple");
fruits.shift();

console.log(fruits);

// Task 10 — splice()

let arr1 = [1,2,30,40,5,6];

arr1.splice(2,2,3,4);

console.log(arr1);

// Task 11 — concat()

let a1 = [1,2];
let b1 = [3,4];

let mergedArr = a1.concat(b1,5,6);

console.log(mergedArr);

// Task 12 — slice()

let marks = [10,20,30,40,50,60];

let extracted = marks.slice(2,5);

console.log(extracted);

// Task 13 — flat()

let nest = [1,[2,[3,[4,[5]]]]];

console.log(nest.flat(Infinity));


// Task 14 — fill()


let arr2 = [1,2,3,4,5];

arr2.fill("done",3);

console.log(arr2);

// Task 15 — includes()


let values = [10,20,30,40];

console.log(values.includes(20));
console.log(values.includes(100));

// Task 16 — indexOf()

let arr3 = [1,2,3,4,3,2];

console.log(arr3.indexOf(3));
console.log(arr3.indexOf(2));

// Task 17 — lastIndexOf()

let arr4 = [1,2,3,4,3,2];

console.log(arr4.lastIndexOf(3));
console.log(arr4.lastIndexOf(2));

// Task 18 — sort()

let nums = [100,2,55,1,9];

console.log(nums.sort()); // Wrong output

console.log(nums.sort((a,b)=>a-b)); // Correct

// Task 19 — reverse()

let letters = ["a","b","c","d"];

letters.reverse();

console.log(letters);


// Task 20 — Student Management
let students = ["Kumar","Raghava","Praveen"];

students.push("Altaf");
students.splice(1,1);
students.splice(1,1,"Naveen");
students.reverse();

console.log(students);

// Task 21 — Shopping Cart

let cart = ["Shoes","Watch","Phone"];

cart.push("Laptop");

cart.splice(cart.indexOf("Watch"),1);

console.log(cart.includes("Phone"));

console.log("Total Items =", cart.length);


// Task 22 — Employee Database

let employee = {
    name : "Naveen",
    role : "Web Developer",
    salary : "5LPA"
};

let {name,role,salary} = employee;

console.log(name,role,salary);

let copyEmployee = {...employee};

copyEmployee.salary = "10LPA";

console.log("Original:", employee);
console.log("Copied:", copyEmployee);

// Task 23 — Custom Function
function company(name,...skills){
    console.log("Employee Name:", name);
    console.log("Skills:", skills);
    console.log("Total Skills:", skills.length);
}

company("Altaf","HTML","CSS","JS","React");

// Task 24 — Array Analyzer

let data2 = [1,2,3,4,5,6,7,8,9,10];

console.log(data2.slice(0,5));

console.log([...data2].reverse());

console.log(data2.includes(7));

console.log(data2.indexOf(10));


// Task 25 — Complete Challenge


let users = [
    {name:"Naveen",role:"Developer"},
    {name:"Raghava",role:"Designer"},
    {name:"Altaf",role:"Tester"}
];


// Add new user

users.push({name:"Naveen",role:"Manager"});

// Remove last user

users.pop();

// Merge another array

let extraUsers = [
    {name:"Arjun",role:"Frontend"},
    {name:"Ravi",role:"Backend"}
];

users = [...users,...extraUsers];

// Print names only

users.forEach(user => console.log(user.name));

// Reverse final array

users.reverse();

console.log(users);




