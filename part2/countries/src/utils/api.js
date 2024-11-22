const BASE_URL = "https://studies.cs.helsinki.fi/restcountries/api/all";
const WEATHER_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

// Fetching country data
export const fetchCountries = async () => {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch countries");
  }
  return response.json();
};

// Fetching weather data
export const fetchWeather = async (capital, apiKey) => {
  const response = await fetch(
    `${WEATHER_BASE_URL}?q=${capital}&appid=${apiKey}&units=metric`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }
  return response.json();
};
