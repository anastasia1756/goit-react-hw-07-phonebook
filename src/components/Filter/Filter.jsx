import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { FaBackspace } from 'react-icons/fa';
import {
  filterContact,
  deleteSearchingContact,
  getFilter,
} from 'redux/filterSlice';
import { useGetContactsQuery } from 'redux/contactsApi';

import { Input, Wrapper, Button } from './Filter.styled';

export const Filter = () => {
  const { data: contacts } = useGetContactsQuery();

  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const filterInputChange = evt => {
    dispatch(filterContact(evt.currentTarget.value));
  };
  const filterHandleDelete = () => {
    dispatch(deleteSearchingContact(''));
  };
  return (
    <Wrapper>
      {contacts && contacts.length > 0 && (
        <label>
          Find contacts by name
          <Input
            type="text"
            name="filter"
            value={filter}
            onChange={filterInputChange}
          />
          {filter && (
            <Button onClick={filterHandleDelete}>
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
