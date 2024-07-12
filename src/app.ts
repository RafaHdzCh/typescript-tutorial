import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from './classes/Payments.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#toFrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

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

  list.Render(doc, type.value, "end")
})