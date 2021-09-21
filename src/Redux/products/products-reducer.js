import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { commentOperation } from '../coments';
import initialState from '../initialState';
import { filterAction } from './products-actions';
import {
  fetchProducts,
  addNewProduct,
  deleteProduct,
  fetchProductById,
  editProductParams,
} from './products.operation';

const items = createReducer(initialState.products.items, {
  [fetchProducts.fulfilled]: (state, { payload }) => {
    const allProducts = payload.reduce(
      (acc, product) => (acc = { ...acc, [product.id]: product }),
      {},
    );
    return { ...state, ...allProducts };
  },
  [fetchProductById.fulfilled]: (state, { payload }) => ({
    ...state,
    [payload.id]: payload,
  }),
  [addNewProduct.fulfilled]: (state, { payload }) => ({
    ...state,
    [payload.id]: payload,
  }),
  [deleteProduct.fulfilled]: (state, { payload }) => {
    const oldKeys = Object.keys(state);

    const newKeys = oldKeys.filter(product => Number(product) !== payload);

    const newState = newKeys.reduce((acc, key) => {
      if (Number(key) !== payload) return { ...acc, [key]: state[key] };
      return acc;
    }, {});

    return { ...newState };
  },
  //
  // const { [payload]: deleteItem, ...newState } = state;
  //   return [
  //   ...state.filter(product => product.id !== payload),
  // ]},
  [editProductParams.fulfilled]: (state, { payload }) => ({
    ...state,
    [payload.id]: payload,
  }),
  [commentOperation.addComments.fulfilled]: (state, { payload }) => {
    return {
      ...state,
      [payload.productId]: {
        ...state[payload.productId],
        comments: [...state[payload.productId].comments, payload],
      },
    };
  },
  [commentOperation.deleteComment.fulfilled]: (state, { payload }) => {
    return {
      ...state,
      [payload.productCommentId]: {
        ...state[payload.productCommentId],
        comments: [
          ...state[payload.productCommentId].comments.filter(
            comment => comment.id !== payload.commentId,
          ),
        ],
      },
    };
  },
});

const filter = createReducer(initialState.products.filter, {
  [filterAction]: (_, { payload }) => payload,
});

const productsReducer = combineReducers({ items, filter });

export default productsReducer;
