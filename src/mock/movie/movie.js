import {v4 as uuidv4} from 'uuid';
import {getRandomInt, getRandomIntInRange, getArrayOfObjects} from '../../utils/common';
import {MovieNames, IMG_PATH, MoviePreviews, BG_COLORS, MovieDescription, MovieRating, Score, DIRECTORS, ACTORS, RunTime, MOVIE_GENRES, ReleaseYear, MOVIE_AMOUNT_TO_GENERATE} from '../../utils/constatns';

const getRandomMoviePreview = () => IMG_PATH + MoviePreviews[getRandomInt(MoviePreviews.length)];

const getRandomMovieName = () => MovieNames[getRandomInt(MovieNames.length)];

const getRandomBGColor = () => BG_COLORS[getRandomInt(BG_COLORS.length)];

const getRandomRating = (max, min) => {
  const raiting = getRandomIntInRange(max, min);
  return raiting === max ? raiting : parseFloat(`${raiting}.${getRandomIntInRange(max - 1, min)}`);
};

const getRandomDirectors = () => {
  const arrSize = getRandomIntInRange(DIRECTORS.length, 1);
  return Array(arrSize).fill().map(() => DIRECTORS[getRandomInt(DIRECTORS.length)]);
};

const getRandomActors = () => {
  const arrSize = getRandomIntInRange(ACTORS.length, 1);
  return Array(arrSize).fill().map(() => ACTORS[getRandomInt(ACTORS.length)]);
};

const getRandomGenre = () => MOVIE_GENRES[getRandomInt(MOVIE_GENRES.length)];

const getRandomBool = () => getRandomIntInRange(0, 1) > 0;

export const generateMovie = (id = uuidv4()) => ({
  "id": id,
  "name": getRandomMovieName(),
  "poster_image": `img/the-grand-budapest-hotel-poster.jpg`,
  "preview_image": getRandomMoviePreview(),
  "background_image": `img/bg-the-grand-budapest-hotel.jpg`,
  "background_color": getRandomBGColor(),
  "video_link": `https://some-link`,
  "preview_video_link": `https://some-link`,
  "description": MovieDescription,
  "rating": getRandomRating(MovieRating.MAX, MovieRating.MIN),
  "scores_count": getRandomIntInRange(Score.MAX, Score.MIN),
  "director": getRandomDirectors(),
  "starring": getRandomActors(),
  "run_time": getRandomIntInRange(RunTime.MAX, RunTime.MIN),
  "genre": getRandomGenre(),
  "released": getRandomIntInRange(ReleaseYear.MAX, ReleaseYear.MIN),
  "is_favorite": getRandomBool()
});

export const generateMovies = (amount = MOVIE_AMOUNT_TO_GENERATE) => getArrayOfObjects(amount, generateMovie);
