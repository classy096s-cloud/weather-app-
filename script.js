const weatherData = [
{
    icon:"☀️",
    temp:"35°C",
    condition:"Sunny",
    humidity:"45%",
    wind:"10 km/h",
    feels:"38°C"
},
{
    icon:"🌧",
    temp:"25°C",
    condition:"Rainy",
    humidity:"85%",
    wind:"18 km/h",
    feels:"27°C"
},
{
    icon:"☁️",
    temp:"28°C",
    condition:"Cloudy",
    humidity:"60%",
    wind:"12 km/h",
    feels:"30°C"
},
{
    icon:"⛈",
    temp:"23°C",
    condition:"Stormy",
    humidity:"90%",
    wind:"30 km/h",
    feels:"24°C"
}
];

function searchWeather(){

    const cityInput =
        document.getElementById("cityInput").value;

    if(cityInput.trim()===""){
        alert("Enter city name");
        return;
    }

    const loader =
        document.getElementById("loader");

    const content =
        document.getElementById("weatherContent");

    loader.classList.remove("hidden");
    content.style.opacity="0.4";

    setTimeout(()=>{

        const random =
            weatherData[
                Math.floor(
                    Math.random()*weatherData.length
                )
            ];

        document.getElementById("city")
            .textContent = cityInput;

        document.getElementById("icon")
            .textContent = random.icon;

        document.getElementById("temp")
            .textContent = random.temp;

        document.getElementById("condition")
            .textContent = random.condition;

        document.getElementById("humidity")
            .textContent = random.humidity;

        document.getElementById("wind")
            .textContent = random.wind;

        document.getElementById("feels")
            .textContent = random.feels;

        loader.classList.add("hidden");
        content.style.opacity="1";

    },1500);
}
