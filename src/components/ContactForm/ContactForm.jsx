import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import 'yup-phone-lite'
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import {
  Form,
  FormField,
  Cover,
  Input,
  FormLabel,
  ErrorMessage,
  FormButton,
} from './ContactForm.styled';
import { BsFillPersonFill } from 'react-icons/bs';
import { RiPhoneLine } from 'react-icons/ri';

const ContactSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is required!'),
  number: Yup.string().phone('UA').required('Phone number is required!'),
});

export const ContactForm = ({ onSave }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      
      validationSchema={ContactSchema}

      onSubmit={(values, actions) => {
        onSave({ ...values, id: nanoid() });
        actions.resetForm();
      }}
    >
      <Form>
        <FormField>
          <FormLabel>Name</FormLabel>
          <Cover>
            <Field name="name">
              {({ field }) => {
                return <Input {...field} placeholder="your name" />;
              }}
            </Field>
            
            <BsFillPersonFill
              style={{
                position: 'absolute',
                top: '50%',
                left: '10px',
                transform: 'translateY(-50%)',
              }}
            />
          </Cover>
          <ErrorMessage name="name" component="div" />
        </FormField>
        <FormField>
          <FormLabel>Number</FormLabel>
          <Cover>
            <Field name="number">
              {({ field }) => {
                return <Input {...field} placeholder="+38-0xx-xxx-xx-xx" />;
              }}
            </Field>
            <RiPhoneLine
              style={{
                position: 'absolute',
                top: '50%',
                left: '10px',
                transform: 'translateY(-50%)',
              }}
            />
          </Cover>
          <ErrorMessage name="number" component="div" />
        </FormField>
        <FormButton type="submit">Add contact</FormButton>
      </Form>
    </Formik>
  );
};


ContactForm.propTypes = {
  onSave: PropTypes.func.isRequired,
};

export default ContactForm;
