/* API Setup */
const apiKey = "d6e134f57ee968a474bdca589a45ccbd";

/* Element Selection */
const cityInput = document.getElementById("cityInput");
const searchButton = document.getElementById("searchButton");
const messageText = document.getElementById("messageText");
const loadingBox = document.getElementById("loadingBox");
const weatherCard = document.getElementById("weatherCard");

const locationText = document.getElementById("locationText");
const weatherIcon = document.getElementById("weatherIcon");
const temperatureText = document.getElementById("temperatureText");
const conditionText = document.getElementById("conditionText");
const feelsLikeText = document.getElementById("feelsLikeText");
const humidityText = document.getElementById("humidityText");
const windText = document.getElementById("windText");

/* Search Button Click */
searchButton.addEventListener("click", function () {
  handleWeatherSearch();
});

/* Enter Key Search */
cityInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    handleWeatherSearch();
  }
});

/* Handles city input validation before fetching weather */
function handleWeatherSearch() {
  const cityName = cityInput.value.trim();

  if (cityName === "") {
    showMessage("Please enter a city name");
    weatherCard.classList.add("hidden");
    return;
  }

  fetchWeatherData(cityName);
}

/* Fetches weather data from OpenWeatherMap API */
async function fetchWeatherData(cityName) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&appid=${apiKey}&units=metric`;

  showLoadingState();

  try {
    const response = await fetch(apiUrl);
    const weatherData = await response.json();

    if (response.status === 404) {
      showErrorState("City not found. Please check the spelling.");
      return;
    }

    if (response.status === 401) {
      showErrorState("API error. Check your API key.");
      return;
    }

    if (!response.ok) {
      showErrorState("Something went wrong. Check your connection.");
      return;
    }

    displayWeatherData(weatherData);
  } catch (error) {
    showErrorState("Something went wrong. Check your connection.");
  }
}

/* Displays successful weather data on the page */
function displayWeatherData(weatherData) {
  const cityName = weatherData.name;
  const countryCode = weatherData.sys.country;
  const temperature = Math.round(weatherData.main.temp);
  const feelsLike = Math.round(weatherData.main.feels_like);
  const condition = weatherData.weather[0].description;
  const iconCode = weatherData.weather[0].icon;
  const humidity = weatherData.main.humidity;
  const windSpeedKm = Math.round(weatherData.wind.speed * 3.6);

  locationText.textContent = `${cityName}, ${countryCode}`;
  weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  weatherIcon.alt = condition;
  temperatureText.textContent = `${temperature}°C`;
  conditionText.textContent = condition;
  feelsLikeText.textContent = `${feelsLike}°C`;
  humidityText.textContent = `${humidity}%`;
  windText.textContent = `${windSpeedKm} km/h`;

  messageText.textContent = "";
  loadingBox.classList.add("hidden");
  weatherCard.classList.remove("hidden");
}

/* Shows loading state while API request is running */
function showLoadingState() {
  messageText.textContent = "";
  weatherCard.classList.add("hidden");
  loadingBox.classList.remove("hidden");
}

/* Shows normal validation message */
function showMessage(message) {
  messageText.textContent = message;
  loadingBox.classList.add("hidden");
}

/* Shows API or network error message */
function showErrorState(message) {
  messageText.textContent = message;
  loadingBox.classList.add("hidden");
  weatherCard.classList.add("hidden");
}