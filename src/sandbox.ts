//#region Variables

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