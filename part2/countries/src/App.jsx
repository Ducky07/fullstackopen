import { useState, useEffect } from "react";
import { fetchCountries, fetchWeather } from "./utils/api";
import { SearchInput } from "./components/SearchInput";
import { CountryList } from "./components/CountryList";
import { CountryDetails } from "./components/CountryDetails";

const App = () => {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  // Vites method of retrieving environment variables
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  // Loading country data
  const loadCountries = async (query) => {
    try {
      const data = await fetchCountries();
      const filtered = data.filter((country) =>
        country.name.common.toLowerCase().includes(query.toLowerCase())
      );
      setCountries(filtered);
      setSelectedCountry(filtered.length === 1 ? filtered[0] : null);
      setWeather(null);
      setError(null);
    } catch {
      setError("Error fetching country data");
    }
  };

  // Loading weather data
  const loadWeather = async (country) => {
    if (!country?.capital?.[0]) return;
    try {
      const data = await fetchWeather(country.capital[0], API_KEY);
      setWeather({
        temperature: data.main.temp,
        description: data.weather[0].description,
        windSpeed: data.wind.speed,
        windDirection: data.wind.deg,
        icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
      });
    } catch {
      setWeather(null);
    }
  };

  useEffect(() => {
    if (search) loadCountries(search);
    else {
      setCountries([]);
      setSelectedCountry(null);
      setWeather(null);
    }
  }, [search]);

  // Load weather data for the selected country, eslint complains about missing dependency, but it's not critical
  useEffect(() => {
    if (selectedCountry) loadWeather(selectedCountry);
  }, [selectedCountry]);

  return (
    <div className="container">
      <h1>Country Information</h1>
      <SearchInput value={search} onChange={setSearch} />
      {error && <p className="error">{error}</p>}
      {selectedCountry ? (
        <CountryDetails
          country={selectedCountry}
          weather={weather}
          onBack={() => setSelectedCountry(null)}
          resultCount={countries.length}
        />
      ) : (
        <CountryList countries={countries} onShow={setSelectedCountry} />
      )}
    </div>
  );
};

export default App;
