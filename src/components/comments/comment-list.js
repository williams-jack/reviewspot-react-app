import React from "react";
import CommentListItem from "./comment-list-item";

const CommentList = ({ comments }) => {
  const prev = true; // If previous page
  const next = true; // If next page

  const loadNext = () => {
    return;
  };
  const loadPrev = () => {
    return;
  };

  return (
    <ul className="list-group mt-2">
      {comments.map((comment) => {
        return <CommentListItem comment={comment} />;
      })}
      <div className="bg-light d-flex justify-content-around">
        <i
          className={`rs-dark clickable fas fa-arrow-left fa-2x ${
            prev ? "d-flex" : "d-none"
          }`}
          onClick={() => {
            loadPrev();
          }}
        ></i>
        <i
          className={`rs-dark clickable fas fa-arrow-right fa-2x ${
            next ? "d-flex" : "d-none"
          }`}
          onClick={() => {
            loadNext();
          }}
        ></i>
      </div>
    </ul>
  );
};
export default CommentList;
