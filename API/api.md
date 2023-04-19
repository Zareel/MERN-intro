# API

- Application Programming Interfaces

## Definition

- An API is a set of commands, functions, protocols, and objects that programmers can use to create software or interact with an external system

## jQuery

- jQuery is an API. It gets you access to whole bunch of functions and object that let you create software much more easily than you were writing vanila javascript

- with all of that and more let's go to the next lesson

=========================================================================

# API

we are covering below topics

- Endpoint
- paths
- Parameters
- Authentication

# API Endpoint

- Every API that interacts with an extarnal system like the server will have an endpoint
- It is the url of the API
- [kanye.rest](https://api.kanye.rest/)

# API Paths and Parameters

- inorder to narrow down specific piece of data you want from an external server
  [joke API](https://v2.jokeapi.dev/)

## path

- The url path is a string of information that comes after the top level domain name
- Top lever domain is everything that follows the final dot of a domain name
- In domain name google.com, `com` is the top level domain

## parameter

- sometime we might want to get a piece of data from an API that is something they can't plan for.
- eg: if i want to search for a programming joke that contains a word `debugging`. They wouldn't have thought of this ahead of time. Probalbly don't have a path to address this specific query
- inorder to allow the API to be flexible enough to deal with custom queries like this, usually APIs allow you to provied parameters
- Parameters go at the end of the URL after a question mark. and then there is a key value pair that goes into the url
- the key is called contains, and then after = sign comes the query (?contains=debugging)
- `https://v2.jokeapi.dev/joke/Programming?contains=debugging`
- if we have more than one query, the first query follows a question mard and every subsequent queries follows `ampersand`
- order of the parameters doesn't matter as long as they ar seperated bu ampersands or you write it at the beginning after the question mark

- nsfw => not safe for work

### inshort

- When you want to specify a parameter, the parameter comes after the question mark and they are set as a key value pair with an equal sign in between
- And when you want to have more than one parameter, you seperate each of the key value pair with ampersand symbal

# eg: url explanation

- https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw&type=single&contains=debugging
- category is `programming`
- i have blacklisted all the jokes that are `not safe for work`
- i have specified that i want only a `single part joke`
- And i want something that contains the word `debugging`

========================================================

# Authentication and Postman

- [weather API](https://openweathermap.org/api)
- [current weather data](https://openweathermap.org/current#data)
- [example-url-cityname](https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key})

## Authentication

- Everytime you make a request through an API, they have to identify you as a developer and they have to keep track of how often you are using this server to get data. Then charge you or limit you accordingly
- In order to illustrate the consept of authentication we are going to use weathermap api
- as you get more users and more traffic and you are likely to have more revenue then these data providers will start charging you to use that data

[url](https://api.openweathermap.org/data/2.5/weather?q=kerala,india&appid=52681eba6b5f5d1f0c6fe747847576ec)

- to convert the temp into celsious => &units=metric

## Postman

- is a tool to test our API

* # test the above url in postman

# JSON

## Javascript Object Notation

- xml => extensible markup language

## What us json?

- json is a standard text based format for representing structured data based on javascript object syntax.
- it is commonly used for transmitting data in web applications

=========================================================================================

# Putting APIs into practice

=> weather project
