import React, {useRef, useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ExitButton from '../exit-button/exit-button';
import VideoPlayerControls from '../video-player-controls/video-player-controls';
import {getMovieById} from '../../utils/common';
import {movieProp, idProp} from '../props/movie-props';
import {getMovies} from '../../store/data/selectors';
import {isLoading, isPlaying} from '../../store/video-player/selectors';
import {ActionCreator} from '../../store/action';

const VideoPlayer = ({movies, movieId, isPreview = false, isMovieLoading, isMoviePlaying, onMovieLoaded, onMoviePlay, onMoviePause}) => {
  const {id, run_time: movieDuration, preview_video_link: previewVideo, video_link: video} = getMovieById(movies, movieId);
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.oncanplaythrough = () => {
        onMovieLoaded();

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
    if (isMoviePlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isMoviePlaying]);

  const onPlayButtonClick = () => isMoviePlaying ? onMoviePause() : onMoviePlay();

  return (
    <div className="player">
      <video ref={videoRef} src={isPreview ? previewVideo : video} className="player__video" poster="img/player-poster.jpg"></video>

      {isPreview || <ExitButton />}

      {isPreview || <VideoPlayerControls isPlaying={isPlaying} isLoading={isMovieLoading} movieDuration={movieDuration} onPlayButtonClick={onPlayButtonClick}/>}

    </div>
  );
};

VideoPlayer.propTypes = {
  movies: PropTypes.arrayOf(movieProp),
  movieId: idProp,
  isMovieLoading: PropTypes.bool.isRequired,
  isMoviePlaying: PropTypes.bool.isRequired,
  isPreview: PropTypes.bool.isRequired,
  onMovieLoaded: PropTypes.func.isRequired,
  onMoviePlay: PropTypes.func.isRequired,
  onMoviePause: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  movies: getMovies(state),
  isMovieLoading: isLoading(state),
  isMoviePlaying: isPlaying(state)
});

const mapDispatchToProps = (dispatch) => ({
  onMovieLoaded() {
    dispatch(ActionCreator.playerMovieLoaded());
  },
  onMoviePlay() {
    dispatch(ActionCreator.playerMoviePlay());
  },
  onMoviePause() {
    dispatch(ActionCreator.playerMoviePause());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);
