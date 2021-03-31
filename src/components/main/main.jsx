import React from 'react';
import PromoMovie from '../promo-movie/promo-movie';
import Catalog from '../catalog/catalog';
import Footer from '../footer/footer';

const Main = () => (
  <>
    <PromoMovie />

    <div className="page-content">
      <Catalog
        catalogClass="catalog"
      />

      <Footer />
    </div>
  </>
);

export default Main;
