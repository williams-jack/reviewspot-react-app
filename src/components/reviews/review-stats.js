import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { likeReview } from "../../actions/reviews-actions";
import LoginModal from "../auth/login/login-modal";

const ReviewStats = ({ review, numComments, linkComments = true }) => {
  const albumId = review ? review.albumId : null;
  const reviewId = review && review._id;
  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.user);
  // TODO: Have to be logged in to like
  const loggedIn = userInfo.loggedIn;

  // console.log(review);

  const [showLogin, setShowLogin] = useState(false);
  const hideLoginModal = () => setShowLogin(false);
  const showLoginModal = () => setShowLogin(true);

  const likeReviewHandler = () => {
    likeReview(dispatch, reviewId, albumId, userInfo._id);
  };

  return (
    <div className="user-select-none">
      <LoginModal
        show={showLogin}
        onHide={() => hideLoginModal()}
        purpose={"Like a Review"}
      />
      <span className="me-2">
        <i
          className="text-danger clickable fa-solid fa-heart me-1"
          onClick={() => (loggedIn ? likeReviewHandler() : showLoginModal())}
        ></i>
        {review && review.likedBy.length}
      </span>
      <Link
        className={`review-list-item ${linkComments ? "d-inline" : "d-none"}`}
        to={`${review ? `/album/${albumId}/review/${review._id}` : "/"}`}
      >
        <span>Comments: {numComments && numComments}</span>
      </Link>
      <span className={`${linkComments ? "d-none" : "d-inline"}`}>
        Comments: {numComments && numComments}
      </span>
    </div>
  );
};
export default ReviewStats;
