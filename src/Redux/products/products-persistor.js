import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import productsReducer from './products-reducer';

const productsPersistConfig = {
  key: 'products',
  storage,
  blacklist: ['items', 'filter'],
};

const productsPersistor = persistReducer(
  productsPersistConfig,
  productsReducer,
);

export default productsPersistor;
