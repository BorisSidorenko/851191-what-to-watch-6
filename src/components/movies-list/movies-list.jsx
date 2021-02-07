import React from 'react';
import SmallMovieCard from '../small-movie-card/small-movie-card';

const MoviesList = ({allMovies}) => {
  return allMovies.map((el, i) => {
    return (
      <SmallMovieCard key={i}
        name={el.name}
        preview={el.preview_image}
      />
    );
  });
};

export default MoviesList;
