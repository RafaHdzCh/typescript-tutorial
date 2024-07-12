
class Invoice
{
  constructor(
    readonly client: string,
    private details: string,
    private amount: number,
  ){}

  Format()
  {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}

const invOne = new Invoice("Rafa", "Cellphone", 300);
const invTwo = new Invoice("LUigi", "Work", 200);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(invoice =>
{
  console.log(invoice.Format());
})

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