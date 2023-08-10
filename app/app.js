const apiKey = "23f165ecce4c6e25365f3857baa12718";
const band1 = "https://flagsapi.com/";
const band2 = "/flat/64.png";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search")
const body = document.body;

/* Seleção de */

const cityElement = document.querySelector("#city");
const temperatureCity = document.querySelector("#temperature span");
const weatherIcon = document.querySelector("#weather-icon");
const umidadeCity = document.querySelector("#umidade span");
const windCity = document.querySelector("#wind span");
const descriptionCity = document.querySelector("#description");
const countryBann = document.querySelector("#country");

const weatherConteiner = document.querySelector("#weather-data");


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

    theme(data.weather[0].description)
    weatherConteiner.classList.remove("hide")
};

const getWeartherData = async(city) =>{
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
    const rest = await fetch(apiURL);
    const data = await rest.json();
    return data;
};

cityInput.addEventListener("keyup", (e)=>{
    if(e.code ==="Enter"){
        const city = e.target.value;
        showWeatherData(city);}
})

function theme(descriptionTemp){
    var imgBodyaa = document.getElementById("description").innerText;

    if(imgBodyaa === "céu limpo"){
        body.style.backgroundImage = "url(../img/background/suny-beach.jpg)" 
    }else if(imgBodyaa === "nublado"){
        body.style.backgroundImage = "url(../img/background/cloddy.jpg)"
    }else if(imgBodyaa === "nuvens dispersas" || imgBodyaa === "algumas nuvens"){
        body.style.backgroundImage = "url(../img/background/anyClouds.jpg)"
    }else if(imgBodyaa === "chuva moderada" || imgBodyaa === "chuva leve"){
        body.style.backgroundImage = "url(../img/background/rain.jpg)"



    }else if(imgBodyaa === "neblina"){
        body.style.backgroundImage = "url(../img/background/foggy-forest.jpg)"
    }else if(imgBodyaa === "nublado"){
        body.style.backgroundImage = "url(../img/background/cloddy.jpg)"
    }
    
}

