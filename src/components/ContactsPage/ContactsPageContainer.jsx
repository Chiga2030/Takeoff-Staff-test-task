import {
  useSelector,
  useDispatch,
} from 'react-redux';

import {
  onDelete,
} from '../../store/reducers/contactsSlice';

import ContactsPage from './ContactsPage';


const ContactsPageCotainer = () => {
  const username = useSelector(state => state.authUser.userInfo.username);
  const contactList = useSelector(
    state => state.contacts[username].contactList);
  const dispatch = useDispatch(null);

  return (
    <ContactsPage
      authUsername={ username }
      contactList={ contactList }
      onDelete={ payload => dispatch(onDelete(payload)) }
    />
  );
};


export default ContactsPageCotainer;
