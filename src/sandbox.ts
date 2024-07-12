//#region Variables

import { Invoice } from "./classes/Invoice";

let names: String[] = ["Luigi","Mario","Yoshi"];

names.push("Toad");

let ninja =
{
    name:"Mario",
    belt: "Black",
    age: 30
}

let user: 
{
    rank: number,
    level: number
    xp: number,
}

user = 
{
    rank:15,
    level:30,
    xp:30
}

//#endregion

//#region Functions

let Greet: Function;
Greet = () =>
{
    console.log("Hello!");
}

const Add = (a: number, b: number, c?:number|string) =>
{
    console.log(a + b);
    console.log(c);
}

Add(5,19, "hey");

const Minus = (a:number, b:number): number => 
{
    return a - b;
}

let result = Minus(10,7)

//#endregion

//#region Aliases

type StringOrNum = string | number;

const LogDetails = (uid: StringOrNum, item: string) =>
{
    console.log(`${item} says hello!`)
}
LogDetails(1,"Soap");

type ObjectWithName = {name: string, uid: StringOrNum}

const GreetAgain = (user: ObjectWithName) => 
{
    console.log(`${user.name} says hello!`);
}

GreetAgain({name: "string", uid: "StringOrNum"}
)

//#endregion

//#region Function signatures

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice("Yoshi", "web work", 250);
// docTwo = new Payment("Mario", "plumbing work", 300);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs)

interface IsPerson 
{
  name: string;
  age: number;
  Speak(text: string): void;
  Spend(amount: number): void;
}

const me: IsPerson = 
{
  name: "Rafa",
  age: 25,
  Speak(text: string): void
  {
    console.log(text);
  },
  Spend(amount: number): number
  {
    console.log(amount);
    return amount;
  },
}

const GreetPerson = (user: IsPerson) =>
{
  console.log("Hello,",user.name);
}

GreetPerson(me);

const invOne = new Invoice("Rafa", "Cellphone", 300);
const invTwo = new Invoice("LUigi", "Work", 200);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

    //Example #1
    let func: (A: String, B: String) => void;
    func = (name: String, greeting: String) =>
    {
        console.log(`${name} says ${greeting}`);
    }

    //Example #2
    let calc: (a: number, b: number, c: string) => number;
    calc = (numOne: number, numTwo: number, action:  string) =>
    {
        if(action === "add")
        {
            return numOne+numTwo;
        }
        else
        {
            return numOne-numTwo;
        }
    }

    //Example #3
    let Log: (obj: {name: string, age: number}) => void;
    type person = {name: string, age: number};
    
    Log = (ninja: person) =>
    {
        console.log(`${ninja.name} is ${ninja.age} years old`)
    }

//#endregion

//#region Generics

// T === type
const AddID = <T extends {name: string}>(object: T) =>
{
    const id = Math.floor(Math.random() * 100);
    return {...object, id};
}

const docOne = AddID(
{
    name: "Yoshi",
    age: 40    
});

interface Resource<T> 
{
    id: number;
    resourceName: string;
    data: T;
}

const docThree: Resource<string> = 
{
    id: 1,
    resourceName: "Person",
    data: "Datos",
}
//#endregion

//#region Tuples

let arr = ["ryu", 25, true];

let tup: [string, number, boolean] = ["tyu", 44, true]

//#endregion
