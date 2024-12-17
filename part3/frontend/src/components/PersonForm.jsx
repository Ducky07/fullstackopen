export const PersonForm = ({
  newName,
  setNewName,
  newNumber,
  setNewNumber,
  addPerson,
}) => {
  return (
    <form onSubmit={addPerson}>
      <h3>Add a new person</h3>
      <div>
        Name:{" "}
        <input value={newName} onChange={(e) => setNewName(e.target.value)} />
      </div>
      <div>
        Number:{" "}
        <input
          value={newNumber}
          onChange={(e) => setNewNumber(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};
