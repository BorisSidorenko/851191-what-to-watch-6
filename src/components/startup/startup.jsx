import React from 'react';
import PropTypes from 'prop-types';
import PromoMovie from '../promo-movie/promo-movie';
import Catalog from '../catalog/catalog';
import Footer from '../footer/footer';


const Startup = ({promoMovie, allMovies}) => (
  <>
    <PromoMovie
      {...promoMovie}
    />

    <div className="page-content">
      <Catalog
        allMovies = {allMovies}
      />

      <Footer />
    </div>
  </>
);

Startup.propTypes = {
  promoMovie: PropTypes.object.isRequired,
  allMovies: PropTypes.array.isRequired
};

export default Startup;
