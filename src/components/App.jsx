import { useEffect, useState } from 'react';
import Form from './Form/Form';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export default function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const createUser = data => {
    const contact = {
      ...data,
      id: nanoid(),
    };
    if (contacts.find(el => el.name === data.name)) {
      alert(data.name + ' is already in contacts.');
      return;
    }
    setContacts([...contacts, contact]);
  };
  const getVisibleName = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase(normalizedFilter))
    );
  };
  const deleteUser = id => {
    setContacts(contacts.filter(el => el.id !== id));
  };
  const handleSearch = e => {
    setFilter(e.target.value);
  };

  return (
    <>
      <h1>Phonebook</h1>
      <Form createUser={createUser} />
      <h2>Contacts</h2>
      <Filter filter={filter} handleSearch={handleSearch} />
      <ContactList contacts={getVisibleName()} deleteUser={deleteUser} />
    </>
  );
}
