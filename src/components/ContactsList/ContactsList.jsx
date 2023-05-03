import PropTypes from 'prop-types';
import { BsTrash } from 'react-icons/bs';
import { ContactItem } from './ContactsList.styled';
const ContactsList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ name, number, id }) => (
      <ContactItem key={id}>
        <span>{name}</span>
        <span>{number}</span>

        <BsTrash
          style={{
            cursor: 'pointer',
            color: 'crimson',
          }}
          onClick={() => {
            onDeleteContact(id);
          }}
        />
      </ContactItem>
    ))}
  </ul>
);

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;

