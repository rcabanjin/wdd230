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
const currentApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
const forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=imperial&cnt=3&appid=${apiKey}`;

fetch(currentApiUrl)
  .then(response => response.json())
  .then(data => {
    // process current weather data
    const currentTemp = data.main.temp;


    // display current weather data
    const currentTempElement = document.getElementById('currentTemp');
    currentTempElement.textContent = currentTemp;
  })
  .catch(error => console.error('Error fetching current weather:', error));

fetch(forecastApiUrl)
  .then(response => response.json())
  .then(data => {
    // process forecast weather data
    const forecastTemps = data.list.map(day => day.temp.day);

    // display forecast weather data
    const forecastTempsElement = document.getElementById('forecastTemps');
    forecastTempsElement.textContent = forecastTemps.join(', ');
  })
  .catch(error => console.error('Error fetching forecast:', error));
