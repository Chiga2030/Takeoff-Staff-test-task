import {
  createSlice,
} from '@reduxjs/toolkit';

const initialState = {
  'Bret': {
    contactList: [
      {
        name: 'Patricia Lebsack',
        phone: '+7(903)505-3369',
      },
      {
        name: 'Patricia Lebsack',
        phone: '+7(903)505-3369',
      },
      {
        name: 'Patricia Lebsack',
        phone: '+7(903)505-3369',
      },
    ],
  },
  'Antonette': {
    contactList: [
      {
        name: 'Patricia Lebsack',
        phone: '+7(903)505-3369',
      },
      {
        name: 'Patricia Lebsack',
        phone: '+7(903)505-3369',
      },
    ],
  },
};


const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    onDelete (state, action) {
      const {
        username,
        index,
      } = action.payload;

      state[username].contactList =
        state[username].contactList.filter(
          (contact, contactIndex) => contactIndex !== index);
    },
  },
});


export const {
  onDelete,
} = contactsSlice.actions;

export default contactsSlice.reducer;
