import { createEl } from "../../../utils/createEl.js";
import API from "../../../utils/api.js";
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
    console.log(this.state);
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

    return ``;
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
