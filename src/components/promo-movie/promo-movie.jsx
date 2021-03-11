
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Header from '../header/header';
import PromoMovieInfo from '../promo-movie-info/promo-movie-info';
import {movieProp} from '../props/movie-props';
import {loadPromoMovie} from '../../api/api-actions';
import {ActionCreator} from '../../store/action';
import Loading from '../loading/loading';

const PromoMovie = ({isPromoLoaded, promoMovie, onLoadData, onIsPromoLoadedClearFlag}) => {
  useEffect(() => {
    if (!isPromoLoaded) {
      onLoadData();
    }

    return () => onIsPromoLoadedClearFlag();
  }, []);

  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        {!isPromoLoaded && !promoMovie ? <Loading /> : <img src={promoMovie.background_image} alt={promoMovie.name} />}
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
  promoMovie: movieProp,
  onIsPromoLoadedClearFlag: PropTypes.func.isRequired,
  isPromoLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired
};

const mapStateToProps = ({isPromoLoaded, selectedMovie}) => ({
  isPromoLoaded,
  promoMovie: selectedMovie
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(loadPromoMovie())
      .then(({data}) => dispatch(ActionCreator.loadPromo(data)));
  },
  onIsPromoLoadedClearFlag() {
    dispatch(ActionCreator.clearIsPromoLoadedFlag());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PromoMovie);
