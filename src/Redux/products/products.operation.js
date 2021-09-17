import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:4040';

export const fetchProducts = createAsyncThunk(
  ['products/fetch'],
  async (_, { rejectWithValue }) => {
    try {
      const result = await axios.get('/products?_embed=comments');

      return result.data;
    } catch (error) {
      return rejectWithValue(`${error.message}`);
    }
  },
);
export const fetchProductById = createAsyncThunk(
  ['products/byId'],
  async productId => {
    try {
      const result = await axios.get(`/products/${productId}?_embed=comments`);

      return result.data;
    } catch (error) {
      return `${error.message}-- we can not get this product please reload this page and try again`;
    }
  },
);
export const addNewProduct = createAsyncThunk(
  ['products/add'],
  async (data, { rejectWithValue }) => {
    try {
      const result = await axios.post('/products', data);
      return result.data;
    } catch (error) {
      return rejectWithValue(
        `${error.message}-- we can not add this product please reload this page and try again`,
      );
    }
  },
);

export const editProductParams = createAsyncThunk(
  ['products/edit'],
  async (data, { rejectWithValue }) => {
    try {
      const result = await axios.put(`/products/${data.id}`, data);
      return result.data;
    } catch (error) {
      return rejectWithValue(
        `${error.message}-- we can not delete this product please reload this page and try again`,
      );
    }
  },
);

export const deleteProduct = createAsyncThunk(
  ['products/delete'],
  async (id, { rejectWithValue }) => {
    try {
      const result = await axios.delete(`/products/${id}`);
      if (result.status === 200) return id;
    } catch (error) {
      return rejectWithValue(
        `${error.message}-- we can not delete this product please reload this page and try again`,
      );
    }
  },
);
