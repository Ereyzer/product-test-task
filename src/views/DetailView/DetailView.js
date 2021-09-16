import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import DetailPage from '../../Components/DetailPage/DetailPage';

function DetailView() {
  const { productId } = useParams();
  const [ProductInfo, setProductInfo] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const result = await axios
          .get(`/products/${productId}`)
          .then(r => setProductInfo(r.data));
        return result.data;
      } catch (error) {
        return `${error.message}-- we can not get this product please reload this page and try again`;
      }
    })();
    return () => {
      setProductInfo(null);
    };
  }, [productId]);

  return <div>{ProductInfo && <DetailPage {...ProductInfo} />}</div>;
}
export default DetailView;
