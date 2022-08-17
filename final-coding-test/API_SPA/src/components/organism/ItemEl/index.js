import comma from "../../../utils/comma.js";
export default function ItemEl({ initialState }) {
  this.state = {
    ...initialState,
  };

  this.makeMarkup = () => {
    const { id, productName, price, thumbnailImg, discountRate } = this.state;

    const like = localStorage.getItem(id) === "true" ? true : false;

    return `
            <div class="item-el" data-id=${id}>
                <div class="item-el__image">
                    <img src="${thumbnailImg}" alt="${productName}" />
                </div>
                <div class="item-el__info">
                  <div class="item-el__title">
                    <div class="item-el__name">${productName}</div>
                    ${
                      like
                        ? `<div class="item-el__like"><img src="src/assets/icon-heart-on.svg"></div>`
                        : `<div class="item-el__like"><img src="src/assets/icon-heart.svg"></div>`
                    }
                  </div>
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
