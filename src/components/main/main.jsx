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
      >
        <h2 className="catalog__title visually-hidden">Catalog</h2>
      </Catalog>

      <Footer />
    </div>
  </>
);

export default Main;
