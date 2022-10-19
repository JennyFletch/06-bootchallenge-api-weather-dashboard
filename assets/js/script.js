// API INFO
var openweatherBaseUrl = 'https://api.openweathermap.org';
var openweatherKey = 'bdb4743787713bf16cafd1c2dec3eb6a';

// single location call
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// doc link: https://openweathermap.org/current 

// multi-day forecast call
// note: cnt = # of days (5)
// api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}&appid={API key}
// doc link: https://openweathermap.org/forecast16

// geocoding call
// note: only city name and key required
// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
// doc link: https://openweathermap.org/api/geocoding-api#direct


// GLOBAL VARIABLES
var submitBtnEl = document.getElementById("btn-submit");
var cityInputEl = document.getElementById("city-input");
var cityName;


submitBtnEl.addEventListener("click", function(e) {
    e.preventDefault();

    if (cityInputEl.value) {
        cityName = cityInputEl.value;
        
    } else {
        alert("Please enter a city.");
        location.reload();
    }
    
});