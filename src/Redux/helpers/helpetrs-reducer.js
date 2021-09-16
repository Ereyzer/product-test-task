import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import initialState from '../initialState';
import { areYouSureActionOpen, areYouSureActionClose } from './helpers-actions';

const areYouSureModal = createReducer(initialState.helpers.areYouSureModal, {
  [areYouSureActionOpen]: () => true,
  [areYouSureActionClose]: () => false,
});

const deleteProduct = createReducer(initialState.helpers.deleteProduct, {
  [areYouSureActionOpen]: (_, { payload }) => payload,
  [areYouSureActionClose]: () => initialState.helpers.deleteProduct,
});

const helpersReducer = combineReducers({
  areYouSureModal,
  deleteProduct,
});
export default helpersReducer;
