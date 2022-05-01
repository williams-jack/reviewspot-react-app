import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { createCommentOnReview } from "../../actions/reviews-actions";

const CreateCommentModal = (props) => {
  const [comment, setComment] = useState("");
  const { albumId, reviewId } = useParams();

  const dispatch = useDispatch();
  const createCommentHandler = () => {
    createCommentOnReview(dispatch, reviewId, albumId, comment);
    setComment("");
    props.onHide();
  };

  const handleClose = () => {
    setComment("");
    props.onHide();
  };

  return (
    <Modal {...props} backdrop="static" keyboard={false} centered>
      <Modal.Header closeButton>
        <Modal.Title>Write a Comment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <textarea
          autoFocus
          className="form-control"
          name="create-comment-text"
          id="create-comment-text"
          cols="30"
          rows="3"
          placeholder="Add a comment..."
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        ></textarea>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-between">
        <Button className="btn btn-danger" onClick={() => handleClose()}>
          Close
        </Button>
        <Button
          className="btn btn-success"
          onClick={() => createCommentHandler()}
        >
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default CreateCommentModal;
