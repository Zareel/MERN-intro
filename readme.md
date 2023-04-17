# Backend

In backend our server interacts with our database then we execute some code on our server to create an application which then server to the client side. This will speed up your website and also keeps your business logic hidden

The commonly used technologies in the backen

- node js
- ruby
- java
- php

Frameworks for the above technologies

- express js
- ruby on rail
- spring
- cake php
  the main job of these frame work is to simply reduce the repetitive stuff the developer has to do. They save developers work by cutting down the ground work

# Nodejs

NodeJS is an open source, cross platform, javascript runtime environment with the focus on server side and networking application

## Why node js

- node js runs on javascript
- make us capable of creating scalable and really fast running websites
- it takes js out of the browser, liberates it allowing to interact directly with the hardware of the computer
- we can also use nodejs to run js code in someone else's computer or rather a server
- means, a user can logg on to google and put in a query and the brower will make requst to google servers and on those servers we can actually execute js code to process their request and after that run we can send back the result to the user or to the client and get the web browser to display the information. All the heavy lifting and code execution happens behind the scenes on the server rather than on the client side
- in the comming lessons we are going to be using nodejs to interact directly with the computer inorder to access local files listen to network traffic and manipulate databases

## companies using nodejs

- uber
- ebay
- twitter
- netflix

# command line / how to use node

git bash => pwd => cd Desktop/ => ls => mkdir intro-to-node => cd intro-to-node => ls => touch index.js => code .
=> in the vscode => node index.js

1. create a new folder called intro-to-node in the desktop
2. open it in the vs code
3. create a new file called index.js in the root folder in vs code
4. console log some text in the index.js file
5. open terminal using control+backtick
6. run the file using the command 'node index.js'

========================================================================================

# The node REPL (Read Evaluate Print Loops )

By installing node, we also install node reple (read evaluation print loops).
write 'node' inside the terminal and hit enter. Once you see that little angle bracket then you know you are inside the reple
here we can write code directly for eg: console.log("Hi there"), 5\*3, "zareel Kalam" etc

to exit from the terminal hit control + c twice

======================================================================

# How to use the native node module

We can use node js to get access directly to the local files of the computer. One of the built in module for node to help us to do that

## file system module

[nodejs file system](https://nodejs.org/docs/latest-v19.x/api/fs.html)

create a file called source.text in the root folder

```js
const fs = require("fs");

fs.copyFileSync("source.text", "destination.text");

//node index.js
```

# The npm package manager and installing extarnal node modules

- npm(node package manager) is a package manager for external modules

`npm init`

- index.js

```js
const superheroes = require("superheroes");
const supervillains = require("supervillains");

superheroes.all;
supervillains.all;

const mySuperHero = superheroes.random();
const myVillain = supervillains.random();

console.log = `my super hero is ${mySuperHero}`;
console.log(`my favourite villain is ${myVillain}`);
```

## json

: is simply a file format that we used to organize our data

## Express

Express js is a small framework that works on top of nodeJS webserver functionality to simplify it's API's and add helpfull new features

# Creating our first server with nodejs and express

- create new directory called my-express-server
- cd into the new directory
- inside create a new file called server.js
- initialize npm with server.js as start point

- server.js

```js
const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
```

PORT is where things are kept in the server. PORT never get displayed in the url

# Handling Requests and Responses: the `get` request

```js
const express = require("express");
const app = express();
PORT = 3000;

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
```

When we typed in localhost:3000, we specified a location of a server. And when we hit enter the browse will go to this location and make a request to get some data back and when that request gets made at the home location (app.get("/"))
then the call back gets triggered and we send the browser a response which is just a plain test "Hello World". That get send back to the browser and renders it on the screen

- create a new route called about so that when i got to the about page of my website localhost to see a quick brief bio of who you are

==============================================================

# nodemon installation

nodemon, an npm package that will make it way easier for us to autostart our servers

- nodemon is a utility that will monitor for any changes in your source and automatically restart your server
- means my server is active and refreshed to the latest version of code at all time
- it saves your sanity 😄

=============================================

# let's make a calculator

## Responding to request with html files

- create a file called index.html in the root folder

- index.html

```html
<body>
  <h1>Calculator</h1>
  <form action="/" method="post">
    <input type="text" name="num1" placeholder="first number" />
    <input type="text" name="num2" placeholder="second number" />
    <button type="submit" name="submit">Calculator</button>
  </form>
</body>
```

express => API reference => response => res.send => res.sendFile

- send.File transfers the file at the given path
  [Link - express,res.sendFils](http://expressjs.com/en/4x/api.html#res.send)

## What is http response status code?

It indecates whether an http request has been successfully completed
100-199 => informational responsex
200-299 => success responsex
300-399 => redirectional message
400-499 => error from client side
500-599 => error from server side

## now lets add a post method to handle a post request that come to our home route

```js
const express = require("express");
const app = express();
PORT = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  res.send("thanks for posting that");
});

app.listen(PORT, () => {
  console.log(`App is listening to port ${PORT}`);
});
```

## now how will we tap into the form data and do the calculation? 😕

for that we have to install another npm package which is called body parser

- npm install body-parser
- const bodyParser = require("body-parser")
  This is going to allow us to parse the information that we get to send from the post request

```js
const bodyParser = require("body-parser");

app.use(bodyParser);
```

bodyParser has a few modes

- bodyParser.text() => parse all the request into text
- bodyParser.json() => that special format which looks like javascript object
- bodyParser.urlencoded() => parse data that comes from html form

so here we are using bodyParser.urlencoded()
in addition to that we are using an option called extended and set it to be true.

```js
app.use(bodyParser.urlencoded({ extended: true }));
// this is basically the code that you need to write every time you want to use body parser
```

setting the extended to be true that allows us to post nested object.
why would you want to use the body parser?
It allows you to go into any of your route and you can tap into requst.body.
in other words by using bodyParser we are able to parse the http request that we get and by using urlencoded, we can get access to the form data

So here is our calcultor

```js
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

app.listen(PORT, () => {
  console.log(`App is listening to port ${PORT}`);
});
```

The important thing to take away from this is when you look at your website => right click => view page source =>
the client get to see a plain simple html code. No js code is visible. All the js code is hidden from the client as we have done it on our server. This is all because we built a backend that is doing the code execution instead of all of that js code running in the frontend which is on the client's browser
=============================================================

# BMI Routing challenge

- Create a new file called bmiCalculator.html inside the calculator folder from the last challenge
- Add the html boiler plate and set the page title BMI Calcualator
- Add and html form, this form will make a post request to our server at the route/ bmicalculator. The form will have inputs weitht and height with place holder text that tell the user what they should type into which text box
- Add a button which says `Calculate BMI`
- Add the get and post methods fro the /bmicalculator route into the same server.js file we have been using
- Use sendFile to send the bmiCalculator.html page as a response inside the get method
- Add an h1 that says BMI Calculator
- Inside server.js, create 2 variables one for weight and one for height
- Use the BMI Calculator code you wrote peviously, or write some new code to calculate and send back the result as text. It should read something like "Your BMI is N" where N is equalt to the calculated BMI based on their weight and height inputs
