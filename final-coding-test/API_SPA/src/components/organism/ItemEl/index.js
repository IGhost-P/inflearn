export default function ItemEl ($target, initialState){

    this.render = () => {
        const markup = 

    }

    this.makeMarkup = () => {
        const { id, productName , price, thumbnailImg, discountRate} = this.state;
        return `
            <div class="item-el">
                <div class="item-el__image">
                    <img src="${thumbnailImg}" alt="${productName}">
                </div>
                <div class="item-el__info">
                    <div class="item-el__name">${productName}</div>
                <div>
                <div class="item-el__price_box">
                    <div class="item-el__price">${price}</div>
                    ${discountRate ?                     
                        `<div class="item-el__discount">
                            <div class="item-el__discount-price">${price * discountRate}</div>
                            <div class="item-el__discount-percent">${discountRate}</div>
                        </div>
                ` : ""}
                </div>
            </div>
        `;
    }
}