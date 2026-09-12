# Nexsoft Weather App

A responsive weather application built with HTML5, CSS3, JavaScript, Fetch API, and OpenWeatherMap API for the Nexsoft Solutions internship.

## Live Links

- GitHub Repository: https://github.com/fazal305/nexsoft-weather-app
- Live Demo: https://fazal305.github.io/nexsoft-weather-app/

## Overview

Nexsoft Weather App lets users search for a city and view current weather information including temperature, feels-like temperature, condition, humidity, wind speed, and weather icon.

The project focuses on API integration, loading states, error handling, responsive UI design, and clean JavaScript fetch logic.

## Features

- Search current weather by city name
- Fetch weather data from OpenWeatherMap API
- Display city and country
- Display current temperature in Celsius
- Display feels-like temperature
- Display weather condition and icon
- Display humidity percentage
- Display wind speed in km/h
- Loading state while fetching data
- Error handling for invalid city and API issues
- Enter key search support
- Last searched city saved in localStorage
- Responsive dark interface
- GitHub Pages ready

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Fetch API
- OpenWeatherMap API
- localStorage
- GitHub Pages
  Folder Structure
  nexsoft-weather-app/
  index.html
  style.css
  script.js
  README.md
  LICENSE
  .gitignore
  Getting Started

Clone the repository:

git clone https://github.com/fazal305/nexsoft-weather-app.git

Open the folder:

cd nexsoft-weather-app

Open index.html in your browser or use VS Code Live Server.

API Used

This project uses the OpenWeatherMap Current Weather Data API.

https://api.openweathermap.org/data/2.5/weather
API Key Note

This is a static, backend-free app, so there's no server to hide an API key behind either
way — any key shipped in script.js would be visible in the page source regardless. Instead
of committing a key to the repo, the app asks each visitor for their own free OpenWeatherMap
key via "Set OpenWeatherMap API key" in the header, and stores it in that browser's
localStorage only (never sent anywhere but OpenWeatherMap, never committed to source).

Get a free key at https://home.openweathermap.org/users/sign_up.
Architecture Notes

The project is split into three main files:

index.html contains the app structure and weather result layout.
style.css handles the responsive dark UI, card layout, spinner, and focus states.
script.js handles city validation, API requests, loading state, error state, weather rendering, and saving the last searched city.
Accessibility

Accessibility support includes:

Semantic main and section structure
Search input label for screen readers
aria-live messages for validation and loading updates
Descriptive weather icon alt text
Button type="button"
Visible focus states
Responsive mobile layout
Performance

Performance notes:

Static frontend app
Lightweight JavaScript
No frameworks
No image assets except API weather icon
Fast GitHub Pages deployment
Uses localStorage only for last searched city
Testing Checklist

Before final submission:

Search for a valid city
Search using the Enter key
Search with an empty input
Search for an invalid city
Test API key error handling
Test loading state
Test mobile responsiveness
Refresh page and confirm last city remains in input
Run JavaScript syntax check:
node --check script.js
Lessons Learned
Fetching public API data with JavaScript
Handling API loading and error states
Updating UI dynamically from JSON data
Using OpenWeatherMap weather icons
Improving accessibility in a small API project
Preparing an internship project for portfolio presentation
Future Improvements
Add geolocation-based weather
Add 5-day forecast
Add unit toggle between Celsius and Fahrenheit
Add recent search history
Add weather-based background changes
Move API key handling to a backend proxy
Add PWA offline shell
