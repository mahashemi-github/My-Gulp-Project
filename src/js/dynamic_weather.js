
const apiKey= "ec2a78681f204d1cecf9686c7921d6a6";
function fetchWeather (city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
    + city 
    + "&units=metric&appid=" 
    + apiKey
    )
    .then((response) => response.json())
    .then((data) => displayWeather(data));
}

function displayWeather(data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main; 
    const { speed } = data.wind;

    document.querySelector(".location").innerText = "Weather in " + name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png ";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temperature").innerText = temp + "°C";
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";

    document.querySelector(".weather").classList.remove("loading");
    // document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
}

function search(){
    fetchWeather(document.querySelector(".search-bar").value);
}


document.querySelector(".search button").addEventListener("click", function() {
    search();
    this.parentElement.childNodes[1].value = ""; 
});

document.querySelector(".search-bar").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
    search();
    this.value = ""; 
    };
});

fetchWeather("Tehran");

/* window.addEventListener('load', () => {
    let longitude;
    let latitude;
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            longitude = position.coords.longitude;
            latitude = position.coords.latitude;
        });
    }
}); */