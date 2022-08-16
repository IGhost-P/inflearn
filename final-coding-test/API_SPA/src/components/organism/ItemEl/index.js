import comma from "../../../utils/comma.js";
export default function ItemEl({ initialState }) {
  this.state = {
    ...initialState,
  };

  this.makeMarkup = () => {
    const { id, productName, price, thumbnailImg, discountRate } = this.state;
    return `
            <div class="item-el">
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
                            )}
                            }</div>
                            <div class="item-el__discount-percent">${
                              discountRate * 100 + "%"
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
