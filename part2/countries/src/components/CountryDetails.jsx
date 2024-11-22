export const CountryDetails = ({ country, weather, onBack, resultCount }) => {
  return (
    <div className="country-details">
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area} km²</p>
      <strong>Languages:</strong>
      <ul>
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img
        src={country.flags.png}
        alt={`Flag of ${country.name.common}`}
        className="country-flag"
      />
      {weather ? (
        <div className="weather-details">
          <h3>Weather in {country.capital[0]}</h3>
          <p>
            <strong>Temperature:</strong> {weather.temperature} °C
          </p>
          <p>
            <strong>Condition:</strong> {weather.description}
          </p>
          <p>
            <strong>Wind: </strong> {weather.windSpeed} m/s
          </p>
          <p>
            <strong>Wind direction:</strong> {weather.windDirection}°
          </p>
          <img src={weather.icon} alt="Weather icon" className="weather-icon" />
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
      {resultCount > 1 && onBack && <button onClick={onBack}>Back</button>}
    </div>
  );
};
