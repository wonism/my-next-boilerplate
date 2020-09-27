import { selector } from 'recoil';
import { User } from '@models/users';

export const userQuery = selector<User[]>({
  key: 'userQuery',
  get: async () => {
    const response = await fetch('/api/users');
    const result = await response.json();

    return result;
  },
});
