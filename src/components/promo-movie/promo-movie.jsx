
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Header from '../header/header';
import PromoMovieInfo from '../promo-movie-info/promo-movie-info';
import {loadPromoMovie} from '../../api/api-actions';
import {loadPromoAction, clearIsPromoLoadedFlagAction} from '../../store/action';
import Loading from '../loading/loading';

const PromoMovie = () => {
  const {isPromoLoaded, selectedMovie} = useSelector((state) => state.DATA);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isPromoLoaded) {
      dispatch(loadPromoMovie())
        .then(({data}) => dispatch(loadPromoAction(data)));
    }

    return (() => dispatch(clearIsPromoLoadedFlagAction()));
  }, []);

  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        {!isPromoLoaded && !selectedMovie ? <Loading /> : <img src={selectedMovie.background_image} alt={selectedMovie.name} />}
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header />

      <div className="movie-card__wrap">
        {!isPromoLoaded && !selectedMovie ? <Loading /> : <PromoMovieInfo name={selectedMovie.name} poster={selectedMovie.poster_image} genre={selectedMovie.genre} released={selectedMovie.released}/>}
      </div>
    </section>
  );
};

export default PromoMovie;
