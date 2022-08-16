export default function API(method, id = "") {
  const URL = "http://test.api.weniv.co.kr/";

  switch (method) {
    case "GET":
      return fetch(URL + `mall` + `${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
    case "POST":
      return fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
    case "PUT":
      return fetch(URL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
    case "DELETE":
      return fetch(URL, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
    default:
      return null;
  }
}
