import React, {useRef, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import {getMovieById} from '../../utils/common';
import {idProp, runTimeProp} from '../props/movie-props';

dayjs.extend(duration);

const getHumanizeDuration = (durationInMinutes) => {
  const parsedDuration = dayjs.duration(durationInMinutes, `minutes`);
  return `${parsedDuration.$d.hours}:${parsedDuration.$d.minutes}`;
};

const PauseButtonIcon = () => (
  <>
    <svg viewBox="0 0 14 21" width="14" height="21">
      <use xlinkHref="#pause"></use>
    </svg>
    <span>Pause</span>
  </>
);

const PlayButtonIcon = () => (
  <>
    <svg viewBox="0 0 19 19" width="19" height="19">
      <use xlinkHref="#play-s"></use>
    </svg>
    <span>Play</span>
  </>
);

const ExitButton = () => <button type="button" className="player__exit">Exit</button>;

const PlayerControls = ({isPlaying, isLoading, movieDuration, onPlayButtonClick}) => (
  <div className="player__controls">
    <div className="player__controls-row">
      <div className="player__time">
        <progress className="player__progress" value="30" max="100"></progress>
        <div className="player__toggler" style={{left: 30 + `%`}}>Toggler</div>
      </div>
      <div className="player__time-value">{getHumanizeDuration(movieDuration)}</div>
    </div>

    <div className="player__controls-row">
      <button type="button" className="player__play" disabled={isLoading} onClick={onPlayButtonClick}>
        {isPlaying ? <PauseButtonIcon /> : <PlayButtonIcon />}
      </button>
      <div className="player__name">Transpotting</div>
      <button type="button" className="player__full-screen">
        <svg viewBox="0 0 27 27" width="27" height="27">
          <use xlinkHref="#full-screen"></use>
        </svg>
        <span>Full screen</span>
      </button>
    </div>
  </div>
);

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

      {!isPreview && <PlayerControls isPlaying={isPlaying} isLoading={isLoading} movieDuration={movieDuration} onPlayButtonClick={onPlayButtonClick}/>}

    </div>
  );
};

PlayerControls.propTypes = {
  isPlaying: PropTypes.bool,
  isLoading: PropTypes.bool,
  movieDuration: runTimeProp,
  onPlayButtonClick: PropTypes.func.isRequired
};

VideoPlayer.propTypes = {
  movieId: idProp,
  isPlaying: PropTypes.bool,
  isPreview: PropTypes.bool
};

export default VideoPlayer;
