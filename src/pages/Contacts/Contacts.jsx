import ContactsBar from 'components/ContactsBar';
import { useAuth } from 'hooks';

const Contacts = () => {
  const { isLoading } = useAuth();

  return (
    <>
      <title>Contacts</title>

      {isLoading}
      <ContactsBar />
    </>
  );
};

export default Contacts;
