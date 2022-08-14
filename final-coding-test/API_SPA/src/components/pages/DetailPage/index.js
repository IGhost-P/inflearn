import { createEl } from "../../../utils/createEl.js";
export default function DetailPage({ $target, $initialState = "" }) {
  this.$initialState = $initialState;
  this.render = () => {
    const $items = createEl("div", "items", "Detail");
    $target.appendChild($items);
  };

  console.log("DetailPage is running!");
}
