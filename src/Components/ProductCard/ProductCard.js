import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { areYouSureActionOpen } from '../../Redux/helpers/helpers-actions';

function ProductCard({ image, name, count, id, description }) {
  const dispatch = useDispatch();

  function deleteClick(id) {
    dispatch(areYouSureActionOpen({ id, name }));
  }
  return (
    <Card as="li" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Text>Is available: {count}</Card.Text>
      </Card.Body>
      <Card.Body>
        <Link to={`/info/${id}`}>
          <Card.Link as="div">More about {name}</Card.Link>
        </Link>
        <Button variant="secondary" onClick={() => deleteClick(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProductCard;
