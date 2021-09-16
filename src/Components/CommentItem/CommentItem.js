import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { areYouSureActionOpen } from '../../Redux/helpers/helpers-actions';

function CommentItem({ name, id, comment, productCommitId }) {
  const dispatch = useDispatch();
  const handleClick = e => {
    dispatch(areYouSureActionOpen({ id, name, productCommitId }));
  };
  return (
    <li key={id}>
      <h4>{name}</h4>
      <p>{comment}</p>
      <Button variant="secondary" onClick={handleClick}>
        delete
      </Button>
    </li>
  );
}

CommentItem.defaultProps = {
  name: 'Anonym',
};

CommentItem.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
};

export default CommentItem;
