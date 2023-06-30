import { useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/filter/filterSlice';
import { Label, Input } from './Filter.styled';

const SearchFilter = () => {
  const dispatch = useDispatch();

  const handleFilter = ({ target: { value } }) => {
    dispatch(filterContacts(value));
  };
  return (
    <Label>
      Find contacts by name or number
      <Input type="text" name="filter" onChange={handleFilter} />
    </Label>
  );
};

export default SearchFilter;
