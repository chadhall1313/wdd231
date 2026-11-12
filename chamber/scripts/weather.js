const lat = 42.86;
const lon = -112.45;

const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const weatherDesc = document.querySelector("#weather-desc");
const threeDayForecast = document.querySelector("#forecast");

const url = `https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${lat}&lon=${lon}&appid=eeaeac63c31de41802bd64ca6ec34827`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?units=imperial&lat=${lat}&lon=${lon}&appid=eeaeac63c31de41802bd64ca6ec34827`;


async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayWeather(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }

    try {
        const response2 = await fetch(forecastUrl);
        if (response2.ok) {
            const forecast = await response2.json();
            const days = forecast.list.filter(forecast => forecast.dt_txt.includes("18:00:00")).slice(0, 3);
            displayForecast(days);
        } else {
            throw new Error(await response2.text());
        }
    } catch (error) {
        console.error(error);
    }


}

apiFetch()

function displayForecast(days)
{
    days.forEach(day => {

        let dayCard = document.createElement("div");
        let temp = document.createElement("p");
        let icon = document.createElement("img");
        let desc = document.createElement("p");

        temp.innerHTML = `Temp: ${day.main.temp}&deg;F`;
        icon.setAttribute("src", `https://openweathermap.org/img/wn/${day.weather[0].icon}.png`);
        icon.setAttribute("alt", day.weather[0].description);
        desc.textContent = day.weather[0].description;

        dayCard.appendChild(temp);
        dayCard.appendChild(icon);
        dayCard.appendChild(desc);
        threeDayForecast.appendChild(dayCard);
    });
}

function displayWeather(data)
{
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    weatherDesc.textContent = desc;
}