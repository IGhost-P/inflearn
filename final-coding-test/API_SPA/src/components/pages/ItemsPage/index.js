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
    items: [
      {
        id: 1,
        productName: "Hack Your Life 개발자 노트북 파우치",
        price: 29000,
        thumbnailImg: "https://via.placeholder.com/380x380",
        discountRate: 0.19,
      },
      {
        id: 2,
        productName: "상품명2",
        price: 200000,
        thumbnailImg: "https://via.placeholder.com/380x380",
        discountRate: 0.2,
      },
      {
        id: 3,
        productName: "상품명3",
        price: 300000,
        thumbnailImg: "https://via.placeholder.com/380x380",
      },
    ],
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
