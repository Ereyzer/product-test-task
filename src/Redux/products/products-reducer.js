import { createAction, createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import initialState from '../initialState';
import { filterAction } from './products-actions';
import {
  fetchProducts,
  addNewProduct,
  deleteProduct,
} from './products.operation';

const items = createReducer(initialState.products.items, {
  [fetchProducts.fulfilled]: (_, { payload }) => [...payload],
  [addNewProduct.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteProduct.fulfilled]: (state, { payload }) => [
    ...state.filter(product => product.id !== payload),
  ],
});

const filter = createReducer(initialState.products.filter, {
  [filterAction]: (_, { payload }) => payload,
});

const productsReducer = combineReducers({ items, filter });

export default productsReducer;
