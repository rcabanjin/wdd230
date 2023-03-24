// c01b781653a97be5794d02bfa35c02a3

const apiKey = 'c01b781653a97be5794d02bfa35c02a3';
const city = 'Carlsbad';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

// Get current weather data
fetch(apiUrl)
  .then(response => response.json())
  .then(weatherData => {
    const currentTempElement = document.getElementById('currentTemp');
    const conditionDescElement = document.getElementById('conditionDesc');
    const humidityElement = document.getElementById('humidity');

    currentTempElement.textContent = `${weatherData.main.temp} °F`;
    conditionDescElement.textContent = weatherData.weather[0].description;
    humidityElement.textContent = `${weatherData.main.humidity}%`;
  })
  .catch(error => console.error(error));

// Get 3-day forecast data
const forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&cnt=3&appid=${apiKey}`;


fetch(forecastApiUrl)
  .then(response => response.json())
  .then(weatherData => {
    const forecastTempsElement = document.getElementById('forecastTemps');

    const temps = [];
    for (let i = 0; i < 3; i++) {
      temps.push(`${weatherData.daily[i].temp.day} °F`);
    }

    forecastTempsElement.textContent = temps.join(', ');
  })
  .catch(error => console.error(error));
