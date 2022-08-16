export default function comma(price) {
  return (
    Number(price)
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원"
  );
}
