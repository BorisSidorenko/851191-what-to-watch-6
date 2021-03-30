import React, {useEffect, useState, memo} from 'react';
import PropTypes from 'prop-types';
import {movieProp} from '../props/movie-props';
import {MIN_NUMBER_TO_EXTEND_DURATION_FORMAT} from '../../utils/constatns';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

const getHumanizeDuration = (durationInMinutes) => {
  const parsedDuration = dayjs.duration(durationInMinutes, `minutes`);
  const {hours, minutes} = parsedDuration.$d;
  return `${hours}:${minutes >= MIN_NUMBER_TO_EXTEND_DURATION_FORMAT ? minutes : `0` + minutes}`;
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


const VideoPlayerControls = ({video, isPlaying, isLoading, movie, onPlayButtonClick, onFullScreenButtonClick}) => {
  const [elapsedTime, setElapsedTime] = useState(0);

  const handleElapsedTime = ({duration: runTime, currentTime}) => {
    const timeToWatch = runTime - Math.floor(currentTime);
    setElapsedTime(timeToWatch);
  };

  useEffect(() => {
    if (video) {
      video.ontimeupdate = () => handleElapsedTime(video);
    }
  }, [video]);

  useEffect(() => {
    if (movie) {
      setElapsedTime(movie.run_time);
    }
  }, [movie]);

  return (
    <div className="player__controls">
      <div className="player__controls-row">
        <div className="player__time">
          <progress className="player__progress" value="0" max="100"></progress>
          <div className="player__toggler" style={{left: 0 + `%`}}>Toggler</div>
        </div>
        <div className="player__time-value">{getHumanizeDuration(elapsedTime)}</div>
      </div>

      <div className="player__controls-row">
        <button type="button" className="player__play" disabled={isLoading} onClick={onPlayButtonClick}>
          {isPlaying ? <PauseButtonIcon /> : <PlayButtonIcon />}
        </button>
        <div className="player__name">Transpotting</div>
        <button type="button" className="player__full-screen" onClick={onFullScreenButtonClick}>
          <svg viewBox="0 0 27 27" width="27" height="27">
            <use xlinkHref="#full-screen"></use>
          </svg>
          <span>Full screen</span>
        </button>
      </div>
    </div>
  );
};

VideoPlayerControls.propTypes = {
  video: PropTypes.object,
  movie: movieProp,
  isPlaying: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  onFullScreenButtonClick: PropTypes.func.isRequired
};

export default memo(VideoPlayerControls);
