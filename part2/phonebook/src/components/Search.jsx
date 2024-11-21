export const Search = ({ filter, handleOnChange }) => {
  return (
    <div>
      <p>Search for a name</p>
      <input type="text" value={filter} onChange={handleOnChange} />
    </div>
  );
};
