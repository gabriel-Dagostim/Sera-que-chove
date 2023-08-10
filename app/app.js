const apiKey = "23f165ecce4c6e25365f3857baa12718";
const band1 = "https://flagsapi.com/";
const band2 = "/flat/64.png";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search")

const cityElement = document.querySelector("#city");
const temperatureCity = document.querySelector("#temperature span");
const weatherIcon = document.querySelector("#weather-icon");
const umidadeCity = document.querySelector("#umidade span");
const windCity = document.querySelector("#wind span");
const descriptionCity = document.querySelector("#description");
const countryBann = document.querySelector("#country");


searchBtn.addEventListener("click", (e) =>{

    const city = cityInput.value;

    e.preventDefault()
    showWeatherData(city)
});


const showWeatherData = async (city) =>{
    const data = await getWeartherData(city);
    
    console.log(data);


    cityElement.innerText = data.name;
    temperatureCity.innerText = parseInt(data.main.temp);
    descriptionCity.innerText = data.weather[0].description;
    weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    countryBann.setAttribute("src", band1 + data.sys.country + band2);
    umidadeCity.innerText = `${data.main.humidity}%`;
    windCity.innerText = `${data.wind.speed}Km/h`
};

const getWeartherData = async(city) =>{

    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`

    const rest = await fetch(apiURL)
    const data = await rest.json()

    return data;

}