import { createEl } from "./utils/createEl.js";
import { $ } from "./utils/select.js";
import ItemsPage from "./components/pages/ItemsPage/index.js";
import DetailPage from "./components/pages/DetailPage/index.js";
import ShoppingCartPage from "./components/pages/ShoppingCartPage/index.js";
import ErrorPage from "./components/pages/ErrorPage/index.js";
console.log("app is running!");

export default function App({ $target }) {
  this.$app = createEl("div", "app", "Hello");

  $target.appendChild(this.$app);

  // 정규식으로 파라미터 나누기
  this.pathToRegex = (path) =>
    new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

  // 활성화된 페이지의 파라미터 가져와 배열에 담기
  this.getParams = (match) => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
      (result) => result[1]
    );

    return Object.fromEntries(
      keys.map((key, i) => {
        return [key, values[i]];
      })
    );
  };

  this.router = async () => {
    const routes = [
      {
        path: "/",
        component: ItemsPage,
      },
      {
        path: "/mall",
        component: ItemsPage,
      },
      {
        path: "/mall/:id",
        component: DetailPage,
      },
      {
        path: "/shopping-cart",
        component: ShoppingCartPage,
      },
      {
        path: "/404",
        component: ErrorPage,
      },
    ];

    const potentialMatches = routes.map((route) => {
      return {
        route: route,
        // result로 변경하고 정규식과 일치하는 pathname을 담는다
        result: location.pathname.match(this.pathToRegex(route.path)),
      };
    });

    // 정규식과 일치하는 pathname이 null이 아닌 경우 담기

    let match = potentialMatches.find(
      (potentialMatch) => potentialMatch.result !== null
    );
    // 에러 페이지로 이동시키자
    if (!match) {
      const page = new ErrorPage({ $target: this.$app });
      page.render();
    }

    // match 정보를 getParams에 보내 배열로 출력해서 view에 담기
    const view = new match.route.component({
      $target: this.$app,
      $initialState: this.getParams(match),
    });
    view.render();
  };

  this.navigateTo = (url) => {
    history.pushState(null, null, url);
    this.router();
  };

  // 뒤로가기 하거나 새로고침 했을 때 router도 그 페이지에 맞게 동작하도록
  window.addEventListener("popstate", this.router);

  document.addEventListener("DOMContentLoaded", () => {
    // 클릭 이벤트가 발생했을 때,

    document.body.addEventListener("click", (e) => {
      if (e.target.closest(".item-el__image")) {
        e.preventDefault();
        const id = e.target.closest(".item-el").dataset.id;
        this.navigateTo(`/mall/${id}`);
      }
    });

    document.body.addEventListener("click", async (e) => {
      if (e.target.closest(".item-el__like")) {
        e.preventDefault();
        const id = e.target.closest(".item-el").dataset.id;
        if (localStorage.getItem(id) === "true") {
          localStorage.setItem(id, false);
          $(".item-el__like > img").src = "src/assets/icon-heart.svg";
        } else {
          localStorage.setItem(id, true);
          $(".item-el__like > img").src = "src/assets/icon-heart-on.svg";
        }
      }
    });

    document.body.addEventListener("click", async (e) => {
      if (e.target.closest(".item-detail__like")) {
        e.preventDefault();
        const id = e.target.closest(".item-detail").dataset.id;
        if (localStorage.getItem(id) === "true") {
          localStorage.setItem(id, false);
          $(".item-detail__like > img").src = "../src/assets/icon-heart.svg";
        } else {
          localStorage.setItem(id, true);
          $(".item-detail__like > img").src = "../src/assets/icon-heart-on.svg";
        }
      }
    });
  });

  this.router();
}
