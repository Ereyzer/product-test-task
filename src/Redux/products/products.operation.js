import * as actions from './products-actions';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:4040';

export const fetchProducts = createAsyncThunk(
  [actions.fetchProducts],
  async (_, { rejectWithValue }) => {
    try {
      const result = await axios.get('/products');
      console.log(result);
      return result.data;
    } catch (error) {
      return rejectWithValue(`${error.message}`);
    }
  },
);

export const addNewProduct = createAsyncThunk(
  [actions.addProduct],
  async (data, { rejectWithValue }) => {
    try {
      const result = await axios.post('/products', data);
      console.log(result);
      return result.data;
    } catch (error) {
      return rejectWithValue(
        `${error.message}-- we can not add this product please reload this page and try again`,
      );
    }
  },
);

export const deleteProduct = createAsyncThunk(
  [actions.deleteProduct],
  async (id, { rejectWithValue }) => {
    try {
      const result = await axios.delete(`/products/${id}`);
      console.log(result);
      if (result.status === 200) return id;
    } catch (error) {
      return rejectWithValue(
        `${error.message}-- we can not delete this product please reload this page and try again`,
      );
    }
  },
);
