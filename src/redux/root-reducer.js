import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import homeReducer from './home/home.reducer';
import userReducer from './user/user.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['home']
}

const rootReducer = combineReducers({
  home: homeReducer,
  user: userReducer
});

export default persistReducer(persistConfig, rootReducer);