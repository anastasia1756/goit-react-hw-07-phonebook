import PropTypes from "prop-types";
import { ContactsList, Button } from "./ContactList.styled";

export const ContactList = ({ contacts, onDeleteClick }) => {
  return (
    <ContactsList>
      {contacts.map(({ name, id, number }) => (
        <li key={id}>
          {name}: {number}
          <Button type="button" onClick={() => onDeleteClick(id)}>
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
