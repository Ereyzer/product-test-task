import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { productsSelectors } from '../../Redux/products';
import ProductCard from '../ProductCard/ProductCard';
import { productOperations } from '../../Redux/products';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';

function ProductList() {
  const productsArray = useSelector(productsSelectors.getProductsWithFilter);
  const location = useLocation();
  const dispatch = useDispatch();
  const searchParams = new URLSearchParams(location.search).get('sort');
  function sortFunc(array) {
    switch (searchParams) {
      case 'a_z':
        //* sort by alphabet
        return array.sort((a, b) => a.name.localeCompare(b.name));
      case 'maxmin':
        return array.sort((a, b) => b.count - a.count);
      case 'minmax':
        return array.sort((a, b) => a.count - b.count);

      default:
        return array;
    }
  }
  const productsList = sortFunc(Object.values(productsArray));

  useEffect(() => {
    dispatch(productOperations.fetchProducts());
  }, [dispatch]);

  return (
    <Row xs={1} md={4} className="g-4 Products-list" as="ul">
      {productsList.map(({ imageUrl, name, count, id, description }) => (
        <Col key={id}>
          <ProductCard
            image={imageUrl}
            name={name}
            count={count}
            id={id}
            description={description}
          />
        </Col>
      ))}
    </Row>
  );
}

export default ProductList;
