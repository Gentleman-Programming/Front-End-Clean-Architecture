import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './states/user';

export interface AppStore {
  user: any;
}

export default configureStore<AppStore>({
  reducer: {
    user: userSlice.reducer
  }
});
