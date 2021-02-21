import React, {useRef, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import ExitButton from '../exit-button/exit-button';
import VideoPlayerControls from '../video-player-controls/video-player-controls';
import {getMovieById} from '../../utils/common';
import {idProp} from '../props/movie-props';

const VideoPlayer = ({movieId, isPreview = false}) => {
  const {id, run_time: movieDuration, preview_video_link: previewVideo, video_link: video} = getMovieById(movieId);
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef();

  useEffect(() => {
    videoRef.current.oncanplaythrough = () => {
      setIsLoading(false);

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
  }, [id]);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  const onPlayButtonClick = () => setIsPlaying(() => !isPlaying);

  return (
    <div className="player">
      <video ref={videoRef} src={isPreview ? previewVideo : video} className="player__video" poster="img/player-poster.jpg"></video>

      {!isPreview && <ExitButton />}

      {!isPreview && <VideoPlayerControls isPlaying={isPlaying} isLoading={isLoading} movieDuration={movieDuration} onPlayButtonClick={onPlayButtonClick}/>}

    </div>
  );
};

VideoPlayer.propTypes = {
  movieId: idProp,
  isPlaying: PropTypes.bool,
  isPreview: PropTypes.bool
};

export default VideoPlayer;
