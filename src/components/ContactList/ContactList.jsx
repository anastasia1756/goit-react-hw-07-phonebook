import PropTypes from 'prop-types';
import { ContactsList, Button } from './ContactList.styled';
import { useDeletePostMutation, useGetContactsQuery } from 'redux/contactsApi';

export const ContactList = ({ contacts, onDeleteClick }) => {
  const [deletePost, { isLoading: isDeleting }] = useDeletePostMutation();

  return (
    <ContactsList>
      {contacts.map(({ name, id, number }) => (
        <li key={id}>
          {name}: {number}
          <Button type="button" onClick={() => deletePost(id)}>
            Delete
          </Button>
        </li>
      ))}
    </ContactsList>
  );
};

PropTypes.ContactList = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ).isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};
