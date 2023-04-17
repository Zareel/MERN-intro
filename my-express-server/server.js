const express = require("express");
const app = express();
PORT = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact me at zareel@gmail.com</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h3>I am a fullstack developer</h3>");
});

app.get("/hobbies", (req, res) => {
  res.send("<h2>My hobby is coding</h2>");
});

app.listen(PORT, () => {
  console.log(`app is listening at port: ${PORT}`);
});
