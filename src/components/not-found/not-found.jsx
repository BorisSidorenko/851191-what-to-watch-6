import React from 'react';
import Header from '../header/header';

const NotFound = () => (
  <div className="user-page">
    <Header
      headerClassName="page-header user-page__head"
      isUserAuthenticated={false}
      showUserBlock={false}
    />
    <h1 className="page-title user-page__title">404 Not Found</h1>
  </div>
);

export default NotFound;
