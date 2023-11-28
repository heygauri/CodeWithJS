//You can see the below message in the console bar of the inspect window.

console.log("Hello from Javascript! I am a dynamically typed language");

//Defining Variables (use camelCase style)

firstName = "Sumitra";
lastName = "Sharma";

console.log("My full name is", firstName, lastName);

//Other types of variables

age = 23;
price = 999.09;
isPresent = false;

console.log("age = ", age);
console.log("price = ", price);
console.log("isPresent = ", isPresent);

/* Undefined means a variable has been declared but has yet not been assigned a value.
Null on the other hand ia an assignment value itself. It can be assigned to a variable
as a representation of no value. */

x = null;
y = undefined;

console.log("x = ", x);
console.log("y = ", y);

//let, const & var
//var: Variable CAN be re-declared & updated. A global scope variable.

var name1 = "initialized name1";
var name1 = "re-declared name1";
name1 = "updated name1";
console.log(name1);

//let: Variable CANNOT be re-declared but CAN be updated. A block scope variable.

let name2 = "initialized name2";
//Uncommenting the below line will give you an error.
//let name2 =  "re-declared name2";
name2 = "updated name2"
console.log(name2);

//const: Variable CANNOT be re-declared or updated. A block scope variable.

const name3 = "initialized name3";
//Uncommenting the below lines will give you an error.
//const name3 = "re-declare name3";
//name3 = "updated name3"
console.log(name3);

/* Seven Primitive Datatypes in JS(Note: Null is of type object but is also 
considered as one of the primitive datatype in JS): */
let intVar = 23;
let floatVar = 100.99
let boolVar = true;
let stringVar = "String Variable";
let undefinedVar = undefined;
let nullVar = null;

console.log("intVar = ", intVar, "datatype = ", typeof(intVar));
console.log("floatVar = ", floatVar, "datatype = ", typeof(floatVar));
console.log("boolVar = ", floatVar, "datatype = ", typeof(boolVar));
console.log("stringVar = ", stringVar, "datatype = ", typeof(stringVar));
console.log("undefinedVar = ", undefinedVar, "datatype = ", typeof(undefinedVar));
console.log("nullVar = ", nullVar, "datatype = ", typeof(nullVar));

/* Non-primitive datatypes in JS are 'Objects'. Object has key/value pair separated with commas.
An object can be declared either using let or const keyword. */

//Example 1
const student = {
    fullName: "Sumitra Sharma",
    age: 23,
    cgpa: 8.17,
    isPass: true
};
console.log(student, typeof(student));

//Either print obj["key"] or obj.key
console.log(student["fullName"], student.fullName);
console.log(student["age"], student.age);
console.log(student["cgpa"], student.cgpa);
console.log(student["isPass"], student.isPass);

//Note: In Const objects, the values of keys CAN be updated. See below example.
student.age = student.age + 1;
console.log("Updated value of student age ", student.age);

//Example 2
const product = {
    productName: "Parker Jotter Standard CT Ball Pen",
    productColor: "Black",
    productRating: 4,
    productIsDeal: true,
    productPrice: 270,
    productOffer: 5
};
console.log(product);

//Example 3 
const profile = {
    userName: "heygauri",
    fullName: "Sumitra Sharma",
    posts: 195,
    followers: 569000,
    following: 4,
    isVerified: true,
    description: "Student at MNIT Jaipur"
};
console.log(profile);
console.log(typeof profile["posts"]);