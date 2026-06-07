# Nexsoft Weather App

A responsive Weather App built for the Nexsoft Solutions internship using HTML5, CSS3, and Vanilla JavaScript.

## Live Demo

https://fazal305.github.io/nexsoft-weather-app/

## GitHub Repository

https://github.com/fazal305/nexsoft-weather-app

## Features

* Fetches weather data from OpenWeatherMap API
* Displays city name and country
* Displays current temperature in Celsius
* Displays feels like temperature
* Displays weather condition and icon
* Displays humidity
* Displays wind speed in km/h
* City search functionality
* Search button support
* Enter key search support
* Loading state
* Error handling
* Responsive dark theme interface

## Technologies Used

* HTML5
* CSS3
* Vanilla JavaScript
* Fetch API
* OpenWeatherMap API

## Project Requirements Covered

### Requirement 1

Fetch weather data from a public API

### Requirement 2

Display temperature and weather condition

### Requirement 3

Add city search functionality

### Requirement 4

Handle loading and error states

### Requirement 5

Design a responsive weather interface

## API Used

OpenWeatherMap Current Weather Data API

```text
https://api.openweathermap.org/data/2.5/weather
```

## API Key Setup

Open `script.js` and replace:

```javascript
const apiKey = "PASTE_YOUR_API_KEY_HERE";
```

with:

```javascript
const apiKey = "YOUR_API_KEY_HERE";
```

You can obtain a free API key from:

https://openweathermap.org/api

## How To Run

1. Download or clone the repository
2. Open the project folder in VS Code
3. Add your OpenWeatherMap API key to `script.js`
4. Open `index.html` using Live Server
5. Search for any city to view current weather information

## Folder Structure

```text
nexsoft-weather-app/
│
├── index.html
├── style.css
├── script.js
├── README.md
├── .gitignore
└── LICENSE

```text
screenshots/
├── desktop-view.png
├── mobile-view.png
└── weather-results.png
```

## Author

Fazal Abbas

GitHub:
https://github.com/fazal305

LinkedIn:
https://www.linkedin.com/in/fazal-abbas-4653dg86

## License

This project is licensed under the MIT License.
