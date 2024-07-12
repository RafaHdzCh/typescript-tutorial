import { Invoice } from "./classes/Invoice.js";
import { Payment } from './classes/Payments.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

const anchor = document.querySelector("a")!;
const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#toFrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (event: Event) => 
{
  event.preventDefault();

  let doc: HasFormatter;
  if(type.value === "invoice")
  {
    doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
  }
  else
  {
    doc = new Payment(toFrom.value, details.value, amount.valueAsNumber)
  }
  console.log(doc);
})