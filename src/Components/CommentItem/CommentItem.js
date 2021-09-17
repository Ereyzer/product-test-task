import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { areYouSureActionOpen } from '../../Redux/helpers/helpers-actions';

function CommentItem({ name, id, description, productCommitId, date }) {
  const dispatch = useDispatch();
  const handleClick = e => {
    dispatch(areYouSureActionOpen({ id, name, productCommitId }));
  };

  return (
    <li key={id}>
      <h4>{name}</h4>
      <p>{description}</p>
      <time>{date}</time>
      <Button variant="secondary" onClick={handleClick}>
        delete
      </Button>
    </li>
  );
}

CommentItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default CommentItem;
