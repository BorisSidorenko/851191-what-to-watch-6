import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import Catalog from '../catalog/catalog';
import Footer from '../footer/footer';

const MyList = ({allMovies}) => (
  <div className="user-page">
    <Header
      isUserAuthenticated={true}
    >
      <h1 className="page-title user-page__title">My list</h1>
    </Header>

    <Catalog
      allMovies={allMovies}
      catalogClass="catalog"
      showGenres={false}
    >
      <h2 className="catalog__title visually-hidden">Catalog</h2>
    </Catalog>

    <Footer />
  </div>
);

MyList.propTypes = {
  allMovies: PropTypes.array.isRequired
};

export default MyList;
