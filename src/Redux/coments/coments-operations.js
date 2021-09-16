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

export const addComments = createAsyncThunk(
  ['comments/add'],
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('/comments', data);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        `${error.message}-- we can not delete this contact please reload this page and try again`,
      );
    }
  },
);

export const deleteComment = createAsyncThunk(
  [deleteCommentAction],
  async ({ commentId, productCommentId }, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/comments/${commentId}`);
      if (response.status === 200) return { commentId, productCommentId };
    } catch (error) {
      return rejectWithValue(
        `${error.message}-- we can not delete this contact please reload this page and try again`,
      );
    }
  },
);
