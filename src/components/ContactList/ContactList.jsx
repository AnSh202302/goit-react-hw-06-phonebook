import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from 'redux/contactSlice';
import { selectContacts, selectFilter } from 'redux/selector';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const getVisibleName = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase(normalizedFilter))
    );
  };
  const contactsArr = getVisibleName();

  return (
    <ul>
      {contactsArr.map(({ name, id, number }) => (
        <li key={id}>
          {name}: {number}
          <button type="button" onClick={() => dispatch(deleteUser(id))}>
            X
          </button>
        </li>
      ))}
    </ul>
  );
};
ContactList.propTypes = {
  contactsArr: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteUser: PropTypes.func,
};
