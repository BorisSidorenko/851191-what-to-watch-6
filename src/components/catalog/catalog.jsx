import React, {useState, memo} from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import GenresList from '../genres-list/genres-list';
import MoviesList from '../movies-list/movies-list';
import ShowMore from '../show-more/show-more';
import {DEFAULT_CARDS_COUNT_TO_DISPLAY} from '../../utils/constatns';

const Catalog = ({catalogClass, match, showGenres = true, shwoButton = true}) => {
  const [cardsCountToDisplay, setCardsCountToDisplay] = useState(DEFAULT_CARDS_COUNT_TO_DISPLAY);
  const [isShowMoreNedeed, setIsShowMoreNedeed] = useState(shwoButton);
  const {id} = match.params;

  const registerShowMoreClick = () => {
    return setCardsCountToDisplay(cardsCountToDisplay + DEFAULT_CARDS_COUNT_TO_DISPLAY);
  };

  const handleMovieListUpdate = (showMoreButton) => {
    setIsShowMoreNedeed(showMoreButton);
  };

  return (
    <section className={catalogClass}>
      {id ? <h2 className="catalog__title">More like this</h2> : <h2 className="catalog__title visually-hidden">Catalog</h2>}

      {showGenres && <GenresList onGenreChange={setCardsCountToDisplay}/>}

      <MoviesList amountToDisplay={cardsCountToDisplay} onMovieListUpdate={handleMovieListUpdate}/>

      {isShowMoreNedeed && <ShowMore onShowMoreClick={registerShowMoreClick}/>}

    </section>
  );
};

Catalog.propTypes = {
  match: PropTypes.object.isRequired,
  catalogClass: PropTypes.string.isRequired,
  showGenres: PropTypes.bool,
  shwoButton: PropTypes.bool,
  children: PropTypes.node
};

export default memo(withRouter(Catalog));
