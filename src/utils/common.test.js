import {getRatingDescription, getFavoriteMovies, getMoviesByGenre, getSimilarMovies} from './common';
import {moviesToTest} from '../data-structure';

describe(`Test common functions`, () => {
  it(`getRatingDescription works correctly`, () => {
    const badRating = 1;
    expect(getRatingDescription(badRating)).toEqual(`Bad`);

    const normalRating = 3;
    expect(getRatingDescription(normalRating)).toEqual(`Normal`);

    const goodRating = 6;
    expect(getRatingDescription(goodRating)).toEqual(`Good`);

    const veryGoodRating = 9;
    expect(getRatingDescription(veryGoodRating)).toEqual(`Very good`);

    const awesomeRating = 10;
    expect(getRatingDescription(awesomeRating)).toEqual(`Awesome`);
  });

  it(`getFavoriteMovies works correctly`, () => {
    expect(getFavoriteMovies(moviesToTest)).toHaveLength(1);
  });

  it(`getMoviesByGenre works correctly`, () => {
    expect(getMoviesByGenre(`Test genre`, moviesToTest)).toHaveLength(1);
    expect(getMoviesByGenre(`Genre to test`, moviesToTest)).toHaveLength(2);
  });

  it(`getSimilarMovies works correctly`, () => {
    const [movie] = moviesToTest;
    expect(getSimilarMovies(movie, moviesToTest)).toHaveLength(1);
  });
});
