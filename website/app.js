/* Global Variables */
// OpenWheatherMap API key 
let baseUrl = 'http://api.openweathermap.org/data/2.5/forecast?zip=';
const apiKey = '&appid=09af6e7123579bd866598c0c0973661a';
const generate = document.getElementById('generate');

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();

// Creating an event listener for the element with the id: generate, with a callback function to execute when it is clicked.
generate.addEventListener('click', performAction);

function performAction() {

    const zipCode = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;

    getWeather(baseUrl, zipCode, apiKey)

    .then(function(data) {
        console.log(data);
        // Adding data to the POST request
        addData('/addData', { date: newDate, temp: data.list[0].main.temp, content: feelings });

    })

    .then(function() {

        UpdateUI()
    })

}

// A function to get the Web API data
const getWeather = async(baseUrl, zip, key) => {

    const res = await fetch(baseUrl + zip + key)
    try {
        const data = await res.json();
        return data;
    } catch (error) {
        console.log('error', error);
    }
}

// Posting data function 
const addData = async(url = '', data = {}) => {

    console.log(data);
    const response = await fetch(url, {

        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify(data)
    })

    try {
        const newData = await response.json();
        console, log(newData);
        return newData
    } catch (error) {
        console.log('error', error);
    }
}

// Creating a function to get the project data
const UpdateUI = async() => {

    const request = await fetch('/allData');

    try {
        const allData = await request.json();
        document.getElementById('date').innerHTML = `Date: ${allData[0].date}`;
        document.getElementById('temp').innerHTML = `Temperature: ${allData[0].temp}`;
        document.getElementById('content').innerHTML = `I feel: ${allData[0].content}`;

    } catch (error) {
        console.log('error', error);
    }
}
