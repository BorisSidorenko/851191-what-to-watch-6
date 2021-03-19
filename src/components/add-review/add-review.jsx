import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {loadMovieById} from '../../api/api-actions';
import {loadMovieByIdAction, clearSelectedMovieAction, redirectToRouteAction} from '../../store/action';
import Header from '../header/header';
import AddReviewForm from '../add-review-form/add-review-form';
import Loading from '../loading/loading';
import {RoutePaths} from '../../utils/constatns';

const AddReview = ({match}) => {
  const {selectedMovie} = useSelector((state) => state.DATA);
  const {id} = match.params;
  const movieId = parseInt(id, 10);

  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedMovie && selectedMovie.id !== movieId) {
      dispatch(clearSelectedMovieAction());
    }

    dispatch(loadMovieById(id))
      .then(({data}) => dispatch(loadMovieByIdAction(data)))
      .catch(() => dispatch(redirectToRouteAction(RoutePaths.NOT_FOUND)));

  }, [movieId]);

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          {selectedMovie ? <img src={selectedMovie.background_image} alt={selectedMovie.name} /> : <Loading />}
        </div>

        <h1 className="visually-hidden">WTW</h1>

        {selectedMovie ? <Header name={selectedMovie.name} movieId={movieId} /> : <Loading />}

        <div className="movie-card__poster movie-card__poster--small">

          {selectedMovie ? <img src={selectedMovie.poster_image} alt={selectedMovie.name} width="218" height="327" /> : <Loading />}
        </div>
      </div>

      <div className="add-review">
        <AddReviewForm id={movieId}/>
      </div>

    </section>
  );
};

AddReview.propTypes = {
  match: PropTypes.object.isRequired
};

export default withRouter(AddReview);
