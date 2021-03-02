import React, {useState} from 'react';
import PropTypes from 'prop-types';
import GenresList from '../genres-list/genres-list';
import MoviesList from '../movies-list/movies-list';
import ShowMore from '../show-more/show-more';
import {DEFAULT_CARDS_COUNT_TO_DISPLAY} from '../../utils/constatns';

const Catalog = ({catalogClass, showGenres = true, shwoButton = true, children}) => {
  const [cardsCountToDisplay, setCardsCountToDisplay] = useState(DEFAULT_CARDS_COUNT_TO_DISPLAY);
  const [isShowMoreNedeed, setIsShowMoreNedeed] = useState(shwoButton);

  const registerShowMoreClick = () => {
    return setCardsCountToDisplay(cardsCountToDisplay + DEFAULT_CARDS_COUNT_TO_DISPLAY);
  };

  const handleMovieListUpdate = (showMoreButton) => {
    setIsShowMoreNedeed(showMoreButton);
  };

  return (
    <section className={catalogClass}>
      {children}

      {showGenres && <GenresList onGenreChange={setCardsCountToDisplay}/>}

      <MoviesList amountToDisplay={cardsCountToDisplay} onMovieListUpdate={handleMovieListUpdate}/>

      {isShowMoreNedeed && <ShowMore onShowMoreClick={registerShowMoreClick}/>}

    </section>
  );
};

Catalog.propTypes = {
  catalogClass: PropTypes.string.isRequired,
  showGenres: PropTypes.bool,
  shwoButton: PropTypes.bool,
  children: PropTypes.node
};

export default Catalog;
