export const Numbers = ({ persons, handleDelete }) => {
  return (
    <>
      <h3>Numbers</h3>
      <ul>
        {persons.map((person) => (
          <li key={person.id}>
            {person.name} {person.number}
            <button onClick={() => handleDelete(person.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};
