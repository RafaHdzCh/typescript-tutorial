//#region Variables
import { Invoice } from "./classes/Invoice";
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
const me = {
    name: "Rafa",
    age: 25,
    Speak(text) {
        console.log(text);
    },
    Spend(amount) {
        console.log(amount);
        return amount;
    },
};
const GreetPerson = (user) => {
    console.log("Hello,", user.name);
};
GreetPerson(me);
const invOne = new Invoice("Rafa", "Cellphone", 300);
const invTwo = new Invoice("LUigi", "Work", 200);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
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
//#region Generics
// T === type
const AddID = (object) => {
    const id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, object), { id });
};
const docOne = AddID({
    name: "Yoshi",
    age: 40
});
const docThree = {
    id: 1,
    resourceName: "Person",
    data: "Datos",
};
//#endregion
//#region Tuples
let arr = ["ryu", 25, true];
let tup = ["tyu", 44, true];
//#endregion
