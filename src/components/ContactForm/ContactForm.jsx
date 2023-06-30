import { ErrorMessage } from 'formik';
import { object, string } from 'yup';
import PropTypes from 'prop-types';
import { MdPersonAdd } from 'react-icons/md';
import {
  FormBox,
  InputName,
  InputTel,
  Button,
  FormikWrapper,
  Message,
  Label,
  Text,
} from './ContactForm.styled';

const initialValues = {
  name: '',
  number: '',
};

const userSchema = object({
  name: string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('⚠️Please enter name.'),
  number: string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('⚠️Please enter number.'),
});

const FormContact = ({ onSubmit }) => {
  function handleSubmit({ name, number }, { resetForm }) {
    onSubmit(name, number);
    resetForm();
  }

  return (
    <FormikWrapper
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={userSchema}
    >
      <FormBox autoComplete="off">
        <Label>
          <Text>Name</Text>
          <InputName placeholder="Enter contact name" type="text" name="name" />
          <ErrorMessage component={Message} name="name" />
        </Label>
        <Label>
          <Text>Phone</Text>
          <InputTel
            placeholder="Enter contact phone"
            type="tel"
            name="number"
          />
          <ErrorMessage component={Message} name="number" />
        </Label>
        <Button type="submit">
          <MdPersonAdd /> Add contact
        </Button>
      </FormBox>
    </FormikWrapper>
  );
};

FormContact.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default FormContact;
