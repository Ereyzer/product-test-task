import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import DetailPage from '../../Components/DetailPage/DetailPage';
import { productsSelectors } from '../../Redux/products';
import { productOperations } from '../../Redux/products';

function DetailView() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const productsArray = useSelector(productsSelectors.getProductList);
  useEffect(() => {
    dispatch(productOperations.fetchProductById(productId));
  }, [productId, dispatch]);

  return (
    <div>
      {productsArray[productId] && <DetailPage {...productsArray[productId]} />}
    </div>
  );
}
export default DetailView;
