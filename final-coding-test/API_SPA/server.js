const express = require("express");
const path = require("path");

const app = express();

// /src 로시작되는 경로는 루트폴더/src인 정적 루트로 변경한다
app.use("/src", express.static(path.resolve(__dirname, "src")));

// Single page이기 때문에,
// 모든 경로에서 index.html을 불러온다.

app.get("/*", (req, res) => {
  res.sendFile(path.resolve("src", "index.html"));
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running...");
});
