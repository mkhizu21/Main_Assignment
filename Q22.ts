//Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test.

let car1 = "BMW";
console.log("Is car1 == \'BMW?\' I predict true");
console.log(car1 == "BMW");
console.log("Is car1 == \'Mercedes?\' I predict False");
console.log(car1 == "Mercedes");
console.log("Is car1 == \'Toyota?\' I predict false");
console.log(car1 == "Toyota");

let country1 = "Pakistan";
console.log("Is country1 == \'Pakistan?\' I predict true");
console.log(country1 == "Pakistan");
console.log("Is country1 == \'India?\' I predict False");
console.log(country1 == "India");
console.log("Is country1 == \'China?\' I predict False");
console.log(country1 == "China");

let fruit1 = "Apple";
console.log("Is fruit1 == \'Apple?\' I predict true");
console.log(fruit1 == "Apple");
console.log("Is fruit1 == \'Banana?\' I predict False");
console.log(fruit1 == "Banana");
console.log("Is fruit1 == \'Mango?\' I predict False");
console.log(fruit1 == "Mango");


console.log();

//24

//Tests using the lower case function

let car2 = "BMW";
console.log("Is car2 == \'bmw?\' I predict true");
console.log(car2.toLowerCase() == "bmw");
console.log("Is car2 == \'mercedes?\' I predict False");
console.log(car2.toLowerCase() == "mercedes");

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

console.log();
let num1 = 5;
console.log("Is num1 == 5? I predict true");
console.log(num1 == 5);
console.log("Is num1 == 6? I predict False");
console.log(num1 == 6);
console.log("Is num1 > 4? I predict true");
console.log(num1 > 4);

console.log();

//Tests using "and" and "or" operators

let num2 = 5;
console.log("Is num2 > 4 and num2 < 6? I predict true");
console.log(num2 > 4 && num2 < 6);
console.log("Is num2 > 4 and num2 < 5? I predict False");
console.log(num2 > 4 && num2 < 5);
console.log("Is num2 > 4 or num2 < 5? I predict true");
console.log(num2 > 4 || num2 < 5);
console.log("Is num2 > 6 or num2 < 5? I predict False");
console.log(num2 > 6 || num2 < 5);

console.log();

//Test whether an item is in a array

let cars3:string[] = ["BMW", "Audi", "Mercedes", "Toyota", "Honda", "Suzuki", "Hyundai", "Kia", "Mazda", "Nissan"];

console.log("Is BMW in cars3? I predict true");
console.log(cars3.includes("BMW"));

//Test whether an item is not in a array

console.log("Is BMW not in cars3? I predict False");
console.log(!cars3.includes("BMW"));

