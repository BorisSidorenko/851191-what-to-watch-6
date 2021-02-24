import React, {useRef, useEffect, useReducer} from 'react';
import PropTypes from 'prop-types';
import ExitButton from '../exit-button/exit-button';
import VideoPlayerControls from '../video-player-controls/video-player-controls';
import {getMovieById} from '../../utils/common';
import {idProp} from '../props/movie-props';

const VideoPlayer = ({movieId, isPreview = false}) => {
  const {id, run_time: movieDuration, preview_video_link: previewVideo, video_link: video} = getMovieById(movieId);

  const initialState = {
    isLoading: true,
    isPlaying: false
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case `loaded`:
        return {...state, isLoading: false};
      case `play`:
        return {...state, isPlaying: true};
      case `pause`:
        return {...state, isPlaying: false};
      default:
        return state;
    }
  };

  const [{isLoading, isPlaying}, dispatch] = useReducer(reducer, initialState);

  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.oncanplaythrough = () => {
        dispatch({type: `loaded`});

        if (isPreview) {
          videoRef.current.muted = true;
          videoRef.current.play();
        }
      };

      return () => {
        videoRef.current.oncanplaythrough = null;
        videoRef.current.onplay = null;
        videoRef.current.onpause = null;
        videoRef.current = null;
      };
    }

    return () => {};
  }, [id]);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  const onPlayButtonClick = () => isPlaying ? dispatch({type: `pause`}) : dispatch({type: `play`});

  return (
    <div className="player">
      <video ref={videoRef} src={isPreview ? previewVideo : video} className="player__video" poster="img/player-poster.jpg"></video>

      {isPreview || <ExitButton />}

      {isPreview || <VideoPlayerControls isPlaying={isPlaying} isLoading={isLoading} movieDuration={movieDuration} onPlayButtonClick={onPlayButtonClick}/>}

    </div>
  );
};

VideoPlayer.propTypes = {
  movieId: idProp,
  isPlaying: PropTypes.bool,
  isPreview: PropTypes.bool
};

export default VideoPlayer;
