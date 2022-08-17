export default function clickLike() {
  document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", async (e) => {
      if (e.target.closest(".item-el__like")) {
        if (
          localStorage.getItem(e.target.closest(".item-el").dataset.id) ===
          "true"
        ) {
          localStorage.setItem(e.target.closest(".item-el").dataset.id, false);
        } else {
          localStorage.setItem(e.target.closest(".item-el").dataset.id, true);
        }
        await this.update();
      }
    });
  });
}
