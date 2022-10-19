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
var cityShortcuts = []; // array to hold city names saved to localStorage


function getApi(requestUrl) {

    fetch(requestUrl)
      .then(function (response) {
        // Check the console first to see the response.status
        console.log(response.status);
        responseText.textContent = response.status;
        // Then write the conditional based on that response.status value
        // Make sure to display the response on the page
  
        if(response.status === 404) {
          console.log("404 - not found!");
        } 
  
        if(response.status === 200) {
          console.log("200 is good.");
        }
  
      })
      .then(function (data) {
        console.log(data);
      });
  }

  function addNewShortcut(cityName) {
    // build shortcut and display it on page
    saveToLocalStorage(cityName);
  }
  
  function getSavedShortcuts() { }

  function saveToLocalStorage(cityName) {
    // Add city to cityShortcuts array and save all to localStorage 
     cityShortcuts.push(cityName);
     window.localStorage.setItem("cityShortcuts", JSON.stringify(cityShortcuts))
  }

  function forceResubmit() {
    // prompt user to resubmit city name
    alert("Please enter a city.");
    location.reload();
  }

submitBtnEl.addEventListener("click", function(e) {
    e.preventDefault();

    if (cityInputEl.value) {
        cityName = cityInputEl.value;
        // build a shortcut button and display it on the page
        // make a call to get current weather
        // make a call to get 5-day forecast
        // parse data that comes back and display it
        saveToLocalStorage(cityName); // save city name to localStorage for future use
    } else {
        forceResubmit();
    }
});

getSavedShortcuts(); // grab shortcuts from localStorage and display below form