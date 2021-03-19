import React, {useState, useMemo} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {RATING_STARS} from '../../utils/constatns';
import {addReview} from '../../api/api-actions';
import {idProp} from '../../components/props/movie-props';
import {needToDisableForm} from '../../utils/common';
import {RoutePaths} from '../../utils/constatns';
import {loadReviewsByMovieIdAction, redirectToRouteAction} from '../../store/action';
import RatingInput from '../rating-input/rating-input';

const COMMENT_LENGTH_MIN = 50;
const COMMENT_LENGTH_MAX = 400;

const isRatingInvalid = (rating) => !rating || isNaN(rating) || !RATING_STARS.includes(parseInt(rating, 10));

const isCommentInvalid = (comment) => !comment || comment.length < COMMENT_LENGTH_MIN || comment.length > COMMENT_LENGTH_MAX;

const getRatingComoponents = (handleUserInput) => {
  return RATING_STARS.map((item, index) => <RatingInput key={`raiting-${item}`} value={index} onRatingChange={handleUserInput} />);
};

const AddReviewForm = ({id, addMovieReview, loadReviewsByMovieId, redirectToRoute}) => {
  const [reviewFormData, setReviewFormData] = useState({
    rating: ``,
    comment: ``
  });

  const isSubmitDisabled = () => {
    const {rating, comment} = reviewFormData;
    return isRatingInvalid(rating) || isCommentInvalid(comment);
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const revieForm = evt.target;

    addMovieReview(id, revieForm, reviewFormData)
      .then((response) => {
        needToDisableForm(revieForm, false);
        return response;
      })
    .then(({data}) => loadReviewsByMovieId(data))
    .then(() => redirectToRoute(id))
    .catch(() => {});
  };

  const handleUserInput = ({target}) => {
    const {name, value} = target;
    setReviewFormData({...reviewFormData, [name]: value});
  };

  const rating = useMemo(() => getRatingComoponents(handleUserInput));

  return (
    <form action="#" className="add-review__form" onSubmit={handleFormSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {rating}
        </div>
      </div>

      <div className="add-review__text">
        <textarea
          onChange={handleUserInput}
          className="add-review__textarea"
          name="comment" id="review-text"
          placeholder="Review text"
          required
          minLength={COMMENT_LENGTH_MIN}
          maxLength={COMMENT_LENGTH_MAX}>
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled={isSubmitDisabled()}>Post</button>
        </div>

      </div>
    </form>
  );
};

AddReviewForm.propTypes = {
  id: idProp,
  addMovieReview: PropTypes.func.isRequired,
  loadReviewsByMovieId: PropTypes.func.isRequired,
  redirectToRoute: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  addMovieReview(id, form, formData) {
    needToDisableForm(form, true);
    return dispatch(addReview(id, formData));
  },
  loadReviewsByMovieId(data) {
    dispatch(loadReviewsByMovieIdAction(data));
  },
  redirectToRoute(id) {
    dispatch(redirectToRouteAction(`${RoutePaths.MOVIE_PAGE}/${id}`));
  }
});

export default connect(null, mapDispatchToProps)(AddReviewForm);
