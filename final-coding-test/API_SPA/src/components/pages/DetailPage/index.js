import { createEl } from "../../../utils/createEl.js";
import API from "../../../utils/api.js";
import comma from "../../../utils/comma.js";
import clickLike from "../../../utils/clickLike.js";
export default function DetailPage({ $target, $initialState }) {
  this.param = $initialState;
  this.state = {};

  this.setState = (state) => {
    this.state = {
      ...this.state,
      ...state,
    };
  };

  this.render = async () => {
    $target.innerHTML = "";
    const $detail = createEl("div", "detialSection", "Detail");
    $target.appendChild($detail);
    this.setState(await API("GET", "/" + this.param.id));
    const markup = this.makeMarkup();

    $detail.innerHTML = markup;
  };

  this.makeMarkup = () => {
    const {
      id,
      productName,
      price,
      stockCount,
      thumbnailImg,
      option,
      discountRate,
      shippingFee,
      detailInfoImage,
      viewCount,
      pubDate,
      modDate,
    } = this.state;

    return `
    <div class="item-detail" data-id=${id}>
      <div class="item-detail__image">
        <img src="${thumbnailImg}" alt="${productName}" />
      </div>
      <div class="item-detail__info">
        <div class="item-detail__title">
          <div class="item-detail__name">${productName}</div>
          <div class="item-detail__price">${comma(price)}</div>
        </div>
      </div>
      <div class="item-detail__option__box">
        <p class="item-detail__option__text"택배 배송 / 무료 배송</p>
        <hr class="item-detail__option__line" />

      ${
        option.length > 0
          ? `
        <div class="item-detail__option">
          <button class="item-detail__option__btn">옵션을 선택하세요</button>

          ${
            isOptionSelected &&
            option.map((item) => {
              return `
              <div class="item-detail__option__item">
                <div class="item-detail__option__item__name">${item.name}</div>
                <div class="item-detail__option__item__price">${comma(
                  item.price
                )}</div>
              </div>
              `;
            })
          }
        `
          : `<div class="item-detail__option">${option}</div>`
      }
      <hr class="item-detail__option__line" />
      </div>
      <div class="item-detail__price__container">
        <p class="item-detail__price__text">총 상품 금액</p>
        <p class="item-detail__price__len">
          총 수랭${"1"}개</p>
          <hr class="item-detail__price__line__up" />
        <p class="item-detail__price__price">${comma(price)}</p>
        </div>
        <div class="item-detail__price__btn__container">
          <button class="item-detail__price__btn">바로 구매</button>
          <button class="item-detail__price__shop_btn">장바구니 담기</button>
          ${
            localStorage.getItem(id) === "true"
              ? `<div class="item-detail__like"><img src="../src/assets/icon-heart-on.svg"></div>`
              : `<div class="item-detail__like"><img src="../src/assets/icon-heart.svg"></div>`
          }
        </div>
      </div>      
    `;
  };
}

// {
//   // 고유, 게시물번호로 사용
//   id : 5,
//   productName : "Hack Your Life 개발자 노트북 파우치",
//   price : 36000,
//   stockCount : 230,
//   thumbnailImg : "asset/img/5/thumbnailImg.jpg",
//   // 상품별 옵션
//   option : [
//       {
//       // 각 상품별 옵션 id
//       id:1,
//       optionName:"13인치",
//       // 옵션별 추가금
//       additionalFee:0
//       },
//       {
//       id:2,
//       optionName:"15인치",
//       additionalFee:1000
//       }
//   ],
//   discountRate: 19,
//   shippingFee: 1500,
//   // 이미지 주소 배열형태로 제공
//   detailInfoImage : ["asset/detail/5/detail1.png","asset/detail/5/detail2.png"],
//   viewCount : 0,
//   pubDate : "2022-02-28",
//   modDate : "2022-02-28"
// }
