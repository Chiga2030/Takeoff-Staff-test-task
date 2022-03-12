import {
  createSlice,
} from '@reduxjs/toolkit';

const initialState = {
  'Bret': {
    contactList: [
      {
        id: 1,
        name: 'Patricia Lebsack',
        phone: '493-170-9623',
      },
      {
        id: 2,
        name: 'Chelsey Dietrich',
        phone: '(254)954-1289',
      },
      {
        id: 3,
        name: 'Mrs. Dennis Schulist',
        phone: '1-477-935-8478',
      },
      {
        id: 4,
        name: 'Kurtis Weissnat',
        phone: '210.067.6132',
      },
      {
        id: 5,
        name: 'Nicholas Runolfsdottir V',
        phone: '586.493.6943',
      },
      {
        id: 6,
        name: 'Glenna Reichert',
        phone: '(775)976-6794',
      },
      {
        id: 7,
        name: 'Clementina DuBuque',
        phone: '024-648-3804',
      },
    ],
  },

  'Antonette': {
    contactList: [],
  },

  'Samantha': {
    contactList: [],
  },
};


const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    onDelete (state, action) {
      const {
        username,
        id,
      } = action.payload;

      state[username].contactList =
        state[username].contactList.filter(
          contact => contact.id !== id);
    },

    onAdd (state, action) {
      const {
        username,
        newContact,
      } = action.payload;

      newContact.id = Date.now();

      state[username].contactList.push(newContact);
    },

    onSave (state, action) {
      const {
        username,
        id,
        newData,
      } = action.payload;

      for (const contact of state[username].contactList) {
        if (contact.id === id) {
          contact.name = newData.name;
          contact.phone = newData.phone;
          break;
        }
      }
    },
  },
});


export const {
  onDelete,
  onAdd,
  onSave,
} = contactsSlice.actions;

export default contactsSlice.reducer;
