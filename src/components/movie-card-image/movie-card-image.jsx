import React, {memo} from 'react';
import {previewProp, nameProp} from '../props/movie-props';

const MovieCardImage = ({preview, name}) => <img src={preview} alt={name} width="280" height="175" />;

MovieCardImage.propTypes = {
  preview: previewProp,
  name: nameProp
};

export default memo(MovieCardImage);
