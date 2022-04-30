import PropTypes from "prop-types";
import { FaBackspace } from "react-icons/fa";
import { Input, Wrapper, Button } from "./Filter.styled";

export const Filter = ({ filter, contacts, onChange, onClick }) => {
  return (
    <Wrapper>
      {contacts && contacts.length > 0 && (
        <label>
          Find contacts by name
          <Input type="text" name="filter" value={filter} onChange={onChange} />
          {filter && (
            <Button onClick={onClick}>
              <FaBackspace />
            </Button>
          )}
        </label>
      )}
    </Wrapper>
  );
};

PropTypes.Filter = {
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func,
};
