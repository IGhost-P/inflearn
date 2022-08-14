export const createEl = (tag, className, text = "") => {
  const el = document.createElement(tag);
  el.className = className;
  el.innerText = text;
  return el;
};
