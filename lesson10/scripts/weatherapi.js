//select HTML elements in the document
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const weathersite = 'https://api.openweathermap.org/data/2.5/weather';
const city = ['Fairbanks','Vancouver'];
const apiKey = 'c01b781653a97be5794d02bfa35c02a3';


const url = `${weathersite}?q=${city}&units=metric&appid=${apiKey}`;

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
    const decs = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', decs);
    captionDesc.textContent = desc;
}


