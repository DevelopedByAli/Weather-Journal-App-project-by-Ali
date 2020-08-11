// Setup empty JS object to act as endpoint for all routes
projectData = [];

// Require Express to run server and routes

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Start up an instance of app

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Cors for cross origin allowance

const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server

const port = 3000;
const server = app.listen(port, listening);

function listening() {

    console.log('server running');
    console.log(`running on localhost: ${port}`);
}

// Processing the GET request

app.get('/allData', sendData);

function sendData(req, res) {

    res.send(projectData);
}

// Processing the POST request

app.post('/addData', postData);

function postData(req, res) {

    // temp -> temperature
    // content -> user response
    newEntry = {
        temp: req.body.temp,
        date: req.body.date,
        content: req.body.content
    }
    
    projectData.push(newEntry);
    res.send(projectData);
}
