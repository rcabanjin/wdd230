//select HTML elements in the document
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");




const url = 'https://api.openweathermap.org/data/2.5/weather?lat=64.84&lon=-147.72&appid=c01b781653a97be5794d02bfa35c02a3&units=metric';

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




