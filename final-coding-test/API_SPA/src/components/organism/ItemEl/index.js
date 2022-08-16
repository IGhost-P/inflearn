import comma from "../../../utils/comma.js";
export default function ItemEl({ initialState }) {
  this.state = {
    ...initialState,
  };

  this.onClick = () => {
    console.log("onClick");
    history.pushState(null, null, `/mall/${this.state.id}`);
  };

  this.makeMarkup = () => {
    const { id, productName, price, thumbnailImg, discountRate } = this.state;
    return `
            <div class="item-el" data-id=${id}>
                <div class="item-el__image">
                    <img src="${thumbnailImg}" alt="${productName}" />
                </div>
                <div class="item-el__info">
                    <div class="item-el__name">${productName}</div>
                <div class="item-el__price_box">
                    <div class="item-el__price">${comma(price)}</div>
                    ${
                      discountRate
                        ? `
                            <div class="item-el__discount-price">${comma(
                              price * discountRate
                            )}</div>
                            <div class="item-el__discount-percent">${
                              discountRate + "%"
                            }</div>
                `
                        : ""
                    }
                    </div>
                </div>
            </div>
        `;
  };
}
