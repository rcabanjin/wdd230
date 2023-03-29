const apiKey = 'c01b781653a97be5794d02bfa35c02a3';
const city = 'Carlsbad';
const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`;

// Weather condition icons object
const icons = {
  'Clear': '01d.png',
  'Clouds': '03d.png',
  'Rain': '09d.png',
  'Thunderstorm': '11d.png',
  'Snow': '13d.png',
  'Mist': '50d.png'
};

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const currentWeatherData = data.list[0];
    const weatherData = data.list.filter(item => {
      return item.dt_txt.includes("12:00:00");
    });

    const dayOne = weatherData[0];
    const dayTwo = weatherData[1];
    const dayThree = weatherData[2];

    // Populate Current Weather section with weather data
    document.getElementById("current-weather").textContent = currentWeatherData.weather[0].main;
    document.getElementById("current-temp").textContent = `${currentWeatherData.main.temp} °F`;
    document.getElementById("current-humidity").textContent = `${currentWeatherData.main.humidity}%`;
    const currentIcon = icons[currentWeatherData.weather[0].main];
    document.getElementById("current-icon").setAttribute("src", `http://openweathermap.org/img/w/${currentIcon}`);

    // Populate Day 1 section with weather data
    document.getElementById("day1-weather").textContent = dayOne.weather[0].main;
    document.getElementById("day1-temp").textContent = `${dayOne.main.temp} °F`;
    const dayOneIcon = icons[dayOne.weather[0].main];
    document.getElementById("day1-icon").setAttribute("src", `http://openweathermap.org/img/w/${dayOneIcon}`);

    // Populate Day 2 section with weather data
    document.getElementById("day2-weather").textContent = dayTwo.weather[0].main;
    document.getElementById("day2-temp").textContent = `${dayTwo.main.temp} °F`;
    const dayTwoIcon = icons[dayTwo.weather[0].main];
    document.getElementById("day2-icon").setAttribute("src", `http://openweathermap.org/img/w/${dayTwoIcon}`);

    // Populate Day 3 section with weather data
    document.getElementById("day3-weather").textContent = dayThree.weather[0].main;
    document.getElementById("day3-temp").textContent = `${dayThree.main.temp} °F`;
    const dayThreeIcon = icons[dayThree.weather[0].main];
    document.getElementById("day3-icon").setAttribute("src", `http://openweathermap.org/img/w/${dayThreeIcon}`);
  })
  .catch(error => console.error(error));
