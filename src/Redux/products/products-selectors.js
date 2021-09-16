import { createSelector } from 'reselect';
import { filterItems } from '../../helpers/filterItems';

export const showProductDetails = ({ products }) => products.showDetails;
export const getProductList = ({ products }) => products.items;
export const getFilter = ({ products }) => products.filter;
export const getProductsWithFilter = createSelector(
  [getProductList, getFilter],
  (products, filter) => {
    return filterItems(products, filter);
  },
);
