import PropTypes from 'prop-types';

export const Filter = ({ filter, handleSearch }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" value={filter} onChange={handleSearch} required />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
};
