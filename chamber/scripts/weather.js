//select HTML elements in the document
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");




const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.28&lon=-123.12&appid=c01b781653a97be5794d02bfa35c02a3&units=metric';

async function apiFetch () {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); //this is for testing the call
            displayResult(data);
        }else {
            throw Error(await response.text());
        }
    }   catch (error) {
            console.log(error);
    }       
}

apiFetch();

function displayResult (weatherData) {
    currentTemp.innerHTML = '<strong>' + weatherData.main.temp.toFixed(0) +'</strong>';
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description .split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    
    const windSpeed = weatherData.wind.speed;
    const windSpeedElement = document.getElementById('wind-speed');
    windSpeedElement.innerText = `${windSpeed} m/s`;


    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}

//function calculateWindChill(temperature, WindSpeed) {
  //  const windchill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(WindSpeed, 0.16) + 0.4275 * temperature * Math.pow(WindSpeed, 0.16);
  //  return windchill.toFixed(2);
 // }
  
  ///////////////////////////////
  // Get the current temperature and wind speed values from some source
  //const currentTemperature = weatherData.currentTemp.temperature; // in Fahrenheit
  //const currentWindSpeed = 20; // in miles per hour
  
  // Calculate the windchill factor
  //const windchillFactor = calculateWindChill(currentTemperature, currentWindSpeed);
  
  // Update the HTML element with the windchill factor value
  //document.getElementById("windchill").textContent = windchillFactor;

  ////////////////////////


  const api_url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.28&lon=-123.12&appid=c01b781653a97be5794d02bfa35c02a3&units=metric';

  fetch(api_url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const temperature = data.main.temp;
      const wind_speed = data.wind.speed;
      const wind_chill = computeWindChill(temperature, wind_speed);
      const wind_chill_element = document.getElementById('wind-chill');
      wind_chill_element.textContent = `${wind_chill.toFixed(1)} °C`;
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
  
  function computeWindChill(temperature, wind_speed) {
    const wind_chill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(wind_speed, 0.16) + 0.3965 * temperature * Math.pow(wind_speed, 0.16);
    if (wind_chill < 0) {
        // display the wind chill in the HTML document
        document.getElementById("wind-chill").textContent = wind_chill.toFixed(2);
      } else {
        // display "not applicable" in the HTML document
        document.getElementById("wind-chill").textContent = "not applicable";
      }
  
    }
