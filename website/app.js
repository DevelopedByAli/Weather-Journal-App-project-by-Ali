/* Global Variables */
// OpenWheatherMap API key 
let baseUrl = 'http://api.openweathermap.org/data/2.5/forecast?zip=';
const apiKey = '&appid=09af6e7123579bd866598c0c0973661a';
const generate = document.getElementById('generate');

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
