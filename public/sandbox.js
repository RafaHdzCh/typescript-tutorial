"use strict";
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
