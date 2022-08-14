import { createEl } from "../../../utils/createEl.js";
export default function ErrorPage({ $target }) {
  this.render = () => {
    const $items = createEl("div", "items", "error");
    $target.appendChild($items);
  };

  console.log("error is running!");
}
