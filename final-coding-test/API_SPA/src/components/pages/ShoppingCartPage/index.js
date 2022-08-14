import { createEl } from "../../../utils/createEl.js";
export default function ShoppingCartPage({ $target }) {
  this.render = () => {
    const $items = createEl("div", "items", "ShoppingCartPage");
    $target.appendChild($items);
  };

  console.log("ShoppingCartPage is running!");
}
