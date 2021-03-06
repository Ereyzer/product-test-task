import React from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Modal, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { areYouSureActionClose } from '../../Redux/helpers/helpers-actions';
import { getDelElement } from '../../Redux/helpers/helpers-selectors';
import { productOperations } from '../../Redux/products';
import { useLocation } from 'react-router';
import { commentOperation } from '../../Redux/coments';

function DeleteModal({ showModal }) {
  const { pathname } = useLocation();

  const delElement = useSelector(getDelElement);
  const dispatch = useDispatch();
  function onDelete() {
    if (pathname.includes('/info/')) {
      dispatch(
        commentOperation.deleteComment({
          commentId: delElement.id,
          productCommentId: delElement.productCommitId,
        }),
      );
      dispatch(areYouSureActionClose());
      return;
    }
    dispatch(productOperations.deleteProduct(delElement.id));
    dispatch(areYouSureActionClose());
  }
  return createPortal(
    <Modal show={showModal} onHide={() => dispatch(areYouSureActionClose())}>
      <Modal.Header closeButton>
        <Modal.Title>Are you sure</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Do you want delete {delElement.name}
        {delElement.productCommitId && '`s commit'}?{' '}
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => dispatch(areYouSureActionClose())}
        >
          No cancel
        </Button>
        <Button variant="primary" onClick={onDelete}>
          Sure
        </Button>
      </Modal.Footer>
    </Modal>,
    document.getElementById('root-portal'),
  );
}

DeleteModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
};
export default DeleteModal;
