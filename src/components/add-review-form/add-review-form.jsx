import React, {useState, useMemo} from 'react';
import {useDispatch} from 'react-redux';
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

const AddReviewForm = ({id}) => {
  const dispatch = useDispatch();

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

    needToDisableForm(revieForm, true);

    dispatch(addReview(id, reviewFormData))
      .then((response) => {
        needToDisableForm(revieForm, false);
        return response;
      })
    .then(({data}) => dispatch(loadReviewsByMovieIdAction(data)))
    .then(() => dispatch(redirectToRouteAction(`${RoutePaths.MOVIE_PAGE}/${id}`)))
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
          maxLength={COMMENT_LENGTH_MAX}
          data-testid="comment">
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled={isSubmitDisabled()}>Post</button>
        </div>

      </div>
    </form>
  );
};

AddReviewForm.propTypes = {
  id: idProp
};

export default AddReviewForm;
