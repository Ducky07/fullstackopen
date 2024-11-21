import { useState, useEffect } from "react";
import { Search } from "./components/Search";
import { PersonForm } from "./components/PersonForm";
import { Numbers } from "./components/Numbers";
import numberService from "./services/phonebook";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    numberService.getAll().then((data) => {
      setPersons(data);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };
    if (persons.find((person) => person.name === newPerson.name)) {
      if (
        window.confirm(
          `${newPerson.name} is already added to phonebook, would you like to replace the old number with the new one?`
        )
      ) {
        numberService
          .update(
            persons.find((person) => person.name === newPerson.name).id,
            newPerson
          )
          .then((data) => {
            setPersons(
              persons.map((person) => (person.id !== data.id ? person : data))
            );
            setNewName("");
            setNewNumber("");
          });
      }
    } else {
      numberService.create(newPerson).then((data) => {
        setPersons(persons.concat(data));
        setNewName("");
        setNewNumber("");
      });
    }
  };

  const handleDelete = (id) => {
    if (window.confirm(`Delete ${persons.find((p) => p.id === id).name}?`)) {
      numberService.deletePerson(id).then(() => {
        setPersons(persons.filter((person) => person.id !== id));
      });
    }
    return null;
  };

  const handleFilterChange = (event) =>
    setFilter(event.target.value.toLowerCase());

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filter)
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Search filter={filter} handleOnChange={handleFilterChange} />
      <PersonForm
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        addPerson={addPerson}
      />
      <Numbers persons={filteredPersons} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
