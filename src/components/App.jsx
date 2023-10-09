// import { useEffect, useState } from 'react';
import Form from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, deleteUser } from 'redux/contactSlice';
import { filterSearch } from 'redux/filterSlise';
import { nanoid } from '@reduxjs/toolkit';
import { selectContacts, selectFilter } from 'redux/selector';

export default function App() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const handleCreateUser = data => {
    if (contacts.find(el => el.name === data.name)) {
      alert(data.name + ' is already in contacts.');
      return;
    }
    dispatch(createUser({ ...data, id: nanoid(5) }));
  };

  const handleDeleteUser = id => dispatch(deleteUser(id));

  const getVisibleName = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase(normalizedFilter))
    );
  };

  const handleSearch = e => dispatch(filterSearch(e.target.value));

  return (
    <>
      <h1>Phonebook</h1>
      <Form createUser={handleCreateUser} />
      <h2>Contacts</h2>
      <Filter filter={filter} handleSearch={handleSearch} />
      <ContactList contacts={getVisibleName()} deleteUser={handleDeleteUser} />
    </>
  );
}
