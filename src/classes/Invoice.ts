import {HasFormatter} from "../interfaces/HasFormatter.js"

export class Invoice implements HasFormatter{
  constructor(
    readonly client: string,
    private details: string,
    private amount: number
  ) { }

  Format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}
