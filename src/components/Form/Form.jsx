import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from 'redux/contactSlice';
import { selectContacts } from 'redux/selector';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNamber] = useState('');
  const contacts = useSelector(selectContacts);
  console.log(contacts);

  const dispatch = useDispatch();

  const handleGhange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNamber(e.target.value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (contacts.find(el => el.name === name)) {
      alert(name + ' is already in contacts.');
      return;
    }
    dispatch(createUser({ name, number, id: nanoid(5) }));
    setName('');
    setNamber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          value={name}
          name="name"
          pattern="[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleGhange}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          value={number}
          name="number"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleGhange}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}
