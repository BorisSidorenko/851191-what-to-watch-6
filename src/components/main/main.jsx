import React from 'react';
import {connect} from 'react-redux';
import PromoMovie from '../promo-movie/promo-movie';
import Catalog from '../catalog/catalog';
import Footer from '../footer/footer';
import {movieProp} from '../props/movie-props';

const Main = ({promoMovie}) => (
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

Main.propTypes = {
  promoMovie: movieProp
};

const mapStateToProps = ({promoMovie}) => ({
  promoMovie
});

export default connect(mapStateToProps)(Main);
