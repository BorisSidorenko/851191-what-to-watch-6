import React, {useRef, useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ExitButton from '../exit-button/exit-button';
import VideoPlayerControls from '../video-player-controls/video-player-controls';
import {movieProp, idProp} from '../props/movie-props';
import {getMovieToPlay} from '../../store/video-player/selectors';
import {isLoading, isPlaying} from '../../store/video-player/selectors';
import {ActionCreator} from '../../store/action';
import {loadMovieById} from '../../api/api-actions';
import Loading from '../loading/loading';
import {RoutePaths} from '../../utils/constatns';

const getVideoPlayerComponents = (isPreview, videoRef, movie, isMoviePlaying, isMovieLoading, onPlayButtonClick) => (
  <>
    <video ref={videoRef} src={isPreview ? movie.preview_video_link : movie.video_link} className="player__video" poster="img/player-poster.jpg"></video>
    {isPreview || <ExitButton />}
    {isPreview || <VideoPlayerControls isPlaying={isMoviePlaying} isLoading={isMovieLoading} movieDuration={movie.run_time} onPlayButtonClick={onPlayButtonClick}/>}
  </>
);

const VideoPlayer = ({movie, movieId, isPreview = false, isMovieLoading, isMoviePlaying, onLoadDataMovie, setMovieToPlay, onMovieLoaded, onMoviePlay, onMoviePause, redirectToNotFound}) => {
  useEffect(() => {
    onLoadDataMovie(movieId)
      .then(({data}) => setMovieToPlay(data))
      .then(() => onMovieLoaded())
      .catch(() => redirectToNotFound());
  }, [movieId]);

  const videoRef = useRef();
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.oncanplaythrough = () => {
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
  }, [movieId, isMovieLoading]);

  useEffect(() => {
    if (movie && isMoviePlaying) {
      videoRef.current.play();
    } else if (movie && !isMoviePlaying) {
      videoRef.current.pause();
    }
  }, [isMoviePlaying]);

  const onPlayButtonClick = () => isMoviePlaying ? onMoviePause() : onMoviePlay();

  return (
    <div className="player">
      {isMovieLoading && !movie ? <Loading /> : getVideoPlayerComponents(isPreview, videoRef, movie, isMoviePlaying, isMovieLoading, onPlayButtonClick)};
    </div>
  );
};

VideoPlayer.propTypes = {
  movie: movieProp,
  movieId: idProp,
  isMovieLoading: PropTypes.bool.isRequired,
  isMoviePlaying: PropTypes.bool.isRequired,
  isPreview: PropTypes.bool,
  onMovieLoaded: PropTypes.func.isRequired,
  onMoviePlay: PropTypes.func.isRequired,
  onMoviePause: PropTypes.func.isRequired,
  onLoadDataMovie: PropTypes.func.isRequired,
  setMovieToPlay: PropTypes.func.isRequired,
  redirectToNotFound: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  movie: getMovieToPlay(state),
  isMovieLoading: isLoading(state),
  isMoviePlaying: isPlaying(state)
});

const mapDispatchToProps = (dispatch) => ({
  onLoadDataMovie(id) {
    return dispatch(loadMovieById(id));
  },
  setMovieToPlay(movie) {
    dispatch(ActionCreator.playerMovieToPlay(movie));
  },
  onMovieLoaded() {
    dispatch(ActionCreator.playerMovieLoaded());
  },
  onMoviePlay() {
    dispatch(ActionCreator.playerMoviePlay());
  },
  onMoviePause() {
    dispatch(ActionCreator.playerMoviePause());
  },
  redirectToNotFound() {
    dispatch(ActionCreator.redirectToRoute(RoutePaths.NOT_FOUND));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);
