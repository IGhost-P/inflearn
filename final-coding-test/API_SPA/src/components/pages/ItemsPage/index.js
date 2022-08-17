import { createEl } from "../../../utils/createEl.js";
import API from "../../../utils/api.js";
import ItemEl from "../../organism/ItemEl/index.js";

console.log("ItemsPage is running!");

export default function ItemsPage({ $target }) {
  this.setState = (state) => {
    this.state = {
      ...this.state,
      ...state,
    };
  };

  this.update = async () => {
    this.render();
  };

  this.render = async () => {
    $target.innerHTML = "";
    this.ItemList = createEl("div", "item-list");
    $target.appendChild(this.ItemList);
    this.setState({
      items: await API("GET"),
    });
    const markup = this.makeMarkup();
    this.ItemList.innerHTML = markup;
  };

  this.state = {
    items: [],
  };

  this.makeMarkup = () => {
    return this.state.items
      .map((item) => {
        return new ItemEl({
          $target: this.ItemList,
          initialState: item,
        }).makeMarkup();
      })
      .join("");
  };
}
