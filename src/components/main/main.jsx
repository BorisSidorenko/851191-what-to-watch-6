import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import PromoMovie from '../promo-movie/promo-movie';
import Catalog from '../catalog/catalog';
import Footer from '../footer/footer';
import {movieProp} from '../props/movie-props';
import {fetchMovieList} from '../../api/api-actions';

const Main = ({movies, promoMovie, onLoadData}) => {
  useEffect(() => {
    if (movies.length === 0) {
      onLoadData();
    }
  }, [movies]);

  return (
    <>
      <PromoMovie
        {...promoMovie}
      />

      <div className="page-content">
        <Catalog
          catalogClass="catalog"
        >
          <h2 className="catalog__title visually-hidden">Catalog</h2>
        </Catalog>

        <Footer />
      </div>
    </>
  );
};

Main.propTypes = {
  movies: PropTypes.arrayOf(movieProp).isRequired,
  promoMovie: movieProp,
  onLoadData: PropTypes.func.isRequired
};

const mapStateToProps = ({movies, promoMovie}) => ({
  movies,
  promoMovie
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchMovieList());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
