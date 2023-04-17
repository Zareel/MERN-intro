const express = require("express");
const app = express();
PORT = 3000;

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);
  let result = num1 + num2;
  res.send(`The result is: ${result}`);
});

app.get("/bmicalculator", (req, res) => {
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator", (req, res) => {
  let weight = parseFloat(req.body.weight);
  let height = parseFloat(req.body.height);
  let BMI = weight / (height * height);

  res.send(`Your BMI is: ${BMI}`);
});

app.listen(PORT, () => {
  console.log(`App is listening to port ${PORT}`);
});
