import { createEl } from "./utils/createEl.js";

console.log("app is running!");

export default function App({ $target }) {
  const $app = createEl("div", "app", "Hello World");
  console.log($target);
  $target.appendChild($app);
}
