import React from 'react';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/filterSlice';
import { useGetContactsQuery, useAddPostMutation } from 'redux/contactsApi';
import { nanoid } from 'nanoid';
import toast, { Toaster } from 'react-hot-toast';
import { ContactList } from '../ContactList';
import { Filter } from '../Filter';
import { ContactForm } from '../ContactForm';
import { InfinitySpin } from 'react-loader-spinner';
import { Container, Title, Contacts } from './App.styled';

export const App = () => {
  const { data: contacts, error, isLoading } = useGetContactsQuery();
  const [addContact, { isLoading: isDeleting }] = useAddPostMutation();

  const filter = useSelector(getFilter);

  const findContact = () => {
    const normilizedFilter = filter.toLowerCase();

    return contacts?.filter(contact =>
      contact.name.toLowerCase().includes(normilizedFilter)
    );
  };

  const addingContact = (submitedName, submitedNumber) => {
    const notify = () =>
      toast.error(`${searchedName.name} is already in contacts`);
    const successAdded = () =>
      toast.success('successfully added!', {
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#713200',
        },
        iconTheme: {
          primary: '#713200',
          secondary: '#FFFAEE',
        },
      });
    const id = nanoid();
    const newContact = { name: submitedName, id, number: submitedNumber };

    const searchedName = contacts.find(
      ({ name }) => name.toLowerCase() === submitedName.toLowerCase()
    );

    searchedName ? notify() : addContact(newContact);

    !searchedName && successAdded();
  };

  const filteredContacts = findContact();
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addingContact} />
      <Toaster />
      <Contacts>Contacts</Contacts>
      <Filter />
      {isLoading ? (
        <InfinitySpin color="black" />
      ) : (
        <>
          {contacts?.length > 0 ? (
            <ContactList contacts={filteredContacts} />
          ) : (
            <p>No contacts yet</p>
          )}
        </>
      )}
    </Container>
  );
};
