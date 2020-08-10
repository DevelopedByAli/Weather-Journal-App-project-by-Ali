/* Global Variables */
// OpenWheatherMap API key 
let baseUrl = 'http://api.openweathermap.org/data/2.5/forecast?zip=';
const apiKey = '&appid=09af6e7123579bd866598c0c0973661a';
const generate = document.getElementById('generate');

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Creating an event listener for the element with the id: generate, with a callback function to execute when it is clicked.
generate.addEventListener('click', performAction);

function performAction(element) {

    const newZip = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;

    getWeather(baseUrl, newZip, apiKey)

    .then(function(data) {
        console.log(data);
        // Adding data to the POST request
        addData('/add', { date: newDate, temp: data.list[0].main.temp, content: feelings })
        UpdateUI();
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
