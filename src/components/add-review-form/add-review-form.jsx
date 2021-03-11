import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {RATING_STARS} from '../../utils/constatns';
import {addReview} from '../../api/api-actions';
import {idProp} from '../../components/props/movie-props';
import {needToDisableForm} from '../../utils/common';
import {RoutePaths} from '../../utils/constatns';
import {ActionCreator} from '../../store/action';

const COMMENT_LENGTH_MIN = 50;
const COMMENT_LENGTH_MAX = 400;

const RaitingInput = ({value, onRatingChange}) => {
  const starNumber = RATING_STARS[value];
  const inputId = `star-${starNumber}`;
  const labelValue = `Rating ${starNumber}`;

  return (
    <>
      <input onChange={onRatingChange} className="rating__input" id={inputId} type="radio" name="rating" value={starNumber}/>
      <label className="rating__label" htmlFor={inputId}>{labelValue}</label>
    </>
  );
};

const isRatingInvalid = (rating) => !rating || isNaN(rating) || !RATING_STARS.includes(parseInt(rating, 10));

const isCommentInvalid = (comment) => !comment || comment.length < COMMENT_LENGTH_MIN || comment.length > COMMENT_LENGTH_MAX;

const getRatingComoponents = (handleUserInput) => {
  return RATING_STARS.map((item, index) => <RaitingInput key={`raiting-${item}`} value={index} onRatingChange={handleUserInput} />);
};

const AddReviewForm = ({id, onSubmit}) => {
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

    onSubmit(id, revieForm, reviewFormData);
  };

  const handleUserInput = ({target}) => {
    const {name, value} = target;
    setReviewFormData({...reviewFormData, [name]: value});
  };

  return (
    <form action="#" className="add-review__form" onSubmit={handleFormSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {getRatingComoponents(handleUserInput)}
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

RaitingInput.propTypes = {
  value: PropTypes.number.isRequired,
  onRatingChange: PropTypes.func.isRequired
};

AddReviewForm.propTypes = {
  id: idProp,
  onSubmit: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(id, form, formData) {
    needToDisableForm(form, true);
    dispatch(addReview(id, formData))
    .then((response) => {
      needToDisableForm(form, false);
      return response;
    })
    .then(({data}) => dispatch(ActionCreator.loadReviewsByMovieId(data)))
    .then(() => dispatch(ActionCreator.redirectToRoute(`${RoutePaths.MOVIE_PAGE}/${id}`)))
    .catch(() => {});
  }
});

export default connect(null, mapDispatchToProps)(AddReviewForm);
