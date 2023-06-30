import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsOperations';
import { RxAvatar } from 'react-icons/rx';
import { RiDeleteBin6Line } from 'react-icons/ri';
import {
  LiItem,
  SpanIcon,
  SpanName,
  SpanNumber,
  ButtonDlt,
} from './ContactItem.styled';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = id => dispatch(deleteContact(id));
  return (
    <LiItem key={id}>
      <SpanIcon
        inputColor={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
      >
        <RxAvatar />
      </SpanIcon>
      <SpanName>{name}</SpanName>
      <SpanNumber>{number}</SpanNumber>
      <ButtonDlt type="button" onClick={() => handleDelete(id)}>
        <RiDeleteBin6Line />
      </ButtonDlt>
    </LiItem>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactItem;
