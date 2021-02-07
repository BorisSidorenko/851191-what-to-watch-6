import React from 'react';
import SmallMovieCard from '../small-movie-card/small-movie-card';

const MoviesList = ({smallMovieCardsInfo}) => {
  return smallMovieCardsInfo.map((el, i) => {
    const [name, poster] = el;
    return (<SmallMovieCard key={i}
      name={name}
      poster={poster}
    />);
  });
};

export default MoviesList;
