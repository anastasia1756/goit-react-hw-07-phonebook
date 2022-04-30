import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addContact, deleteContact, getContacts } from "redux/contactsSlice";
import {
  filterContact,
  deleteSearchingContact,
  getFilter,
} from "redux/filterSlice";
import { nanoid } from "nanoid";
import toast, { Toaster } from "react-hot-toast";
import { ContactList } from "../ContactList";
import { Filter } from "../Filter";
import { ContactForm } from "../ContactForm";
import { Container, Title, Contacts } from "./App.styled";

export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filterInputChange = (evt) => {
    dispatch(filterContact(evt.currentTarget.value));
  };
  const filterHandleDelete = () => {
    dispatch(deleteSearchingContact(""));
  };
  const findContact = () => {
    const normilizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normilizedFilter)
    );
  };
  const addingContact = (submitedName, submitedNumber) => {
    const notify = () =>
      toast.error(`${searchedName.name} is already in contacts`);
    const successAdded = () =>
      toast.success("successfully added!", {
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#713200",
        },
        iconTheme: {
          primary: "#713200",
          secondary: "#FFFAEE",
        },
      });
    const id = nanoid();
    const newContact = { name: submitedName, id, number: submitedNumber };

    const searchedName = contacts.find(
      ({ name }) => name.toLowerCase() === submitedName.toLowerCase()
    );

    searchedName ? notify() : dispatch(addContact(newContact));

    !searchedName && successAdded();
  };
  const deletingContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  const filteredContacts = findContact();
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addingContact} />
      <Toaster />
      <Contacts>Contacts</Contacts>
      <Filter
        filter={filter}
        contacts={contacts}
        onChange={filterInputChange}
        onClick={filterHandleDelete}
      />
      {contacts.length > 0 ? (
        <ContactList
          contacts={filteredContacts}
          onDeleteClick={deletingContact}
        />
      ) : (
        <p>No contacts yet</p>
      )}
    </Container>
  );
};
