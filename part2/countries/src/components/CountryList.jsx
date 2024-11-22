export const CountryList = ({ countries, onShow }) => {
  if (countries.length > 10) {
    return <p>Too many matches, please refine your search.</p>;
  }

  return (
    <ul>
      {countries.map((country) => (
        <li key={country.cca3}>
          {country.name.common}
          {countries.length > 1 && (
            <button onClick={() => onShow(country)}>Show</button>
          )}
        </li>
      ))}
    </ul>
  );
};
