import { createEl } from "../../../utils/createEl.js";
export default function DetailPage({ $target }) {
  const render = () => {
    const $items = createEl("div", "items", "Detail");
    $target.appendChild($items);
  };

  console.log("DetailPage is running!");
}
