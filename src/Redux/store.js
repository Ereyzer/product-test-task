import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { productsPersistor } from './products';
import { middleware } from './midelware';
import helpersReducer from './helpers/helpetrs-reducer';

const store = configureStore({
  reducer: {
    products: productsPersistor,
    helpers: helpersReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };
