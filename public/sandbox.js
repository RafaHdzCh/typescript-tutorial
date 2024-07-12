"use strict";
//#region Variables
let names = ["Luigi", "Mario", "Yoshi"];
names.push("Toad");
let ninja = {
    name: "Mario",
    belt: "Black",
    age: 30
};
let user;
user =
    {
        rank: 15,
        level: 30,
        xp: 30
    };
//#endregion
//#region Functions
let Greet;
Greet = () => {
    console.log("Hello!");
};
const Add = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
Add(5, 19, "hey");
const Minus = (a, b) => {
    return a - b;
};
let result = Minus(10, 7);
const LogDetails = (uid, item) => {
    console.log(`${item} says hello!`);
};
LogDetails(1, "Soap");
const GreetAgain = (user) => {
    console.log(`${user.name} says hello!`);
};
GreetAgain({ name: "string", uid: "StringOrNum" });
//#endregion
//#region Function signatures
//Example #1
let func;
func = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
//Example #2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === "add") {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
//Example #3
let Log;
Log = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
//#endregion
