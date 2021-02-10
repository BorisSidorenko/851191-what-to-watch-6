import {v4 as uuidv4} from 'uuid';
import {getRandomInt, getRandomIntInRange, getArrayOfObjects} from '../../utils/common';
import {MovieNames, IMG_PATH, MoviePreviews, BGColors, MovieDescription, MOVIE_RATING, SCORE, DIRECTORS, ACTORS, RUN_TIME, MOVIE_GENRES, RELEASE_YEAR, MOVIE_AMOUNT_TO_GENERATE} from '../../utils/constatns';

const getRandomMoviePreview = () => IMG_PATH + MoviePreviews[getRandomInt(MoviePreviews.length)];

const getRandomMovieName = () => MovieNames[getRandomInt(MovieNames.length)];

const getRandomBGColor = () => BGColors[getRandomInt(BGColors.length)];

const getRandomRating = (max, min) => {
  const raiting = getRandomIntInRange(max, min);
  return raiting === max ? raiting : parseFloat(`${raiting}.${getRandomIntInRange(max - 1, min)}`);
};

const getRandomDirectors = () => DIRECTORS[getRandomInt(DIRECTORS.length)];

const getRandomActor = () => ACTORS[getRandomInt(ACTORS.length)];

const getRandomGenre = () => MOVIE_GENRES[getRandomInt(MOVIE_GENRES.length)];

const getRandomBool = () => getRandomIntInRange(0, 1) > 0;

export const generateMovie = () => ({
  "id": uuidv4(),
  "name": getRandomMovieName(),
  "poster_image": `img/the-grand-budapest-hotel-poster.jpg`,
  "preview_image": getRandomMoviePreview(),
  "background_image": `img/bg-the-grand-budapest-hotel.jpg`,
  "background_color": getRandomBGColor(),
  "video_link": `https://some-link`,
  "preview_video_link": `https://some-link`,
  "description": MovieDescription,
  "rating": getRandomRating(MOVIE_RATING.MAX, MOVIE_RATING.MIN),
  "scores_count": getRandomIntInRange(SCORE.MAX, SCORE.MIN),
  "director": getRandomDirectors(),
  "starring": getRandomActor(),
  "run_time": getRandomIntInRange(RUN_TIME.MAX, RUN_TIME.MIN),
  "genre": getRandomGenre(),
  "released": getRandomIntInRange(RELEASE_YEAR.MAX, RELEASE_YEAR.MIN),
  "is_favorite": getRandomBool()
});

export const generateMovies = () => getArrayOfObjects(MOVIE_AMOUNT_TO_GENERATE, generateMovie);
