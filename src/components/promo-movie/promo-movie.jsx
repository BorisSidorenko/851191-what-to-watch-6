
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Header from '../header/header';
import PromoMovieInfo from '../promo-movie-info/promo-movie-info';
import {backgroundImageProp, nameProp, posterProp, genreProp, releasedProp} from '../props/movie-props';
import {loadPromoMovie} from '../../api/api-actions';
import {ActionCreator} from '../../store/action';
import Loading from '../loading/loading';
import {getIsPromoLoadedFlag, getSelectedMovie} from '../../store/data/selectors';

const PromoMovie = ({isPromoLoaded, promoMovie, onLoadData, onIsPromoLoadedClearFlag, setPromo}) => {
  useEffect(() => {
    if (!isPromoLoaded) {
      onLoadData()
        .then(({data}) => setPromo(data));
    }

    return () => onIsPromoLoadedClearFlag();
  }, []);

  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        {!isPromoLoaded && !promoMovie ? <Loading /> : <img src={promoMovie.backgroundImage} alt={promoMovie.name} />}
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header />

      <div className="movie-card__wrap">
        {!isPromoLoaded && !promoMovie ? <Loading /> : <PromoMovieInfo {...promoMovie} />}
      </div>
    </section>
  );
};

PromoMovie.propTypes = {
  promoMovie: PropTypes.shape({
    backgroundImage: backgroundImageProp,
    name: nameProp,
    poster: posterProp,
    genre: genreProp,
    released: releasedProp
  }),
  onIsPromoLoadedClearFlag: PropTypes.func.isRequired,
  isPromoLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
  setPromo: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  const isPromoLoaded = getIsPromoLoadedFlag(state);
  const selectedMovie = getSelectedMovie(state);

  const promoMovie = selectedMovie ? {
    backgroundImage: selectedMovie.background_image,
    name: selectedMovie.name,
    poster: selectedMovie.poster_image,
    genre: selectedMovie.genre,
    released: selectedMovie.released
  } : selectedMovie;

  return ({
    isPromoLoaded,
    promoMovie
  });
};

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    return dispatch(loadPromoMovie());
  },
  setPromo(data) {
    dispatch(ActionCreator.loadPromo(data));
  },
  onIsPromoLoadedClearFlag() {
    dispatch(ActionCreator.clearIsPromoLoadedFlag());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PromoMovie);
