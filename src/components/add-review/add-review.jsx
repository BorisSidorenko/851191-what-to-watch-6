import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {loadMovieById} from '../../api/api-actions';
import {ActionCreator} from '../../store/action';
import {movieProp} from '../props/movie-props';
import Header from '../header/header';
import AddReviewForm from '../add-review-form/add-review-form';
import Loading from '../loading/loading';
import {RoutePaths} from '../../utils/constatns';

const AddReview = ({selectedMovie, match, onClearData, onLoadData}) => {
  const {id} = match.params;
  const movieId = parseInt(id, 10);

  useEffect(() => {
    if (selectedMovie && selectedMovie.id !== movieId) {
      onClearData();
    }

    onLoadData(movieId);

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
  selectedMovie: movieProp,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  onLoadData: PropTypes.func.isRequired,
  onClearData: PropTypes.func.isRequired
};

const mapStateToProps = ({selectedMovie}) => ({selectedMovie});

const mapDispatchToProps = (dispatch) => ({
  onLoadData(id) {
    dispatch(loadMovieById(id))
      .then(({data}) => dispatch(ActionCreator.loadMovieById(data)))
      .catch(() => dispatch(ActionCreator.redirectToRoute(RoutePaths.NOT_FOUND)));
  },
  onClearData() {
    dispatch(ActionCreator.clearSelectedMovie());
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddReview));
