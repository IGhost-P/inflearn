import { createEl } from "../../../utils/createEl.js";
export default function ItemsPage({ $target }) {
  this.render = () => {
    const $items = createEl("div", "items", "Items");
    $target.appendChild($items);
  };

  console.log("ItemsPage is running!");
}
