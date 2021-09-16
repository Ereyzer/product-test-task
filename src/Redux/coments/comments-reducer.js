import { createReducer } from '@reduxjs/toolkit';
import initialState from '../initialState';
import { deleteComment, fetchCommentsById } from './coments-operations';

import { combineReducers } from 'redux';

const items = createReducer(initialState.comments.items, {
  [fetchCommentsById.fulfilled]: (state, { payload }) => {
    const allComments = payload.reduce(
      (acc, comment) => (acc = { ...acc, [comment.id]: comment }),
      {},
    );
    console.log('console.log(allComments)', allComments);
    return { ...state, ...allComments };
  },
  [deleteComment.fulfilled]: ({ ...newState }, { payload }) => {
    delete newState[payload];
    return newState;
  },
});

const commentsReducer = combineReducers({
  items,
});

export default commentsReducer;
