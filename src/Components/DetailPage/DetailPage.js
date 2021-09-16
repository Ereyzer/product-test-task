import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Container, FloatingLabel, Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';

function DetailPage({
  id,
  imageUrl,
  name,
  count,
  size: { width, height },
  weight,
  comments,
  description,
}) {
  const location = useLocation();
  const history = useHistory();
  const [informer, setInformer] = useState('');
  const [comment, setComment] = useState('');

  const onGoBack = () => history.push(`${location?.state?.from ?? '/'}`);
  function onSubmit(e) {
    e.preventDefault();
    console.log(informer, comment);
    setInformer('');
    setComment('');
  }
  return (
    <Container key={id} className="detail-page">
      <Button
        variant="primary"
        type="button"
        onClick={onGoBack}
        className="details-page__go-back"
      >
        Go Back
      </Button>
      <div className="details-page__general-info">
        <div>
          <img src={imageUrl} alt={name} width="500px" height="auto"></img>
        </div>
        <div className="details-page__textInfo">
          <h1>{name}</h1>
          <p>Is available: {count}</p>
          <p>{description}</p>
        </div>
      </div>

      <h2 className="details-page__size">size</h2>
      <p>width: {width} mm;</p>
      <p>height: {height} mm;</p>
      <p>weight: {weight} g;</p>
      <h4>Leave your comment please</h4>
      <Form onSubmit={onSubmit}>
        <FloatingLabel
          controlId="commentInput"
          label="Comments"
          className="mb-3 details-page__comments"
        >
          <Form.Control
            as="input"
            placeholder="Name"
            value={informer}
            onChange={e => setInformer(e.target.value)}
          />
        </FloatingLabel>
        <FloatingLabel controlId="commentTextarea" label="Comments">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: '100px' }}
            value={comment}
            onChange={e => setComment(e.target.value)}
          />
        </FloatingLabel>

        <Button
          variant="success"
          type="submit"
          className="details-page__add-comment-button"
        >
          Add comment
        </Button>
      </Form>
      <h3 className="details-page__comments-title">Comments</h3>
      <ul className="details-page__comments">
        {comments[0] &&
          comments.map(comment => {
            return <li key={comment}></li>;
          })}
      </ul>
    </Container>
  );
}

DetailPage.defaultProps = {
  comments: [],
};
DetailPage.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  size: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
  weight: PropTypes.number.isRequired,
  comments: PropTypes.array,
  description: PropTypes.string.isRequired,
};

export default DetailPage;
