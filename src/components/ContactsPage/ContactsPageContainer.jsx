import {
  useSelector,
  useDispatch,
} from 'react-redux';

import {
  onDelete,
  onAdd,
} from '../../store/reducers/contactsSlice';

import {
  useState,
} from 'react';

import ContactsPage from './ContactsPage';


const ContactsPageCotainer = () => {
  const username = useSelector(state => state.authUser.userInfo.username);
  const contactList = useSelector(
    state => state.contacts[username].contactList);
  const dispatch = useDispatch(null);

  const [
    nameInput,
    setNameInput,
  ] = useState('');
  const [
    phoneInput,
    setPhoneInput,
  ] = useState('');

  const onAddNewContactHandler = () => {
    dispatch(
      onAdd({
        username: username,
        newContact: {
          name: nameInput,
          phone: phoneInput,
        },
      })
    );

    setNameInput('');
    setPhoneInput('');
  };

  return (
    <ContactsPage
      authUsername={ username }
      contactList={ contactList }
      onDelete={ payload => dispatch(onDelete(payload)) }
      onAddNewContactHandler={ onAddNewContactHandler }
      nameInput={ nameInput }
      setNameInput={ setNameInput }
      phoneInput={ phoneInput }
      setPhoneInput={ setPhoneInput }
    />
  );
};


export default ContactsPageCotainer;
