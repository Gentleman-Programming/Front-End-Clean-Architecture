import { User } from '@/models';
import { createContext } from 'react';

export const SelectedUserContext = createContext({
  selectedUser: {} as User,
  setSelectedUser: (user: User) => {}
});
