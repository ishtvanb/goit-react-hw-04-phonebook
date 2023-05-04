import React from 'react';
import { useState, useEffect } from 'react';
import Wrapper from './Wrapper';
import ContactForm from './ContactForm';
import ContactsList from './ContactsList';
import Filter from './Filter';
import { PrimaryTitle, SecondaryTitle } from './Wrapper/Wrapper.styled';

const getInitialContacts = () => {
const savedContacts = localStorage.getItem('contacts');
  if (savedContacts !== null) {
    const parsedContacts = JSON.parse(savedContacts);
    return parsedContacts;
  }
  return [];
};

export const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
      
  const addContact = newContact => {
    if (contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    )) {
      alert(`You already have ${newContact.name} in your contacts`);
      return;
    }
    setContacts(prevState => [...prevState, newContact]);
    };

  const deleteContact = contactId => {
    setContacts(prevState => prevState.filter(contact => contact.id !== contactId));
  };

  const changeFilter = e => {
    const { value } = e.currentTarget;
    setFilter(value);
  };

  const getVisibleContacts = () => {
    const NormalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => 
      contact.name.toLowerCase().includes(NormalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
      <Wrapper>
        <PrimaryTitle>Phonebook</PrimaryTitle>
        <ContactForm onSave={addContact} />
        <SecondaryTitle>Contacts</SecondaryTitle>
        <Filter value={filter} onChange={changeFilter} />
        <ContactsList
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
        />
      </Wrapper>
    );
  }

    
  
