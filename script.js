const cityInput = document.querySelector("#cityInput");
const searchButton = document.querySelector("#searchButton");
const messageText = document.querySelector("#messageText");
const loadingBox = document.querySelector("#loadingBox");
const weatherCard = document.querySelector("#weatherCard");

const locationText = document.querySelector("#locationText");
const weatherIcon = document.querySelector("#weatherIcon");
const temperatureText = document.querySelector("#temperatureText");
const conditionText = document.querySelector("#conditionText");
const feelsLikeText = document.querySelector("#feelsLikeText");
const humidityText = document.querySelector("#humidityText");
const windText = document.querySelector("#windText");

const apiKeyButton = document.querySelector("#apiKeyButton");
const apiKeyBox = document.querySelector("#apiKeyBox");
const apiKeyInput = document.querySelector("#apiKeyInput");
const apiKeySave = document.querySelector("#apiKeySave");

const lastCityKey = "nexsoft-weather-last-city";
const apiKeyStorageKey = "nexsoft-weather-api-key";

searchButton.addEventListener("click", handleWeatherSearch);

apiKeyButton.addEventListener("click", function () {
  apiKeyBox.classList.toggle("hidden");
  if (!apiKeyBox.classList.contains("hidden")) {
    apiKeyInput.value = getApiKey() || "";
    apiKeyInput.focus();
  }
});

apiKeySave.addEventListener("click", function () {
  const key = apiKeyInput.value.trim();

  if (key === "") {
    showMessage("Enter a key first, or get a free one from OpenWeatherMap.");
    return;
  }

  localStorage.setItem(apiKeyStorageKey, key);
  apiKeyBox.classList.add("hidden");
  updateApiKeyButtonLabel();
  showMessage("API key saved. Try a search.");
});

function getApiKey() {
  return localStorage.getItem(apiKeyStorageKey);
}

function updateApiKeyButtonLabel() {
  apiKeyButton.textContent = getApiKey() ? "Change API key" : "Set OpenWeatherMap API key";
}

updateApiKeyButtonLabel();

cityInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    handleWeatherSearch();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const savedCity = localStorage.getItem(lastCityKey);

  if (savedCity) {
    cityInput.value = savedCity;
  }
});

function handleWeatherSearch() {
  const cityName = cityInput.value.trim();

  if (cityName === "") {
    showMessage("Please enter a city name.");
    weatherCard.classList.add("hidden");
    cityInput.focus();
    return;
  }

  fetchWeatherData(cityName);
}

async function fetchWeatherData(cityName) {
  const apiKey = getApiKey();

  if (!apiKey) {
    showMessage("Add your free OpenWeatherMap API key above to search.");
    apiKeyBox.classList.remove("hidden");
    apiKeyInput.focus();
    return;
  }

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
      showErrorState("API error. Please check the OpenWeatherMap API key.");
      return;
    }

    if (!response.ok) {
      showErrorState("Weather data is not available right now. Please try again.");
      return;
    }

    displayWeatherData(weatherData);
    localStorage.setItem(lastCityKey, cityName);
  } catch {
    showErrorState("Network error. Please check your internet connection.");
  }
}

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
  weatherIcon.alt = `${condition} weather icon`;
  temperatureText.textContent = `${temperature}°C`;
  conditionText.textContent = condition;
  feelsLikeText.textContent = `${feelsLike}°C`;
  humidityText.textContent = `${humidity}%`;
  windText.textContent = `${windSpeedKm} km/h`;

  messageText.textContent = "";
  finishSuccessfulSearch();
  weatherCard.classList.remove("hidden");
}

function showLoadingState() {
  searchButton.disabled = true;
  searchButton.textContent = "Searching...";
  messageText.textContent = "";
  weatherCard.classList.add("hidden");
  loadingBox.classList.remove("hidden");
}

function showMessage(message) {
  messageText.textContent = message;
  loadingBox.classList.add("hidden");
  resetSearchButton();
}

function showErrorState(message) {
  messageText.textContent = message;
  loadingBox.classList.add("hidden");
  weatherCard.classList.add("hidden");
  resetSearchButton();
}

function resetSearchButton() {
  searchButton.disabled = false;
  searchButton.textContent = "Search";
}

function finishSuccessfulSearch() {
  loadingBox.classList.add("hidden");
  resetSearchButton();
}