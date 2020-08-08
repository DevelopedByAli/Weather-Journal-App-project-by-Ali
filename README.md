# Weather-Journal App Project

## Table of Contents

* [Overview](#Overview)
* [Technologies](#technologies)
* [Most Required Skills](#Most-Required-Skills)
* [Detailed Explanation of the All Commitments](#Detailed-Explanation-of-the-All-Commitments)


## Overview

In this project it is required to create an asynchronous web app that uses Web API and user data to dynamically update the UI.


## Technologies

The most required technologies and programs in this project are

* JavaScript ES6
* Node.js
* HTML 5
* CSS 3

## Most Required Skills

* Knowledge of Server-Side Web Development

* Understanding of the `Node.js` and `Express` environments to develop a web applications

* Knowledge of using API keys

* Understanding the HTTP requests and routes i.e., Routes & `GET` requests, Routes & `POST` requests, Client side & Server side programming.

* Understanding the request object and the response object in Express

* Using the `fetch()` method and Fetch: Cross-Origin Requests (CORS)

* Connecting the Server Side and Client Side programming together

* Knowledge of Asynchronous JavaScript: `Callbacks`, `Promises`, `Generators`

* Testing `Node.Js/Express` API

## Detailed Explanation of the All Commitments

### Node.js and Express Environment

First of all Node.js and Express are installed. Then 

1. The project file `server.js` requires Express:

```javascript
const express = require('express')
// Start up an instance of app
const app = express();
```

2. The Express app instance is pointed to the project folder with `.html`, `.css` and `.js` files:

```javascript
app.use(express.static('website'));
```

### Dependencies

1. The cors package is installed, requires in the project file `server.js` and the instance of the app is setup to use `cors()`:

```javascript
// Cors for cross origin allowance
const cors = require('cors')
app.use(cors());
```

2. The `body-parser` package is installed and also included in the project:

```javascript
const bodyParser = require('body-parser')
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
```

### Creating The Local Server & Endpoint

1. We set our variable to port 3000.

```javascript
const port = 3000;
```

2. Utilize the `.listen()` method

```javascript
const server = app.listen(port, listening);
```

3. The listening function

This function will run when we execute the listen method to let you know that the server is running and on which port by logging messages to the console.

```javascript
function listening(){
     console.log("server running"); 
     console.log(`running on localhost: ${port}`);
}
```
Local server is running and producing feedback to the Command Line through a working callback function. JavaScript object named `projectData` is initiated in the file `server.js` to act as the app API endpoint.

### Integrating OpenWeatherMap API

1. The base URL, personal API Key (provided by the [OpenWeatherMap API](https://openweathermap.org/guide) documentation) and a dynamic values entered by a user were saved in named `const` and `let` variables.

2. API Key is then passed as a parameter to `fetch()`.

3. Data is successfully returned from the external API.

### Return Endpoint Data: Server Side & Client Side

There is a GET route setup on the server side (route I) with:

* the first argument as a string naming the route
* the second argument as a callback function to return the JS object created at the top of the code in the `server.js` file

There is also an asynchronous function to fetch the data from the app endpoint (route II) at the `website/app.js` file.

### POST Route

An entry can be added to the project endpoint using a POST route setup on the server side and executed on the client side as an asynchronous function. The client side function takes two arguments: 

* the URL to make a POST to
* an object holding the data to POST

The server side function creates a new entry in the app's endpoint (the named JS object) consisting of the data received from the client side POST.

### Dynamic UI

The button included in project HTML has an `addEventListener()` method called on it:

* with click as the first parameter
* a named callback function as the second parameter

The `input` element with the `placeholder` property and the `textarea` are used for the interaction. Existing DOM elements have their `innerHTML` properties dynamically set according to data returned by the app route.

