# Making get request with node

- app.js

- we passed in a url and based on that we got a response and we simply logged it

```js
const express = require("express");
const app = express();
PORT = 3000;

const https = require("https");

//make get request to external server node
//https node

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=canada&appid=52681eba6b5f5d1f0c6fe747847576ec&units=metric";

app.get("/", (req, res) => {
  https.get(url, (response) => {
    console.log(response);
  });
  res.send(`<h1>I am creating a weather app</h1>`);
});

app.listen(PORT, (req, res) => {
  console.log(`Server is running at PORT: ${PORT}`);
});
```

=================================================================================

- we can actualy log the status code that associated with the response

```js
cosole.log(response.statusCode);
```

# How to parse json

## statusCode

- 100-199 => informational responses
- 200-299 => success responses
- 300-399 => redirectional message
- 400-499 => error from the client side
- 500-599 => error from server side

# JSON.srtingify

```js
app.get("/", (req, res) => {
  https.get(url, (response) => {
    console.log(response.statusCode);

    response.on("data", (data) => {
      //console.log(data)
      //convert the data into javascript object
      const weatherData = JSON.parse(data);
      //console.log(weatherData);
      const object = {
        name: "zareel",
        age: 43,
      };
      console.log(JSON.stringify(object));
    });
  });
  res.send(`<h1>I am creating a weather app</h1>`);
});
```

### What i learned

- get hold of the data from the response

* parse the json data that we get back into an actual javascript object
* then i saw how i can get through the javascript object and get the specific data we are interested in

```js
const express = require("express");
const app = express();
PORT = 3000;

const https = require("https");

//make get request to external server node
//https node

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=canada&appid=52681eba6b5f5d1f0c6fe747847576ec&units=metric";

app.get("/", (req, res) => {
  https.get(url, (response) => {
    console.log(response.statusCode);

    response.on("data", (data) => {
      //console.log(data)
      //convert the data into javascript object
      const weatherData = JSON.parse(data);
      console.log(weatherData);
      const temp = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      console.log(description);

      console.log(temp);
    });
  });
  res.send(`<h1>I am creating a weather app</h1>`);
});

app.listen(PORT, (req, res) => {
  console.log(`Server is running at PORT: ${PORT}`);
});
```

## learned

- how to fetch data from an external server
- get the data in the form of json
- and parse it into an actual javascript object
- which we can dig through the pieces of data that we want
- # next step is putting it on to our website

# Using express to render a website with live API data

- inorder to parse the data back inside our app.get, we have to tap into our response
- this is the response that our server going to pass to the clients browser
- in this case the response could just be the data that we have got
- so we can say 👇

```js
res.send(`The temperature in London is: ${temp}`);
```

- ipmortant => we can have only one res.sent in any given one of these app methods

- its little bit boring if it just display the weather of only Canada. That is not much of a website. What if we get the user to type what they are interested in and we suply replace this query, what ever city they want
- for tha break down each part of the url

## write the necessary code in the index.html

```html
<body>
  <form action="/" method="post">
    <label for="cityInput">City Name: </label>
    <input id="cityInput" type="text" name="cityName" />
    <button type="submit">Go</button>
  </form>
</body>
```

## render this index.html

- body-parser is the package that allows me to look through the body of the post request and fetch the data based on the name of the input which is city name
- install body-parser
- npm i body-parser

```js
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
```

- app.js

```js
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
```
