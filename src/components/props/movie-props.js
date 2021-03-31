import PropTypes from 'prop-types';

export const movieProp = PropTypes.shape({
  "id": PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  "name": PropTypes.string.isRequired,
  "poster_image": PropTypes.string.isRequired,
  "preview_image": PropTypes.string.isRequired,
  "background_image": PropTypes.string.isRequired,
  "background_color": PropTypes.string.isRequired,
  "video_link": PropTypes.string.isRequired,
  "preview_video_link": PropTypes.string.isRequired,
  "description": PropTypes.string.isRequired,
  "rating": PropTypes.number.isRequired,
  "scores_count": PropTypes.number.isRequired,
  "director": PropTypes.string.isRequired,
  "starring": PropTypes.arrayOf(PropTypes.string).isRequired,
  "run_time": PropTypes.number.isRequired,
  "genre": PropTypes.string.isRequired,
  "released": PropTypes.number.isRequired,
  "is_favorite": PropTypes.bool.isRequired,
});

export const idProp = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number
]).isRequired;

export const nameProp = PropTypes.string.isRequired;

export const posterProp = PropTypes.string.isRequired;

export const previewProp = PropTypes.string.isRequired;

export const backgroundImageProp = PropTypes.string.isRequired;

export const backgroundColorProp = PropTypes.string.isRequired;

export const videoLinkProp = PropTypes.string.isRequired;

export const previewVideoLinkProp = PropTypes.string.isRequired;

export const descriptionProp = PropTypes.string.isRequired;

export const ratingProp = PropTypes.number.isRequired;

export const scoresCountProp = PropTypes.number.isRequired;

export const directorProp = PropTypes.string.isRequired;

export const starringProp = PropTypes.arrayOf(PropTypes.string).isRequired;

export const runTimeProp = PropTypes.number.isRequired;

export const genreProp = PropTypes.string.isRequired;

export const releasedProp = PropTypes.number.isRequired;

export const isFavoriteProp = PropTypes.bool.isRequired;
