import React from 'react';
import Header from '../header/header';
import Catalog from '../catalog/catalog';
import Footer from '../footer/footer';

const MyList = () => (
  <div className="user-page">
    <Header>
      <h1 className="page-title user-page__title">My list</h1>
    </Header>

    <Catalog
      catalogClass="catalog"
      showGenres={false}
    />

    <Footer />
  </div>
);

export default MyList;
