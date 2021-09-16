import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import initialState from '../initialState';
import { areYouSureActionOpen, areYouSureActionClose } from './helpers-actions';

const areYouSureModal = createReducer(initialState.helpers.areYouSureModal, {
  [areYouSureActionOpen]: () => true,
  [areYouSureActionClose]: () => false,
});

const delElement = createReducer(initialState.helpers.delElement, {
  [areYouSureActionOpen]: (_, { payload }) => payload,
  [areYouSureActionClose]: () => initialState.helpers.delElement,
});

const helpersReducer = combineReducers({
  areYouSureModal,
  delElement,
});
export default helpersReducer;
