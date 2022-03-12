import {
  useSelector,
  useDispatch,
} from 'react-redux';

import {
  onDelete,
  onAdd,
  onSave,
} from '../../store/reducers/contactsSlice';

import {
  useState,
} from 'react';

import ContactsPage from './ContactsPage';


const ContactsPageCotainer = () => {
  const [
    searchQuery,
    setSearchQuery,
  ] = useState('');


  const username = useSelector(state => state.authUser.userInfo.username);
  const contactList = useSelector(
    state => state.contacts[username].contactList).filter(
    contact => new RegExp(
      searchQuery.toLowerCase()).test(contact.name.toLowerCase()));

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

  const onSaveContactHandler = (id, newData) => {
    dispatch(onSave({
      username,
      id,
      newData,
    }));
  };

  const onDeleteHandler = id => dispatch(
    onDelete({
      username,
      id,
    })
  );


  return (
    <ContactsPage
      authUsername={ username }
      contactList={ contactList }
      onDeleteHandler={ onDeleteHandler }
      onAddNewContactHandler={ onAddNewContactHandler }
      nameInput={ nameInput }
      setNameInput={ setNameInput }
      phoneInput={ phoneInput }
      setPhoneInput={ setPhoneInput }
      onSaveContactHandler={ onSaveContactHandler }
      searchQuery={ searchQuery }
      setSearchQuery={ setSearchQuery }
    />
  );
};


export default ContactsPageCotainer;
