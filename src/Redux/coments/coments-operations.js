import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  deleteCommentAction,
  fetchCommentsByIdAction,
} from './comments-actions';
import { getAllComments } from './coments-selectors';
import { useSelector } from 'react-redux';
import axios from 'axios';

export const fetchCommentsById = createAsyncThunk(
  [fetchCommentsByIdAction],
  async (commentIds, { rejectWithValue }) => {
    // const comments = useSelector(getAllComments);
    const ids = commentIds.map(id => `id=${id}`).join('&');
    console.log(ids);

    try {
      const result = await axios.get(`/comments?${ids}`);
      console.log(result);
      return result.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteComment = createAsyncThunk(
  [deleteCommentAction],
  async ({ id, productCommitId }, { rejectWithValue }) => {
    try {
      const result = await axios.delete(`/comments/${id}`);
      console.log('result', result);
      const response = await axios.post(
        `/products/${productCommitId}/comments?_start=${id}&_end=1`,
      );
      console.log('response', response);
      if (result.status === 200) return id;
    } catch (error) {
      return rejectWithValue(
        `${error.message}-- we can not delete this contact please reload this page and try again`,
      );
    }
  },
);
