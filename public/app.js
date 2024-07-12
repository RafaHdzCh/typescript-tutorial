import { Invoice } from "./classes/Invoice.js";
const invOne = new Invoice("Rafa", "Cellphone", 300);
const invTwo = new Invoice("LUigi", "Work", 200);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(invoice => {
    console.log(invoice.Format());
});
const anchor = document.querySelector("a");
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const toFrom = document.querySelector("#toFrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(type.value);
    console.log(toFrom.value);
    console.log(details.value);
    console.log(amount.valueAsNumber);
});
