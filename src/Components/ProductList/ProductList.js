import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { productsSelectors } from '../../Redux/products';
import ProductCard from '../ProductCard/ProductCard';
import { productOperations } from '../../Redux/products';
import { useDispatch } from 'react-redux';

function ProductList() {
  const productsList = useSelector(productsSelectors.getProductsWithFilter);
  const dispatch = useDispatch();
  console.log(productsList);

  useEffect(() => {
    dispatch(productOperations.fetchProducts());
  }, [dispatch]);

  return (
    <Row xs={1} md={4} className="g-4" as="ul">
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
