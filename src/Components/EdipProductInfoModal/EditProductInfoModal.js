import Button from '@restart/ui/esm/Button';
import React, { useRef, useState } from 'react';
import { Form, Modal, FloatingLabel } from 'react-bootstrap';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { productsSelectors } from '../../Redux/products';

import { toast } from 'react-toastify';
import { editProductParams } from '../../Redux/products/products.operation';
import { useLocation } from 'react-router';
function EditProductModal({ show, setShow }) {
  const location = useLocation();

  const productsArray = useSelector(productsSelectors.getProductList);
  const id = useRef(getCurrentElement().id);
  const [name, setName] = useState(() => getCurrentElement().name);
  const [width, setWidth] = useState(() =>
    getCurrentElement().size.width.toString(),
  );
  const [height, setHeight] = useState(() =>
    getCurrentElement().size.height.toString(),
  );
  const [imageUrl, setImageUrl] = useState(() => getCurrentElement().imageUrl);
  const [count, setCount] = useState(() =>
    getCurrentElement().count.toString(),
  );
  const [weight, setWeight] = useState(() =>
    getCurrentElement().weight.toString(),
  );
  const [description, setDescription] = useState(
    () => getCurrentElement().description,
  );
  const dispatch = useDispatch();
  function getCurrentElement() {
    return productsArray[Number(location.pathname.slice(6))];
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      name.trim() === '' ||
      width.trim() === '' ||
      height.trim() === '' ||
      imageUrl.trim() === '' ||
      count.trim() === '' ||
      weight.trim() === '' ||
      description.trim() === ''
    ) {
      toast.warn('please enter all field');
      return;
    }
    dispatch(
      editProductParams({
        id: id.current,
        name,
        size: { width: Number(width), height: Number(height) },
        imageUrl,
        count: Number(count),
        weight: Number(count),
        description,
      }),
    );
    setShow(false);
    setHeight('');
    setImageUrl('');
    setName('');
    setWeight('');
    setWidth('');
    setDescription('');
    setCount('');
  }

  function onClose() {
    setHeight('');
    setImageUrl('');
    setName('');
    setWeight('');
    setWidth('');
    setDescription('');
    setCount('');
    setShow(false);
  }
  return createPortal(
    <Modal
      show={show}
      onHide={() => onClose()}
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-custom-modal-styling-title">
          Edit some value
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form as="form" id="add-element-form" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicImage">
            <Form.Label>Image</Form.Label>
            <Form.Control
              onChange={e => setImageUrl(e.target.value)}
              value={imageUrl}
              type="text"
              placeholder="Image"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={e => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCount">
            <Form.Label>Count</Form.Label>
            <Form.Control
              onChange={e => setCount(e.target.value)}
              value={count}
              type="num"
              placeholder="Count"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicWeight">
            <Form.Label>weight</Form.Label>
            <Form.Control
              onChange={e => setWeight(e.target.value)}
              value={weight}
              type="num"
              placeholder="weight"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicHeight">
            <Form.Label>Height</Form.Label>
            <Form.Control
              onChange={e => setHeight(e.target.value)}
              value={height}
              type="num"
              placeholder="Height"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicWidth">
            <Form.Label>Width</Form.Label>
            <Form.Control
              onChange={e => setWidth(e.target.value)}
              value={width}
              type="num"
              placeholder="Width"
            />
          </Form.Group>
          <FloatingLabel controlId="floatingTextarea2" label="Description">
            <Form.Control
              onChange={e => setDescription(e.target.value)}
              value={description}
              as="textarea"
              placeholder="Description"
              style={{ height: '100px' }}
            />
          </FloatingLabel>
          <Button variant="primary" type="submit">
            Edit element
          </Button>
        </Form>
      </Modal.Body>

      <Button variant="primary" onClick={() => onClose()}>
        close
      </Button>
    </Modal>,
    document.getElementById('root-portal'),
  );
}

export default EditProductModal;
