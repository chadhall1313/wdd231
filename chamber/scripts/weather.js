const lat = 42.86442584045442;
const lon = -112.44898292864957;
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const weatherDesc = document.querySelector("#weather-desc");

const url = `https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${lat}&lon=${lon}&appid=eeaeac63c31de41802bd64ca6ec34827`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

apiFetch()

function displayResults(data)
{
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

}