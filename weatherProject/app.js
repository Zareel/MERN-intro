const express = require("express");
const app = express();
PORT = 3000;
const https = require("https");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

//make get request to external server node
//https node

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  console.log(req.body.cityName);
  const query = req.body.cityName;
  const apikey = "52681eba6b5f5d1f0c6fe747847576ec";
  const unit = "metric";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apikey}&units=${unit}`;
  https.get(url, (response) => {
    console.log(response.statusCode);

    response.on("data", (data) => {
      //console.log(data)
      //convert the data into javascript object
      const weatherData = JSON.parse(data);
      console.log(weatherData);
      const temp = weatherData.main.temp;
      const description = weatherData.weather[0].description;

      const icon = weatherData.weather[0].icon;
      const imageURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;

      res.write(`<p>The weather is currently ${description}.</p>`);
      res.write(
        `<h1>  The temperature in ${query} is ${temp} degrees celcius</h1>`
      );
      res.write("<img src=" + imageURL + " />");
      res.send();
    });
  });
});

app.listen(PORT, (req, res) => {
  console.log(`Server is running at PORT: ${PORT}`);
});
