import { User } from '@/models';
import { setAndPersistDbUserState } from '@/services';
import { createSlice } from '@reduxjs/toolkit';

export const UserEmptyState: User = {
  name: '',
  lastName: ''
};

export const userSlice = createSlice({
  name: 'user',
  initialState: UserEmptyState,
  reducers: {
    createUser: (state, action) => {
      return action.payload;
    },
    modifyUser: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetUser: () => UserEmptyState
  }
});

// Action creators are generated for each case reducer function
export const { createUser, modifyUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
