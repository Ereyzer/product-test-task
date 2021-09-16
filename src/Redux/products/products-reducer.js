import { createAction, createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { commentOperation } from '../coments';
import initialState from '../initialState';
import { filterAction } from './products-actions';
import {
  fetchProducts,
  addNewProduct,
  deleteProduct,
  fetchProductById,
} from './products.operation';

const items = createReducer(initialState.products.items, {
  [fetchProducts.fulfilled]: (state, { payload }) => {
    const allProducts = payload.reduce(
      (acc, product) => (acc = { ...acc, [product.id]: product }),
      {},
    );
    console.log('console.log(allProducts)', allProducts);
    return { ...state, ...allProducts };
  },
  [fetchProductById.fulfilled]: (state, { payload }) => ({
    ...state,
    [payload.id]: payload,
  }),
  [addNewProduct.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteProduct.fulfilled]: (state, { payload }) => [
    ...state.filter(product => product.id !== payload),
  ],
  [commentOperation.deleteComment.fulfilled]: (state, { payload }) => {
    console.log(state[payload.productCommentId]);
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
