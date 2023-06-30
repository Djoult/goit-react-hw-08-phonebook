import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, fetchContacts } from 'redux/contacts/contactsOperations';
import FormContact from 'components/ContactForm';
import Contacts from 'components/Contacts';
import SearchFilter from 'components/Filter';
import {
  Message,
  Title,
  Wrapper,
  Text,
  SectionWrapper,
} from './ContactsBar.styled';
import { toast } from 'react-toastify';
import {
  selectContacts,
  selectIsLoading,
  selectError,
} from 'redux/contacts/contactsSelectors';

const ContactsBar = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const notifiesAlert = nameContact => {
    toast.info(`${nameContact} is already in contacts`);
  };

  const isContact = (name, number) =>
    contacts.some(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );

  const onSubmit = (name, number) => {
    if (isContact(name, number)) {
      return notifiesAlert(name);
    }

    dispatch(addContact({ name, number }));
  };

  return (
    <Wrapper isHeight={contacts.length > 0}>
      <SectionWrapper>
        <Title>Phonebook</Title>
        <FormContact onSubmit={onSubmit} />
      </SectionWrapper>
      <SectionWrapper>
        <Text>Contacts</Text>

        {!error && isLoading}

        {!error && !isLoading && contacts.length === 0 ? (
          <Message>You have no contacts🙁 But you can fix it😜</Message>
        ) : (
          <>
            <SearchFilter />
            <Contacts />
          </>
        )}
      </SectionWrapper>
    </Wrapper>
  );
};

export default ContactsBar;
