import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

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
  ['comment/delete'],
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
