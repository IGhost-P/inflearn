import { createEl } from "../../../utils/createEl.js";
export default function ItemsPage({ $target }) {
  this.render = () => {
    const $items = createEl("div", "items", "Items");
    $target.appendChild($items);

    const $routeDetail = createEl("a", "route-detail", "Detail");
    $routeDetail.href = "/shopping-cart";
    $routeDetail.setAttribute("data-link", "");
    $items.appendChild($routeDetail);
  };

  console.log("ItemsPage is running!");
}
