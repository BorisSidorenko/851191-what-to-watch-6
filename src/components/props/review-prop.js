import PropTypes from 'prop-types';

export const reviewProp = PropTypes.shape({
  "id": PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  "user": PropTypes.shape({
    "id": PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    "name": PropTypes.string.isRequired,
  }),
  "rating": PropTypes.number.isRequired,
  "comment": PropTypes.string.isRequired,
  "date": PropTypes.string.isRequired
});

export const idProp = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number
]).isRequired;

export const userProp = PropTypes.shape({
  "id": PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  "name": PropTypes.string.isRequired,
});

export const userNameProp = PropTypes.string.isRequired;

export const ratingProp = PropTypes.number.isRequired;

export const commentProp = PropTypes.string.isRequired;

export const dateNameProp = PropTypes.string.isRequired;
