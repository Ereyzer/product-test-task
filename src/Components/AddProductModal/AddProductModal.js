import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Form, Modal, FloatingLabel } from 'react-bootstrap';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { numberValidation } from '../../helpers/numberValidation';
import { addNewProduct } from '../../Redux/products/products.operation';

function AddProductModal({ show, setShow }) {
  const [name, setName] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [count, setCount] = useState('');
  const [weight, setWeight] = useState('');
  const [description, setDescription] = useState();
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (
      name.trim() === '' ||
      width === '' ||
      height === '' ||
      imageUrl.trim() === '' ||
      count === '' ||
      weight === '' ||
      description.trim() === ''
    ) {
      toast.warn('please enter all field');
      return;
    }
    dispatch(
      addNewProduct({
        name,
        size: { width, height },
        imageUrl,
        count,
        weight,
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
          Please add new product or close it
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
              onChange={e => setCount(numberValidation(e.target.value))}
              value={count}
              type="num"
              placeholder="Count"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicWeight">
            <Form.Label>weight</Form.Label>
            <Form.Control
              onChange={e => setWeight(numberValidation(e.target.value))}
              value={weight}
              type="num"
              placeholder="weight"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicHeight">
            <Form.Label>Height</Form.Label>
            <Form.Control
              onChange={e => setHeight(numberValidation(e.target.value))}
              value={height}
              type="num"
              placeholder="Height"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicWidth">
            <Form.Label>Width</Form.Label>
            <Form.Control
              onChange={e => setWidth(numberValidation(e.target.value))}
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
            Add element
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

export default AddProductModal;
