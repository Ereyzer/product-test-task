import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCommentsByIdAction } from './comments-actions';
import { getAllComments } from './coments-selectors';
import { useSelector } from 'react-redux';
export const fetchCommentsById = createAsyncThunk(
  [fetchCommentsByIdAction],
  async (commentIds, { rejectWithValue }) => {
    const comments = useSelector(getAllComments);
  },
);
