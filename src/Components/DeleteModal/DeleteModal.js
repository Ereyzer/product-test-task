import React from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Modal, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { areYouSureActionClose } from '../../Redux/helpers/helpers-actions';
import {
  deleteProductId,
  deleteProductName,
} from '../../Redux/helpers/helpers-selectors';
import { productOperations } from '../../Redux/products';

function DeleteModal({ showModal }) {
  console.log(deleteProductName);
  const productName = useSelector(deleteProductName);
  const productId = useSelector(deleteProductId);
  const dispatch = useDispatch();
  function onDelete() {
    dispatch(productOperations.deleteProduct(productId));
    dispatch(areYouSureActionClose());
  }
  return createPortal(
    <Modal show={showModal} onHide={() => dispatch(areYouSureActionClose())}>
      <Modal.Header closeButton>
        <Modal.Title>Are you sure</Modal.Title>
      </Modal.Header>
      <Modal.Body>Do you want delete {productName}? </Modal.Body>
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
