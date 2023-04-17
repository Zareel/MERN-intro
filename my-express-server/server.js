const express = require("express");
const app = express();
PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`app is listening at port: ${PORT}`);
});
