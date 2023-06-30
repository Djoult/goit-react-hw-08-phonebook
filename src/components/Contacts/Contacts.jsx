import { useSelector } from 'react-redux';
import { selectFilter } from '../../redux/filter/filterSelectors';
import { selectContacts } from '../../redux/contacts/contactsSelectors';
import ContactItem from '../ContactItem';
import { UlList } from './Contacts.styled';

const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const visibleContacts = (() => {
    return contacts
      .filter(
        contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase()) ||
          contact.number.includes(filter.toLowerCase())
      )
      .sort((firstContact, secondContact) =>
        firstContact.name.localeCompare(secondContact.name)
      );
  })();

  return (
    <>
      <UlList>
        {visibleContacts.map(({ id, name, number }) => {
          return <ContactItem key={id} name={name} number={number} id={id} />;
        })}
      </UlList>
    </>
  );
};

export default Contacts;
