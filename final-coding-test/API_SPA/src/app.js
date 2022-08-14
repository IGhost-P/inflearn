import { createEl } from "./utils/createEl.js";
import ItemsPage from "./components/pages/ItemsPage/index.js";
import DetailPage from "./components/pages/DetailPage/index.js";
import ShoppingCartPage from "./components/pages/ShoppingCartPage/index.js";
import ErrorPage from "./components/pages/ErrorPage/index.js";
console.log("app is running!");

export default function App({ $target }) {
  const $app = createEl("div", "app", "Hello World");

  $target.appendChild($app);

  this.router = async () => {
    const routes = [
      {
        path: "/",
        component: ItemsPage,
      },
      {
        path: "/items",
        component: ItemsPage,
      },
      {
        path: "/items/:id",
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

    const pageMatches = routes.find(
      (route) => window.location.pathname === route.path
    );

    console.log(window.location.pathname);
    if (pageMatches) {
      const { component: Page } = pageMatches;
      const page = new Page({ $target });
      page.render();
    }

    // 메인 페이지로 이동시키자
    if (!pageMatches) {
      const page = new ErrorPage({ $target });
      page.render();
    }
  };
  this.navigateTo = (url) => {
    history.pushState(null, null, url);
    this.router();
  };
  // 뒤로가기 하거나 새로고침 했을 때 router도 그 페이지에 맞게 동작하도록
  window.addEventListener("popstate", this.router);

  document.addEventListener("DOMContentLoaded", () => {
    // 클릭 이벤트가 발생했을 때,
    // 해당 target이 'data-link' attribute가 있다면
    // 페이지 이동 함수 실행
    document.body.addEventListener("click", (e) => {
      if (e.target.matches("[data-link]")) {
        e.preventDefault();
        this.navigateTo(e.target.href);
      }
    });
  });

  this.router();
}
