import { Invoice } from "./classes/Invoice.js";

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

const anchor = document.querySelector("a")!;
const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#toFrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (event: Event) => 
{
  event.preventDefault();

  console.log(type.value);
  console.log(toFrom.value)
  console.log(details.value)
  console.log(amount.valueAsNumber)
})