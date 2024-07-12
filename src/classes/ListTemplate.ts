import { HasFormatter } from "../interfaces/HasFormatter.js";

export class ListTemplate
{
  constructor(private container: HTMLUListElement){}

  Render(item: HasFormatter, heading: string, position: "start" | "end")
  {
    const li = document.createElement("li");
    const h4 = document.createElement("h4");
    h4.innerText = heading;
    li.append(h4);

    const p = document.createElement("p");
    p.innerText = item.Format();
    li.append(p);

    if(position === "start")
    {
      this.container.prepend(li)
    }
    else
    {
      this.container.append(li);
    }
  }
}