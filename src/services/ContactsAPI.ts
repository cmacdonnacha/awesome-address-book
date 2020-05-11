import { Contact } from 'models/Contact';
import { MAX_FETCH_BATCH_SIZE, RANDOM_USERS_BASE_URL } from '../constants';
import FetchAPI from './FetchAPI';

const ContactsAPI = {
  getContacts: async (extraParams: object) => {
    const params = {
      results: MAX_FETCH_BATCH_SIZE,
      ...extraParams,
    };

    const response = await FetchAPI.get(RANDOM_USERS_BASE_URL, params);
    const data = response.results;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const contacts: Contact[] = data.map((user: any) => {
      return {
        id: user.login.uuid,
        name: user.name,
        username: user.login.username,
        avatarUrl: user.picture.large,
        email: user.email,
        phone: user.phone,
        cell: user.cell,
        location: {
          ...user.location,
          street: user.location.street.name,
        },
      };
    });

    return contacts;
  },
};

export default ContactsAPI;
