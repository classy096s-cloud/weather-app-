function searchWeather() {

    const cityInput =
        document.getElementById("cityInput").value;

    const city =
        document.getElementById("city");

    const temp =
        document.getElementById("temp");

    const condition =
        document.getElementById("condition");

    if(cityInput.trim() === "") {
        alert("Please enter a city name");
        return;
    }

    city.textContent = cityInput;

    const fakeWeather = [
        {
            temp: "28°C",
            condition: "Cloudy"
        },
        {
            temp: "35°C",
            condition: "Sunny"
        },
        {
            temp: "22°C",
            condition: "Rainy"
        },
        {
            temp: "30°C",
            condition: "Partly Cloudy"
        }
    ];

    const random =
        fakeWeather[
            Math.floor(
                Math.random() * fakeWeather.length
            )
        ];

    temp.textContent = random.temp;
    condition.textContent = random.condition;
}