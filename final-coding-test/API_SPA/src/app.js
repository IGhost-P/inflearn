import { createEl } from "./utils/createEl.js";
import ItemsPage from "./components/pages/ItemsPage/index.js";
import DetailPage from "./components/pages/DetailPage/index.js";
import ShoppingCartPage from "./components/pages/ShoppingCartPage/index.js";
import ErrorPage from "./components/pages/ErrorPage/index.js";
console.log("app is running!");

export default function App({ $target }) {
  const $app = createEl("div", "app", "Hello World");

  $target.appendChild($app);

  const router = async () => {
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
  router();
}
