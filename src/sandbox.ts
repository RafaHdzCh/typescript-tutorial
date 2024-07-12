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