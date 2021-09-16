import { createAction, createReducer } from '@reduxjs/toolkit';

export const addProduct = createAction('products/add');
export const deleteProduct = createAction('products/delete');
export const fetchProducts = createAction('products/get');
export const detailInfoProduct = createAction('product/get/detail');

export const filterAction = createAction('products/filter');
