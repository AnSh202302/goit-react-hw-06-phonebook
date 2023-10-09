import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { filterSearch } from 'redux/filterSlise';
import { selectFilter } from 'redux/selector';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleSearch = e => dispatch(filterSearch(e.target.value));

  return (
    <label>
      Find contacts by name
      <input type="text" value={filter} onChange={handleSearch} required />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  handleSearch: PropTypes.func,
};
